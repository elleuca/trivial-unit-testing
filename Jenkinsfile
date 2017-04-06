pipeline {
  agent any
  stages {
    stage('prepare') {
      steps {
        sh '''curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm install 6
npm --version
npm install'''
      }
    }
  }
}
