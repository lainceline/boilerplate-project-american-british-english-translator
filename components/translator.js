const americanOnly = require('./american-only.js');
const britishOnly = require('./british-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function translate(text, locale) {
  let translation = text;
  let found = false;

  if (!text || text.trim() === '') {
    return { error: 'No text to translate' };
  }

  if (locale === 'american-to-british') {
    // Translate American to British spelling
    for (const [am, br] of Object.entries(americanToBritishSpelling)) {
      const regex = new RegExp(`\\b${am}\\b`, 'gi');
      if (regex.test(text)) {
        translation = translation.replace(regex, `<span class="highlight">${br}</span>`);
        found = true;
      }
    }
    // Translate American-only terms
    for (const [am, br] of Object.entries(americanOnly)) {
      const regex = new RegExp(`\\b${am}\\b`, 'gi');
      if (regex.test(text)) {
        translation = translation.replace(regex, `<span class="highlight">${br}</span>`);
        found = true;
      }
    }
    // Handle titles
    for (const [am, br] of Object.entries(americanToBritishTitles)) {
      const escapedAm = escapeRegExp(am);
      const regex = new RegExp(`\\b${am}`, 'gi');
      if (regex.test(text)) {
        translation = translation.replace(regex, `<span class="highlight">${capitalize(br)}</span>`);
        found = true;
      }
    }
    // Handle time format
    const timeRegex = /(\d{1,2}):(\d{2})/g;
    if (timeRegex.test(text)) {
      translation = translation.replace(timeRegex, '<span class="highlight">$1.$2</span>');
      found = true;
    }
  } else if (locale === 'british-to-american') {
    // Translate British to American spelling
    for (const [am, br] of Object.entries(americanToBritishSpelling)) {
      const regex = new RegExp(`\\b${br}\\b,?`, 'gi');
      if (regex.test(text)) {
        translation = translation.replace(regex, `<span class="highlight">${am}</span>`);
        found = true;
      }
    }
    // Translate British-only terms
    for (const [br, am] of Object.entries(britishOnly)) {
      const regex = new RegExp(`\\b${br}\\b`, 'gi');
      if (regex.test(text)) {
        translation = translation.replace(regex, `<span class="highlight">${am}</span>`);
        found = true;
      }
    }
    // Handle titles (reverse)
    for (const [am, br] of Object.entries(americanToBritishTitles)) {
      const regex = new RegExp(`\\b${br}\\b`, 'gi');
      if (regex.test(text)) {
        const capitalizedAm = capitalize(am);
        translation = translation.replace(regex, `<span class="highlight">${capitalizedAm}</span>`);
        found = true;
      }
    }
    // Handle time format
    const britRegex = /(\b\d{1,2})\.(\d{2})\b/g;
    if (britRegex.test(text)) {
      translation = translation.replace(britRegex, '<span class="highlight">$1:$2</span>');
      found = true;
    }
  }

  if (!found) {
    return "Everything looks good to me!";
  }

  return translation;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\/g, '\\\\'); // $& means the whole matched string
}

module.exports = translate;
