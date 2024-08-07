<template>
  <q-page class="tw-flex tw-flex-col tw-items-center bg__main ">

    <h1 class="tw-text-9xl tw-mb-8 tw-font-['Abril_Fatface'] tw-text-white tw-mt-7">Paris</h1>

    <div class="tw-flex tw-items-baseline tw-flex-wrap tw-justify-evenly tw-w-full tw-pb-3">
      <MedalBoard/>

      <GameTable/>
    </div>


  </q-page>
</template>

<script lang="ts" setup>
import GameTable from 'src/components/GameTable.vue';
import MedalBoard from 'src/components/MedalBoard.vue';

defineOptions({
  name: 'IndexPage'
});


</script>

