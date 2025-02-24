//   pipeline
// {
//     agent any
//     parameters
//     {
//         choice(name:'action',choices:'create\ndelete',description:'Select create or destroy')
//     }

//     tools{
//         jdk 'jdk17'
//         nodejs 'node23'
//     }
//     environment {
//         SCANNER_HOME=tool 'sonar-scanner'
//     }
//     stages {
//         stage('clean workspace')
//         {
//             steps
//             {
//                 cleanWs()
//             }
//         }

//         stage('Checkout from Git'){
//             steps{
//                 git branch: 'jenkins', url: 'https://github.com/mundesamarth/Cybera-AI-ChatBot.git'
//             }
//         }
//         stage('Install Dependencies') {
//             when {expression {params.action == 'create'}}
//             steps {
//                 sh "cd BackEnd && npm install"
//                 sh "cd FrontEnd && npm install -f "
//             }
//         }
//         stage("Sonarqube Analysis "){
//             when {expression {params.action == 'create'}}
//             steps{
//                 withSonarQubeEnv('sonar-server') {
//                     sh ''' $SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=Chatbot \
//                     -Dsonar.projectKey=Chatbot '''
//                 }
//             }
//         }
//         stage("quality gate"){
//             when {expression {params.action == 'create'}}
//           steps {
//                 script {
//                     waitForQualityGate abortPipeline: false, credentialsId: 'Sonar-token'
//                 }
//             }
//         }
//         // stage('OWASP FS SCAN') {
//         //     steps {
//         //         echo 'OWASP in Process'
//         //         // dependencyCheck additionalArguments: '--scan ./ --disableYarnAudit --disableNodeAudit', odcInstallation: 'DP-Check'
//         //         // dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
//         //     }
//         // }
//            stage("TRIVY"){
//              when {expression {params.action == 'create'}}

//             steps{
//                 sh "trivy image sammunde/cyberai:latest &gt; trivy.json"
//             }
//         }
        
//   stage("Docker Build & Push") {
//     when { expression { params.action == 'create' } }
//     steps {
//         script {
//             withDockerRegistry(credentialsId: 'docker', toolName: 'docker'){   

//             // Use the regular Docker build command without BuildKit
//             sh "docker build -t cyberai ."

//             // Tag the built image
//             sh "docker tag cyberai sammunde/cyberai:latest"
            
//             withDockerRegistry([url: 'https://index.docker.io/v1/', credentialsId: 'docker']) {
//             sh "docker push sammunde/cyberai:latest" }
//         }
//     }
// }
// }
    
//          stage('TRIVY FS SCAN') {
//             when {expression {params.action == 'create'}}
//             steps {
//                 sh "trivy fs . > trivyfs.json"
//                 sh "trivy image sammunde/cyberai:latest > trivy.json"

//             }
//          }
//         stage ("Remove container") {
//             when {expression {params.action == 'delete'}}
//             steps{
//                 sh "docker stop cyberaai | true"
//                 sh "docker rm cyberaai | true"
//              }
//         }
//         stage('Deploy to container'){
//             when {expression {params.action == 'create'}}
//             steps{
//                 sh 'docker run -d --name cyberaai -p 5173:5173 -p 3000:3000 sammunde/cyberaai:latest'
//             }
//         }
//     }
// }


// pipeline {
//     agent any
//     parameters {
//         choice(name: 'action', choices: ['create', 'delete'], description: 'Select create or delete')
//     }

//     tools {
//         jdk 'jdk17'
//         nodejs 'node23'
//     }

//     environment {
//         SCANNER_HOME = tool 'sonar-scanner'
//     }

//     stages {
//         stage('Clean Workspace') {
//             steps {
//                 cleanWs()
//             }
//         }

//         stage('Checkout from Git') {
//             steps {
//                 git branch: 'jenkins', url: 'https://github.com/mundesamarth/Cybera-AI-ChatBot.git'
//             }
//         }

//         stage('Install Dependencies') {
//             when { expression { params.action == 'create' } }
//             steps {
//                 sh "cd BackEnd && npm install"
//                 sh "cd FrontEnd && npm install -f"
//             }
//         }

//         stage("SonarQube Analysis") {
//             when { expression { params.action == 'create' } }
//             steps {
//                 withSonarQubeEnv('sonar-server') {
//                     sh ''' $SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=Chatbot \
//                     -Dsonar.projectKey=Chatbot '''
//                 }
//             }
//         }

//         stage("Quality Gate") {
//             when { expression { params.action == 'create' } }
//             steps {
//                 script {
//                     waitForQualityGate abortPipeline: false, credentialsId: 'Sonar-Token'
//                 }
//             }
//         }

      

//         stage("Docker Build & Push") {
//             when { expression { params.action == 'create' } }
//             steps {
//                 script {
//                     withDockerRegistry(credentialsId: 'docker', toolName: 'docker') {
//                         // Use the regular Docker build command
//                         sh "docker build -t cyberai ."

//                         // Tag the built image
//                         sh "docker tag cyberai sammunde/cyberai:latest"

//                         // Push the image to Docker Hub
//                         sh "docker push sammunde/cyberai:latest"
//                     }
//                 }
//             }
//         }
        
//           stage("TRIVY Image Scan") {
//             when { expression { params.action == 'create' } }
//             steps {
//                 sh "trivy image sammunde/cyberai:latest > trivy.json"
//             }
//         }

//         stage("TRIVY FS Scan") {
//             when { expression { params.action == 'create' } }
//             steps {
//                 sh "trivy fs . > trivyfs.json"
//                 sh "trivy image sammunde/cyberai:latest > trivy.json"
//             }
//         }

//         stage("Remove Container") {
//             when { expression { params.action == 'delete' } }
//             steps {
//                 sh "docker stop cyberaai || true"
//                 sh "docker rm cyberaai || true"
//             }
//         }

//         stage('Deploy to Container') {
//             when { expression { params.action == 'create' } }
//             steps {
//                 sh 'docker run -d --name cyberai -p 5173:5173 -p 3000:3000 sammunde/cyberai:latest'
//             }
//         }
//     }
// }


// pipeline {
//     agent any
//     parameters {
//         choice(name: 'action', choices: ['create', 'delete'], description: 'Select create or delete')
//     }

//     tools {
//         jdk 'jdk17'
//         nodejs 'node23'
//     }

//     environment {
//         SCANNER_HOME = tool 'sonar-scanner'
//     }

//     stages {
//         stage('Clean Workspace') {
//             steps {
//                 cleanWs()
//             }
//         }

//         stage('Checkout from Git') {
//             steps {
//                 git branch: 'jenkins', url: 'https://github.com/mundesamarth/Cybera-AI-ChatBot.git'
//             }
//         }

//         stage('Install Dependencies') {
//             when { expression { params.action == 'create' } }
//             steps {
//                 sh "cd BackEnd && npm install"
//                 sh "cd FrontEnd && npm install -f"
//             }
//         }

//         stage("SonarQube Analysis") {
//             when { expression { params.action == 'create' } }
//             steps {
//                 withSonarQubeEnv('sonar-server') {
//                     sh ''' $SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=Chatbot \
//                     -Dsonar.projectKey=Chatbot '''
//                 }
//             }
//         }

//         stage("Quality Gate") {
//             when { expression { params.action == 'create' } }
//             steps {
//                 script {
//                     waitForQualityGate abortPipeline: false, credentialsId: 'Sonar-Token'
//                 }
//             }
//         }

      

//         stage("Docker Build & Push") {
//             when { expression { params.action == 'create' } }
//             steps {
//                 script {
//                     withDockerRegistry(credentialsId: 'docker', toolName: 'docker') {
//                         // Use the regular Docker build command
//                         sh "docker build -t cyberai ."

//                         // Tag the built image
//                         sh "docker tag cyberai sammunde/cyberai:latest"

//                         // Push the image to Docker Hub
//                         sh "docker push sammunde/cyberai:latest"
//                     }
//                 }
//             }
//         }
        
//           stage("TRIVY Image Scan") {
//             when { expression { params.action == 'create' } }
//             steps {
//                 sh "trivy image sammunde/cyberai:latest > trivy.json"
//             }
//         }

//         stage("TRIVY FS Scan") {
//             when { expression { params.action == 'create' } }
//             steps {
//                 sh "trivy fs . > trivyfs.json"
//                 sh "trivy image sammunde/cyberai:latest > trivy.json"
//             }
//         }

//         stage("Remove Container") {
//             when { expression { params.action == 'delete' } }
//             steps {
//                 sh "docker stop cyberaai || true"
//                 sh "docker rm cyberaai || true"
//             }
//         }

//         stage('Deploy to Container') {
//             when { expression { params.action == 'create' } }
//             steps {
//                 sh 'docker run -d --name cyberai -p 5173:5173 -p 3000:3000 sammunde/cyberai:latest'
//             }
//         }
//     }
// }


pipeline {
    agent any
    parameters {
        choice(name: 'action', choices: ['create', 'delete'], description: 'Select create or delete')
    }

    tools {
        jdk 'jdk17'
        nodejs 'node23'
    }

    environment {
        SCANNER_HOME = tool 'sonar-scanner'
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout from Git') {
            steps {
                git branch: 'jenkins', url: 'https://github.com/mundesamarth/Cybera-AI-ChatBot.git'
            }
        }

        stage('Install Dependencies') {
            when { expression { params.action == 'create' } }
            steps {
                sh "cd BackEnd && npm install"
                sh "cd FrontEnd && npm install -f"
            }
        }

        stage("SonarQube Analysis") {
            when { expression { params.action == 'create' } }
            steps {
                withSonarQubeEnv('sonar-server') {
                    sh ''' $SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=Chatbot \
                    -Dsonar.projectKey=Chatbot '''
                }
            }
        }

        stage("Quality Gate") {
            when { expression { params.action == 'create' } }
            steps {
                script {
                    waitForQualityGate abortPipeline: false, credentialsId: 'Sonar-Token'
                }
            }
        }

      

        stage("Docker Build & Push") {
            when { expression { params.action == 'create' } }
            steps {
                script {
                    withDockerRegistry(credentialsId: 'docker', toolName: 'docker') {
                        // Use the regular Docker build command
                        sh "docker build -t cyberai ."

                        // Tag the built image
                        sh "docker tag cyberai sammunde/cyberai:latest"

                        // Push the image to Docker Hub
                        sh "docker push sammunde/cyberai:latest"
                    }
                }
            }
        }
        
          stage("TRIVY Image Scan") {
            when { expression { params.action == 'create' } }
            steps {
                sh "trivy image sammunde/cyberai:latest > trivy.json"
            }
        }

        stage("TRIVY FS Scan") {
            when { expression { params.action == 'create' } }
            steps {
                sh "trivy fs . > trivyfs.json"
                sh "trivy image sammunde/cyberai:latest > trivy.json"
            }
        }

        stage("Remove Container") {
            when { expression { params.action == 'delete' } }
            steps {
                sh "docker stop cyberaai || true"
                sh "docker rm cyberaai || true"
            }
        }

        stage('Deploy to Container') {
            when { expression { params.action == 'create' } }
            steps {
                sh 'docker run -d --name cyberaai -p 5173:5173 -p 3000:3000 sammunde/cyberai:latest'
            }
        }
    }
}
