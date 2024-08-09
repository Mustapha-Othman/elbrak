import useSWR from "swr";
import { fetcher } from "@/libs/utils/api";

export function useSearch({ method, path, query }) {
  const { data, isLoading, error } = useSWR([method, path, query], fetcher, {
    refreshInterval: 10000,
    refreshWhenOffline: false,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    errorRetryInterval: 1,
    shouldRetryOnError: false,
  });

  return { data: data || [], isLoading: isLoading, error: error };
}
