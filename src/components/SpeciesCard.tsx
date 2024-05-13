"use client";
import { useGetResourceByUrl } from "@/hooks/useGetResourceByUrl";
import { DescriptionList } from "@/components/layout/DescriptionList";
import { Species } from "@/shared/types/swapi";

export const SpeciesCard = ({ resourceUrl }: { resourceUrl: string }) => {
  const { data: species } = useGetResourceByUrl(resourceUrl);
  const { classification, designation, average_height, average_lifespan } =
    species as Species;

  return (
    <div className="rounded-xl border p-4">
      <h3 className="text-lg font-medium">Species: {species.name}</h3>
      <DescriptionList
        items={[
          { term: "Classification", description: classification },
          { term: "Designation", description: designation },
          { term: "Average Height", description: average_height },
          { term: "Average Lifespan", description: average_lifespan },
        ]}
      />
    </div>
  );
};
