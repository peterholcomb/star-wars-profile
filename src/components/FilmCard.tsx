"use client";
import { useGetResourceByUrl } from "@/hooks/useGetResourceByUrl";
import { DescriptionList } from "@/components/layout/DescriptionList";
import { Film } from "@/shared/types/swapi";

export const FilmCard = ({ resourceUrl }: { resourceUrl: string }) => {
  const { data: film } = useGetResourceByUrl(resourceUrl);
  const { title, opening_crawl, release_date, director, producer } =
    film as Film;

  return (
    <div className="rounded-xl border p-4 space-y-4">
      <h3 className="text-lg font-medium">Film: {title}</h3>
      <DescriptionList
        items={[
          { term: "Release Date", description: release_date },
          { term: "Director", description: director },
          { term: "Producer", description: producer },
        ]}
      />
      <p className="text-gray-600 text-sm">{opening_crawl}</p>
    </div>
  );
};
