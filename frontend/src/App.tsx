import { useEffect, useState } from "react";
import { getApiHealth, type ApiHealth } from "./lib/api";

type ConnectionState =
  | { status: "checking" }
  | { status: "connected"; data: ApiHealth }
  | { status: "disconnected"; message: string };

export default function App() {
  const [connection, setConnection] = useState<ConnectionState>({ status: "checking" });

  useEffect(() => {
    let active = true;
    getApiHealth()
      .then((data) => {
        if (active) setConnection({ status: "connected", data });
      })
      .catch((error: unknown) => {
        if (active) setConnection({
          status: "disconnected",
          message: error instanceof Error ? error.message : "Unable to reach the API",
        });
      });
    return () => { active = false; };
  }, []);

  return (
    <main>
      <h1>BancABC Intelligence</h1>
      <p>Customer Intelligence &amp; Growth Engine</p>
      <section aria-labelledby="connection-heading">
        <h2 id="connection-heading">Backend connection</h2>
        {connection.status === "checking" && <p>Checking API connection…</p>}
        {connection.status === "connected" && (
          <p>Connected to {connection.data.service}. Environment: {connection.data.environment}.</p>
        )}
        {connection.status === "disconnected" && <p role="alert">API unavailable: {connection.message}</p>}
      </section>
      <p>Project foundation is being set up. Customer data modules will follow dataset inspection.</p>
    </main>
  );
}
