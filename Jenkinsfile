// Jenkins pipeline for building, pushing and deploying a Node.js application
pipeline {
    // Configure Kubernetes agent with required containers
    agent {
        kubernetes {
            yaml '''
                apiVersion: v1
                kind: Pod
                spec:
                    containers:
                    # Node.js container for building the application
                    - name: node
                      image: node:current-alpine3.20
                      command:
                      - cat
                      tty: true
                    # Docker container for building and pushing images
                    - name: docker
                      image: docker:dind
                      securityContext:
                        privileged: true
                      command:
                      - cat
                      tty: true
                      volumeMounts:
                      - mountPath: /var/run/docker.sock
                        name: docker-sock
                    # Mount Docker socket from host to enable Docker commands
                    volumes:
                    - name: docker-sock
                      hostPath:
                        path: /var/run/docker.sock

                '''
        }
    }
    
    environment {
        IMAGE_TAG = 'jenkins-build_0.0.3'
    }
    
    stages {
        // Build stage: Install dependencies and build application
        stage('Build') {
            steps {
                // Build Node.js application
                container('node') {
                    sh 'npm install'
                    sh 'npm run build'
                }

                // Build Docker image
                container('docker') {
                    sh "docker build -t shemetmaksim/devops-blog:${IMAGE_TAG} ."
                }
            }
        }
        
        // Push stage: Push Docker image to Docker Hub
        stage('Push') {
            steps {
                container('docker') {
                    // Create Docker config directory and authentication file
                    sh '''
                        mkdir -p ~/.docker
                        echo '{
                            "auths": {
                                "https://index.docker.io/v1/": {
                                    "auth": "TBR"
                                }
                            }
                        }' > ~/.docker/config.json
                    '''

                    // Insert Docker Hub authentication token
                    withCredentials([string(credentialsId: '57064344-e4e5-42d9-b127-719c542a6bab', variable: 'TOKEN')]) {
                        sh '''
                            sed -i "s/TBR/${TOKEN}/g" ~/.docker/config.json
                        '''
                    }
                    
                    // Push image to Docker Hub
                    sh "docker push shemetmaksim/devops-blog:${IMAGE_TAG}"
                }
            }
        }
        
        // Deploy stage: Deploy application (placeholder)
        stage('Deploy') {
            steps {
                container('docker') {
                    sh 'echo "Deployment stage - to be implemented"'
                }
            }
        }
    }
}
