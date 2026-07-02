pipeline {
    agent any

    environment {
        AWS_DEFAULT_REGION = 'ca-central-1'
        S3_BUCKET = 'siva-first-2026-bucket '
        CLOUDFRONT_DISTRIBUTION_ID = 'EDPAAHI47E407'
    }

    stages {
        stage ('clone frontend repo') {
            steps {
              git url:'https://github.com/Siva290395/abc-frontend.git',branch:'main',credentialsId:'github-credentials'
            }
        }
        stage ('install & build') {
            steps {
                sh '''
                npm install
                npm run build
                '''
            }
        }
        stage ('deploy to s3') {
            steps {
                withAWS(credentials: 'aws-credssiva',region: 'ca-central-1') {
                    sh '''
                    echo "uploading to s3"
                    aws s3 sync build/ s3://$S3_BUCKET --delete
                    
                    echo "invalidating cloudfront cache"
                    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRiBUTION_ID --paths "/*"
                    '''
                }
            }
        }
    }
}
