import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://backend:4000";

export default function App() {
  const [services, setServices] = useState([]);
  const [logs, setLogs] = useState([]);
  const [metrics, setMetrics] = useState({});
  const [name, setName] = useState("");

  const refresh = async () => {
    const s = await axios.get(`${API_URL}/services`);
    const l = await axios.get(`${API_URL}/logs`);
    const m = await axios.get(`${API_URL}/metrics`);

    setServices(s.data);
    setLogs(l.data);
    setMetrics(m.data);
  };

  const create = async () => {
    await axios.post(`${API_URL}/services`, { name });
    setName("");
    refresh();
  };

  const start = async (id) => {
    await axios.post(`${API_URL}/services/${id}/start`);
    setTimeout(refresh, 4500);
    refresh();
  };

  const stop = async (id) => {
    await axios.post(`${API_URL}/services/${id}/stop`);
    refresh();
  };

  useEffect(() => {
    refresh();
    const i = setInterval(refresh, 3000);
    return () => clearInterval(i);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>LocalOps Control Plane</h1>

      <h2>Metrics</h2>
      <div style={{ display: "flex", gap: 20 }}>
        <div>Total: {metrics.total}</div>
        <div>Running: {metrics.running}</div>
        <div>Stopped: {metrics.stopped}</div>
        <div>Avg CPU: {metrics.avgCpu}</div>
      </div>

      <h2>Create Service</h2>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={create}>Create</button>

      <h2>Services</h2>
      {services.map(s => (
        <div key={s.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <b>{s.name}</b>
          <div>Status: {s.status}</div>
          <div>CPU: {s.cpu}</div>
          <div>Memory: {s.memory}</div>

          <button onClick={() => start(s.id)}>Start</button>
          <button onClick={() => stop(s.id)}>Stop</button>
        </div>
      ))}

      <h2>Logs</h2>
      {logs.map(l => (
        <div key={l.id}>
          [{l.timestamp}] {l.message}
        </div>
      ))}
    </div>
  );
}
