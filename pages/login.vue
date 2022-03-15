<template>
  <div class="container mx-auto p-16">
    <div>Login</div>

    <div>
      <NuxtLink to="/admin"> Admin </NuxtLink>
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
          class="
            mt-4
            bg-blue-500
            px-3
            py-2
            rounded-lg
            text-blue-50
            hover:bg-blue-700
            transition
          "
          type="submit"
        >
          Send
        </button>
      </form>
    </div>

    <button @click="setUser()">Set user</button>
    <button @click="logger()">Logger</button>
  </div>
</template>

<script setup>
import { store } from "@/store/store";

const user = useUser();

function logger() {
  console.log(store.user)
}

function setUser() {
  store.setTrue();
}

const formData = reactive({
  email: "",
  password: "",
});

async function login() {
  const data = await useFetch("http://localhost:3333/api/v1/login", {
    method: "POST",
  })
    .then((data) => {
      store.user.token = data.data.value.token;
      store.user.tokenType = data.data.value.type;
      this.checkToken();
    })

    .then(() => {
      return navigateTo("/admin");
    })

    .catch((error) => {
      console.log(error);
      console.log("error");
    });

  formData.email = "";
  formData.password = "";
}

async function checkToken() {
  const { data } = await useFetch("http://localhost:3333/api/v1/auth", {
    headers: {
      Authorization: `Bearer ${store.user.token}`,
    },
  });

  if (data.value) {
    store.user.validToken = true;
  }
}
</script>