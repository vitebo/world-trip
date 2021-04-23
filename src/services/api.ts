const baseUrl = 'http://localhost:3000/api';

export async function api<Data>(route: string): Promise<Data> {
  const formattedRoute = route.startsWith('/') ? route.slice(1) : route;
  const response = await fetch(`${baseUrl}/${formattedRoute}`);
  console.log(response);

  const data = await response.json();
  return data;
}
