import { useQuery } from "@tanstack/react-query";
import { getDrugs } from "../service/getDrugs";
export function useDrugs() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["drugs"],
    queryFn: getDrugs,
  });
  return { data, isLoading, isError };
}
