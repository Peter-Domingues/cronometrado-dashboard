import { faker } from "@faker-js/faker";

export type Person = {
  firstName: string;
  lastName: string;
  age: number;
  cep: string;
  city: string;
  street: string;
  plan: "mensal" | "semestral" | "anual";
  subRows?: Person[];
  endDate: Date;
  startDate: Date;
};

const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): Person => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    plan: faker.helpers.shuffle<Person["plan"]>([
      "mensal",
      "semestral",
      "anual",
    ])[0]!,
    startDate: faker.date.recent(),
    endDate: faker.date.future(),
    age: faker.number.int(40),
    cep: faker.location.zipCode(),
    city: faker.location.city(),
    street: faker.location.street(),
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;
    return range(len).map((d): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
