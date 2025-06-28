# 3D Printing Service (Webpack + React + TS)

Этот проект создан вручную на Webpack, React, TypeScript, Material UI v5 и styled-components.

## Структура

- `/src/components` — переиспользуемые компоненты
- `/src/pages` — страницы
- `/src/assets` — изображения и иконки

## Стилизация

- Только styled-components для всех блоков
- Material UI v5 компоненты
- Максимальное соответствие макету (цвета, отступы, размеры, шрифты)
- Адаптивная верстка (375px–1920px)
- Кастомная тема MUI через ThemeProvider (если требуется)

## Запуск

```bash
npm install
npm run start
```

## Заметки

- Все изображения-заглушки находятся в `/src/assets`
- Для добавления новых страниц используйте `/src/pages`
- Для новых компонентов — `/src/components`
