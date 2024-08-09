import useSWR from "swr";
import { fetcher } from "@/libs/utils/api";

export const useStudies = ({ method, path, query }) => {
  const { data, isLoading, error } = useSWR([method, path, query], fetcher, {
    refreshInterval: 10000,
    refreshWhenOffline: true,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    errorRetryInterval: 1000,
    shouldRetryOnError: true,
  });

  return { data: data || [], isLoading: isLoading, error: error };
};
