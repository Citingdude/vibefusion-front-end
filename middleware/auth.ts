export default defineNuxtRouteMiddleware((to, from) => {
  const auth = false

  if (auth === false) {
    return navigateTo('/login')
  }
})
