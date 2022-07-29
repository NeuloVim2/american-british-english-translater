'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

    const translator = new Translator();

    app.route('/api/translate')
        .post((req, res) => {
            let locale = req.body.locale ?? null;
            let text = req.body.text ?? null;
            let result = null;

            if(locale === null || text === null)
                return res.json({error: 'Required field(s) missing'});

            if (text === "")
                return res.json({error: 'No text to translate'});

            if (!locale || (locale !== 'british-to-american' && locale !== 'american-to-british'))
                return res.json({error: 'Invalid value for locale field'});

            result = translator.translate(text, locale);

            if (result === text) {
                return res.json({
                    text: text,
                    translation: "Everything looks good to me!"
                });
            }

            return res.json({
                text: text,
                translation: result
            });
        });
};
