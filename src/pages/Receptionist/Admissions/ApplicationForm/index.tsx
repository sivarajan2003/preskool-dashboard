import { useState } from "react";
import { toast } from "react-toastify";

import Stepper from "./Stepper";
import Step1Personal from "./steps/Step1Personal";
import Step2Academic from "./steps/Step2Academic";
import Step3PreviousSchool from "./steps/Step3PreviousSchool";
import Step4Documents from "./steps/Step4Documents";
import Step5Review from "./steps/Step5Review";

export default function ApplicationForm() {
  const [step, setStep] = useState<number>(1);

  const [formData, setFormData] = useState<any>({
    personal: {},
    academic: {},
    previousSchool: {},
    documents: {},
  });

  const nextStep = () => {
    if (step < 5) {
      toast.success(`Step ${step} completed`);
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-semibold"></h1>
      <p className="text-sm text-gray-500">
        Fill student admission form here.
      </p>

      <Stepper currentStep={step} />

      {step === 1 && (
        <Step1Personal
          data={formData.personal}
          onNext={(data: any) => {
            setFormData({ ...formData, personal: data });
            nextStep();
          }}
        />
      )}

      {step === 2 && (
        <Step2Academic
          data={formData.academic}
          onBack={prevStep}
          onNext={(data: any) => {
            setFormData({ ...formData, academic: data });
            nextStep();
          }}
        />
      )}

      {step === 3 && (
        <Step3PreviousSchool
          data={formData.previousSchool}
          onBack={prevStep}
          onNext={(data: any) => {
            setFormData({ ...formData, previousSchool: data });
            nextStep();
          }}
        />
      )}

      {step === 4 && (
        <Step4Documents
          data={formData.documents}
          onBack={prevStep}
          onNext={(data: any) => {
            setFormData({ ...formData, documents: data });
            nextStep();
          }}
        />
      )}

      {step === 5 && (
        <Step5Review
          data={formData}
          onBack={prevStep}
          onSubmit={() => {
            toast.success("Application submitted successfully");
          }}
        />
      )}
    </div>
  );
}
