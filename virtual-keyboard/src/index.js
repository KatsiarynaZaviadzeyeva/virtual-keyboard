import './styles/styles.css';

let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
wrapper.innerHTML = '<h1>RSS Виртуальная клавиатура</h1><textarea></textarea>';

let first = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
let second = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'];
let third = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''];
let fourth = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
let controls = ['Backspace', 'Tab', 'Del', 'CapsLock', 'Enter', 'Shift', 'Ctrl', 'Win', 'Alt', '&uarr;', '&larr;', '&darr;', '&rarr;'];

let firstRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
let secondRu = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'];
let thirdRu = ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'];
let fourthRu = ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'];

function showLine(line, keyboard) {
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

function showFifthLine(keyboard) {
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

function clickListener(event) {
    let s = document.getElementsByTagName('textarea')[0];
    if (event.target.value) {
        s.value += event.target.value;
    }

}

function setKeyboard(first, second, third, fourth, keyboard) {
    showLine(first, keyboard);
    showLine(second, keyboard);
    showLine(third, keyboard);
    showLine(fourth, keyboard);
    showFifthLine(keyboard);

    showControlEnd(controls[0], keyboard.children[0]);
    showControlEnd(controls[2], keyboard.children[1]);
    showControlBegin(controls[1], keyboard.children[1]);

    showControlBegin(controls[3], keyboard.children[2]);
    showControlEnd(controls[4], keyboard.children[2]);

    showControlBegin(controls[5], keyboard.children[3]);
    showControlEnd(controls[9], keyboard.children[3]);
    showControlEnd(controls[5], keyboard.children[3]);

    showControlBegin(controls[8], keyboard.children[4]);
    showControlBegin(controls[7], keyboard.children[4]);
    showControlBegin(controls[6], keyboard.children[4]);
    showControlEnd(controls[8], keyboard.children[4]);
    showControlEnd(controls[10], keyboard.children[4]);
    showControlEnd(controls[11], keyboard.children[4]);
    showControlEnd(controls[12], keyboard.children[4]);
}

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
document.body.appendChild(wrapper);
wrapper.appendChild(keyboard);
setKeyboard(first, second, third, fourth, keyboard);

let keyboardRu = document.createElement('div');
keyboardRu.className = 'keyboard';
document.body.appendChild(wrapper);
wrapper.appendChild(keyboardRu);
setKeyboard(firstRu, secondRu, thirdRu, fourthRu, keyboardRu);

let note = document.createElement('h4');
note.innerHTML = '<h4>Клавиатура создана в операционной системе Windows</h4><h4>Для переключения языка нажмите alt + shift</h4>';
wrapper.appendChild(note);

document.getElementsByClassName('keyboard')[0].addEventListener('click', clickListener, false);
document.getElementsByClassName('keyboard')[1].addEventListener('click', clickListener, false);
document.getElementsByClassName('keyboard')[1].setAttribute('style', 'display: none');

function changeLanguage(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
        pressed.add(event.code);

        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }

        pressed.clear();

        func();
    });

    document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
    });

}

changeLanguage(
    () => {
        if (document.getElementsByClassName('keyboard')[1].getAttribute('style') === 'display: none') {
            document.getElementsByClassName('keyboard')[1].setAttribute('style', 'display: block');
            document.getElementsByClassName('keyboard')[0].setAttribute('style', 'display: none');
        } else {
            document.getElementsByClassName('keyboard')[1].setAttribute('style', 'display: none');
            document.getElementsByClassName('keyboard')[0].setAttribute('style', 'display: block');
        }
    },
    'AltLeft', 'ShiftLeft'
);