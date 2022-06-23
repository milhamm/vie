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
