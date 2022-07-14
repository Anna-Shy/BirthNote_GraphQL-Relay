// import data from "./person.json";

async function fetchGraphQL(text, variables) {
  const response = await fetch('https://localhost:4000/schema.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // const dataJson = data;

  // return Promise.resolve({ data: { users: dataJson } });
  return response.json();
}

export default fetchGraphQL;
