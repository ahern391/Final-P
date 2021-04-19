<template>
  <div class="mt-8">
    <p class="text-3xl mx-auto text-center m-16 tracking-wider font-thin">
      Welcome {{ user?.displayName || 'New User' }}
    </p>
    <img class="h-60 mx-auto" src="../assets/Death.png" alt="Home Image" />
    <body class="text-3xl mx-auto text-center m-16 tracking-wider font-thin">
      Welcome to the Death Star! In this amazing wonder of Imperial engineering,
      Lord Vader and Emperor Palpatine have created the Ultimate weapon to fight
      against the Rebel scum. This grand Sphere of Death requires a high
      personal of Troops to keep it working should and when the Emperor decide
      to Force a planet off the system. And now it is going public! See the
      Emperors Public Relations team believes it is a good idea to get more
      funding for future ideas. Don’t worry the Death Star is well armed and
      protected not even one rocket could destroy this place! With that being
      said, you can now reserve your very personal stay at the Death Star! We
      will create an Online Website which you can use to reserve your stay at
      the Death for a vacation get away or as a resting stop for your galactic
      voyage.
    </body>
  </div>
</template>

<script setup>
import { user } from '../helpers/useAuth'
</script>
