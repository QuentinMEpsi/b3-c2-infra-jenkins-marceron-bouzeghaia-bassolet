pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                echo 'Testing..'
                bat "npm install"
                bat "npm test --watchAll"
                echo 'Finished testing!'
            }
        }
    }
}