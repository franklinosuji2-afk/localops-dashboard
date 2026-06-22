# LocalOps Dashboard

A full-stack DevOps platform demonstrating CI/CD, containerization, and Kubernetes orchestration with observability tooling.

---

## 🧱 Architecture

- Frontend: Vite (SPA)
- Backend: Node.js / Express API
- Docker: Containerized services
- Kubernetes: Docker Desktop cluster
- Helm: Kubernetes packaging
- CI/CD: GitHub Actions
- Observability: Prometheus + Grafana

---

## 🚀 Services

| Service     | Port |
|------------|------|
| Frontend   | 5173 |
| Backend    | 4000 |
| Grafana    | 3000 |
| Prometheus | 9090 |

---

## ⚙️ Run Locally

Frontend:
cd frontend
npm install
npm run dev

Backend:
cd backend
node index.js

---

## 🐳 Docker

docker compose up --build

---

## ☸️ Kubernetes

kubectl apply -f k8s/

or

helm install localops ./localops-chart

---

## 📊 Observability

- Grafana: http://localhost:3000
- Prometheus: http://localhost:9090

---

## 👤 Author

LocalOps Project
