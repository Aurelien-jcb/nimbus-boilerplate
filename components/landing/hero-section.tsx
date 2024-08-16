import { useTranslations } from "next-intl";

export const HeroSection = () => {
  const t = useTranslations("Landing.header");
  return (
    <section className="pb-10 pt-20 align-middle sm:pb-16 sm:pt-32 lg:pb-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold sm:text-6xl">
            <span className="bg-gradient-to-r from-primary to-black bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-xl">{t("welcome")}</p>
        </div>
      </div>
    </section>
  );
};
