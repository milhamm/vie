import api, { fetcher, headerAuth } from "client/api";
import useSWR from "swr";
import { TeamType } from "types";

type ProfileResponse = {
  academic_year: string;
  created_at: string;
  email: string;
  emailVerified: null;
  id: string;
  image: null;
  major: string;
  name: string;
  skills: string;
  updated_at: string;
  history: Array<{
    id: string;
    date: string;
    name: string;
    role: string;
    status: string;
  }>;
};

const useProfile = (token: string, id?: string) => {
  const config = token ? headerAuth(token) : {};

  const { data: profileData, error: profileError } = useSWR<ProfileResponse>(
    token ? ["/user/profile", config] : `/user/profile/${id}`,
    fetcher
  );

  const { data: teamsData, error: teamsError } = useSWR<Array<TeamType>>(
    token ? ["/user/teams", config] : `/user/teams/${id}`,
    fetcher
  );

  const addHistory = async (payload) => {
    try {
      await api.post("/user/history", payload, config);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    user: profileData,
    error: profileError,
    team: teamsData,
    addHistory,
  };
};

export default useProfile;
