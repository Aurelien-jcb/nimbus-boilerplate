import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

interface Step {
  label: string;
  description: string;
}

interface StepsProps {
  steps: Step[];
}

export const HowItWorksSection: React.FC = () => {
  const t = useTranslations("Landing.howItWorks");
  const steps: Step[] = t.raw("steps");

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 top-2 hidden md:block md:px-20 lg:px-28 xl:px-44">
            <Image
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
              width={500} // Remplacez par la largeur réelle de l'image
              height={100} // Remplacez par la hauteur réelle de l'image
            />
          </div>

          <div className="relative grid grid-cols-1 gap-x-12 gap-y-12 text-center md:grid-cols-3">
            <Steps steps={steps} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Steps: React.FC<StepsProps> = ({ steps }) => {
  return (
    <>
      {steps.map((step, index) => (
        <div key={index}>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
            <span className="text-xl font-semibold text-gray-700">
              {index + 1}
            </span>
          </div>
          <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
            {step.label}
          </h3>
          <p className="mt-4 text-base text-gray-600">{step.description}</p>
        </div>
      ))}
    </>
  );
};
