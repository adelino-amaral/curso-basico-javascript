// o evento "onload" acrrega a função init() depois de carregada a página HTML.
window.onload = init;
 
// Regular Expression - https://www.w3schools.com/js/js_regexp.asp

function init() {
   // o evento "onsubmit" é ligado à função "validateForm"
   document.getElementById("theForm").onsubmit = validateForm;
   // o evento "onclick" é ligado à função "clearDisplay" através do botão "reset"
   document.getElementById("reset").onclick = clearDisplay;
   // coloca o focus no primeiro campo do formulário
   document.getElementById("name").focus();
}
 
/* Valida os campos do formulário.
 * Normalmente, as funções de validação dos inputs têm 2 argumentos:
 * inputId ou inputName: o "id" do elemento <input> a ser validado
 * ou o "name" para checkboxes e radio buttons.
 * errorMsg: messagem de erro as ser visualizada no caso de falha.
 * 
 * Se existir erro, o formato do identificador é: inputID+"Error"
 */
function validateForm() {
   return (
           isNotEmpty("name", "Insira o seu nome!")
        && isNumeric("zipcode", "Please enter a 5-digit zip code!")
        && isLengthMinMax("zipcode", "Please enter a 5-digit zip code!", 5, 5)
        && isSelected("country", "Please make a selection!")
        && isChecked("gender", "Please check a gender!")
        && isChecked("color", "Please check a color!")
        && isNumeric("phone", "Insira um telefone válido!")
        && isValidEmail("email", "Insira um email válido!")
        && isLengthMinMax("password", "Insira uma senha válida!", 6, 8)
        && verifyPassword("password", "pwVerified", "As senhas são diferentes!")
   );
}

/**
 * Mostra mensagem
 */
function showMessage(isValid, inputElement, errorMsg, errorElement) {
   if (!isValid) {
      if (errorElement != null) {
         errorElement.innerHTML = errorMsg;
      } else {
         alert(errorMsg);
      }
      // altera a classe "class" inputElement, so that CSS displays differently
      if (inputElement != null) {
         inputElement.className = "error";
         inputElement.focus();
      }
   } else {
      // limpa as tags de visualização
      if (errorElement != null) {
         errorElement.innerHTML = "";
      }
      if (inputElement != null) {
         inputElement.className = "";
      }
   }
}


/**
 * Devolve true se o valor input não está vazio
 * @param {*} inputId - nome do identificador
 * @param {*} errorMsg - mensagem de erro a apresentar
 * Return true se está vazio, false se está vazio
 */
function isNotEmpty(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim();

   // isValid = true se o elemento não estiver vazio
   var isValid = (inputValue.length != 0);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 

 
// Return true if the input value contains only digits (at least one)
function isNumeric(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim();
   
   // The search() method searches a string for a specified value, 
   // and returns the position of the match.
   var isValid = (inputValue.search(/^[0-9]+$/) != -1);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 
// Return true if the input value contains only letters (at least one)
function isAlphabetic(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim();
   var isValid = inputValue.match(/^[a-zA-Z]+$/);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 
// Return true if the input value contains only digits and letters (at least one)
function isAlphanumeric(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim();
   var isValid = inputValue.match(/^[0-9a-zA-Z]+$/);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 
// Return true if the input length is between minLength and maxLength
function isLengthMinMax(inputId, errorMsg, minLength, maxLength) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim();
   var isValid = (inputValue.length >= minLength) && (inputValue.length <= maxLength);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 
// devolve true se o email é válido
function isValidEmail(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value;
   var atPos = inputValue.indexOf("@");
   var dotPos = inputValue.lastIndexOf(".");
   var isValid = (atPos > 0) && (dotPos > atPos + 1) && (inputValue.length > dotPos + 2);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 
// Return true if selection is made (not default of "") in <select> input
function isSelected(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value;
   // You need to set the default value of <select>'s <option> to "".
   var isValid = inputValue != "";
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 
// Return true if the one of the checkboxes or radio buttons is checked
function isChecked(inputName, errorMsg) {
   var inputElements = document.getElementsByName(inputName);
   var errorElement = document.getElementById(inputName + "Error");
   var isChecked = false;
   for (var i = 0; i < inputElements.length; i++) {
      if (inputElements[i].checked) {
         isChecked = true;  // found one element checked
         break;
      }
   }
   showMessage(isChecked, null, errorMsg, errorElement);
   return isChecked;
}
 
// Verify password. The password is kept in element with id "pwId".
// The verified password in id "verifiedPwId".
function verifyPassword(pwId, verifiedPwId, errorMsg) {
   var pwElement = document.getElementById(pwId);
   var verifiedPwElement = document.getElementById(verifiedPwId);
   var errorElement = document.getElementById(verifiedPwId + "Error");
   var isTheSame = (pwElement.value == verifiedPwElement.value);
   showMessage(isTheSame, verifiedPwElement, errorMsg, errorElement);
   return isTheSame;
}
 
// The "onclick" handler for the "reset" button to clear the display
function clearDisplay() {
   var elms = document.getElementsByTagName("*");  // all tags
   for (var i = 0; i < elms.length; i++) {
      if ((elms[i].id).match(/Error$/)) {  // no endsWith() in JS?
         elms[i].innerHTML = "";
      }
      if (elms[i].className == "error") {  // assume only one class
         elms[i].className = "";
      }
   }
   // Set initial focus
   document.getElementById("name").focus();
}