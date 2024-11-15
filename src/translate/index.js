
var request = require('request');

const translatorApi = module.exports;

translatorApi.translate = async function (postData) {
    // Edit the translator URL below
    const TRANSLATOR_API = "https://nodebb-f24-translator.azurewebsites.net"
    const query = `?content=${postData.content}`;
    const url = encodeURI(TRANSLATOR_API + '/' + query);
    const response = await fetch(url);
    const data = await response.json();
    return [data["is_english"], data["translated_content"]]
}