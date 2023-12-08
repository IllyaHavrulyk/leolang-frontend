export const languages = {
  am: "Amharic",
  ar: "Arabic",
  be: "Bielarus",
  bem: "Bemba",
  bi: "Bislama",
  bjs: "Bajan",
  bn: "Bengali",
  bo: "Tibetan",
  br: "Breton",
  bs: "Bosnian",
  ca: "Catalan",
  cop: "Coptic",
  cs: "Czech",
  cy: "Welsh",
  da: "Danish",
  dz: "Dzongkha",
  de: "German",
  dv: "Maldivian",
  el: "Greek",
  en: "English",
  es: "Spanish",
  et: "Estonian",
  eu: "Basque",
  fa: "Persian",
  fi: "Finnish",
  fn: "Fanagalo",
  fo: "Faroese",
  fr: "French",
  gl: "Galician",
  gu: "Gujarati",
  ha: "Hausa",
  he: "Hebrew",
  hi: "Hindi",
  hr: "Croatian",
  hu: "Hungarian",
  id: "Indonesian",
  is: "Icelandic",
  it: "Italian",
  ja: "Japanese",
  kk: "Kazakh",
  km: "Khmer",
  kn: "Kannada",
  ko: "Korean",
  ku: "Kurdish",
  ky: "Kyrgyz",
  la: "Latin",
  lo: "Lao",
  lv: "Latvian",
  men: "Mende",
  mg: "Malagasy",
  mi: "Maori",
  ms: "Malay",
  mt: "Maltese",
  my: "Burmese",
  ne: "Nepali",
  niu: "Niuean",
  nl: "Dutch",
  no: "Norwegian",
  ny: "Nyanja",
  ur: "Pakistani",
  pau: "Palauan",
  pa: "Panjabi",
  ps: "Pashto",
  pis: "Pijin",
  pl: "Polish",
  pt: "Portuguese",
  rn: "Kirundi",
  ro: "Romanian",
  ru: "Russian",
  sg: "Sango",
  si: "Sinhala",
  sk: "Slovak",
  sm: "Samoan",
  sn: "Shona",
  so: "Somali",
  sq: "Albanian",
  sr: "Serbian",
  sv: "Swedish",
  sw: "Swahili",
  ta: "Tamil",
  te: "Telugu",
  tet: "Tetum",
  tg: "Tajik",
  th: "Thai",
  ti: "Tigrinya",
  tk: "Turkmen",
  tl: "Tagalog",
  tn: "Tswana",
  to: "Tongan",
  tr: "Turkish",
  uk: "Ukrainian",
  uz: "Uzbek",
  vi: "Vietnamese",
  wo: "Wolof",
  xh: "Xhosa",
  yi: "Yiddish",
  zu: "Zulu",
};

export function fillLanguageOptions() {
  return Object.keys(languages).map((language_code) => {
    return (
      <option value={language_code} key={language_code}>
        {languages[language_code]}
      </option>
    );
  });
}
