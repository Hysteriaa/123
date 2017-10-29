// Output numbers from keyboard
function getNumber(value){
    var display;
    for (var i = 0; i < 10; i++){
        display = document.getElementById('pin_display');
        if(display.value.length < 12 & i == value){
            display.value += value;
        };
    };
}; 
// Clear last symbol from display   
function setCancel(){
    var display = document.getElementById('pin_display');
    display.value = display.value.substring(0, display.value.length - 1);
};

// Clear all
function setClear(){
    var display = document.getElementById('pin_display');
    display.value = '';
    display.setAttribute('type', 'text');
};
// Enter the output by alert()
function setEnter(){
    var display = document.getElementById('pin_display');
    if(display.value.length >= 1){
        alert("Ви ввели: " + display.value);
    };
};

// Hide and open pin
function hidePin(){
    var display = document.getElementById('pin_display');
    if(display.type == 'text'){
        display.setAttribute('type', 'password');
    } else {
        display.setAttribute('type', 'text');
    };
};

// Mix symbols in pin
function mixPin(){
    var first_value = display = document.getElementById('pin_display');
    var enter_btn = document.getElementById('enter_btn');
    var arr = display.value.split('');
    arr.sort(compareRandom);
    display.value = arr.join('');
};

function compareRandom() {
    return Math.random() - 0.5;
};

  