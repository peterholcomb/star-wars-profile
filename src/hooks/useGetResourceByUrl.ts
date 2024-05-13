import { useSuspenseQuery } from "@tanstack/react-query";

export const useGetResourceByUrl = (resourceUrl: string) => {
  return useSuspenseQuery({
    queryKey: [resourceUrl],
    queryFn: async () => {
      if (resourceUrl) {
        try {
          const response = await fetch(resourceUrl);
          return await response.json();
        } catch (e) {
          throw new Error("Error fetching data from the API");
        }
      }

      return null;
    },
    retry: false,
  });
};
