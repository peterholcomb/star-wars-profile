"use server";

import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { PersonProfile } from "@/components/Profile";
import { Person } from "@/shared/types/swapi";
import { SuspenseLoader } from "@/components/suspense-loader/SuspenseLoader";
import { SpeciesCard } from "@/components/SpeciesCard";
import { CardSkeleton } from "@/components/CardSkeleton";
import { FilmCard } from "@/components/FilmCard";
import { ShipCard } from "@/components/ShipCard";

export default async function CharacterPage({
  params: { personID },
}: {
  params: { personID: string };
}) {
  const character: Person = await fetch(
    `https://swapi.dev/api/people/${personID}/`,
  )?.then((res) => res.json());

  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-row items-center gap-8">
          <Link href="/" className="flex flex-row gap-2 items-center h-12 w-12">
            <ChevronLeftIcon />
          </Link>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            {character?.name}
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-8">
            <PersonProfile person={character} />

            {character.species.map((speciesUrl) => (
              <SuspenseLoader key={speciesUrl} fallback={<CardSkeleton />}>
                <SpeciesCard resourceUrl={speciesUrl} />
              </SuspenseLoader>
            ))}
          </div>
          <h3 className="text-xl font-medium border-b">Films</h3>
          <div className="grid grid-cols-2 gap-8">
            {character.films.map((filmUrl) => (
              <SuspenseLoader key={filmUrl} fallback={<CardSkeleton />}>
                <FilmCard resourceUrl={filmUrl} />
              </SuspenseLoader>
            ))}
          </div>
          {character.starships?.length > 0 && (
            <>
              <h3 className="text-xl font-medium border-b">Ships</h3>
              <div className="grid grid-cols-2 gap-8">
                {character.starships.map((shipUrl) => (
                  <SuspenseLoader key={shipUrl} fallback={<CardSkeleton />}>
                    <ShipCard resourceUrl={shipUrl} />
                  </SuspenseLoader>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
