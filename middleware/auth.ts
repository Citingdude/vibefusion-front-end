import { store } from '@/store/store.js'

export default defineNuxtRouteMiddleware((to, from) => {

  const auth = store.user.token
  const cookieToken = useCookie('token')

  async function checkToken() {
    const { data } = await useFetch('http://localhost:3333/api/v1/auth', {
      headers: {
        Authorization: `Bearer ${cookieToken.value}`,
      }
    })

    if (data.value) {
      return true
    } else {
      return false
    }
  }

  async function authenticate() {
    const data = await checkToken()

    if (!data) {
      return navigateTo('/login')
    }
  }


  if (!cookieToken.value) {
    return navigateTo('/login')
  }

  authenticate()
  checkToken()
})
