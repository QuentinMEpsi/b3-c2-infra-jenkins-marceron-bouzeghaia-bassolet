pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                echo 'Testing..'
                bat "npm install"
                bat "npm run build"
                bat "npm test"
                echo 'Finished testing!'
            }
        }
    }
}