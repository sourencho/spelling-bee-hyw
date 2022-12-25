import { createI18n } from "vue-i18n";
import hyw from "./locales/hyw.json";

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "hyw",
  messages: {
    hyw,
  },
});
