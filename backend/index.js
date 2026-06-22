const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let logs = [];

function addLog(message) {
  logs.unshift({
    id: Date.now(),
    timestamp: new Date().toLocaleTimeString(),
    message
  });
}

let services = [
  { id: 1, name: "nginx", status: "stopped", cpu: "0", memory: "0" },
  { id: 2, name: "redis", status: "healthy", cpu: "20", memory: "256" }
];

app.get("/services", (req, res) => {
  res.json(services);
});

app.get("/logs", (req, res) => {
  res.json(logs);
});

function getMetrics() {
  const total = services.length;
  const running = services.filter(s => s.status === "healthy").length;
  const stopped = services.filter(s => s.status === "stopped").length;

  const avgCpu =
    services.reduce((acc, s) => acc + parseInt(s.cpu || 0), 0) /
    (services.length || 1);

  return {
    total,
    running,
    stopped,
    avgCpu: avgCpu.toFixed(1)
  };
}

app.get("/metrics", (req, res) => {
  res.json(getMetrics());
});

app.post("/services", (req, res) => {
  const s = {
    id: Date.now(),
    name: req.body.name,
    status: "stopped",
    cpu: "0",
    memory: "0"
  };

  services.push(s);
  addLog(`Service ${s.name} created`);
  res.json(s);
});

app.post("/services/:id/start", (req, res) => {
  const s = services.find(x => x.id === Number(req.params.id));
  if (!s) return res.status(404).json({ error: "not found" });

  s.status = "deploying";
  addLog(`${s.name} deploying`);

  setTimeout(() => {
    s.status = "healthy";
    s.cpu = String(Math.floor(Math.random() * 60));
    s.memory = String(128 + Math.floor(Math.random() * 400));
    addLog(`${s.name} healthy`);
  }, 4000);

  res.json(s);
});

app.post("/services/:id/stop", (req, res) => {
  const s = services.find(x => x.id === Number(req.params.id));
  if (!s) return res.status(404).json({ error: "not found" });

  s.status = "stopped";
  s.cpu = "0";
  s.memory = "0";

  addLog(`${s.name} stopped`);
  res.json(s);
});

app.listen(PORT, () => {
  console.log(`Backend running on ${PORT}`);
});
