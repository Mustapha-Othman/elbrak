import useSWR from "swr";
import { fetcher } from "@/libs/utils/api";

export const useCate = ({ method, path, query }) => {
  const { data, isLoading, error } = useSWR([method, path, query], fetcher, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
    // revalidateOnMount: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
  });

  return { data: data || [], isLoading: isLoading, error: error };
};
