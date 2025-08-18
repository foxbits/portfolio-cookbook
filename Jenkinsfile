pipeline {
    agent any

    stages {
        stage('Deploy over SSH') {
            steps {
                echo "Running commands on the remote server..."
                sh 'whoami' // This will print the username executing the script
                sh 'docker --version'
                sh 'docker ps'
            }
        }
    }
}