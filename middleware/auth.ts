import { store } from '@/store/store.js'

export default defineNuxtRouteMiddleware((to, from) => {

  const user = useUser()
  const auth = store.user

  if (auth === false) {
    console.log(user.value)

    return navigateTo('/login')
  }
})
