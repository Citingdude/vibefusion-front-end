import { store } from '@/store/store.js'

export default defineNuxtRouteMiddleware((to, from) => {

  const auth = store.user.token

  async function checkToken() {
    const { data } = await useFetch('http://localhost:3333/api/v1/auth', {
      headers: {
        Authorization: `Bearer ${store.user.token}`,
      }
    })

    if (data.value) {
      store.user.validToken = true
    } else {
      store.user.validToken = false
    }
  }

  if (!store.user.validToken) {
    return navigateTo('/login')
  }

  checkToken()
})
