export default function () {
  const runtimeConfig = useRuntimeConfig();
  const apiBase = runtimeConfig.apiBase;

  return apiBase;
}
