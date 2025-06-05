"use client";

import Feature from "@/components/ui/footer/Feature";
import { useAppSelector } from "@/lib/hooks";

const Features = () => {
  const { languageData } = useAppSelector((state) => state.language);
  const footerTitleFeatures = [
    {
      title: languageData.landing.footer_features.free_post.title,
      subTitle: languageData.landing.footer_features.free_post.subtitle,
      imgUrl: "/images/landing/footer/free.png",
    },
    {
      title: languageData.landing.footer_features.money_return.title,
      subTitle: languageData.landing.footer_features.money_return.subtitle,
      imgUrl: "/images/landing/footer/money.png",
    },
    {
      title: languageData.landing.footer_features.privacy.title,
      subTitle: languageData.landing.footer_features.privacy.subtitle,
      imgUrl: "/images/landing/footer/privacy.png",
    },
    {
      title: languageData.landing.footer_features.quality_insurance.title,
      subTitle: languageData.landing.footer_features.quality_insurance.subtitle,
      imgUrl: "/images/landing/footer/quality.png",
    },
  ];
  return (
    <div className="features-list flex w-full flex-wrap items-center justify-evenly gap-3 py-5">
      {footerTitleFeatures.map((feature, index) => (
        <Feature
          key={index}
          imgUrl={feature.imgUrl}
          title={feature.title}
          subtitle={feature.subTitle}
        />
      ))}
    </div>
  );
};

export default Features;
