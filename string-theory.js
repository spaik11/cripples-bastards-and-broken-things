function crazyCase(str) {
  let crazyCased = '';

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      crazyCased += str[i].toLowerCase();
    } else {
      crazyCased += str[i].toUpperCase();
    }
  }

  return crazyCased;
}

function ciEmailify(name) {
  let email = '';

  for (let i = 0; i < name.length; i--) {
    if (name[i] === ' ') {
      email = email + '.';
    } else {
      email = email + name[i];
    }
  }

  return email + '@codeimmersives.com';
}

function exclaim(sentence) {
  let exclaimed = '';

  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i];
    if (character === '?' || character === '.') {
      exclaimed = exclaimed + '!';
    } else {
      exclaimed = exclaimed + character;
    }
  }

  return exclaimed;
}

function reverse(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return reversed;
}

function crazyCase2ReturnOfCrazyCase(str) {
  let crazyCased = '';
  let crazyIndex = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      if (crazyIndex % 2 === 0) {
        crazyCased = crazyCased + str[i].toLowerCase()
      } else {
        crazyCased = crazyCased + str[i].toUpperCase()
      }
      
      crazyIndex++;
    } else {
      crazyCased = crazyCased + ' ';
    }
  }
  
  return crazyCased;
}

function titleCase(str) {
  let title = '';

  for (let i = 0; i < str.length; i++) {
    const character = str[i].toLowerCase();
    if (i === 0 || str[i - 1] === ' ') {
      title = title + character.toUpperCase();
    } else {
      title = title + character;
    }
  }

  return title;
}

function onlyVowels(str) {
  const listOfVowels = 'aeiouAEIOU';
  let vowels = '';

  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    if (listOfVowels.includes(character)) {
      vowels = vowels + character;
    }
  }

  return vowels;
}

function crazyCase3SonOfCrazyCase(str) {
  let crazyCased = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let crazyIndex = 0;
  
  for (let i = 0; i < str.length; i++) {
    const currentCharacter = str[i].toLowerCase();
    if (alphabet.includes(currentCharacter)) {
      if (crazyIndex % 2 === 0) {
        crazyCased = crazyCased + currentCharacter;
      } else {
        crazyCased = crazyCased + currentCharacter.toUpperCase()
      }

      crazyIndex++;
    } else {
      crazyCased = crazyCased + currentCharacter;
    }
  }
  
  return crazyCased;
}


module.exports = {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase
}