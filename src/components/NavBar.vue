<template>
  <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
    <div class="flex-1 px-2 mx-2">
      <span class="text-lg font-bold"> LoginExample </span>
    </div>
    <div class="flex-none hidden px-2 mx-2 lg:flex">
      <div class="flex">
        <router-link to="/" class="btn btn-ghost btn-sm rounded-btn">
          Home
        </router-link>
        <router-link
          v-if="!isAuthenticated"
          to="/Login"
          class="btn btn-ghost btn-sm rounded-btn"
        >
          Login
        </router-link>
        <div v-else>
      <router-link to="/Secret" class="btn btn-ghost btn-sm rounded-btn">
        Secret
      </router-link>
        <button
          to="/Login"
          class="btn btn-error btn-sm rounded-btn"
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
import { isAuthenticated } from '../helpers/useAuth.js'
const router = useRouter()
const logout = () => {
  isAuthenticated.value = false
  router.push('/')
}
</script>

<style>
.router-link-active {
  @apply btn-success;
}
</style>