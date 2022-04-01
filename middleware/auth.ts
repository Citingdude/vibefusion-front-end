import { store } from '@/store/store.js'

export default defineNuxtRouteMiddleware(async (to, from) => {

  const cookieToken = useCookie('token');

  async function checkToken() {
    const { data } = await useFetch('http://localhost:3333/api/v1/auth', {
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
