import { useTranslation } from "react-i18next";

export const useEducationInfo = () => {
  const { t } = useTranslation("education");
  const education = t("education", { returnObjects: true });
  return Array.isArray(education) ? education : [];
};