pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                bat "npm install"
                bat "npm run build"
                echo 'Finished building!'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
				
				// Build avec config de test
				
				// Run test
				
				// Si pas de bug, on continue
                echo 'Finished testing!'
            }
        }
    }
}