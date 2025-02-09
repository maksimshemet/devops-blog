export const posts = [
    {
        id: 1,
        title: "👨‍💻 About Me & This Blog",
        date: "2025-02-01",
        readTime: "5 min",
        categories: ["DevOps", "Personal", "Blog"],
        excerpt: "Learn about my journey in DevOps, how AI helped build this blog, and what to expect in future posts! 🚀",
        content: `
# 👨‍💻 About Me & This Blog  

## 🚀 Who Am I?  
Hi! I'm Maksym Shemet, a DevOps engineer with expertise in Kubernetes, automation, and cybersecurity. With experience in Kubernetes administration and NLP, I love exploring how AI can enhance DevOps workflows.  

---

## 🏗 How This Blog Was Built  
This blog is a fusion of human effort and AI assistance. Here's the tech stack behind it:  

🔹 **Frontend:** Built with React + Vite for high performance.  
🔹 **CI/CD:** Automated builds and deployments using Jenkins and ArgoCD.  
🔹 **Hosting:** Running on a self-managed VPS with a single-node Kubernetes cluster.  
🔹 **Repo:** [GitHub](https://github.com/maksimshemet/devops-blog)  

---

## 💡 Why This Blog?  
I started this blog to share insights, tutorials, and best practices in DevOps, Kubernetes, and automation. Expect deep dives into:  
✅ Kubernetes and AI-powered DevOps  
✅ CI/CD automation with Jenkins and ArgoCD  
✅ Cloud infrastructure, cybersecurity, IaC, and real-world case studies  

---

## 🎯 Stay Connected  
Want to learn more about DevOps & AI? Follow me on:  
🔗 [LinkedIn](https://www.linkedin.com/in/rt-s-91196714a/)  
🔗 [GitHub](https://github.com/maksimshemet)  

💬 Have a question or topic suggestion? Drop a comment below or open an issue in my [GitHub repo](https://github.com/maksimshemet). Let's build the future of DevOps together! 🚀  
        `
    },
    {
        id: 2,
        title: "🤯 When Kubernetes Plays Hide and Seek",
        date: "2025-02-03",
        readTime: "7 min",
        categories: ["DevOps", "Kubernetes", "Humor"],
        excerpt: "Ever had a pod disappear without a trace? Let's dive into the funniest debugging adventures in Kubernetes! 🕵️‍♂️",
        content: `
# 🤯 When Kubernetes Plays Hide and Seek  

## 🕵️‍♂️ The Mysterious Case of the Missing Pod  
You're deploying an application. Everything seems fine, but then—BOOM! The pod vanishes like it's in witness protection. No logs, no errors. Just... gone.  

---

## 🔍 Possible Explanations  
Here are some reasons your pod might be ghosting you:  
🔹 **Evicted:** Kubernetes decided your pod wasn't paying rent. Check \`kubectl get events\`.  
🔹 **OOMKilled:** Your app was too hungry for memory. Inspect it with \`kubectl describe pod <pod-name>\`.  
🔹 **Node Failure:** Sometimes nodes just take an unplanned vacation. Look at \`kubectl get nodes\`.  

---

## 😂 Funniest Debugging Adventures  
Once, I spent an hour debugging a "missing" pod, only to realize... I deployed it to the wrong namespace. \`kubectl get pods --all-namespaces\` saved the day.  

Have your own Kubernetes horror story? Share it below! 🗣️  

🚀 Follow me for more DevOps fun:  
🔗 [LinkedIn](https://www.linkedin.com/in/rt-s-91196714a/)  
🔗 [GitHub](https://github.com/maksimshemet)  
        `
    },
    {
        id: 3,
        title: "🔥 Why I Moved My CI/CD from the Cloud to a Self-Hosted Setup",
        date: "2025-02-05",
        readTime: "8 min",
        categories: ["DevOps", "CI/CD", "Kubernetes"],
        excerpt: "Managing CI/CD in the cloud is easy but expensive. Here's why I built a self-hosted pipeline with Jenkins & ArgoCD! 🚀",
        content: `
# 🔥 Why I Moved My CI/CD from the Cloud to a Self-Hosted Setup  

## 🚀 The Cost of Convenience  
Cloud-based CI/CD solutions are great, but they come at a cost. I wanted **full control** over my pipeline while keeping infrastructure expenses low.  

---

## 🏗 My Self-Hosted CI/CD Setup  
Instead of relying on managed services, I built a **cost-effective, flexible** CI/CD pipeline:  
🔹 **Jenkins** for automation  
🔹 **ArgoCD** for GitOps-based deployments  
🔹 **Kubernetes on a self-managed VPS**  

This setup gives me **zero vendor lock-in** and **full flexibility** to customize workflows.  

---

## 💰 How I Optimized Costs  
- **Self-hosted infrastructure** instead of cloud CI/CD services  
- **Fine-tuned resource limits** to avoid overprovisioning  
- **Automated cleanups** to free unused resources  
- **DNS managed via Bind**, costing just **$3/month** for a static IP and server  

---

## 🤣 Fun Fact  
AWS is great, but my bank account disagrees. Running my own Kubernetes cluster feels like cooking at home—it takes effort, but it's way cheaper than eating out.  

---

## 🛠 Lessons Learned  
Moving away from cloud CI/CD requires **strong monitoring, security, and maintenance**, but the cost savings and flexibility make it worth it.  

💬 Have you built your own self-hosted CI/CD setup? Let's discuss!  

👉 Read more on my blog: maksym.shemet.blog.smv.pp.ua/self-hosted-ci-cd  
👉 Follow my journey on LinkedIn: linkedin.com/in/rt-s-91196714a  
👉 Check the repo: github.com/maksimshemet  
        `
    },
    {
        id: 4,
        title: "🔐 Securing Your Self-Hosted Kubernetes Cluster",
        date: "2025-02-07", 
        readTime: "10 min",
        categories: ["DevOps", "Kubernetes", "Security"],
        excerpt: "Learn essential security practices for protecting your self-hosted Kubernetes cluster from common threats and vulnerabilities! 🛡️",
        content: `
# 🔐 Securing Your Self-Hosted Kubernetes Cluster

## 🎯 Why Security Matters
After setting up a self-hosted Kubernetes cluster (as discussed in my previous post), securing it becomes crucial. Let's explore how to protect your infrastructure from potential threats.

---

## 🛡️ Essential Security Measures
Here are key practices I implemented to secure my cluster:

🔹 **RBAC Configuration**
- Implemented strict Role-Based Access Control
- Created separate service accounts for different workloads
- Limited permissions to the minimum required

🔹 **Network Security**
- Configured Network Policies to control pod-to-pod communication
- Set up proper ingress rules with TLS
- Implemented pod security policies

🔹 **Container Security**
- Used distroless images where possible
- Implemented image scanning in CI/CD pipeline
- Set resource quotas and limits

---

## 🔍 Monitoring & Auditing
Security isn't just about prevention:
- Deployed Prometheus & Grafana for monitoring
- Enabled Kubernetes audit logging
- Set up alerts for suspicious activities

---

## 💡 Pro Tips
1. **Never** use the default service account
2. Always encrypt secrets at rest
3. Keep your cluster components updated
4. Regular security scans are your friends

---

## 🚨 Common Pitfalls
Learn from my mistakes:
- Forgetting to rotate certificates
- Leaving the Kubernetes dashboard exposed
- Not setting memory/CPU limits
- Neglecting regular security updates

Want to learn more about Kubernetes security? Check out these resources:
🔗 [Kubernetes Security Best Practices](https://kubernetes.io/docs/concepts/security/)
🔗 [CIS Kubernetes Benchmark](https://www.cisecurity.org/benchmark/kubernetes)

💬 What security measures do you use in your cluster? Share your experiences below!

🔗 Follow me for more DevOps insights:
- [LinkedIn](https://www.linkedin.com/in/rt-s-91196714a/)
- [GitHub](https://github.com/maksimshemet)
        `
    },
    {
        id: 5,
        title: "🔐 Securing Kubernetes Secrets with Vault",
        date: "2025-02-08",
        readTime: "8 min",
        categories: ["DevOps", "Kubernetes", "Security"],
        excerpt: "Storing secrets in Kubernetes? Stop using plaintext ConfigMaps! Here's how I integrated HashiCorp Vault for secure secret management. 🚀",
        content: `
# 🔐 Securing Kubernetes Secrets with Vault

## 🤔 Why Vault?
Kubernetes Secrets are OK, but they lack encryption at rest by default and can be easily exposed. HashiCorp Vault provides:
✅ Encrypted secrets storage
✅ Dynamic secrets with auto-expiry
✅ Fine-grained access control

---

## 🛠 How I Integrated Vault with Kubernetes
1️⃣ **Deployed Vault in my cluster** using the official Helm chart
2️⃣ **Enabled Kubernetes authentication** for seamless access
3️⃣ **Configured external secrets** to pull data securely into my workloads

---

## 🔥 Key Takeaways
- **Stop hardcoding secrets!** Use Vault or another secure method
- **Rotate credentials automatically** to improve security
- **Audit access logs** to track who accessed what and when

---

## 🏁 What's Next?
I'm documenting my entire Kubernetes setup as code. Stay tuned for the GitHub repo!

👉 Read more on my blog: maksym.shemet.blog.smv.pp.ua/vault-secrets
👉 Follow my updates: linkedin.com/in/rt-s-91196714a
👉 Check the repo: github.com/maksimshemet
        `
    },
    {
        id: 6,
        title: "📦 MinIO – My Self-Hosted S3 Alternative",
        date: "2025-02-08",
        readTime: "7 min",
        categories: ["DevOps", "Kubernetes", "Storage"],
        excerpt: "AWS S3 is great, but sometimes you need a self-hosted alternative. Here's why I chose MinIO for my Kubernetes storage needs! 🚀",
        content: `
# 📦 MinIO – My Self-Hosted S3 Alternative

## 🚀 Why Not Just Use S3?
AWS S3 is awesome, but:

🔹 Storage costs add up over time

🔹 Self-hosting gives full control

🔹 MinIO provides an **S3-compatible API** for Kubernetes

---

## 🏗 My MinIO Setup

🔹 **Deployed MinIO on Kubernetes** using Helm

🔹 **Configured persistent volumes** for data durability

🔹 **Exposed via an Ingress** to allow external access

---

## 🛠 Pros & Cons

✅ **Fast & lightweight** – Perfect for self-hosted setups

✅ **S3 API-compatible** – Works with existing AWS tools

❌ **Needs manual scaling** – Unlike AWS S3, you manage infrastructure

---

## 🔥 What's Next?
I'm making my entire Kubernetes workloads public as **Infrastructure as Code**!

👉 Read more on my blog: maksym.shemet.blog.smv.pp.ua/minio-setup

👉 Follow my updates: linkedin.com/in/rt-s-91196714a

👉 Check the repo: github.com/maksimshemet
        `
    },
    {
        id: 7,
        title: "🚀 Integrating MinIO with Vault Static Secrets in Kubernetes",
        date: "2025-02-09",
        readTime: "9 min",
        categories: ["DevOps", "Kubernetes", "Vault", "MinIO"],
        excerpt: "Learn how I deployed MinIO in Kubernetes manually and securely integrated it with Vault to manage static secrets. 🛡️",
        content: `
# 🚀 Integrating MinIO with Vault Static Secrets in Kubernetes  

## 🔧 Why Integrate MinIO with Vault?  
MinIO provides S3-compatible object storage, but managing its credentials securely is key. By integrating Vault, we ensure that **access keys and secrets are stored, rotated, and accessed securely.**  

---

## 🏗 Deployment Overview  
Here's a high-level overview of the steps I followed:  
1️⃣ **Deploy MinIO manually on Kubernetes** using a custom \`minio.yaml\` file.  
2️⃣ **Deploy Vault** in the same cluster to act as the secret manager.  
3️⃣ **Configure Vault static secrets** to store MinIO access and secret keys securely.  
4️⃣ **Grant Kubernetes apps access to Vault** to pull MinIO credentials securely.

---

## 📦 MinIO Deployment with Custom YAML  
Instead of using Helm, I deployed MinIO manually using the following \`minio.yaml\` configuration. This setup includes a **Deployment**, **Services**, and **Ingress** to expose both the API and console endpoints.

🔗 **Full setup instructions in the README:** [MinIO Deployment](https://github.com/maksimshemet/k8s/blob/main/env/prod/minio/README.md)  

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: minio-app
  namespace: minio
spec:
  replicas: 1
  selector:
    matchLabels:
      app: minio-app
  template:
    metadata:
      labels:
        app: minio-app
    spec:
      containers:
      - name: minio
        image: quay.io/minio/minio:latest
        command:
        - /bin/bash
        - -c
        args: 
        - minio server /home/shared --console-address :9001 --address :9000
        env:
        - name: MINIO_ROOT_USER
          valueFrom:
            secretKeyRef:
              name: minio-user-secret
              key: root_user
        - name: MINIO_ROOT_PASSWORD
          valueFrom:
            secretKeyRef:
              name: minio-user-secret
              key: root_pw
        ports:
        - name: console 
          containerPort: 9001
        - name: api
          containerPort: 9000
\`\`\`

---

## 🔐 Vault Deployment and Static Secrets Configuration  
Vault handles the storage of MinIO credentials using **static secrets**. These secrets are accessible to Kubernetes workloads using **Vault's Kubernetes authentication method.**  
🔗 **Full setup instructions in the README:** [Vault Deployment](https://github.com/maksimshemet/k8s/blob/main/env/prod/vault/README.md)  

Key commands used for static secrets configuration:
\`\`\`bash
# Enable KV secrets engine
vault secrets enable -path=secret kv

# Store MinIO access keys
vault kv put secret/minio access_key=minio_access_key secret_key=minio_secret_key
\`\`\`

---

## 🔄 Accessing MinIO Secrets in Kubernetes  
To allow Kubernetes workloads to retrieve secrets, I configured a **Vault Kubernetes auth role** and injected the credentials using an **InitContainer** pattern. This ensures that **secrets are fetched securely during pod startup.**

Example manifest snippet:
\`\`\`yaml
env:
  - name: MINIO_ACCESS_KEY
    valueFrom:
      secretKeyRef:
        name: minio-secret
        key: access_key
  - name: MINIO_SECRET_KEY
    valueFrom:
      secretKeyRef:
        name: minio-secret
        key: secret_key
\`\`\`

---

## 🔥 Lessons Learned  
- **Secure secrets management** is essential, even for self-hosted solutions.  
- Integrating Vault with MinIO improves the **security posture** of the entire setup.  
- Always test secret access flows in **non-production environments** before deployment.

---

## 🚀 What's Next?  
I'm continuing to document all of my Kubernetes workloads as **Infrastructure as Code** and will be making them publicly available in my GitHub repo. Stay tuned for more updates!

👉 **MinIO README:** https://github.com/maksimshemet/k8s/blob/main/env/prod/minio/README.md  
👉 **Vault README:** https://github.com/maksimshemet/k8s/blob/main/env/prod/vault/README.md  
👉 Follow my journey on LinkedIn: https://linkedin.com/in/rt-s-91196714a  
👉 Explore my GitHub: https://github.com/maksimshemet  
        `
    }
    
];