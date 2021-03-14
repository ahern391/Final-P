<template>
  <section
    class="container flex items-center justify-center text-center bg-content-800 rounded-xl mx-auto mt-24 max-w-md"
  >
    <form @submit.prevent class="flex flex-col w-full p-12 shadow-lg">
      <label
        for="username"
        class="self-start text-xs font-semibold text-content-200"
        >Email</label
      >
      <input
        id="username"
        type="text"
        class="flex items-center h-12 px-4 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2"
        v-model="email"
      />
      <label
        for="password"
        class="self-start mt-3 text-xs font-semibold text-content-200"
        >Password</label
      >
      <input
        id="password"
        type="password"
        class="flex items-center h-12 px-4 mt-2 bg-gray-200 rounded focus:outline-none focus:ring-2"
        v-model="password"
      />
      <button @click="login" class="btn btn-accent mt-8">Login</button>
    </form>
  </section>
  <Form />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signIn } from '../helpers/useAuth'
const router = useRouter()
const login = async () => {
  try {
    await signIn(email.value, password.value)
    router.push('/')
  } catch (error) {
    console.log(error)
  }
}
const email = ref('')
const password = ref('')
</script>