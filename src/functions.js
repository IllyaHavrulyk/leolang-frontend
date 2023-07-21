import axios from "axios";

export async function translateText() {
  let translatedText = await axios({
    method: "post",
    url: "https://api-translate.systran.net/translation/text/translate",
    responseType: "json",
    headers: {
      Authorization: "Key 78b207fd-a1ae-4881-9d91-9d06948cdb54",
    },
    data: {
      input: "Bonjour",
      target: "uk",
    },
  });

  return translatedText.data.outputs[0].output;
}
