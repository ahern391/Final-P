<template>
  <Alert v-if="isError" />
  <div class="navbar mb-2 shadow-lg bg-content-800 text-content-100 ">
    <div class="flex-1 px-2 mx-2">
      <span class="text-lg font-bold"> Death Star Inn </span>
    </div>
    <div class="flex-none flex px-2 mx-2">
      <div class="flex">
        <router-link
          to="/"
          class="btn btn-ghost btn-sm rounded-btn hover:text-content-100"
        >
          Home
        </router-link>
        <div v-if="!isAuthenticated">
          <router-link
            to="/login"
            class="btn btn-ghost btn-sm rounded-btn hover:text-content-100"
          >
            Login
          </router-link>
          <router-link
            to="/signup"
            class="btn btn-ghost btn-sm rounded-btn hover:text-content-100"
          >
            SignUp
          </router-link>
        </div>
        <div v-else>
          <router-link
            to="/secret"
            class="btn btn-ghost btn-sm rounded-btn hover:text-content-100"
          >
            Room Selection
          </router-link>
          <button
            class="btn btn-error btn-sm rounded-btn hover:text-content-100"
            @click="logout"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { isAuthenticated, signOut } from '../helpers/useAuth.js'
import { isError } from '../helpers/useError'
const router = useRouter()
const logout = async () => {
  await signOut()
  router.push('/')
}
</script>