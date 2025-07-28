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

    // Отправка данных на сервер для сохранения в Excel
    fetch('http://localhost:3000/submit-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, phone, product })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);  // Показываем ответ от сервера
        closeModal(); // Закрываем модальное окно
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
}
