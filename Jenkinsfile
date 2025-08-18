pipeline {
    agent any

    stages {
        stage('Build only') {
            when {
                not { branch 'main' }
            }
            steps {
                echo "Running build-only since not on main branch"
                sh 'chmod +x ./build-docker.sh'
                sh "./build-docker.sh"
            }
        }
        stage('Build & Deploy Locally') {
            when {
                branch 'main'
            }
            steps {
                echo "Building and deploying locally since on main branch"
                sh 'chmod +x ./docker-compose.run.sh'
                sh "./docker-compose.run.sh"
            }
        }
    }
}