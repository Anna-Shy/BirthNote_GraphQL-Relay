import data from "./person.json";

async function fetchGraphQL(text, variables) {
  const dataJson = data;

  return Promise.resolve({ data: { users: dataJson } });
}

export default fetchGraphQL;
