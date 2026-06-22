const express = require("express");
const app = express();

app.use(express.json());

let services = [];

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "backend", time: new Date() });
});

app.get("/services", (req, res) => {
  res.json(services);
});

app.post("/services", (req, res) => {
  const service = { id: Date.now(), name: req.body.name, status: "stopped" };
  services.push(service);
  res.json(service);
});

app.post("/services/:id/start", (req, res) => {
  const service = services.find(s => s.id == req.params.id);
  if (service) service.status = "running";
  res.json(service);
});

app.post("/services/:id/stop", (req, res) => {
  const service = services.find(s => s.id == req.params.id);
  if (service) service.status = "stopped";
  res.json(service);
});

app.listen(4000, () => {
  console.log("Backend running on 4000");
});
