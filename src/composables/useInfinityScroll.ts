import { ref, onMounted } from "vue";

type PaginatedResponse<T> = {
  data: T[];
  meta: { last_page: number };
};

export function useInfinityScroll<T>(
  fetchPage: (page: number) => Promise<PaginatedResponse<T>>
) {
  const data = ref<T[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const currentPage = ref(1);
  const totalPages = ref(1);

  const fetchData = async (append = false) => {
    if (loading.value || currentPage.value > totalPages.value) return;
    loading.value = true;
    try {
      const response = await fetchPage(currentPage.value);
      if (append) {
        data.value = [...data.value, ...response.data];
      } else {
        data.value = response.data;
      }
      totalPages.value = response.meta.last_page;
    } catch (err) {
      error.value = "Error al cargar datos";
    } finally {
      loading.value = false;
    }
  };

  const scroll = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
      fetchData(true);
    }
  };

  onMounted(() => fetchData(false));

  return {
    data,
    loading,
    error,
    scroll,
  };
}
