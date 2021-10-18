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

const PreparationStep = ({ onChange }: Props) => {
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
      {steps.length > 0 && <p>Etapa Preparação</p>}

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
        icon="blender-icon"
        title="ADICIONAR ETAPA PREPARAÇÃO"
        onClick={handleAddPrepStep}
      />
    </div>
  );
};

export default PreparationStep;
