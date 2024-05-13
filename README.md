# Star Wars Profiles

A simple ui built with NextJS 14, TailwindCSS and SWAPI to display Star Wars characters. This app utilizes the SWAPI (Star 
Wars API) to fetch data about Star Wars characters and display them in a simple UI.  Data is fetched using the [Tanstack 
Query](https://tanstack.com/query/latest/docs/framework/react/overview) library using Suspense.

To run the app:

```
npm install
npm run dev
```

The app should open to `http://localhost:3000`

## Sample Graphql Schema
A sample graphql schema for fetching and mutating the Person and Species entities is provided below.  I've included 
only queries and mutations that apply to a Person and Species entity and left out the types for things like plantes, films, etc...

### Types
```graphql
type Person {
    name: String!
    height: String
    mass: String
    hairColor: String
    skinColor: String
    eyeColor: String
    birthYear: String
    gender: String
    species: Species
    created: String
    edited: String
    url: String
}

type Species {
    name: String!
    classification: String
    designation: String
    averageHeight: String
    skinColors: String
    hairColors: String
    eyeColors: String
    averageLifespan: String
    language: String
    people: [Person]
    created: String
    edited: String
    url: String
}
```

```graphql
query SearchPersons($name: String!) {
    persons(filter: { name: $name }) {
        name
        height
        mass
        hairColor
        skinColor
        eyeColor
        birthYear
        gender
        species {
            name
            classification
            averageHeight
            averageLifespan
            language
            designation
            skinColors
            hairColors
            eyeColors
            created
            edited
            url
        }
        created
        edited
        url
    }
}

query GetPerson($id: ID!) {
    person(id: $id) {
        name
        height
        mass
        hairColor
        skinColor
        eyeColor
        birthYear
        gender
        species {
            name
            classification
            designation
            averageHeight
            skinColors
            hairColors
            eyeColors
            averageLifespan
            language
        }
    }
}

input CreatePersonInput {
  name: String!
  height: String
  mass: String
  hairColor: String
  skinColor: String
  eyeColor: String
  birthYear: String
  gender: String
  homeworld: String
  species: String! // References the url of the species we want to assign to the user
}

input UpdatePersonInput {
  id: ID!
  name: String!
  height: String
  mass: String
  hairColor: String
  skinColor: String
  eyeColor: String
  birthYear: String
  gender: String
  homeworld: String
  species: String // References the url of the species we want to change the user to if we are changing the species
}

type Mutation {
  updatePerson(input: UpdatePersonInput!): Person
}

type Mutation {
  createPerson(input: CreatePersonInput!): Person
}
```

### DynamoDB Schema

The following is a sample DynamoDB schema for storing the data for the Star Wars characters.  The schema is designed to
allow for querying by name and by species.  Each entity has a unique identifier and a secondary index for querying by name.

#### Person Table
Partition Key: personId (String) - Unique identifier for a person.
Global Secondary Index: nameIndex (String) - Index for searching by name.

Attributes:

* name (String)
* height (String)
* mass (String)
* hairColor (String)
* skinColor (String)
* eyeColor (String)
* birthYear (String)
* gender (String)
* homeworld (String) - ID of the Planet
* species (String) - ID of the Species
* films (List of Strings) - IDs of the Films associated with this Person

#### Species Table
Partition Key: speciesId (String) - Unique identifier for a species.
Global Secondary Index: nameIndex (String) - Index for searching by name.  

Attributes:

* name (String)
* classification (String)
* designation (String)
* averageHeight (String)
* skinColors (String)
* hairColors (String)
* eyeColors (String)
* averageLifespan (String)
* language (String)
* homeworld (String) - ID of the Planet associated with this Species
* people (List of Strings) - IDs of the People associated with this Species
* films (List of Strings) - IDs of the Films associated with this Species

