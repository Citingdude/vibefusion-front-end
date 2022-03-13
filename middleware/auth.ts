export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUser()
  const auth = user.value

  if (auth === false) {
    console.log(user.value)

    return navigateTo('/login')
  }
})
