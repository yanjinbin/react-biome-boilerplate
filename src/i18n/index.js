import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import enHome from "./en/home.json";
import enTranslation from "./en/translation.json";
import jaHome from "./ja/home.json";
import jaTranslation from "./ja/translation.json";
import zhHome from "./zh/home.json";
import zhTranslation from "./zh/translation.json";

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next) // 连接 i18next 和 React
	.init({
		debug: true,
		supportedLngs: ["zh", "ja", "en", "de", "fr"],
		// 浏览器语言作为默认语言
		detection: {
			order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"], // 检测顺序
			caches: ["localStorage"], // 将语言存储在 cookie 中，以便跨会话使用
			lookupQuerystring: "lang",
		},
		fallbackLng: "en", // 回退语言
		keySeparator: ".", // 支持嵌套结构，如 common.welcome
		nsSeparator: ":", // 支持模块化 namespace，例如 common:welcome
		interpolation: {
			escapeValue: false, // ??不需要对内容进行转义
		},
		backend: {
			// URL of the backend (where the translations are stored)
			loadPath: "/src/i18n/{{lng}}/{{ns}}.json",
		},
		/*resources: {
			en: {
				translation: enTranslation,
				home: enHome,
			},
			zh: {
				translation: zhTranslation,
				home: zhHome,
			},
			ja: {
				translation: jaTranslation,
				home: jaHome,
			},
		},*/
		react: {
			useSuspense: false, // 如果不使用 Suspense，请禁用它
		},
	});
export default i18n;
export const { t } = i18n;
