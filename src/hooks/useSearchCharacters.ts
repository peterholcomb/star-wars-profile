import { useSuspenseQuery } from "@tanstack/react-query";
import { Person } from "@/shared/types/swapi";

export const useSearchCharacters = (query: string) => {
  return useSuspenseQuery<Person[]>({
    queryKey: ["characters", query],
    queryFn: async () => {
      if (query) {
        try {
          const response = await fetch(
            `https://swapi.dev/api/people/?search=${query}`,
          );
          const data = await response.json();
          return data.results;
        } catch (e) {
          throw new Error("Error fetching data from the API");
        }
      }

      return [];
    },
    retry: false,
  });
};
