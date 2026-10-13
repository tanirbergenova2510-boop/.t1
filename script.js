// --- ЛОГИКА ИНТЕРАКТИВНОГО СЛАЙДЕРА ---

// 1. Массив со ссылками на цветы из первого и второго скриншотов
const flowerImages = [
    "https://wikimedia.org", // Ссылка №1: Оранжевый цветок
    "https://pinterest.com"  // Ссылка №2: Красный цветок
];

let currentIndex = 0;

// 2. Поиск элементов интерфейса в HTML
const sliderImg = document.querySelector('.flower-image');
const prevBtn = document.querySelector('.arrow-left');
const nextBtn = document.querySelector('.arrow-right');
const buyButton = document.querySelector('.button-узнать');

// Принудительно ставим стартовую картинку при первой загрузке скрипта
if (sliderImg && flowerImages.length > 0) {
    sliderImg.src = flowerImages[currentIndex];
}

// 3. Функция обновления активного кадра слайдера
function updateSlider() {
    if (sliderImg && flowerImages.length > 0) {
        sliderImg.src = flowerImages[currentIndex];
    }
}

// 4. Клик по правой стрелке (Вперед)
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= flowerImages.length) {
            currentIndex = 0; // Начать сначала, если дошли до конца
        }
        updateSlider();
    });
}

// 5. Клик по левой стрелке (Назад)
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = flowerImages.length - 1; // Перейти к концу, если ушли меньше нуля
        }
        updateSlider();
    });
}

// --- ЛОГИКА КНОПКИ КУПИТЬ ---
if (buyButton) {
    buyButton.addEventListener('click', () => {
        alert('Заявка на покупку принята! Мы свяжемся с вами по телефону: 8-777-232-21-21');
    });
}
