import { fetcher, headerAuth } from "client/api";
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
};

const useProfile = (token: string) => {
  const config = headerAuth(token);

  const { data, error } = useSWR<ProfileResponse>(
    ["/user/profile", config],
    fetcher
  );

  return {
    user: data,
    error,
  };
};

export default useProfile;
