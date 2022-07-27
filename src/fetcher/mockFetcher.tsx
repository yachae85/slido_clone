export default function mockFetcher(key: string) {
  const data = fetch(`/mock${key}`).then((res) => res.json());
  return data;
}
