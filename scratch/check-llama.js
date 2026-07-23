async function fetchLlamaModels() {
  const res = await fetch('https://openrouter.ai/api/v1/models');
  const json = await res.json();
  const llamaModels = json.data.filter(
    (m) =>
      m.id.includes('meta-llama') &&
      (m.id.endsWith(':free') ||
        m.pricing?.prompt === '0' ||
        m.pricing?.prompt === 0)
  );
  console.log('Free Llama models:', JSON.stringify(llamaModels, null, 2));

  const allLlama = json.data.filter(
    (m) => m.id.includes('meta-llama') && m.id.includes('free')
  );
  console.log(
    "All Llama models with 'free' in ID:",
    JSON.stringify(allLlama, null, 2)
  );
}
fetchLlamaModels();
