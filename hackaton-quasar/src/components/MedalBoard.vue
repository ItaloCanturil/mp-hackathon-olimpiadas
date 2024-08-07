<template>
  <q-card flat class="list__medals tw-p-2 tw-rounded-lg tw-max-w-80">
    <div class="tw-text-center tw-mb-2">Quadro de medalhas</div>

    <div class="tw-flex tw-items-center tw-gap-2 tw-px-2">
      <div>Posição</div>
      <div class="tw-flex-1">País</div>

      <div class="medals tw-flex tw-items-center tw-gap-2">
        <q-icon name="workspace_premium" class="tw-text-[#FFD700]" size="16px"></q-icon>
        <q-icon name="workspace_premium" class="tw-text-[#C0C0C0]" size="16px"></q-icon>
        <q-icon name="workspace_premium" class="tw-text-[#CD7F32]" size="16px"></q-icon>

        <div>Total</div>
      </div>
    </div>

    <ol v-if="countries" class="tw-overflow-scroll tw-h-[560px] tw-flex tw-flex-col tw-gap-2">
      <li v-for="country in countries" :key="country.id" class="tw-flex tw-items-center tw-gap-2 tw-rounded-lg tw-bg-gray-100 tw-p-2 tw-w-72">
        <div class="tw-py-2 tw-px-3 tw-bg-slate-200 tw-rounded-lg tw-mr-2">
          {{ country.rank }}
        </div>

        <div class="tw-flex tw-items-center tw-gap-2 tw-flex-1">
          <div class="tw-w-8">
            <img class="img tw-rounded-md" :src="country.flag_url" alt="Bandeira do pais">
          </div>

          {{ country.name }}
        </div>

        <div class="tw-flex tw-items-center tw-justify-between tw-min-w-16 tw-gap-2">
        <div>
          {{ country.gold_medals }}
        </div>
        <div>
          {{ country.silver_medals }}
        </div>
        <div>
          {{ country.bronze_medals }}
        </div>
      </div>
      <div class="tw-mx-2">
        {{ country.total_medals }}
      </div>
      </li>
    </ol>

    <ListSkeleton v-show="!countries"/>
  </q-card>
</template>

<script lang="ts" setup>
import ListSkeleton from './skeleton/ListSkeleton.vue';
import { useMainStore } from 'src/stores/main-store';
import { computed, onMounted } from 'vue';

const useMain = useMainStore();

const countries = computed(() => useMain.countries.data);

onMounted(() => {
  useMain.getCountries()
})
</script>
