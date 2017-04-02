pipeline {
  agent any
  stages {
    stage('prepare') {
      steps {
        sh '''wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
npm --version'''
      }
    }
  }
}