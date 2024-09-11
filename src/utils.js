const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}


export const generateCode = (function(count = 0){
  return () => ++count
})()

export const getWordEnding = (count, options = ['плейлист', 'плейлиста', 'плейлистов']) => {
  if (count === 1){
    return options[0];
  } 

  if (count < 5) {
    return options[1];
  }

  if (count >= 5) {
    return options[2];
  }
}