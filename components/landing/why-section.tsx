import { useTranslations } from "next-intl";

export const WhySection = () => {
  const t = useTranslations("Landing.whyChoose");
  const features = {
    readyToUse: {
      label: t("features.readyToUse.label"),
      description: t("features.readyToUse.description"),
    },
    authIntegrated: {
      label: t("features.authIntegrated.label"),
      description: t("features.authIntegrated.description"),
    },
    modernUI: {
      label: t("features.modernUI.label"),
      description: t("features.modernUI.description"),
    },
    multilingual: {
      label: t("features.multilingual.label"),
      description: t("features.multilingual.description"),
    },
  };
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-left sm:text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </div>

        <div className="mt-8 flex-wrap space-y-8 sm:mt-12 sm:flex sm:items-start sm:justify-center sm:space-x-12 sm:space-y-0 md:space-x-20 lg:mt-20">
          <FeatureList features={features} />
        </div>
      </div>
    </section>
  );
};

interface Feature {
  label: string;
  description: string;
}

interface FeatureListProps {
  features: Record<string, Feature>;
}
const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {Object.entries(features).map(([key, { label, description }]) => (
        <div key={key} className="mb-4 flex items-start">
          <svg
            className="h-7 w-7 flex-shrink-0 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <div className="ml-4 max-w-xs">
            <h3 className="text-xl font-semibold text-black">{label}</h3>
            <p className="mt-1.5 text-base text-gray-600">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
