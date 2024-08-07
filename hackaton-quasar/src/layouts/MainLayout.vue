<template>
  <q-layout view="lHh Lpr lFf">
    <div class="torre tw-relative tw-top-0 tw-w-full tw-h-[35vh] tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2">
      <div class="tw-h-32">
        <img src="../assets/logo-paris.png" alt="Logo Parias 2024" class="img">
      </div>
      <h1 class="tw-text-9xl tw-mt-4 tw-text-white tw-opacity-95 tw-font-['Abril_Fatface']">2024</h1>
      <span class="tw-bg-white tw-w-full tw-h-24 -tw-mt-10"></span>
      <span class="tw-absolute tw-bg-gray-100 tw-opacity-35 tw-w-full tw-h-full tw-top-0"></span>
    </div>
    <q-page-container class="-tw-mt-6">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MainLayout'
});

</script>

<style>
.bg__main {
  background: rgb(24,181,176);
  background: radial-gradient(circle, rgba(24,181,176,1) 0%, rgba(15,138,144,1) 40%, rgba(12,123,133,1) 98%);
}

.torre::before {
  content: '';
  position: absolute;
  top: 0;
  background-image: url('/src/assets/amada-ma-Ww1il9qRZuM-unsplash.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
