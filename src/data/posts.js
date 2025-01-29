export const posts = [
    {
        id: 1,
        title: "Automating Blog Deployment with Hugo",
        date: "2024-11-12",
        readTime: "5 min",
        categories: ["DevOps"],
        excerpt: "Automating each blog post upload had been on my mind for a while...",
        content: `
# Automating Blog Deployment with Hugo

## Introduction
When it comes to managing a blog, automation is key to maintaining a consistent publishing workflow.

### Prerequisites
- Hugo installed locally
- GitHub account
- Basic Git knowledge

## Setting Up Hugo
First, let's install and configure Hugo:

\`\`\`bash
# Install Hugo
brew install hugo

# Create new site
hugo new site my-blog
cd my-blog
\`\`\`

### Configuring GitHub Actions
Create a new workflow file:

\`\`\`yaml
name: Deploy Blog
on:
push:
    branches:
    - main
\`\`\`

## Testing and Deployment
To test locally:

\`\`\`bash
hugo server -D
\`\`\`

## Conclusion
With this setup, your blog will automatically deploy whenever you push changes.
        `,
    },
    {
        id: 2,
        title: "Introduction to Kubernetes for Beginners",
        date: "2024-12-01",
        readTime: "8 min",
        categories: ["DevOps", "Kubernetes"],
        excerpt: "Learn the basics of Kubernetes and why it's essential for container orchestration.",
        content: `
# Introduction to Kubernetes for Beginners

## What is Kubernetes?
Kubernetes is an open-source platform designed to automate deploying, scaling, and managing containerized applications.

## Core Concepts
- **Pods:** The smallest deployable units.
- **Nodes:** Machines (virtual or physical) running Kubernetes.
- **Cluster:** A set of nodes managed by Kubernetes.

## Getting Started
Install Kubernetes with Minikube:

\`\`\`bash
# Install Minikube
brew install minikube

# Start Minikube
minikube start
\`\`\`

## Conclusion
Kubernetes simplifies container orchestration and is a must-have for modern infrastructure.
        `,
    },
    {
        id: 3,
        title: "Building a CI/CD Pipeline on AWS",
        date: "2024-12-10",
        readTime: "10 min",
        categories: ["DevOps", "AWS"],
        excerpt: "Create a fully automated CI/CD pipeline using AWS services like CodePipeline and CodeBuild.",
        content: `
# Building a CI/CD Pipeline on AWS

## Tools Used
- **AWS CodePipeline** for orchestration.
- **AWS CodeBuild** for build automation.
- **S3** for storing build artifacts.

## Step-by-Step Guide
1. Create an S3 bucket to store artifacts.
2. Set up CodeBuild for building your application.
3. Configure CodePipeline to trigger on GitHub commits.

\`\`\`bash
# Example AWS CLI command
aws s3 mb s3://my-cicd-artifacts
\`\`\`

## Conclusion
AWS provides a robust platform for setting up scalable CI/CD pipelines.
        `,
    },
    {
        id: 4,
        title: "Monitoring Kubernetes Clusters with Prometheus",
        date: "2024-12-20",
        readTime: "7 min",
        categories: ["DevOps", "Kubernetes"],
        excerpt: "Set up Prometheus to monitor your Kubernetes clusters effectively.",
        content: `
# Monitoring Kubernetes Clusters with Prometheus

## Why Prometheus?
Prometheus is a leading open-source monitoring and alerting toolkit.

## Steps to Integrate
1. Deploy Prometheus using Helm:
   \`\`\`bash
   helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
   helm install prometheus prometheus-community/prometheus
   \`\`\`

2. Expose Prometheus via a Service.
3. Create custom alerts for cluster health.

## Conclusion
Prometheus provides deep insights into your Kubernetes clusters, making monitoring efficient.
        `,
    },
    {
        id: 5,
        title: "Using Terraform to Manage AWS Infrastructure",
        date: "2024-12-30",
        readTime: "9 min",
        categories: ["DevOps", "AWS"],
        excerpt: "Learn how to manage your AWS infrastructure using Terraform for better scalability and control.",
        content: `
# Using Terraform to Manage AWS Infrastructure

## Benefits of Terraform
- Infrastructure as Code (IaC) approach.
- Version control for infrastructure.

## Basic Example
1. Install Terraform.
2. Write a simple configuration file:

\`\`\`hcl
provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "example" {
  bucket = "my-example-bucket"
}
\`\`\`

3. Apply the configuration:
\`\`\`bash
terraform init
terraform apply
\`\`\`

## Conclusion
Terraform simplifies AWS resource management and ensures consistency across environments.
        `,
    },
    {
        id: 6,
        title: "Optimizing EKS for High Availability",
        date: "2025-01-10",
        readTime: "12 min",
        categories: ["AWS", "Kubernetes"],
        excerpt: "Explore best practices to optimize your Amazon EKS clusters for high availability and performance.",
        content: `
# Optimizing EKS for High Availability

## Key Strategies
- Use multiple Availability Zones.
- Configure Auto Scaling Groups (ASGs).
- Enable Cluster Autoscaler for dynamic scaling.

## Implementation Example
Set up an EKS cluster with multiple AZs using eksctl:

\`\`\`bash
eksctl create cluster --name my-cluster --region us-east-1 --zones "us-east-1a,us-east-1b,us-east-1c"
\`\`\`

## Conclusion
Optimizing EKS ensures your workloads remain highly available and resilient.
        `,
    },
];
