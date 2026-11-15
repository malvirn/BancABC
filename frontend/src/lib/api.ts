const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") ??
  "http://localhost:8000";

export type ApiHealth = {
  status: "ok";
  service: string;
  environment: string;
};

export async function getApiHealth(): Promise<ApiHealth> {
  const response = await fetch(`${API_BASE_URL}/api/v1/health`);
  if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
  return (await response.json()) as ApiHealth;
}
