pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh "sudo npm install"
                sh "sudo npm run build"
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