const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')


class Translator {
    translate(req, res) {
        let {locale, text} = req.body;
        let result = null;

        const britishOnlyWords = Object.keys(britishOnly);
        const americanOnlyWords = Object.keys(americanOnly);
        const americanToBritishSpellingWords = Object.keys(americanToBritishSpelling);
        const americanToBritishTitlesWords = Object.keys(americanToBritishTitles);

        if (text === "")
            return res.json({error: 'No text to translate'})

        if(locale !== 'british-to-american' && locale !== 'american-to-british')
            return res.json({error: 'Invalid value for locale field'})

        if (locale === 'british-to-american') {
            for (let item of britishOnlyWords) {
                if (text.includes(item)) {
                    result = text.replace(item, `<span class="highlight">${britishOnly[`${item}`]}</span>`);
                    break;
                }
            }
            if (/\d{2}\.\d{2}/.test(text))
                result = text.replace(/\d{2}\.\d{2}/, (match) => {
                    return `<span class="highlight">${match.replace('.', ':')}</span>`;
                });

        }

        if (locale === 'american-to-british') {
            for (let item of americanOnlyWords) {
                if (text.includes(item)) {
                    result = text.replace(item, `<span class="highlight">${americanOnly[`${item}`]}</span>`);
                    break;
                }
            }

            if (/\d{2}:\d{2}/.test(text))
                result = text.replace(/\d{2}:\d{2}/, (match) => {
                    return `<span class="highlight">${match.replace(':', '.')}</span>`;
                });
        }

        for (let item of americanToBritishSpellingWords) {
            if (text.includes(item)) {
                result = text.replace(item, `<span class="highlight">${americanToBritishSpelling[`${item}`]}</span>`);
                break;
            }
        }

        for (let item of americanToBritishTitlesWords) {
            if (text.includes(item)) {
                result = text.replace(item, `<span class="highlight">${americanToBritishTitles[`${item}`]}</span>`);
                break;
            }
        }

        if (!result) {
            return res.json({
                text: text,
                translation: "Everything looks good to me!"
            });
        }

        return res.json({
            text: text,
            translation: result
        })
    }

}

module.exports = Translator;