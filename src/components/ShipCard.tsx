"use client";
import { useGetResourceByUrl } from "@/hooks/useGetResourceByUrl";
import { DescriptionList } from "@/components/layout/DescriptionList";
import { Starship } from "@/shared/types/swapi";

export const ShipCard = ({ resourceUrl }: { resourceUrl: string }) => {
  const { data: ship } = useGetResourceByUrl(resourceUrl);
  const {
    name,
    model,
    manufacturer,
    length,
    starship_class,
    crew,
    passengers,
    max_atmosphering_speed,
  } = ship as Starship;

  return (
    <div className="rounded-xl border p-4 space-y-4">
      <h3 className="text-lg font-medium">Ship: {name}</h3>
      <DescriptionList
        items={[
          { term: "Model", description: model },
          { term: "Manufacturer", description: manufacturer },
          { term: "Length", description: `${length}m` },
          { term: "Class", description: starship_class },
          { term: "Crew/Passengers", description: `${crew}/${passengers}` },
          { term: "Speed", description: max_atmosphering_speed },
        ]}
      />
    </div>
  );
};
