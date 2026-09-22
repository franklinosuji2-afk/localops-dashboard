# LocalOps Dashboard

LocalOps Dashboard is a local-first operations dashboard for monitoring containerized applications and infrastructure workflows.

Architecture
Developer
   |
   v
LocalOps Dashboard
   |
   +-- Application services
   |
   +-- Docker Compose
   |
   `-- Kubernetes

The project is designed to demonstrate practical DevOps workflows without requiring a paid cloud environment.

Technology Stack
Docker
Docker Compose
Kubernetes
GitHub Actions
GitHub Container Registry
Linux
Shell scripting
Infrastructure and operations workflows
CI/CD

The repository contains two GitHub Actions workflows:

.github/workflows/ci.yml
.github/workflows/docker-ci.yml

The workflows provide automated validation and container image build and publishing workflows.

Container images can be published to GitHub Container Registry (GHCR).

Kubernetes

Kubernetes manifests are included for local deployment and experimentation.

A local Kubernetes cluster can be used with tools such as:

kind
minikube
Docker Desktop Kubernetes
Local Development

Clone the repository:

git clone https://github.com/franklinosuji2-afk/localops-dashboard.git
cd localops-dashboard

Run with Docker Compose where applicable:

docker compose up --build
DevOps Focus

The project demonstrates:

Containerization
CI/CD automation
Kubernetes deployment
Local infrastructure workflows
Container image publishing
Operational visibility
Reproducible development environments
Author

Franklin Osuji

Cloud Infrastructure and DevOps Engineer

GitHub: https://github.com/franklinosuji2-afk
Portfolio: https://fc-dev.netlify.app/
