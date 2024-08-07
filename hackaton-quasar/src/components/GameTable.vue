<template>
  <div>
        <q-table
        class="bg__main tw-text-white"
        title="Tabela de jogos"
        v-if="games.data"
        :rows="games.data"
        :columns="columns"
        v-model:pagination="initialPagination"
        :filter="filter"
        :loading="loading"
        @request="onRequest"
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>

      <TableSkeleton v-show="!games.data"/>
  </div>
</template>


<script>
import TableSkeleton from 'src/components/skeleton/TableSkeleton.vue';
import { QTableColumn } from 'quasar';
import { ref } from 'vue';

onMounted(() => {
  useMain.getGames();
})

const games = computed(() => useMain.games);
const loading = ref(false);
const filter = ref();
const columns: QTableColumn[] = [
  {
    name: 'data',
    label: 'Data',
    field: (val) => val.day.split('-').join('/'),
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
        rowsNumber: games.value ? games.value.meta.total : 0
      },)

const onRequest = async (props: any) => {
  loading.value = true;
  const { page, rowsPerPage, sortBy, descending } = props.pagination;
  // const filter = props.filter;
  try {
    const returnedData = await useMain.getGames({
      page: page,

    })
    console.log('🚀 ~ onRequest ~ returnedData:', returnedData)

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
