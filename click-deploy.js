
import UnityGridCodeCreatorIntegration from './aios-integration';

// Expose click-to-deploy functionality
export function clickToDeployUnityGridAIOS() {
  const integration = new UnityGridCodeCreatorIntegration();
  integration.generateAndDeployCode();
}
