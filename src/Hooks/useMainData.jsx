import { useQuery } from "@tanstack/react-query";
import SecureAxios from "./SecureAxios";

const useMainData = () => {
  const { data: mainData, isLoading } = useQuery({
    queryKey: ["mainData"],
    queryFn: async () => {
      const res = await SecureAxios.get("/v1/allData");
      console.log(res);
      return res?.data;
    },
  });

  return [mainData, isLoading];
};

export default useMainData;
