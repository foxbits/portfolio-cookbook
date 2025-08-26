pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Running build"
                sh "make build"
            }
        }
        stage('Deploy Locally') {
            when {
                branch 'main'
            }
            steps {
                echo "Deploying locally"
                sh "make run"
            }
        }
    }
}