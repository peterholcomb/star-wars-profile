import { useSearchCharacters } from "@/hooks/useSearchCharacters";
import { Person } from "@/shared/types/swapi";
import Link from "next/link";

const getPersonId = (url: string) => {
  const urlParts = url.split("/").filter(Boolean);
  return urlParts[urlParts.length - 1];
};

export const PersonGrid = ({ searchTerm }: { searchTerm: string }) => {
  const { data: people } = useSearchCharacters(searchTerm);

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
    >
      {people?.map((person: Person) => (
        <li
          key={person.url}
          className="col-span-1 flex flex-col rounded-lg bg-white text-center shadow"
        >
          <Link
            href={`/persons/${getPersonId(person.url)}`}
            className="flex flex-1 flex-col p-6"
          >
            <h3 className="mt-6 text-xl font-medium text-gray-900">
              {person.name}
            </h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};
