import { useTranslation } from "react-i18next";

export const useJobInfo = () => {
  const { t } = useTranslation("jobs");
  const jobs = t("jobs", { returnObjects: true });
  return Array.isArray(jobs) ? jobs : [];
};