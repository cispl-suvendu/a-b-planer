async function fetchModels() {
  const res = await fetch('https://openrouter.ai/api/v1/models');
  const json = await res.json();
  const freeModels = json.data.filter(
    (m) => m.id.endsWith(':free') || m.pricing.prompt === '0'
  );
  console.log('Free models found:', freeModels.length);
  freeModels.slice(0, 15).forEach((m) => console.log(m.id));
}
fetchModels();
