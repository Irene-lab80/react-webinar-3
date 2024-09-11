import React from 'react';
import { createRoot } from 'react-dom/client';
import { createElement, generateCode } from './utils.js';
import App from './app.js';
import Store from './store.js';

const store = new Store({
  list: [
    { code: generateCode(), title: 'Название элемента', highlight_count: 0},
    { code: generateCode(), title: 'Некий объект', highlight_count: 0 },
    { code: generateCode(), title: 'Заголовок', highlight_count: 0 },
    { code: generateCode(), title: 'Очень длинное название элемента из семи слов', highlight_count: 0 },
    { code: generateCode(), title: 'Запись', highlight_count: 0 },
    { code: generateCode(), title: 'Шестая запись', highlight_count: 0 },
    { code: generateCode(), title: 'Седьмая запись', highlight_count: 0 },
  ],
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store} />);
});

// Первый рендер приложения
root.render(<App store={store} />);
