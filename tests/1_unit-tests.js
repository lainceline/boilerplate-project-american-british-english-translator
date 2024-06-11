const chai = require('chai');
const assert = chai.assert;
const translate = require('../components/translator.js');

suite('Unit Tests', () => {
  test('Translate Mangoes are my favorite fruit. to British English', () => {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate I ate yogurt for breakfast. to British English', () => {
    const text = 'I ate yogurt for breakfast.';
    const locale = 'american-to-british';
    const expected = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate We had a party at my friend\'s condo. to British English', () => {
    const text = 'We had a party at my friend\'s condo.';
    const locale = 'american-to-british';
    const expected = 'We had a party at my friend\'s <span class="highlight">flat</span>.';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate Can you toss this in the trashcan for me? to British English', () => {
    const text = 'Can you toss this in the trashcan for me?';
    const locale = 'american-to-british';
    const expected = 'Can you toss this in the <span class="highlight">bin</span> for me?';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate The parking lot was full. to British English', () => {
    const text = 'The parking lot was full.';
    const locale = 'american-to-british';
    const expected = 'The <span class="highlight">car park</span> was full.';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate Like a high tech Rube Goldberg machine. to British English', () => {
    const text = 'Like a high tech Rube Goldberg machine.';
    const locale = 'american-to-british';
    const expected = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate To play hooky means to skip class or work. to British English', () => {
    const text = 'To play hooky means to skip class or work.';
    const locale = 'american-to-british';
    const expected = 'To <span class="highlight">bunk off</span> means to skip class or work.';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate No Mr. Bond, I expect you to die. to British English', () => {
    const text = 'No Mr. Bond, I expect you to die.';
    const locale = 'american-to-british';
    const expected = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate Dr. Grosh will see you now. to British English', () => {
    const text = 'Dr. Grosh will see you now.';
    const locale = 'american-to-british';
    const expected = '<span class="highlight">Dr</span> Grosh will see you now.';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate Lunch is at 12:15 today. to British English', () => {
    const text = 'Lunch is at 12:15 today.';
    const locale = 'american-to-british';
    const expected = 'Lunch is at <span class="highlight">12.15</span> today.';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate We watched the footie match for a while. to American English', () => {
    const text = 'We watched the footie match for a while.';
    const locale = 'british-to-american';
    const expected = 'We watched the <span class="highlight">soccer</span> match for a while.';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate Paracetamol takes up to an hour to work. to American English', () => {
    const text = 'Paracetamol takes up to an hour to work.';
    const locale = 'british-to-american';
    const expected = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate First, caramelise the onions. to American English', () => {
    const text = 'First, caramelise the onions.';
    const locale = 'british-to-american';
    const expected = 'First, <span class="highlight">caramelize</span> the onions.';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate I spent the bank holiday at the funfair. to American English', () => {
    const text = 'I spent the bank holiday at the funfair.';
    const locale = 'british-to-american';
    const expected = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate I had a bicky then went to the chippy. to American English', () => {
    const text = 'I had a bicky then went to the chippy.';
    const locale = 'british-to-american';
    const expected = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate I\'ve just got bits and bobs in my bum bag. to American English', () => {
    const text = 'I\'ve just got bits and bobs in my bum bag.';
    const locale = 'british-to-american';
    const expected = 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate The car boot sale at Boxted Airfield was called off. to American English', () => {
    const text = 'The car boot sale at Boxted Airfield was called off.';
    const locale = 'british-to-american';
    const expected = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate Have you met Mrs Kalyani? to American English', () => {
    const text = 'Have you met Mrs Kalyani?';
    const locale = 'british-to-american';
    const expected = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate Prof Joyner of King\'s College, London. to American English', () => {
    const text = 'Prof Joyner of King\'s College, London.';
    const locale = 'british-to-american';
    const expected = '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
    assert.equal(translate(text, locale), expected);
  });

  test('Translate Tea time is usually around 4 or 4.30. to American English', () => {
    const text = 'Tea time is usually around 4 or 4.30.';
    const locale = 'british-to-american';
    const expected = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
    assert.equal(translate(text, locale), expected);
  });

  // New tests
  test('Highlight translation in Mangoes are my favorite fruit.', () => {
    const input = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
    assert.equal(translate(input, locale), expected);
  });

  test('Highlight translation in I ate yogurt for breakfast.', () => {
    const input = 'I ate yogurt for breakfast.';
    const locale = 'american-to-british';
    const expected = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
    assert.equal(translate(input, locale), expected);
  });

  test('Highlight translation in We watched the footie match for a while.', () => {
    const input = 'We watched the footie match for a while.';
    const locale = 'british-to-american';
    const expected = 'We watched the <span class="highlight">soccer</span> match for a while.';
    assert.equal(translate(input, locale), expected);
  });

  test('Highlight translation in Paracetamol takes up to an hour to work.', () => {
    const input = 'Paracetamol takes up to an hour to work.';
    const locale = 'british-to-american';
    const expected = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
    assert.equal(translate(input, locale), expected);
  });
});
