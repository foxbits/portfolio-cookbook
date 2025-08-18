pipeline {
    agent any

    stages {
        stage('Deploy over SSH') {
            steps {
                // The 'sshagent' wrapper takes an array of credential IDs
                sshagent(['jenkins-agent-key']) {
                    // Inside this block, the SSH agent is running and has your key loaded.
                    // Any 'sh' step that uses ssh, scp, or git will automatically
                    -  // use this key for authentication.

                    echo "Running commands on the remote server..."

                      sh 'docker --version'
                      sh 'docker ps'
                }
            }
        }
    }
}