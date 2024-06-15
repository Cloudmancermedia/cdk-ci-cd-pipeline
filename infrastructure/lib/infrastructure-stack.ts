import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket } from 'aws-cdk-lib/aws-s3';

interface InfrastructureStackProps extends StackProps {
  envName: string;
}

export class InfrastructureStack extends Stack {
  constructor(scope: Construct, id: string, props?: InfrastructureStackProps) {
    super(scope, id, props);

    const envName = props?.envName

    console.log(`${envName} environment detected. deploying s3 bucket.`)

    const infraBucket = new Bucket(
      this,
      "InfraBucket",
      {
        bucketName: `cloudmancer-${envName}-infrastructure-bucket`,
        removalPolicy: RemovalPolicy.DESTROY
      }
    )
  }
}
