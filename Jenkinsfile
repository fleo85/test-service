pipeline {
	agent any
	stages {
		stage('npm install') {
			steps {
				sh 'npm install'
			}
		}
		stage('npm test') {
			steps {
				sh 'npm test'
			}
		}
		stage('docker build') {
			steps {
				sh 'docker build -t test-service .'
			}
		}
		stage('kill previous') {
			steps {
				script {
					script {
						try {
							sh 'docker container stop $(docker container ls -q --filter name=test-service*)'
						} catch (Exception e) {
							echo e.toString()
						}
					}
				}
			}
		}
		stage('start container') {
			steps {
				sh 'docker run -d -p 8181:8080 test-service'
			}
		}
	}
}