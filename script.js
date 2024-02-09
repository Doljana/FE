let url = "https://jsonplaceholder.typicode.com/photos";


async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const filteredData = data.filter(item => item.albumId === 35); 
    render(filteredData); 
  } catch (error) {
    console.error('Ошибка получения данных:', error);
  }
}

function render(data) {
  const container = document.getElementById('photos-container'); 
  data.forEach(item => {
    const div = document.createElement('div'); 
    const img = document.createElement('img');
    img.src = item.url;
    img.alt = item.title;
    img.width = 200;
    img.height = 200;

   
    const heading = document.createElement('h2');
    heading.textContent = item.title;

   
    div.appendChild(img);
    div.appendChild(heading);

   
    container.appendChild(div);
  });
}

// Вызов функции для отправки запроса и обработки данных
fetchData(url);
