pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Testing..'
                bat "npm install"
                bat "npm run build"
                echo 'Finished building!'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                bat "npm install"
                bat "npm exec -- jest --showConfig"
                bat "npm test"
                echo 'Finished testing!'
            }
        }
    }
}