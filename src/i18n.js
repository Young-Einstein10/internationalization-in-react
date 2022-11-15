import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN_TRANSLATION from "./locales/en/translation.json";
import FR_TRANSLATION from "./locales/fr/translation.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: EN_TRANSLATION,
      },
      fr: {
        translation: FR_TRANSLATION,
      },
    },
    fallbackLng: "en",
    keySeparator: ".",
  });

export const handleChangeLanguage = async (language = "en") => {
  await i18n.changeLanguage(
    language,
    console.log("Language Changed to: " + language)
  );
};

export default i18n;
