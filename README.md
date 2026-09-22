# LocalOps Dashboard

LocalOps Dashboard is a local-first DevOps and operations platform for working with containerized applications, Kubernetes workloads, CI/CD pipelines, and infrastructure workflows in a reproducible development environment.

The project is designed to demonstrate practical platform and DevOps engineering concepts without requiring paid cloud infrastructure.

---

## Overview

LocalOps Dashboard brings together containerization, Kubernetes, automation, and operational workflows into a single local development environment.

The project focuses on:

- Containerized application workflows
- Docker and Docker Compose
- Kubernetes deployment and experimentation
- CI/CD automation
- Container image publishing
- Local infrastructure workflows
- Operational visibility
- Reproducible development environments
- Platform engineering practices

---

## Architecture

```text
                           Developer
                               |
                               v
                       LocalOps Dashboard
                               |
              +----------------+----------------+
              |                |                |
              v                v                v
        Application       Docker Compose    Kubernetes
          Services             |                |
              |                |                |
              +----------------+----------------+
                               |
                               v
                         CI/CD Automation
                               |
                    +----------+----------+
                    |                     |
                    v                     v
              Validation             Docker Build
                                          |
                                          v
                              GitHub Container Registry


Technology Stack
Containerization
Docker
Docker Compose
Container image workflows
Kubernetes
Kubernetes
kubectl
kind
minikube
Docker Desktop Kubernetes
CI/CD
GitHub Actions
Automated repository validation
Container build workflows
GitHub Container Registry (GHCR)
Development and Operations
Linux
Shell scripting
Git and GitHub
Infrastructure and operations workflows
DevOps Workflow

A typical workflow for the project looks like this:

Developer Change
      |
      v
Git Commit / Pull Request
      |
      v
GitHub Actions
      |
      +--> Repository Validation
      |
      +--> Application Build
      |
      +--> Docker Image Build
      |
      v
GitHub Container Registry
      |
      v
Kubernetes
      |
      v
Local Operations Environment

This workflow provides a practical example of how source control, CI/CD, containerization, registries, and Kubernetes can be connected into a single engineering workflow.

CI/CD

The repository contains two GitHub Actions workflows:

.github/workflows/ci.yml
.github/workflows/docker-ci.yml
CI Workflow

The CI workflow provides automated validation for repository changes.

Docker CI Workflow

The Docker workflow handles container image build and publishing workflows.

Container images can be published to:

GitHub Container Registry (GHCR)

This provides a foundation for reproducible container delivery and local Kubernetes deployment.

Kubernetes

Kubernetes manifests are included for local deployment and experimentation.

The project can be used with a local Kubernetes environment such as:

kind
minikube
Docker Desktop Kubernetes

Example cluster workflow:

kind create cluster

Verify the cluster:

kubectl cluster-info

View workloads:

kubectl get pods -A

The exact deployment commands depend on the Kubernetes manifests included in the repository.

Local Development

Clone the repository:

git clone https://github.com/franklinosuji2-afk/localops-dashboard.git
cd localops-dashboard

Run the application stack with Docker Compose where supported:

docker compose up --build

Stop the environment:

docker compose down

For Kubernetes experimentation, use a local cluster and apply the repository manifests according to the current project configuration.

Local-First Engineering

A core principle of LocalOps Dashboard is local-first development.

The environment is designed to allow experimentation with:

Docker
Docker Compose
Kubernetes
CI/CD workflows
Container images
Operational tooling

without requiring a continuously running paid cloud environment.

This makes the project suitable for development, testing, learning, and platform engineering experimentation.

Reproducibility

The project emphasizes reproducible engineering workflows through:

Version-controlled configuration
Containerized services
Docker Compose
Kubernetes manifests
Automated CI/CD
Container image workflows

The goal is to make development and operational workflows repeatable across environments.

DevOps Engineering Focus

LocalOps Dashboard demonstrates practical work across:

Containerization

Building and running applications as portable containers.

CI/CD Automation

Using GitHub Actions to automate validation and container workflows.

Kubernetes

Working with Kubernetes manifests and local clusters.

Container Registries

Building and publishing container images through GitHub Container Registry.

Infrastructure Workflows

Developing repeatable local infrastructure and operational processes.

Platform Engineering

Connecting source control, automation, containers, and Kubernetes into an integrated workflow.

Project Structure

The repository contains the application, containerization, automation, and Kubernetes configuration required by the project.

A representative structure is:

localops-dashboard/
|
|-- .github/
|   `-- workflows/
|       |-- ci.yml
|       `-- docker-ci.yml
|
|-- kubernetes/
|
|-- Dockerfile
|
|-- docker-compose.yml
|
`-- README.md

Refer to the repository tree for the current implementation and exact paths.

What This Project Demonstrates

LocalOps Dashboard demonstrates practical experience with:

Docker
Docker Compose
Kubernetes
GitHub Actions
GitHub Container Registry
CI/CD automation
Container image workflows
Local Kubernetes environments
Linux
Shell scripting
Git-based workflows
Infrastructure operations
Platform engineering concepts
Engineering Goals

The project is intended to demonstrate how modern DevOps workflows can be built around a local and reproducible engineering environment.

The broader engineering goals are:

Source Control
      |
      v
Automation
      |
      v
Containerization
      |
      v
Registry
      |
      v
Kubernetes
      |
      v
Operations
Author

Franklin Osuji

Cloud Infrastructure and DevOps Engineer

GitHub:
https://github.com/franklinosuji2-afk

Portfolio:
https://fc-dev.netlify.app/

Project Focus

DevOps | Platform Engineering | Kubernetes | Docker | CI/CD | Containerization | Infrastructure Operations



