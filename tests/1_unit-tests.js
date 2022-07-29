const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

// Test data
const americanToBritishLocale = "american-to-british";
const britishToAmericanLocale = "british-to-american";
const highlightedText = /<span class="highlight">.+<\/span>/;

suite("Unit Tests", () => {
    suite("Translate to British English", () => {
        test('Translate "Mangoes are my favorite fruit."', () => {
            const text = "Mangoes are my favorite fruit.";
            const translation =
                'Mangoes are my <span class="highlight">favourite</span> fruit.';
            assert.strictEqual(
                translator.translate(text, americanToBritishLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
        test('Translate "I ate yogurt for breakfast."', () => {
            const text = "I ate yogurt for breakfast.";
            const translation =
                'I ate <span class="highlight">yoghurt</span> for breakfast.';
            assert.strictEqual(
                translator.translate(text, americanToBritishLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
        test('Translate "We had a party at my friend\'s condo."', () => {
            const text = "We had a party at my friend's condo.";
            const translation =
                'We had a party at my friend\'s <span class="highlight">flat</span>.';
            assert.strictEqual(
                translator.translate(text, americanToBritishLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
        test('Translate "Can you toss this in the trashcan for me?"', () => {
            const text = "Can you toss this in the trashcan for me?";
            const translation =
                'Can you toss this in the <span class="highlight">bin</span> for me?';
            assert.strictEqual(
                translator.translate(text, americanToBritishLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
        test('Translate "The parking lot was full."', () => {
            const text = "The parking lot was full.";
            const translation =
                'The <span class="highlight">car park</span> was full.';
            assert.strictEqual(
                translator.translate(text, americanToBritishLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
        test('Translate "Like a high tech Rube Goldberg machine."', () => {
            const text = "Like a high tech Rube Goldberg machine.";
            const translation =
                'Like a high tech <span class="highlight">Heath Robinson device</span>.';
            assert.strictEqual(
                translator.translate(text, americanToBritishLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
        test('Translate "To play hooky means to skip class or work."', () => {
            const text = "To play hooky means to skip class or work.";
            const translation =
                'To <span class="highlight">bunk off</span> means to skip class or work.';
            assert.strictEqual(
                translator.translate(text, americanToBritishLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
        test('Translate "No Mr. Bond, I expect you to die."', () => {
            const text = "No Mr. Bond, I expect you to die.";
            const translation =
                'No <span class="highlight">Mr</span> Bond, I expect you to die.';
            assert.strictEqual(
                translator.translate(text, americanToBritishLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
        test('Translate "Dr. Grosh will see you now."', () => {
            const text = "Dr. Grosh will see you now.";
            const translation =
                '<span class="highlight">Dr</span> Grosh will see you now.';
            assert.strictEqual(
                translator.translate(text, americanToBritishLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
        test('Translate "Lunch is at 12:15 today."', () => {
            const text = "Lunch is at 12:15 today.";
            const translation =
                'Lunch is at <span class="highlight">12.15</span> today.';
            assert.strictEqual(
                translator.translate(text, americanToBritishLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
    });
    suite("Translate to American English", () => {
        test('Translate "We watched the footie match for a while."', () => {
            const text = "We watched the footie match for a while.";
            const translation =
                'We watched the <span class="highlight">soccer</span> match for a while.';
            assert.strictEqual(
                translator.translate(text, britishToAmericanLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
        test('Translate "Paracetamol takes up to an hour to work."', () => {
            const text = "Paracetamol takes up to an hour to work.";
            const translation =
                '<span class="highlight">Tylenol</span> takes up to an hour to work.';
            assert.strictEqual(
                translator.translate(text, britishToAmericanLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
        test('Translate "First, caramelise the onions."', () => {
            const text = "First, caramelise the onions.";
            const translation =
                'First, <span class="highlight">caramelize</span> the onions.';
            assert.strictEqual(
                translator.translate(text, britishToAmericanLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
        test('Translate "I spent the bank holiday at the funfair."', () => {
            const text = "I spent the bank holiday at the funfair.";
            const translation =
                'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
            assert.strictEqual(
                translator.translate(text, britishToAmericanLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
        test('Translate "I had a bicky then went to the chippy."', () => {
            const text = "I had a bicky then went to the chippy.";
            const translation =
                'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
            assert.strictEqual(
                translator.translate(text, britishToAmericanLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
        test('Translate "I\'ve just got bits and bobs in my bum bag."', () => {
            const text = "I\'ve just got bits and bobs in my bum bag.";
            const translation =
                "I\'ve just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.";
            assert.strictEqual(
                translator.translate(text, britishToAmericanLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
        test('Translate "The car boot sale at Boxted Airfield was called off."', () => {
            const text = "The car boot sale at Boxted Airfield was called off.";
            const translation =
                'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
            assert.strictEqual(
                translator.translate(text, britishToAmericanLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
        test('Translate "Have you met Mrs Kalyani?"', () => {
            const text = "Have you met Mrs Kalyani?";
            const translation = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
            assert.strictEqual(
                translator.translate(text, britishToAmericanLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
        test('Translate "Prof Joyner of King\'s College, London."', () => {
            const text = "Prof Joyner of King\'s College, London.";
            const translation = '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
            assert.strictEqual(
                translator.translate(text, britishToAmericanLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
        test('Translate "Tea time is usually around 4 or 4.30."', () => {
            const text = "Tea time is usually around 4 or 4.30.";
            const translation =
                'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
            assert.strictEqual(
                translator.translate(text, britishToAmericanLocale),
                translation,
                `Text '${text}' should be translated into '${translation}'`
            );
        });
    });
    suite("Highlight translation", () => {
        test('Highlight translation in "Mangoes are my favorite fruit."', () => {
            const text = "Mangoes are my favorite fruit.";
            const translated = translator.translate(text, americanToBritishLocale);
            assert.isTrue(
                highlightedText.test(translated),
                `Text '${text}' should contains highlighted words. Actual: ${translated}`
            );
        });
        test('Highlight translation in "I ate yogurt for breakfast."', () => {
            const text = "I ate yogurt for breakfast.";
            const translated = translator.translate(text, americanToBritishLocale);
            assert.isTrue(
                highlightedText.test(translated),
                `Text '${text}' should contains highlighted words. Actual: ${translated}`
            );
        });
        test('Highlight translation in "We watched the footie match for a while."', () => {
            const text = "We watched the footie match for a while.";
            const translated = translator.translate(text, britishToAmericanLocale);
            assert.isTrue(
                highlightedText.test(translated),
                `Text '${text}' should contains highlighted words. Actual: ${translated}`
            );
        });
        test('Highlight translation in "Paracetamol takes up to an hour to work."', () => {
            const text = "Paracetamol takes up to an hour to work.";
            const translated = translator.translate(text, britishToAmericanLocale);
            assert.isTrue(
                highlightedText.test(translated),
                `Text '${text}' should contains highlighted words. Actual: ${translated}`
            );
        });
    });
});
