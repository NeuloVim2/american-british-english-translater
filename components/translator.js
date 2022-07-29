const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");
const Constants = require("../constans.js");

const processWordsTranslation = (text, dictionary) => {
  let result = text;
  let words = Object.keys(dictionary);

  for (let item of words) {
    let regEx = new RegExp(`(?<=\\s)${item}[\\s\.]|^${item}\.`);
    if (regEx.test(text)) {
      result = result.replace(
        item,
        `<span class="highlight">${dictionary[item]}</span>`
      );
      // break;
    }
  }

  return result;
};

class Translator {
  translate(text, locale) {
    let result = null;

    if (locale === "british-to-american") {
      result = processWordsTranslation(text, britishOnly);
      result = processWordsTranslation(result, britishToAmericanTitles);
      if (Constants.americanTimeFormat.test(text)) {
        let translatedTime = `<span class="highlight">${text.match(Constants.americanTimeFormat)[0].replace(".", ":")}</span>`;
        result = text.replace(Constants.americanTimeFormat, translatedTime)
      }
    }
    if (locale === "american-to-british") {
      result = processWordsTranslation(text, americanOnly);
      result = processWordsTranslation(result, americanToBritishTitles);
      result = processWordsTranslation(result, americanToBritishSpelling);
      if (Constants.britishTimeFormat.test(text)) {
        let translatedTime = `<span class="highlight">${text.match(Constants.britishTimeFormat)[0].replace(":", ".")}</span>`;
        result = text.replace(Constants.britishTimeFormat, translatedTime)
      }
    }

    return result;
  }
}

module.exports = Translator;
