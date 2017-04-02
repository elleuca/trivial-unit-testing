pipeline {
  agent {
    docker {
      image 'node:6'
    }
    
  }
  stages {
    stage('prepare') {
      steps {
        sh 'npm --version'
      }
    }
  }
}