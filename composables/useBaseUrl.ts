export default function () {
    const runtimeConfig = useRuntimeConfig();
    const baseUrl = runtimeConfig.baseUrl;
  
    return baseUrl;
  }
  