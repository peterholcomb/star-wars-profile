import { Person } from "@/shared/types/swapi";
import { DescriptionList } from "@/components/layout/DescriptionList";
import { Card } from "@/components/Card";

export const PersonProfile = ({ person }: { person: Person }) => {
  const { height, mass, hair_color, eye_color, birth_year, gender } = person;
  return (
    <Card>
      <DescriptionList
        items={[
          { term: "Height/Weight", description: `${height}cm / ${mass}kg` },
          { term: "Gender", description: gender },
          { term: "Hair Color", description: hair_color },
          { term: "Eye Color", description: eye_color },
          { term: "Birth Year", description: birth_year },
        ]}
      />
    </Card>
  );
};
