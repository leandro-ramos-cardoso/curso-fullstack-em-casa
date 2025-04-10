const galeria = document.getElementById('galeria')

fetch('https://api.thecatapi.com/v1/images/search?limit=12')
  .then(res => res.json())
  .then(imagens => {
    imagens.forEach(img => {
      const col = document.createElement('div')
      col.className = 'col-sm-6 col-md-4 col-lg-3'

      const card = `
        <div class="card shadow-sm">
          <img src="${img.url}" class="card-img-top" alt="Gatinho fofo" />
          <div class="card-body text-center">
            <p class="card-text">Esse gatinho é muito fofo!</p>
          </div>
        </div>
      `
      col.innerHTML = card
      galeria.appendChild(col)
    })
  })
  .catch(error => {
    galeria.innerHTML = '<p class="text-danger">Erro ao carregar imagens.</p>'
    console.error(error)
  })