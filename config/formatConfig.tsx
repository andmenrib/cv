import { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";
import translations from "../config/translations";

export function textFormat(sentence, join?) {
  const [language, setLanguage] = useContext(LanguageContext);

  if (typeof sentence === "string") {
    if (sentence.split("|:")[0] === "l") return sentence.split("|:")[1];
    return translations(sentence, language);
  } else {
    let result: string[] = [];
    sentence.map((sent) => {
      if (sent.split("|:")[0] === "l") result.push(sent.split("|:")[1]);
      else result.push(translations(sent, language));
    });
    if (join === undefined) return result.join(" ");
    if (join === "normal") {
      let list = result.slice(0, -1).join(", ");
      list += " ";
      list += translations("and", language);
      list += " ";
      list += result.at(-1);
      return list;
    }
  }
}

export function cssFormat(css: string | string[], level: number) {
  if (typeof css === "string") return css;
  if (Array.isArray(css)) return css[level];
}
