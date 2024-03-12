// Обработчик отправки формы удаления записей
document.getElementById('deleteForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const deleteId = document.getElementById('deleteId').value;

    try {
        // Отправка сетевого запроса на удаление карточки
        const response = await fetch(`https://example.com/api/cards/${deleteId}`, {
            method: 'DELETE'
        });

        // Проверка успешности запроса
        if (!response.ok) {
            throw new Error('Ошибка удаления карточки');
        }

        // Обновление разметки после удаления
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = ''; // Очищаем содержимое контейнера
        // Вызываем функцию загрузки карточек заново или другие методы обновления
    } catch (error) {
        console.error('Ошибка:', error.message);
    }
});

// Обработчик отправки формы изменения данных в карточках
document.getElementById('updateForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const updateId = document.getElementById('updateId').value;
    const newTitle = document.getElementById('newTitle').value;

    try {
        // Отправка сетевого запроса на изменение данных карточки
        const response = await fetch(`https://example.com/api/cards/${updateId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: newTitle })
        });

        // Проверка успешности запроса
        if (!response.ok) {
            throw new Error('Ошибка изменения данных карточки');
        }

        // Обновление разметки после изменения данных
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = ''; // Очищаем содержимое контейнера
        // Вызываем функцию загрузки карточек заново или другие методы обновления
    } catch (error) {
        console.error('Ошибка:', error.message);
    }
});
