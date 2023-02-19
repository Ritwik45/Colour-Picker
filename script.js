// Get the color button, hexcode input, and copy button elements
const colorButton = document.getElementById('color-button');
const hexcodeInput = document.getElementById('hexcode-input');
const copyButton = document.getElementById('copy-button');

// Function to generate a random hexcode
function generateHexCode() {
  const letters = '0123456789ABCDEF';
  let hexcode = '#';
  for (let i = 0; i < 6; i++) {
    hexcode += letters[Math.floor(Math.random() * 16)];
  }

  // Set the background color of the body to the generated hexcode
  document.body.style.backgroundColor = hexcode;

  // Display the generated hexcode in the input field
  hexcodeInput.value = hexcode;
}

// Function to copy the hexcode to the clipboard
function copyHexCode() {
  // Select the text in the hexcode input field
  hexcodeInput.select();
  hexcodeInput.setSelectionRange(0, 99999);

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Update the copy button text to indicate that the hexcode has been copied
  copyButton.innerHTML = 'Copied!';

  // Reset the copy button text after a short delay
  setTimeout(() => {
    copyButton.innerHTML = 'Copy';
  }, 1000);
}

// Add event listeners to the color button and copy button
colorButton.addEventListener('click', generateHexCode);
copyButton.addEventListener('click', copyHexCode);
