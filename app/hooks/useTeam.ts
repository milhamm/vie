import api, { fetcher, headerAuth } from "client/api";
import { useState } from "react";
import useSWR from "swr";

type UseTeamType = {
  token?: string;
  id?: string;
  query?: {
    search?: string;
    competition?: string;
    organizer?: string;
  };
};

const useTeam = <T>(
  { token, id, query }: UseTeamType = { token: null, id: null, query: {} }
) => {
  let config: any = headerAuth(token);

  config = { ...config, params: query };

  const [loading, setLoading] = useState(false);

  console.log({ config });

  const { data, error, mutate } = useSWR<T>(
    id ? (token ? [`/team/${id}`, config] : `/team/${id}`) : ["/team", config],
    fetcher
  );

  const createTeam = async (data) => {
    try {
      console.log({ config });
      const response = await api.post("/team", data, config);
      mutate();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
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

  const addHistory = async (payload) => {
    setLoading(true);
    try {
      const response = await api.post(`/user/history`, payload, config);
      console.log(response);
      return Promise.resolve();
    } catch (error) {
      console.log(error);
      return Promise.reject();
    }
    setLoading(false);
  };

  return {
    team: data,
    error,
    createTeam,
    requestJoin,
    loading,
    addHistory,
  };
};

export default useTeam;
