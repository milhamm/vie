import api, { fetcher, headerAuth } from "client/api";
import useSWR from "swr";

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

const useProfile = (token: string) => {
  const config = headerAuth(token);

  const { data, error } = useSWR<ProfileResponse>(
    ["/user/profile", config],
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
    user: data,
    error,
    addHistory,
  };
};

export default useProfile;
