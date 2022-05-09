import './styles/styles.css';
/*let arr = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr;', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl',
];*/

let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
wrapper.innerHTML = '<h1>RSS Виртуальная клавиатура</h1><textarea></textarea>';

let first = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
let second = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'];
let third = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''];
let fourth = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
let controls = ['Backspace', 'Tab', 'Del', 'CapsLock', 'Enter', 'Shift', 'Ctrl', 'Win', 'Alt', '&uarr;', '&larr;', '&darr;', '&rarr;'];

function showLine(line) {
    let lineDiv = document.createElement('div');
    lineDiv.className = 'lineDiv';
    for (let i = 0; i < line.length; i++) {
        let b = document.createElement('button');
        b.className = 'buttonChar';
        b.setAttribute('type', 'button');
        b.setAttribute('value', line[i]);
        b.innerHTML = line[i];
        lineDiv.appendChild(b);
    }
    keyboard.appendChild(lineDiv);
}

function showFifthLine() {
    let lineDiv = document.createElement('div');
    lineDiv.className = 'lineDiv';
    let b = document.createElement('button');
    b.className = 'space';
    b.setAttribute('type', 'button');
    b.setAttribute('value', '&nbsp');
    b.innerHTML = '&nbsp';
    lineDiv.appendChild(b);
    keyboard.appendChild(lineDiv);
}

function showControlEnd(control, parentElement) {
    let b = document.createElement('button');
    b.className = 'buttonControl';
    b.setAttribute('type', 'button');
    b.setAttribute('value', control);
    b.innerHTML = control;
    parentElement.appendChild(b);
}

function showControlBegin(control, parentElement) {
    let b = document.createElement('button');
    b.className = 'buttonControl';
    b.setAttribute('type', 'button');
    b.setAttribute('value', control);
    b.innerHTML = control;
    parentElement.prepend(b);
}

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';

showLine(first);
showLine(second);
showLine(third);
showLine(fourth);
showFifthLine();

document.body.appendChild(wrapper);
wrapper.appendChild(keyboard);

showControlEnd(controls[0], document.getElementsByClassName('lineDiv')[0]);

showControlEnd(controls[2], document.getElementsByClassName('lineDiv')[1]);
showControlBegin(controls[1], document.getElementsByClassName('lineDiv')[1]);

showControlBegin(controls[3], document.getElementsByClassName('lineDiv')[2]);
showControlEnd(controls[4], document.getElementsByClassName('lineDiv')[2]);

showControlBegin(controls[5], document.getElementsByClassName('lineDiv')[3]);
showControlEnd(controls[9], document.getElementsByClassName('lineDiv')[3]);
showControlEnd(controls[5], document.getElementsByClassName('lineDiv')[3]);

showControlBegin(controls[8], document.getElementsByClassName('lineDiv')[4]);
showControlBegin(controls[7], document.getElementsByClassName('lineDiv')[4]);
showControlBegin(controls[6], document.getElementsByClassName('lineDiv')[4]);
showControlEnd(controls[8], document.getElementsByClassName('lineDiv')[4]);
showControlEnd(controls[10], document.getElementsByClassName('lineDiv')[4]);
showControlEnd(controls[11], document.getElementsByClassName('lineDiv')[4]);
showControlEnd(controls[12], document.getElementsByClassName('lineDiv')[4]);

let note = document.createElement('h4');
note.innerHTML = '<h4>Клавиатура создана в операционной системе Windows</h4><h4>Для переключения языка нажмите alt + shift</h4>';
wrapper.appendChild(note);