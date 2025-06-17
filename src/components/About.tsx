import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="flex flex-col px-4">
      <div className="screen-line-after">
        <h2 className="text-3xl font-medium flex items-center">
          {t("about")}
        </h2>
      </div>
      <div className="flex flex-col py-4 font-mono gap-4 text-foreground text-sm leading-6">
        <p>
          {t("aboutText")}
        </p>
        <p>
          {t("aboutText2")}
        </p>
        <p>{t("connectAndCollaborate")}</p>
      </div>
    </section>
  );
};

export default About;
