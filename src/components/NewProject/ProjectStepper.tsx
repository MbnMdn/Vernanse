import { Button, Steps } from 'antd';
import React, { useState } from 'react';

import SelectDesignerStep from './SelectDesignerStep';
import SelectStyleStep from './SelectStyleStep';
import UploadIndexStep from './UploadIndexStep';
import UploadKitchenPhotoStep from './UploadKitchenPhotoStep';

const { Step } = Steps;

const ProjectStepper: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: 'Upload Index Photo',
      content: <UploadIndexStep />,
    },
    {
      title: 'Select Style',
      content: <SelectStyleStep />,
    },
    {
      title: 'Upload Kitchen Photo',
      content: <UploadKitchenPhotoStep />,
    },
    {
      title: 'Select Designer',
      content: <SelectDesignerStep />,
    },
  ];

  const handleSubmit = () => {
    console.log('Submit');
  };

  const handleSkip = () => {
    console.log('Skip');
  };

  return (
    <div className="p-4">
      <Steps current={current} onChange={setCurrent} className="text-tertiary">
        {steps.map((step, index) => (
          <Step key={index} title={step.title} />
        ))}
      </Steps>
      <div className="mt-8">{steps[current].content}</div>
      <div className="mt-8 flex justify-between">
        {current > 0 && (
          <Button onClick={() => setCurrent(current - 1)} className="mr-2">
            Previous
          </Button>
        )}
        {current == 0 && (
          <Button onClick={handleSkip} className="mr-2">
            Skip
          </Button>
        )}
        {current < steps.length - 1 ? (
          <Button type="primary" onClick={() => setCurrent(current + 1)}>
            Next
          </Button>
        ) : (
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectStepper;
