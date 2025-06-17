import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="flex flex-col items-center justify-center text-center gap-2 p-4 text-sm text-muted-foreground font-mono">
      <p>{t("builtBy")} <a href="https://github.com/mariopxz" className="underline underline-offset-4 text-foreground">mariopxz</a>. {t("codeAvailable")} <a href="https://github.com/mariopxz/mariopxz-portfolio" className="underline underline-offset-4 text-foreground">GitHub</a>.</p>
    </footer>
  )
}

export default Footer
