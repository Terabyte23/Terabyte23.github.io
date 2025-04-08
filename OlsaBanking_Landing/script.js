// Находим все ссылки внутри навигации
const links = document.querySelectorAll('nav a');

// Получаем текущий URL
const currentUrl = window.location.href;

// Добавляем класс "active" для ссылки, соответствующей текущему URL
links.forEach(link => {
    // Проверяем, совпадает ли href ссылки с текущим URL
    if (currentUrl.includes(link.href)) {
        link.classList.add('active');
    }
});
