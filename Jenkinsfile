pipeline {
  agent {
    docker {
      image 'node:latest'
      args '''


'''
    }

  }
  stages {
    stage('Initialize') {
      agent {
        docker {
          image 'node:latest'
        }

      }
      steps {
        echo 'Soy un espacio de Docker'
        sh 'ls '
      }
    }
    stage('finalize') {
      agent any
      steps {
        echo 'adios'
      }
    }
  }
}