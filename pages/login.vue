<template>
  <div class="container mx-auto p-16">
    <div>Login</div>

    <div>
      <NuxtLink to="/admin">
        Admin
      </NuxtLink>
    </div>

    <div class="mt-16">
      <form @submit.prevent="login()">
        <div class="flex flex-col space-y-4 w-80">
          <div class="flex flex-col shadow-sm space-y-2">
            <label class="text-lg font-medium" for>E-mail</label>
            <input
              class="border border-blue-50 rounded px-3 py-2"
              v-model="formData.email"
              type="text"
            />
          </div>

          <div class="flex flex-col shadow-sm space-y-2">
            <label class="text-lg font-medium" for>Password</label>
            <input
              class="border border-blue-50 rounded px-3 py-2"
              v-model="formData.password"
              type="password"
            />
          </div>
        </div>

        <button
          class="mt-4 bg-blue-500 px-3 py-2 rounded-lg text-blue-50 hover:bg-blue-700 transition"
          type="submit"
        >Send</button>
      </form>
    </div>

    <button @click="setUser()">Set user</button>
    <button @click="logger()">Logger</button>
  </div>
</template>

<script setup>
import { store } from '@/store/store'

const user = useUser()

function setUser() {
  console.log(store.user)

  store.setTrue()

  console.log(store.user)
}

const formData = reactive({
  email: '',
  password: ''
})

function logger() {
  console.log(store.user)
}

async function login() {
  console.log('login')

  const data = await useFetch("http://localhost:3333/api/v1/login", {
    method: "POST",
  })
    .then((data) => {
      console.log(data.data.value)
    })

  formData.email = ""
  formData.password = ""
} 
</script>