import React, { useState } from "react";

import BlenderIcon from "../../assets/images/blender-icon.svg";

import Input from "../Input";
import AddButton from "../AddButton";

export interface Step {
  key: number;
  value: string;
}

type Props = {
  onChange: (steps: Step[]) => void;
};

const PreparationSteps = ({ onChange }: Props) => {
  const [steps, setSteps] = useState<Step[]>([]);

  function handleAddPrepStep(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setSteps([...steps, { key: steps.length, value: "" }]);
  }

  function handleStepChange(
    e: React.ChangeEvent<HTMLInputElement>,
    step: Step
  ) {
    const stepValue = e.target.value;

    const newSteps = steps.map((s) => {
      if (s.key === step.key) {
        return {
          key: s.key,
          value: stepValue,
        };
      }

      return s;
    });

    setSteps(newSteps);
    onChange(newSteps);
  }

  return (
    <div className="preparation-step-container">
      {steps.length > 0 && <p>Preparation Step</p>}

      {steps.map((step) => (
        <Input
          name="preparation-step"
          onChange={(e) => handleStepChange(e, step)}
          value={step.value}
          key={step.key}
        />
      ))}

      <AddButton
        source={BlenderIcon}
        title="ADD PREPARATION STEP"
        onClick={handleAddPrepStep}
      >
        ADD PREPARATION STEP
      </AddButton>
    </div>
  );
};

export default PreparationSteps;
