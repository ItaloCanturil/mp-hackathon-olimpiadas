import { uid } from 'quasar';
import { ref, computed } from 'vue';
type TFiltroCallback = () => void;

export interface IFiltro {
  id: string | number;
  label: string;
  callback: null | TFiltroCallback;
}

export interface ISearchTypeMeta {
  [key: string]: any;
}

export const useFiltro = () => {
  const filtros = ref<IFiltro[]>();
  const param = ref<ISearchTypeMeta>({});

  const page = ref(1);
  const total = ref(0);
  const pageTotal = ref(0);
  const perPage = ref(10);

  const __callbackSearch = ref<() => void>(() => 0);

  const isFilter = computed(() => {
    return (filtros.value ?? []).length > 0;
  });

  const restartFiltro = () => {
    filtros.value = [];
  };

  const restartParametro = () => {
    param.value = {};
  };

  const restartPagination = (per_page = 10) => {
    page.value = 1;
    total.value = 0;
    perPage.value = per_page;
  };

  const setParametro = (
    key: string,
    value?: null | string | number | symbol | ISearchTypeMeta | any | any[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ignorarVazioNull = true
  ) => {
    if (ignorarVazioNull && !value) return;
    param.value[key] = value;
  };

  const getParametros = () => {
    return param.value;
  };

  const addFiltro = (label: string, fn: TFiltroCallback | null) => {
    filtros.value?.push({
      id: uid(),
      label,
      callback: fn,
    });
  };

  const calcTotalPage = (totalItems: number | null) => {
    total.value = totalItems ?? 0;
    pageTotal.value = Math.ceil(total.value / perPage.value);
  };

  const registerCallSearch = (fn: () => void) => {
    __callbackSearch.value = fn;
  };

  const onRemoverFiltro = (item: IFiltro) => {
    if (item.callback) {
      item?.callback();
      __callbackSearch.value();
    }
    __callbackSearch.value();
  };

  const onRemoveFiltroAll = () => {
    filtros.value?.forEach((item) => {
      if (item.callback) {
        item?.callback();
        __callbackSearch.value();
      }
      __callbackSearch.value();
    });
  };

  return {
    filtros,
    isFilter,
    addFiltro,
    restartFiltro,
    setParametro,
    getParametros,
    restartParametro,
    registerCallSearch,
    onRemoverFiltro,
    onRemoveFiltroAll,
    page: {
      calcTotalPage,
      restartPagination,
      total,
      pageTotal,
      perPage,
      page,
    },
  };
};
