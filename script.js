let selectModeContainer = document.querySelector('.selectModeContainer');
let openText = document.querySelector('.openText');
let startEncriptionButton = document.querySelector('.startEncriptionButton');
let showEncriptionKeyButton = document.querySelector('.showEncriptionKeyButton');
let encriptedText = document.querySelector('.encriptedText');
let encriptionKey = document.querySelector('.encriptionKey');

let encriptionText = document.querySelector('.encriptionText');
let startDecodingButton = document.querySelector('.startDecodingButton');
let decodingText = document.querySelector('.decodingText');
let key = document.querySelector('.key');
let encriptionMode = document.querySelector('.encriptionMode');
let decodingMode = document.querySelector('.decodingMode');
let encriptionContainer = document.querySelector('.encriptionContainer');
let decodingContainer = document.querySelector('.decodingContainer');

let newEncription = document.createElement('button');
newEncription.classList.add('newEncription');
newEncription.textContent = 'New encription ';
newEncription.addEventListener('click', () => {
   window.location.reload();
});
selectModeContainer.prepend(newEncription);




// let symbols = ['А', 'Б', 'В', 'Г', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ю', 'Я', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '/', '|', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', ':', ' ', ',', '.','а', 'б', 'в', 'г', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', '+', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'ö', 'ä', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

let symbols = ['Щ', 'j', 'В','5', 'h', 'в', 'О', '(','S', '/', 'Ю', 'И', 'Х', 'х', 'У', 'F', '2', 'І', '1', ':', ')', 'ю', 'H', 'Z', 'f', '0', 'A', 'Р', 'б', 'п', '4', 'C', '9', 'E', 'т', 'd', 'W', '^', 'с', 'м', 'Є', 'к', 'а', 'B', 'N', 'P', 'Т', 'c', 'b', 'ж', 'П', 'З', 'Б', 'M', 'щ', ',', 'л', 'g', 'Л', 'O', 'D', 'U', 'I', 'г', 'Е', 'Y', '?', 'ф', '|', '+', '.', 'Ж', '3', 'р', 'Ш', 'й', 'у', 'Ц', '@', 'е', 'Й', 'Ф', '*', 'L', 'Ь', 'G', 'А', '#', 'Г', '6', 'о', 'і', 'К', 'з', '%', 'є', 'ш', 'V', 'e', '8', 'i', 'k', "С", "ч", "R", "Ч", "X", "&", "и", "Н", "М",  "я", "ц", "!", "ä", "Ї", "7", "a", "T", "ö", "д", "ь", "Я", "Q", "$", "ї", "н", " "];


// ----- Рандомне перемішання масиву ------------------

// let patriot = document.querySelector('.patriot');
// console.log(symbols.length);
// let shuffleSymbols = [];
// for (let i = 127; i>-1; i--) {
//     shuffleSymbols.push(symbols.splice(random(0,symbols.length), 1).join(`'`));
// }
// patriot.textContent = shuffleSymbols;
// ========================================================

// ------------------ start Encription Button ---------------------


encriptionMode.addEventListener('click', () => {
    decodingContainer.classList.add('hideMode');
    encriptionContainer.classList.remove('hideMode');
});
decodingMode.addEventListener('click', () => {
    encriptionContainer.classList.add('hideMode');
    decodingContainer.classList.remove('hideMode');
});


startEncriptionButton.addEventListener('click', ()=>{
    
    let arrOpenText = openText.value.toUpperCase().split('');
    console.log(arrOpenText);
    let resultOpenText=[];
    let resultSymbols = [];
    let arrKey = [];
    
    for(let i = 0; i <= arrOpenText.length - 1; i++) {
        for(let j = 0; j <= symbols.length - 1; j++) {
            if(arrOpenText[i] === symbols[j]) {
                // console.log(converter(j));
                resultOpenText.push(converter(j).join(''));
                console.log(resultOpenText);
            } 
        }
    }

    // console.log(resultOpenText);
    for (let k = 0; k <= resultOpenText.length - 1; k++) {
        resultSymbols.push(converter(random(1, 127)).join(''));
    }
    // console.log(resultOpenText, 'відкритий текст'); // масив під яким номером символ
    // console.log(resultSymbols, 'рандомний текст'); // рандомний масив двійкових чисел

    // encriptedText.textContent = jammingСipher(resultOpenText, resultSymbols).join('').split('-'); // масив зашифрованого повідомлення

    // console.log(jammingСipher(resultOpenText, resultSymbols).join('').split('-'), 'зашифрований'); 

    let arrEncriptionText = jammingСipher(resultOpenText, resultSymbols).join('').split('-');

    let arrDeconverter = [];
    for(let i = 0; i <= arrEncriptionText.length - 1; i++) {
        arrDeconverter.push(deConverter(arrEncriptionText[i]))
    }
    // console.log(arrDeconverter);
    console.log('=============================================');

    let converterText = [];

    for(let i = 0; i <= arrDeconverter.length - 1; i++) {
        converterText.push(symbols[arrDeconverter[i]]);
        // console.log(symbols[arrDeconverter[i]]);
    }
    // console.log(converterText.join('')); //зашифрований двійковий код

    encriptedText.textContent = converterText.join('');
   
    // console.log(jammingСipher(resultOpenText, resultSymbols));
    

    for (let i = 0; i <= resultSymbols.length - 1; i++) {
        
        arrKey.push(deConverter(resultSymbols[i]));
    }
    console.log(arrKey.join('-'));
    encriptionKey.textContent = arrKey.join('-'); // ключ для дешифрування
   
    globalStartKey(encriptionKey.textContent);
});
//===============================================================



//-------- Функція рандомних чисел -------------------------------
function random (min, max) {
    result = Math.round(Math.random()*((max-min)+min));
    return result;
}

//=================================================================

// ---------- Функція перетворювач числа у двійкову систему-------

function converter (num) {
    let result = [];
    let arrBiNum = [64,32,16,8,4,2,1];
    for(let i = 0; i <= arrBiNum.length-1; i++) {
        if(num >= arrBiNum[i]) {
            result.push(1);
            num -= arrBiNum[i];
        } else {
            result.push(0);
        }
    }
return result;
}

//===================================================================

// -------- Функція перетворювач з двійкової системи в числову-------
function deConverter (arrNum) {
    let result = 0;
    let arrBiNum = [64,32,16,8,4,2,1];
    for(let i = 0; i <= arrNum.length - 1; i++) {
       if(arrNum[i] == 1) {
        result += arrBiNum[i];
       }
    }
return result;
}

//====================================================================
//------------ Функція повертає масив зашифрованого повідомлення------
function arrEncriptionText (arr) {
    let end = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        if(i % 7 == 0 && i != 0) {
            end.push('-');
        }
        end.push(arr[i]);
    }
    console.log(end.join('').split('-')); // масив зашифрованого повідомлення
    return end;
}
//====================================================================

//---------------- Функція гамування шифру --------------------------

function jammingСipher (arrOpen, arrRandom) {
    let res = [];
    for (let i = 0; i <= arrOpen.join('').split('').length - 1; i++) {
        if (arrOpen.join('').split('')[i] !== arrRandom.join('').split('')[i]) {
            res.push('1');
        } else {
            res.push('0');
        }
    }
    
// return res.join('');
// console.log(res.join(''));
// console.log(arrEncriptionText(res));
    return arrEncriptionText(res);
}

//===================================================================


//----------------------  DECODING  -----------------------------

startDecodingButton.addEventListener('click', ()=> {
    let converterText = [];

    // console.log(encriptionText.value.split(''))

    for(let i = 0; i <= encriptionText.value.split('').length - 1; i++) {
        for(let j = 0; j <= symbols.length - 1; j++){
            // console.log(encriptionText.value.split('')[i]);
            // console.log(symbols[j]);
            if(encriptionText.value.split('')[i] === symbols[j]) {
                converterText.push(j);
                
                continue;
            }
        }
        
    }
    // console.log(converterText); //зашифрований цифровий код

    let beConverterText = [];
    for(let i = 0; i <= converterText.length - 1; i++) {
        beConverterText.push(converter(converterText[i]));
    }

    let biHama;
    // console.log(beConverterText.join(',').split(',').join('')); // двійковий гама шифр
    biHama = beConverterText.join(',').split(',').join('');

    // console.log(key.value.split('-'));

    // ------------ Зчитування значення ключа ------------------
    let stringInNum = [];
    
    // if(!globalEndKey(key.value)) {
    //         // window.location.reload();
        
    //     alert('Підозра на несанкціонований доступ. Кібер-фахівці вже їдуть по тебе!!!'); 
    // } else 
    
    for(let i = 0; i <= key.value.split('-').length - 1; i++) {
        stringInNum.push(Number(key.value.split('-')[i]))
    }
    

    
    console.log(key.value);
    
    // console.log(stringInNum)

    let beConverterNum = [];
    for(let i = 0; i <= stringInNum.length - 1; i++) {
        beConverterNum.push(converter(stringInNum[i]));
    }
    let biKey;
    // console.log(beConverterNum.join(',').split(',').join('')); // двійковий ключ
    biKey = beConverterNum.join(',').split(',').join('');
    // console.log(biHama);
    // console.log(biKey);

    let uncriprionText = '';
    for(let i = 0; i <= biHama.length - 1; i++) {
        if(biHama[i] !== biKey[i]) {
            uncriprionText += '1';
        } else{
            uncriprionText += '0';
        }
    }
    // console.log(arrEncriptionText(uncriprionText).join('').split('-'));
    uncriprionText = arrEncriptionText(uncriprionText).join('').split('-');
    // console.log(uncriprionText);

    let arrDecodeNum = [];
    // console.log(uncriprionText);
    for(let i = 0; i <= uncriprionText.length - 1; i++) {
        // console.log(deConverter(uncriprionText[i]));
        arrDecodeNum.push(deConverter(uncriprionText[i]));
    }
    // console.log(arrDecodeNum); // масив розкодованих позицій символів
    // ------------------------------------------------------------
    // ------------------------------------------------------------
    let arrDecodeSymbols = [];
    for (let i = 0; i <= arrDecodeNum.length - 1; i++) {
        
        console.log(arrDecodeNum[i]);
        // console.log(symbols[arrDecodeNum[i]][j]);
        arrDecodeSymbols.push(symbols[arrDecodeNum[i]]);
    }
    decodingText.textContent = arrDecodeSymbols.join('');
    console.log(arrDecodeSymbols);
    setTimeout(()=>window.location.reload(), 50000)
    // ----------------------------------------------------------------
});


 let check;
    function globalStartKey(startKey) {
        check = startKey;
        return check;
     }
     function globalEndKey(endKey) {
        if(check == endKey) {
            return true;
        }
        
     }
 


