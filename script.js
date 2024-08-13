function checkPalindrome() {
    var text = document.getElementById('text-input').value;
   if(text === ""){
    alert("Please input a value");
   }

   var {lowText, reverseText, output} = processWord(text);

   var resultDiv = document.getElementById('result');
   resultDiv.innerHTML = `<p>converted word: ${lowText}</p>
   <p>reversed word: ${reverseText}</p>
   <p>Result: ${text} ${output}</p>`;
  }

  function processWord(str){
    var output;
    var lowText = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var reverseText = lowText.split('').reverse().join('');
    if(lowText === reverseText){
      output = "is a palindrome";
    }
    else{output = "is not a palindrome"}
    return {lowText, reverseText, output};
  }
 
  document.getElementById('check-btn').addEventListener('click', checkPalindrome);