import axiosClient from "@/configs/axiosClient";
import { ProgrammingLanguage } from "@/types/programming-language";

export const getProgrammingLanguages = async (
  search: string,
  noThrottling: boolean = true
): Promise<ProgrammingLanguage[]> => {
  const response = await axiosClient.get("/", {
    params: {
      "no-throttling": noThrottling,
      search,
    },
  });
  return response.data;
};
