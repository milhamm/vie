import api, { fetcher, headerAuth } from "client/api";
import { useState } from "react";
import useSWR from "swr";

const useTeam = <T>(token?: string, id?: string) => {
  const config = headerAuth(token);
  const [loading, setLoading] = useState(false);

  const { data, error, mutate } = useSWR<T>(
    id ? (token ? [`/team/${id}`, config] : `/team/${id}`) : "/team",
    fetcher
  );

  const createTeam = async (data) => {
    try {
      const response = await api.post("/team", data, config);
      console.log({ response });
    } catch (error) {}
  };

  const requestJoin = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/team/${id}/join`, config);
      console.log({ response });
      mutate();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return {
    team: data,
    error,
    createTeam,
    requestJoin,
    loading,
  };
};

export default useTeam;
