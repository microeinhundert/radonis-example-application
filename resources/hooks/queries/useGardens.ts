import { useServerQuery } from "@microeinhundert/radonis-query";
import type GardensController from "App/Controllers/Http/GardensController";

export function useGardens() {
  const { data, isLoading, ...query } =
    useServerQuery<GardensController["index"]>("GardensController.index");

  return {
    gardens: data?.gardens ?? [],
    isLoadingGardens: isLoading,
    ...query,
  };
}
