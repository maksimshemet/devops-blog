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
    }
];