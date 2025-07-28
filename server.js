const express = require('express');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const fs = require('fs');

const app = express();

// Настроим middleware для парсинга POST запросов
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Сохранение данных в Excel
function saveToExcel(data) {
    const filePath = './orders.xlsx';
    
    // Если файл уже существует, загружаем его
    let workbook;
    if (fs.existsSync(filePath)) {
        workbook = xlsx.readFile(filePath);
    } else {
        // Если файл не существует, создаем новый
        workbook = xlsx.utils.book_new();
    }
    
    // Получаем первый лист или создаем новый
    let worksheet = workbook.Sheets['Orders'];
    if (!worksheet) {
        worksheet = xlsx.utils.aoa_to_sheet([['Имя', 'Телефон', 'Продукт']]);
        xlsx.utils.book_append_sheet(workbook, worksheet, 'Orders');
    }

    // Добавляем новые данные
    const newRow = [data.name, data.phone, data.product];
    xlsx.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 });

    // Сохраняем файл
    xlsx.writeFile(workbook, filePath);
}

// Путь для обработки формы
app.post('/submit-order', (req, res) => {
    const { name, phone, product } = req.body;

    if (!name || !phone || !product) {
        return res.status(400).send('Все поля обязательны!');
    }

    // Сохраняем заказ в Excel
    saveToExcel({ name, phone, product });

    // Отправляем ответ
    res.send('Ваш заказ успешно принят!');
});

// Запуск сервера на порту 3000
app.listen(3000, () => {
    console.log('Сервер работает на порту 3000');
});
