const baseUrl = 'http://localhost:3001';

export async function api<Data>(route: string): Promise<Data> {
  const formattedRoute = route.startsWith('/') ? route.slice(1) : route;
  const response = await fetch(`${baseUrl}/${formattedRoute}`);
  return await response.json();
}
