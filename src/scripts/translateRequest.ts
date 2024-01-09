import axios from "axios"

export interface TranslationReqProps {
  text: string,
  targetLanguage: string,
  sourceLanguage: string
}

export async function getTranslation(
  providedText: string,
  targetLanguage: string,
  sourceLanguage: string,
) {
  console.log(
    `inside of getTranslation function: ${providedText}, ${targetLanguage}`,
  )
  let translatedText = await axios({
    method: "post",
    url: "http://localhost:8080/translations/translate",
    responseType: "json",
    data: {
      input: [providedText],
      target: targetLanguage,
      source: sourceLanguage,
    },
  })

  console.log(translatedText)

  return translatedText.data.outputs[0].output
}
