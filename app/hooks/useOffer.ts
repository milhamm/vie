import { useToast } from "@chakra-ui/react";
import api, { fetcher, headerAuth } from "client/api";
import { useState } from "react";
import useSWR from "swr";
import { OfferType } from "types";

const useOffer = (token: string) => {
  const config = headerAuth(token);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const { data, error, mutate } = useSWR<Array<OfferType>>(
    ["/team/offers", config],
    fetcher
  );

  const handleOffer = async (id: string, action: "ACCEPT" | "DECLINE") => {
    setLoading(true);
    try {
      const response = await api.post(`/team/offers/${id}`, { action }, config);
      console.log({ response });
      mutate();
      toast({
        title: "Accepted",
        description: "Member has been accepted successfully",
        status: "success",
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occured",
        status: "error",
        isClosable: true,
      });
    }
    setLoading(false);
  };

  return {
    offers: data,
    error,
    loading,
    handleOffer,
  };
};

export default useOffer;
