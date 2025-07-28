// Открытие модального окна и передача данных о выбранном продукте
function openModal(productName) {
    document.getElementById("phoneModal").style.display = "block";
    document.getElementById("product").value = productName;
}

// Закрытие модального окна
function closeModal() {
    document.getElementById("phoneModal").style.display = "none";
}

// Отправка данных и сохранение в Excel
function submitOrder() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const product = document.getElementById("product").value;

    // Пример для демонстрации - выводим в консоль
    console.log('Имя:', name);
    console.log('Номер телефона:', phone);
    console.log('Продукт:', product);

    // Отправить данные на сервер для сохранения в Excel (нужен сервер)
    alert("Ваш заказ принят!\nИмя: " + name + "\nТелефон: " + phone + "\nПродукт: " + product);

    closeModal();
}
