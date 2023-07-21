import axios from "axios";

export async function translateText(providedText, targetLanguage) {
  let translatedText = await axios({
    method: "post",
    url: "https://api-translate.systran.net/translation/text/translate",
    responseType: "json",
    headers: {
      Authorization: "Key dd57aee9-26fb-4781-a90e-90d286b2c340",
    },
    data: {
      input: providedText,
      target: "de",
    },
  });

  return translatedText.data.outputs[0].output;
}
