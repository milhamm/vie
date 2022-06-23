import api, { fetcher, headerAuth } from "client/api";
import useSWR from "swr";
import { LabsType } from "types";

const useLabs = (token: string) => {
  const config = headerAuth(token);

  const {
    data: labData,
    error,
    mutate,
  } = useSWR<LabsType>(["/labs", config], fetcher);

  const addMember = async (data) => {
    if (labData) {
      try {
        const response = await api.post(
          `/labs/${labData.id}/member`,
          data,
          config
        );
        mutate();
        return Promise.resolve();
      } catch (error) {
        return Promise.reject();
      }
    }
  };

  return {
    labs: labData,
    addMember,
  };
};

export default useLabs;
