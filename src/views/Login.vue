<template>
  <section class="container flex items-center justify-center text-center bg-content-800 rounded-xl mx-auto mt-24 max-w-md bg-coolGray-800 text-coolGray-100">
    <div
      class="container flex items-center justify-center text-center cc_cursor"
    >
      <form
        @submit.prevent
        class="flex flex-col w-full max-w-lg p-12 rounded shadow-lg"
      >
        <label for="username" class="self-start text-xs font-semibold"
          >Username or Email</label
        >
        <input
          id="username"
          type="text"
          class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-coolGray-900"
        />
        <label for="password" class="self-start mt-3 text-xs font-semibold"
          >Password</label
        >
        <input
          id="password"
          type="password"
          class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-coolGray-900"
        />
        <button @click="login" class="btn btn-primary mt-4">Login</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { isAuthenticated } from '../helpers/useAuth'
const router = useRouter()
const login = () => {
  isAuthenticated.value = true
  router.push('/')
}
</script>
