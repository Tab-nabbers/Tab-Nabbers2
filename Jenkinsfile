pipeline {
    agent docker { image 'node:6.3' }
    stages {
        stage('Install Node Modules') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm test'
            }
        }
    }
}