import axios from "axios";

export async function getTranslation(providedText, targetLanguage) {
  let translatedText = await axios({
    method: "post",
    url: "https://api-translate.systran.net/translation/text/translate",
    responseType: "json",
    headers: {
      Authorization: "Key c9fe10f4-1dba-4d97-adb9-5b15b7d660c2",
    },
    data: {
      input: providedText,
      target: targetLanguage,
    },
  });

  return translatedText.data.outputs[0].output;
}
