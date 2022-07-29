const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

suite('Functional Tests', () => {
    test('Translation with text and locale fields: POST request to /api/translate', (done) => {
        chai
            .request(server)
            .post("/api/translate")
            .send({
                text: "Mangoes are my favorite fruit.",
                locale: "american-to-british",
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.strictEqual(
                    res.body.text,
                    "Mangoes are my favorite fruit.",
                    `The text field is not equal to original text`);
                assert.strictEqual(
                    res.body.translation,
                    "Mangoes are my <span class=\"highlight\">favourite</span> fruit.",
                    `The translation field is not valid `);
                done();
            });
    })
    test('Translation with text and invalid locale field: POST request to /api/translate', (done) => {
        chai
            .request(server)
            .post("/api/translate")
            .send({
                text: "Mangoes are my favorite fruit.",
                locale: "invalid-locale",
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.strictEqual(
                    res.body.error,
                    "Invalid value for locale field",
                    `The error message is invalid`);
                done();
            })
    })
    test('Translation with missing text field: POST request to /api/translate', (done) => {
        chai
            .request(server)
            .post("/api/translate")
            .send({
                text: "",
                locale: "american-to-british",
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.strictEqual(
                    res.body.error,
                    "No text to translate",
                    "The error message is invalid");
                done();
            })
    })
    test('Translation with missing locale field: POST request to /api/translate', (done) => {
        chai
            .request(server)
            .post("/api/translate")
            .send({
                text: "Mangoes are my favorite fruit.",
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.strictEqual(
                    res.body.error,
                    "Required field(s) missing",
                    `The error message is invalid`);
                done();
            })
    })
    test('Translation with empty text: POST request to /api/translate', (done) => {
        chai
            .request(server)
            .post("/api/translate")
            .send({
                text: "",
                locale: "american-to-british",
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.strictEqual(
                    res.body.error,
                    "No text to translate",
                    `The error message is invalid`);
                done();
            })
    })
    test('Translation with text that needs no translation: POST request to /api/translate', (done) => {
        chai
            .request(server)
            .post("/api/translate")
            .send({
                text: "Mangoes are my favorite fruit.",
                locale: "british-to-american",
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.strictEqual(
                    res.body.translation,
                    "Everything looks good to me!",
                    `The error message is invalid`);
                done();
            })
    })
});