// Открытие модального окна
function openModal() {
    document.getElementById("phoneModal").style.display = "block";
}

// Закрытие модального окна
function closeModal() {
    document.getElementById("phoneModal").style.display = "none";
}

// Отправка номера телефона (тут можно настроить сервер или другой способ отправки)
function submitPhone() {
    const phone = document.getElementById("phoneNumber").value;
    alert("Ваш номер телефона: " + phone);
    closeModal();
}
