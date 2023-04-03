pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                echo 'Testing..'
                bat "npm install"
                bat "npm react-scripts test --watchAll=false"
                echo 'Finished testing!'
            }
        }
    }
}