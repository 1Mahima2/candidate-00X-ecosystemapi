const validKeys = JSON.parse(process.env.API_KEYS || "{}");

exports.isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
exports.isValidTimestamp = (ts) => !isNaN(Date.parse(ts));
exports.isValidApiKey = (source, key) => validKeys[source] === key;
exports.isValidApiKeyValue = (key) => Object.values(validKeys).includes(key);
