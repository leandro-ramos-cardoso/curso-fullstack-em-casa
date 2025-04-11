const apiKey = 'ea80f7385ed04c90ab145c4d89fe4ea0';
const url = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const noticiasDiv = document.getElementById('noticias');

    data.articles.forEach(noticia => {
    console.log(data);
      const col = document.createElement('div');
      col.className = 'col-md-4 mb-4';

      col.innerHTML = `
        <div class="card h-100">
          <img src="${noticia.urlToImage}" class="card-img-top" alt="Imagem da notícia">
          <div class="card-body">
            <h5 class="card-title">${noticia.title}</h5>
            <p class="card-text">${noticia.description || ''}</p>
            <a href="${noticia.url}" target="_blank" class="btn btn-primary">Leia mais</a>
          </div>
        </div>
      `;

      noticiasDiv.appendChild(col);
    });
  })
  .catch(error => console.error('Erro ao carregar notícias:', error));
