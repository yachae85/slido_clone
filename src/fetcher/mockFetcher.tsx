export default async function mockFetcher(key: string) {
  const data = await fetch(`/mock${key}`).then((res) => res.json());
  console.log(data);
  return data;
}
