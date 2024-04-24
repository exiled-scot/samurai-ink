 {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main',
                url: 'https://github.com/exiled-scot/samurai-ink'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def imageName = 'samurai-ink'
                    def dockerImage = docker.build(imageName, '-f Dockerfile .')
                }
            }
        }
        stage('Run Docker') {
            steps {
                script {
                    sh 'docker stop samurai-ink || true'   // Stop the container if it is already running
                    sh 'docker rm samurai-ink || true'     // Remove the container if it exists
                    sh 'docker run -d -p 3000:3000 --name samurai-ink samurai-ink'
                }
            }
        }
    }
}
