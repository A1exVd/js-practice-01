// ЗАДАНИЕ 1: Переключение темы

const themeButton = document.getElementById('theme-toggle');

// Проверить наличие сохраненной темы в localStorage
const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'dark') {
   document.body.classList.add('dark-theme');
   themeButton.innerText = '🌙 Включить светлую тему';
}

themeButton.addEventListener('click', function() {
   document.body.classList.toggle('dark-theme');
    
   const isDarkMode = document.body.classList.contains('dark-theme');
   console.log(typeof isDarkMode);

   if(isDarkMode) {
      localStorage.setItem('theme', 'dark');
      themeButton.innerText = '🌙 Включить светлую тему';
   } else {
      localStorage.removeItem('theme');
      themeButton.innerText = '☀️ Включить темную тему'
   }
});


// ЗАДАНИЕ 2: Вывод данных

const appDiv = document.getElementById('app');

appDiv.textContent = 'Текущая дата и время: ' + new Date().toLocaleString('ru-RU');

/* 
   Вопрос для размышления: Почему мы используем textContent, а не innerHTML?
   textContent используется для вставки текста в html элемент, что в данном случае 
   является наиболее целесообразным, в то время как innerHtml позволяет вставлять html элементы 
   внутрь другого html элемента,то есть содержимое innerHtml парсится и отображается 
   как html элементы, что можем повысить риск XSS атак. Кроме того, использование 
   innerHtml практически всегда триггерит рефлоу, что может влиять на производительность
   и замедлить отображение страницы. 

   🌟 УРОВЕНЬ PRO (Extra Challenge):
   1. Добавьте на кнопку иконку (например, 🌙 или ☀️).
   2. Сделайте так, чтобы при включении темной темы иконка менялась на ☀️, 
      а при светлой — на 🌙.
   3. В CSS используйте переменные:
      :root { --bg-color: #ffffff; --text-color: #333; }
      body { background-color: var(--bg-color); color: var(--text-color); }
      body.dark-theme { --bg-color: #2c3e50; --text-color: #ecf0f1; }
*/
