const regexPattern = document.getElementById('pattern');
const stringToTest = document.getElementById('test-string');
const testButton = document.getElementById('test-btn');
const testResult = document.getElementById('result');
const caseInsensitiveFlag = document.getElementById('i');
const globalFlag = document.getElementById('g');

const getFlags = () => {
  let flags = '';
  if (caseInsensitiveFlag.checked) {
    flags += 'i';
  }
  if (globalFlag.checked) {
    flags += 'g';
  }
  return flags;
};

testButton.addEventListener('click', () => {
  const patternInput = regexPattern.value;
  const flags = getFlags();
  const testStr = stringToTest.innerText;

  let resultText = '';

  const regex = new RegExp(patternInput, flags);
  const matches = testStr.match(regex);

  if (matches) {
    resultText += matches.join(', ');
  } else {
    resultText += 'no match';
  }
  stringToTest.innerHTML = testStr.replace(
    regex,
    '<span class="highlight">$&</span>'
  );
  testResult.innerHTML = resultText;
});
