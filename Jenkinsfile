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

                container('node') {
                    sh 'npm install'
                    sh 'npm run build'
                }

                container('docker') {
                    withCredentials([string(credentialsId: '57064344-e4e5-42d9-b127-719c542a6bab', variable: 'TOKEN')]) {
                        sh '''
                            sed -i "s/TBR/${TOKEN}/g" ~/.docker/config.json
                        '''
                    }
                    sh 'docker build -t shemetmaksim/devops-blog:jenkins-build_0.0.1 .'
                }
            }
        }
        
        stage('Push') {
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
                    sh 'docker push shemetmaksim/devops-blog:jenkins-build_0.0.1'

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
