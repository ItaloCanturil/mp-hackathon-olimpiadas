<template>
  <q-page class="tw-flex tw-flex-col tw-items-center">

    <div class="tw-flex tw-items-center">
      <q-card class="list__medals tw-p-2 tw-rounded-lg tw-w-full">
        <!-- lista de medalhas -->
        <div class="tw-text-center">Quadro de medalhas</div>

        <ol class="tw-overflow-scroll tw-h-[400px]">
          <li v-for="country in countries" :key="country.id" class="tw-flex tw-items-center tw-gap-2">
            {{ country.rank }}-

            <div class="tw-w-8">
              <img class="img" :src="country.flag_url" alt="Bandeira do pais">
            </div>

            <div class="tw-flex tw-flex-col tw-items-center">
              <div>Ouro</div>
              {{ country.gold_medals }}
            </div>
            <div class="tw-flex tw-flex-col tw-items-center">
              <div>Prata</div>
              {{ country.silver_medals }}
            </div>
            <div class="tw-flex tw-flex-col tw-items-center">
              <div>Bronze</div>
              {{ country.bronze_medals }}
            </div>
          </li>
        </ol>
      </q-card>
    </div>


  </q-page>
</template>

<script setup lang="ts">
import { useMainStore } from 'src/stores/main-store';
import { computed, onMounted } from 'vue';
defineOptions({
  name: 'IndexPage'
});


const useMain = useMainStore();
onMounted(() => {
  useMain.getCountries();
  useMain.getVenues();
})

const countries = computed(() => useMain.countries.data);
// const venues = computed(() => useMain.venues);
</script>

<style scoped>
</style>
