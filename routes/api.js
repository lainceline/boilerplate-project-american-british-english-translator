'use strict';

const express = require('express');
const router = express.Router();
const translate = require('../components/translator.js');

router.post('/translate', (req, res) => {
  const { text, locale } = req.body;
  if (!text || !locale) {
    return res.json({ error: 'Required field(s) missing' });
  }
  if (text.trim() === '') {
    return res.json({ error: 'No text to translate' });
  }
  if (locale !== 'american-to-british' && locale !== 'british-to-american') {
    return res.json({ error: 'Invalid value for locale field' });
  }
  const translation = translate(text, locale);
  return res.json({ text, translation });
});

module.exports = router;
