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
        node {
          label 'lts'
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