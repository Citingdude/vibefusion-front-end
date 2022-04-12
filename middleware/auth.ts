import { store } from '@/store/store.js'

export default defineNuxtRouteMiddleware(async (to, from) => {

  const cookieToken = useCookie('token');

  const runtimeConfig = useRuntimeConfig()
  const apiBase = runtimeConfig.apiBase

  async function checkToken() {
    const { data } = await useFetch(`${apiBase}/auth`, {
      headers: {
        Authorization: `Bearer ${cookieToken.value}`,
      }
    });

    if (data.value === 'true') {
      return true;
    } else {
      return false;
    }
  };

  const canAccess = await checkToken()

  if(!canAccess) {
    return navigateTo('/login')
  }
})
