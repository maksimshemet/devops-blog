pipeline {
    agent {
        kubernetes {
            yaml '''
                apiVersion: v1
                kind: Pod
                spec:
                    containers:
                    - name: docker
                      image: docker:dind
                      securityContext:
                        privileged: true
                      volumeMounts:
                        - name: docker-socket
                          mountPath: /var/run/docker.sock
                    - name: node
                      image: node:current-alpine3.20
                    
                    volumes:
                    - name: docker-socket
                        hostPath:
                            path: /var/run/docker.sock
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
    
    post {
        always {
            cleanWs()
        }
    }
}
