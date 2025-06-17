import { useTranslation } from "react-i18next";

export const useProjectsInfo = () => {
  const { t } = useTranslation("projects");
  const projects = t("projects", { returnObjects: true });
  return Array.isArray(projects) ? projects : [];
};
