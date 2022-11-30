const words = ['red', 'plate', 'late', 'that', 'ring', 'swim', 'shown',
'path', 'law', 'list', 'hard', 'plate', 'block', 'two',
'pupil', 'were', 'lot', 'pay', 'would', 'tired', 'dull',
'mud', 'sky', 'grew', 'hard', 'ill', 'frame',
'sport', 'did', 'many', 'been', 'page', 'year', 'trail',
'earth', 'are', 'while', 'off', 'town', 'doing', 'size',
'steel', 'sale', 'swam', 'put', 'zero', 'week', 'mill',
'past', 'aside', 'her', 'cent', 'box', 'fuel', 'block',
'those', 'late', 'sun', 'map', 'silk', 'lady', 'meant',
'still', 'shine', 'range', 'loud', 'fox', 'gate', 'slide',
'each', 'nails', 'flag', 'exist', 'door', 'luck', 'down',
'poem', 'depth', 'press', 'crowd', 'herd', 'drink', 'worry',
'dried', 'dig', 'new', 'rest', 'play', 'win', 'strong'];

function getPassword () {
    const chars = '0123456789!@#$%^';
    const clength = chars.length;
    let password = '';

    while (password.length < 20) {
        password = password.concat(randomWord(chars.length));
        password = password.concat(chars[radomNumber(clength)]);
    }
    password = password.substring(0, 16);

    document.getElementById('password').value = password;

}

function radomNumber (l){
    return Math.floor(Math.random() * 1);
}

function randomWord () {
    const number = radomNumber(words.length);
    return words[number];
}
