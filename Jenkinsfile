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
        AWS_ACCOUNT_ID = '851725239756'   // Replace with your AWS Account ID
        AWS_REGION = 'eu-north-1'          // Update with your AWS Region
        ECR_REPO_BACKEND = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/cyberai-backend"
        ECR_REPO_FRONTEND = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/cyberai-frontend"
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout from Git') {
            steps {
                git branch: 'backup', url: 'https://github.com/mundesamarth/Cybera-AI-ChatBot.git'
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

        // ✅ NEW STAGE: AWS ECR LOGIN ✅
        stage("Login to AWS ECR") {
            when { expression { params.action == 'create' } }
            steps {
                    withCredentials([aws(credentialsId: 'aws-credentials')]) {                    
                    sh """
                    aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REPO_BACKEND}
                    aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REPO_FRONTEND}
                    """
                }
            }
        }

        // ✅ UPDATED: Build & Push Backend and Frontend to AWS ECR ✅
        stage("Docker Build & Push Backend") {
            when { expression { params.action == 'create' } }
            steps {
                script {
                    sh "docker build -t cyberai-backend ./BackEnd"
                    sh "docker tag cyberai-backend:latest ${ECR_REPO_BACKEND}:latest"
                    sh "docker push ${ECR_REPO_BACKEND}:latest"
                }
            }
        }

        stage("Docker Build & Push Frontend") {
            when { expression { params.action == 'create' } }
            steps {
                script {
                    sh "docker build -t cyberai-frontend ./FrontEnd"
                    sh "docker tag cyberai-frontend:latest ${ECR_REPO_FRONTEND}:latest"
                    sh "docker push ${ECR_REPO_FRONTEND}:latest"
                }
            }
        }
        
        stage('OWASP FS SCAN') {
        steps {
        dependencyCheck additionalArguments: '--scan ./ --disableYarnAudit --disableNodeAudit', odcInstallation: 'DP-Check'
        dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
         }
        }


        stage("TRIVY Image Scan") {
            when { expression { params.action == 'create' } }
            steps {
                sh "trivy image ${ECR_REPO_BACKEND}:latest > trivy_backend.json"
                sh "trivy image ${ECR_REPO_FRONTEND}:latest > trivy_frontend.json"
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
                sh "docker run -d --name cyberaai-backend -p 3000:3000 ${ECR_REPO_BACKEND}:latest"
                sh "docker run -d --name cyberaai-frontend -p 5173:5173 ${ECR_REPO_FRONTEND}:latest"
            }
        }
    }
}
