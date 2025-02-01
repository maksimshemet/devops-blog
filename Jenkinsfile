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
                      securityContext:
                        privileged: true
                      command:
                      - cat
                      tty: true
                      volumeMounts:
                      - mountPath: /var/run/docker.sock
                        name: docker-sock
                    volumes:
                    - name: docker-sock
                      hostPath:
                        path: /var/run/docker.sock

                '''
        }
    }
    
    stages {
        stage('Build') {
            steps {
                container('docker') {
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

                    withCredentials([string(credentialsId: 'docker-token', variable: 'TOKEN')]) {
                        sh '''
                            sed -i "s/TBR/${TOKEN}/g" ~/.docker/config.json
                        '''
                    }
                    sh 'docker build -t shemetmaksim/devops-blog:jenkins-build_0.0.1 .'
                    sh 'docker push shemetmaksim/devops-blog:jenkins-build_0.0.1'
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
                    
                }
            }
        }
    }
}
