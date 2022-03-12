export default defineNuxtRouteMiddleware((to, from) => {
  const status = false

  if (status) {
    console.log('test')

    return navigateTo('/admin')
  }

  return navigateTo('/')
})
