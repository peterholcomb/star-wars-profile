"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { PersonGrid } from "@/components/PersonGrid";
import { SuspenseLoader } from "@/components/suspense-loader/SuspenseLoader";
import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-row gap-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 text-nowrap">
            Star Wars Profiles
          </h1>

          <div className="w-full grow flex">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative text-gray-400 focus-within:text-gray-600 w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                autoFocus
                id="search"
                className="block border border-gray-400 w-full rounded-md  bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search for people by name..."
                type="search"
                name="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 space-y-4">
          <p className="text-sm font-light">
            Search for characters from the Star Wars universe using the field
            above.
          </p>
          <SuspenseLoader>
            <PersonGrid searchTerm={debouncedSearchTerm} />
          </SuspenseLoader>
        </div>
      </main>
    </div>
  );
}
