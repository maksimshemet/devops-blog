pipeline {
    agent {
        kubernetes {
            yaml '''
                apiVersion: v1
                kind: Pod
                spec:
                    containers:
                    - name: node
                      image: node:current-alpine3.20
                      command:
                      - cat
                      tty: true
                    - name: docker
                      image: docker:dind
                      command:
                      - cat
                      tty: true
                      volumeMounts:
                      - mountPath: /run/containerd/containerd.sock
                        name: docker-sock
                    volumes:
                    - name: docker-sock
                      hostPath:
                        path: /run/containerd/containerd.sock

                '''
        }
    }
    
    stages {
        stage('Build') {
            steps {
                container('docker') {
                    sh 'docker version'
                    // Add your build steps here
                }
            }
        }
        
        stage('Test') {
            steps {
                container('node') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                container('docker') {
                    sh 'docker build -t shemetmaksim/devops-blog:jenkins-build_0.0.1 .'
                    sh 'docker push shemetmaksim/devops-blog:jenkins-build_0.0.1'
                }
            }
        }
    }
}
