pipeline {
    agent any
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