import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { InfrastructureStack } from '../lib/infrastructure-stack';

const app = new App();
const envName = app.node.tryGetContext('env')
new InfrastructureStack(
  app,
  'InfrastructureStack', 
  {
    envName,
    description: `Stack for the ${envName} infrastructure deployed using the CI pipeline. If you need to delete everything involving the ${envName} environment, delete this stack first, then the CI stack.`
  }
);