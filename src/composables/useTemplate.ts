import { useInfinityScroll } from "./useInfinityScroll";
import { getData } from "../services/httpService";
import type { Template } from "../types/types";

export function useTemplate() {
  const {
    data: templates,
    loading,
    error,
    scroll,
  } = useInfinityScroll<Template>(getData); // ¡Misma función `getData` que ya tenías!

  return {
    templates,
    loading,
    error,
    scroll,
  };
}
