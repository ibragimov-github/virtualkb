import './normalize.css';
import './style.css';

const keyboard = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Insert', 'Home', 'PageUp', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'End', 'PageDown', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
let keyboard_array = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BACKSPACE',
  'INS', 'HOME', 'PGUP', 'TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL', 'END', 'PGDN', 'CAPSLOCK', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'ENTER', 'SHIFT', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'SHIFT', '↑', 'CTRL', 'WIN', 'ALT', 'SPACE', 'ALT', 'CTRL', '←', '↓', '→'];
const keyboard_en = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BACKSPACE',
  'INS', 'HOME', 'PGUP', 'TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL', 'END', 'PGDN', 'CAPSLOCK', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'ENTER', 'SHIFT', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'SHIFT', '↑', 'CTRL', 'WIN', 'ALT', 'SPACE', 'ALT', 'CTRL', '←', '↓', '→'];
const keyboard_ru = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BACKSPACE',
  'INS', 'HOME', 'PGUP', 'TAB', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'щ', 'х', 'ъ', '\\', 'DEL', 'END', 'PGDN', 'CAPSLOCK', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ENTER', 'SHIFT', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'SHIFT', '↑', 'CTRL', 'WIN', 'ALT', 'SPACE', 'ALT', 'CTRL', '←', '↓', '→'];
const container = document.createElement('div');
const text_block = document.createElement('div');
const input_text = document.createElement('textarea');
input_text.readOnly = true;
input_text.placeholder = 'Смена языка на Alt + leftShift';
const keyboard_wrap = document.createElement('div');
if (!localStorage.getItem('capsLock_condition')) {
  localStorage.setItem('capsLock_condition', JSON.stringify(false));
}
if (!localStorage.getItem('language')) {
  localStorage.setItem('language', JSON.stringify(true));
} else if (JSON.parse(localStorage.getItem('language'))) {
  keyboard_array = keyboard_ru;
} else {
  keyboard_array = keyboard_en;
}
const capsLock_condition = JSON.parse(localStorage.getItem('capsLock_condition'));
keyboard_wrap.classList.add('keyboard');
input_text.classList.add('textarea');
container.classList.add('container');
text_block.classList.add('text-block');
text_block.append(input_text);
for (const i in keyboard) {
  const key = document.createElement('button');
  key.classList.add('key');
  key.id = keyboard[i];
  keyboard_wrap.append(key);
}
function capsLockOff() {
  localStorage.setItem('capsLock_condition', JSON.stringify(false));
  for (let i = 0; i < 69; i++) {
    keyboard_wrap.querySelectorAll('.key')[i].textContent = keyboard_array[i];
  }
}
function capsLockOn() {
  localStorage.setItem('capsLock_condition', JSON.stringify(true));
  for (let i = 0; i < 69; i++) {
    keyboard_wrap.querySelectorAll('.key')[i].textContent = keyboard_array[i].toUpperCase();
  }
}
if (capsLock_condition) {
  capsLockOn();
} else {
  capsLockOff();
}
text_block.append(keyboard_wrap);
container.append(text_block);
document.body.append(container);

const caps = document.querySelector('#CapsLock');
caps.addEventListener('click', () => {
  if (JSON.parse(localStorage.getItem('capsLock_condition'))) {
    capsLockOff();
  } else {
    capsLockOn();
  }
});
document.addEventListener('keydown', (event) => {
  const id = keyboard.indexOf(event.code);
  if (id >= 0 && id <= 12 || id >= 18 && id <= 30 || id >= 35 && id <= 45 || id >= 48 && id <= 57 || id === 59 || id >= 66 && id <= 68) {
    if (JSON.parse(localStorage.getItem('capsLock_condition'))) {
      input_text.value += keyboard_array[id].toUpperCase();
    } else {
      input_text.value += keyboard_array[id];
    }
  }
  if (id === 13) {
    const test = input_text.value.split('');
    input_text.value = (test.slice(0, test.length - 1).join(''));
  }
  if (id === 63) {
    input_text.value += ' ';
  }
  if (id === 17) {
    input_text.value += '   ';
  }
  if (event.altKey && event.code === 'ShiftLeft') {
    if (keyboard_array[18] === keyboard_en[18]) {
      keyboard_array = keyboard_ru;
      localStorage.setItem('language', JSON.stringify(true));
      if (JSON.parse(localStorage.getItem('capsLock_condition'))) {
        capsLockOn();
      } else {
        capsLockOff();
      }
    } else {
      keyboard_array = keyboard_en;
      localStorage.setItem('language', JSON.stringify(false));
      if (JSON.parse(localStorage.getItem('capsLock_condition'))) {
        capsLockOn();
      } else {
        capsLockOff();
      }
    }
  }
  if (event.code === 'CapsLock') {
    if (JSON.parse(localStorage.getItem('capsLock_condition'))) {
      capsLockOff();
    } else {
      capsLockOn();
    }
  }
  keyboard_wrap.querySelector(`#${event.code}`).classList.add('active');
});
document.addEventListener('keyup', (event) => {
  keyboard_wrap.querySelector(`#${event.code}`).classList.remove('active');
});
document.querySelector('.textarea').focus();

document.querySelectorAll('.key').forEach((element) => {
  element.addEventListener('click', (event) => {
    const id = keyboard.indexOf(event.target.id);
    if (id >= 0 && id <= 12 || id >= 18 && id <= 30 || id >= 35 && id <= 45 || id >= 48 && id <= 57 || id === 59 || id >= 66 && id <= 68) {
      if (JSON.parse(localStorage.getItem('capsLock_condition'))) {
        input_text.value += keyboard_array[id].toUpperCase();
      } else {
        input_text.value += keyboard_array[id];
      }
    }
    if (id === 13) {
      const test = input_text.value.split('');
      input_text.value = (test.slice(0, test.length - 1).join(''));
    }
    if (id === 63) {
      input_text.value += ' ';
    }
    if (id === 17) {
      input_text.value += '   ';
    }
  });
});
window.onkeydown = function (e) {
  return !(e.keyCode == 32);
};
