pipeline {
  agent any
  stages {
    stage('prepare') {
      steps {
        sh '''curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
npm --version'''
      }
    }
  }
}