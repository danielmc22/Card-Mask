//referencias de los inputs:
const inputCard = document.querySelector('#inputCard');
const inputDate = document.getElementById('inputDate');
const inputCVV = document.querySelector('#inputCVV');

//MASCARAS:   SE DEFINEN LOS PATRONES Y LUEGO SE SUSTITUYEN
const maskNumber = '####-####-####-####';
const maskDate = '##/##';
const maskCVV = '###';

//Listas para almacenar los #s, transformarlos y mostrarlos en el input
let current = '';
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];

//EventListeners y llamado a fx's por cada input:
inputCard.addEventListener('keydown', (e) => {
  if (e.key == 'Tab') {
    return;
  }
  e.preventDefault();
  handleInput(maskNumber, e.key, cardNumber);
  inputCard.value = cardNumber.join('');
});

inputDate.addEventListener('keydown', (e) => {
  if(e.key == 'Tab'){
    return;
  }
  e.preventDefault();
  handleInput(maskDate, e.key, dateNumber);
  inputDate.value = dateNumber.join('');
});

inputCVV.addEventListener('keydown', (e) => {
  if(e.key == 'Tab'){
    return;
  }
  e.preventDefault();
  handleInput(maskCVV, e.key, cvvNumber);
  inputCVV.value = cvvNumber.join('');
});



function handleInput(mask, key, arr){
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //Arr de teclas permitidas al usuario para usar... en este caso solo los #s
  if(key == "Backspace" && arr.length > 0){
    arr.pop();
    return;
  };
  if(numbers.includes(key) && arr.length + 1 <= mask.length){  //se valida si la tecla presionada está dentro de las permitidas (arr numbers) - devuelve true o false
    if(mask[arr.length] == '-' || mask[arr.length] == '/'){
        arr.push(mask[arr.length], key);
    }else{
      arr.push(key)
    }
  }
}



