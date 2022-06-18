import { fetcher, headerAuth } from "client/api";
import useSWR from "swr";

const useTeam = <T>(id?: string, token?: string) => {
  console.log(headerAuth(token));
  const { data, error } = useSWR<T>(
    id ? (token ? [`/team/${id}`, headerAuth(token)] : `/team/${id}`) : "/team",
    fetcher
  );

  return {
    team: data,
    error,
  };
};

export default useTeam;
