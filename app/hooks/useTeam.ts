import { fetcher } from "client/api";
import useSWR from "swr";

const useTeam = <T>(id?: string) => {
  const { data, error } = useSWR<T>(id ? `/team/${id}` : "/team", fetcher);

  return {
    team: data,
    error,
  };
};

export default useTeam;
