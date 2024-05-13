import { ReactNode } from "react";

export type DescriptionListItem = {
  term: string;
  description: ReactNode;
};

export const DescriptionList = ({
  items,
}: {
  items: DescriptionListItem[];
}) => {
  return (
    <dl className="divide-y divide-gray-100">
      {items.map((item) => (
        <div
          className="px-3 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
          key={item.term}
        >
          <dt className="text-sm font-medium leading-6 text-gray-900">
            {item.term}
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {item.description}
          </dd>
        </div>
      ))}
    </dl>
  );
};
