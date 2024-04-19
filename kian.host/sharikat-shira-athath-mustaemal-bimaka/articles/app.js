// app.js

// Fetch the articles from db.json
fetch('db.json')
  .then(response => response.json())
  .then(data => {
    const articlesContainer = document.querySelector('.space-y-8');

    // Loop through each article and create the HTML structure
    data.forEach(article => {
      const articleCard = document.createElement('div');
      articleCard.className = 'bg-white rounded-lg shadow-md p-4';

      const image = document.createElement('img');
      image.className = 'w-full h-auto rounded-lg mb-4';
      image.src = article.image;
      image.alt = article.title;

      const title = document.createElement('h2');
      title.className = 'text-lg font-bold mb-2';
      title.textContent = article.title;

      const description = document.createElement('p');
    
      description.className = 'text-gray-700 leading-8';
      description.textContent = article.content;

      articleCard.appendChild(image);
      articleCard.appendChild(title);
      articleCard.appendChild(description);

      articlesContainer.appendChild(articleCard);
    });
  });