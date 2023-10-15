import axios from "axios";

export async function getTranslation(providedText, targetLanguage) {
  let translatedText = await axios({
    method: "post",
    url: "https://api-translate.systran.net/translation/text/translate",
    responseType: "json",
    headers: {
      Authorization: "Key 1469c961-6944-4daa-8ff2-fa485806c79e",
    },
    data: {
      input: providedText,
      target: targetLanguage,
    },
  });

  return translatedText.data.outputs[0].output;
}
