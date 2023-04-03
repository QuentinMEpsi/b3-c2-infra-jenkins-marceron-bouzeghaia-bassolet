pipeline {
    agent any

    stages {
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