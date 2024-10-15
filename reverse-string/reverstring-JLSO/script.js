document.getElementById('reverseButton').addEventListener('click', function() {
    const inputText = document.getElementById('textInput').value;
    const resultElement = document.getElementById('result');
  
    if (inputText) {
      const reversedText = inputText.split('').reverse().join('');
      resultElement.innerText = reversedText;
      resultElement.classList.add('show'); // Muestra el resultado con la animación
    }
  });
  
  document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('textInput').value = '';
    const resultElement = document.getElementById('result');
    resultElement.innerText = '';
    resultElement.classList.remove('show'); // Reinicia el estilo del resultado
  });