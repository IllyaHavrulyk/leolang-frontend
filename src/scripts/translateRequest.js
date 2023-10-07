import axios from "axios";

export async function getTranslation(providedText, targetLanguage) {
  let translatedText = await axios({
    method: "post",
    url: "http://localhost:8080/translations/translate",
    responseType: "json",
    data: {
      input: [providedText],
      target: targetLanguage,
    },
  });

  return translatedText.data.outputs[0].output;
}