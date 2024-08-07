<template>
  <div>
      <q-table
      flat
      table-class="tw-bg-gray-100 tw-rounded-lg"
      title="Tabela de jogos"
      v-if="games.data"
      :rows="games.data"
      :columns="columns"
      v-model:pagination="initialPagination"
      :filter="filter"
      :loading="loading"
      @request="onRequest"
      >
        <!-- <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template> -->
      </q-table>

      <TableSkeleton v-show="!games.data || loading"/>
  </div>
</template>


<script lang="ts" setup>
import TableSkeleton from 'src/components/skeleton/TableSkeleton.vue';
import { QTableColumn } from 'quasar';
import { ref, onMounted, computed } from 'vue';
import { useMainStore } from 'src/stores/main-store';

const useMain = useMainStore();

onMounted(() => {
  useMain.getGames().then(() => {
    initialPagination.value.rowsNumber = useMain.games.meta.total
  });
})

const games = computed(() => useMain.games);
const loading = ref(false);
const filter = ref();
const columns: QTableColumn[] = [
  {
    name: 'data',
    label: 'Data',
    field: (val) => {
      const [yyyy, mm, dd] = val.day.split('-');

      return `${dd}/${mm}/${yyyy}`;
    },
    sortable: true,
  },
  {
    name: 'discipline',
    label: 'Esporte',
    field: 'discipline_name',
    sortable: true,
  },
  {
    name: 'event_name',
    label: 'Nome do evento',
    field: 'detailed_event_name',
    sortable: true,
  },
  {
    name: 'gender',
    label: 'Gênero',
    field: 'gender_code',
    sortable: true,
  },
]

const initialPagination = ref({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 10,
  rowsNumber: 0
},)

const onRequest = async (props: any) => {
  loading.value = true;
  const { page, rowsPerPage, sortBy, descending } = props.pagination;
  // const filter = props.filter;
  try {
    await useMain.getGames({
      page: page,

    })

    initialPagination.value.page = page
    initialPagination.value.rowsPerPage = rowsPerPage
    initialPagination.value.sortBy = sortBy
    initialPagination.value.descending = descending

  } catch (error) {

  } finally {
    loading.value = false
  }
}
</script>
