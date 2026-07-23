'use client';

import React, { useEffect, useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { LoadingState } from '@/components/common/LoadingState';
import { ErrorState } from '@/components/common/ErrorState';
import { useToast } from '@/hooks/use-toast';

export default function SettingsPage() {
  const { status } = useSession();
  const { toast } = useToast();

  const [freeModels, setFreeModels] = useState<{ id: string; name: string }[]>(
    []
  );
  const [model, setModel] = useState('');
  const [maxTokens, setMaxTokens] = useState(8000);
  const [temperature, setTemperature] = useState(0.7);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      redirect('/login');
    }
    if (status === 'authenticated') {
      fetchSettingsAndModels();
    }
  }, [status]);

  const fetchSettingsAndModels = async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const [settingsRes, modelsRes] = await Promise.all([
        fetch('/api/settings'),
        fetch('https://openrouter.ai/api/v1/models'),
      ]);

      if (!settingsRes.ok) throw new Error('Failed to load settings');
      const settingsJson = await settingsRes.json();

      let fetchedModels = [];
      if (modelsRes.ok) {
        const modelsJson = await modelsRes.json();

        interface OpenRouterModel {
          id: string;
          name?: string;
          pricing?: { prompt?: string | number };
        }

        const availableFree = modelsJson.data
          .filter(
            (m: OpenRouterModel) =>
              m.id.endsWith(':free') ||
              m.pricing?.prompt === '0' ||
              m.pricing?.prompt === 0
          )
          .map((m: OpenRouterModel) => ({ id: m.id, name: m.name || m.id }));

        fetchedModels = [
          ...availableFree,
          { id: 'openrouter/free', name: 'OpenRouter Auto (Fallback)' },
        ];
        setFreeModels(fetchedModels);
      } else {
        fetchedModels = [
          { id: 'openrouter/free', name: 'OpenRouter Auto (Fallback)' },
        ];
        setFreeModels(fetchedModels);
      }

      if (settingsJson.data) {
        const userModel = settingsJson.data.model;
        const isModelStillValid = fetchedModels.some((m) => m.id === userModel);

        setModel(isModelStillValid ? userModel : fetchedModels[0].id);
        setMaxTokens(settingsJson.data.maxTokens || 8000);
        setTemperature(
          settingsJson.data.temperature !== undefined
            ? settingsJson.data.temperature
            : 0.7
        );
      }
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model, maxTokens, temperature }),
      });

      if (!res.ok) {
        throw new Error('Failed to save settings');
      }

      toast({
        title: 'Settings Saved',
        description: 'Your AI configuration has been updated successfully.',
      });
    } catch (err) {
      console.error(err);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not save your settings. Please try again.',
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <AppShell>
      <div className="mx-auto w-full max-w-3xl space-y-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account preferences and AI configuration.
          </p>
        </div>

        {isLoading ? (
          <LoadingState message="Loading your settings..." />
        ) : isError ? (
          <ErrorState
            message="Could not load settings."
            onRetry={fetchSettingsAndModels}
          />
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>AI Configuration</CardTitle>
              <CardDescription>
                Customize the AI engine parameters used for generating your
                optimization reports.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  AI Model (OpenRouter Free)
                </label>
                <Select value={model} onValueChange={setModel}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                  <SelectContent>
                    {freeModels.map((m) => (
                      <SelectItem key={m.id} value={m.id}>
                        {m.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Select the underlying LLM to power your reports. Different
                  models may yield slightly different styles of recommendations.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Max Tokens
                </label>
                <Input
                  type="number"
                  min={100}
                  max={8000}
                  value={maxTokens}
                  onChange={(e) => setMaxTokens(Number(e.target.value))}
                />
                <p className="text-xs text-muted-foreground">
                  The maximum length of the generated report. (Recommended:
                  8000)
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Temperature
                </label>
                <Input
                  type="number"
                  min={0.0}
                  max={2.0}
                  step={0.1}
                  value={temperature}
                  onChange={(e) => setTemperature(Number(e.target.value))}
                />
                <p className="text-xs text-muted-foreground">
                  Controls creativity. Lower values are more factual and
                  consistent; higher values are more creative. (Recommended:
                  0.7)
                </p>
              </div>

              <div className="flex justify-end pt-4">
                <Button onClick={handleSave} disabled={isSaving}>
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AppShell>
  );
}
