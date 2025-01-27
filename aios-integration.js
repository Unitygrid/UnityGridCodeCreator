
// Integrate deployment automation with Code Creator
import { deployUnityGridAIOS } from '../unitygrid-aios-click-deploy/deploy';

class UnityGridCodeCreatorIntegration {
  constructor() {
    this.codeCreator = new UnityGridCodeCreator();
  }

  generateAndDeployCode() {
    // Generate code using the UnityGrid Code Creator
    const generatedCode = this.codeCreator.generateCode();

    // Deploy the generated code to the AIOS infrastructure
    deployUnityGridAIOS(generatedCode);
  }
}

// Expose the integration class for use in the AIOS
export default UnityGridCodeCreatorIntegration;
