pipeline {
    agent any

    stages {
        stage('Build only') {
            steps {
                echo "Running build"
                sh 'chmod +x ./build-docker.sh'
                sh "./build-docker.sh"
            }
        }
        stage('Build & Deploy Locally') {
            when {
                branch 'main'
            }
            steps {
                echo "Deploying locally"
                sh 'chmod +x ./docker-compose.run.sh'
                sh "./docker-compose.run.sh"
            }
        }
    }
}