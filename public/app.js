const noticias = [
    {
      id: 1,
      titulo: "Governo anuncia novas medidas econômicas",
      imagem: "https://picsum.photos/id/1015/800/400",
      descricao: "A economia brasileira recebe um impulso com a aprovação de novas medidas fiscais...",
      conteudo: "O governo anunciou uma série de medidas para impulsionar a economia, com foco na redução de impostos e estímulo à produção interna..."
    },
    {
      id: 2,
      titulo: "Protestos ganham força nas ruas",
      imagem: "https://picsum.photos/id/1025/800/400",
      descricao: "Manifestantes em várias cidades tomam as ruas exigindo reformas urgentes...",
      conteudo: "Milhares de pessoas protestaram hoje em todo o país por melhorias na saúde, educação e transporte público..."
    }
  ];
  
  // Página index.html
  if (document.querySelector("#noticias-container")) {
    const container = document.getElementById("noticias-container");
  
    noticias.forEach(noticia => {
      const card = document.createElement("div");
      card.className = "col-md-6 mb-4";
      card.innerHTML = `
        <div class="card h-100">
          <img src="${noticia.imagem}" class="card-img-top" alt="${noticia.titulo}">
          <div class="card-body">
            <h5 class="card-title">${noticia.titulo}</h5>
            <p class="card-text">${noticia.descricao}</p>
            <a href="detalhes.html?id=${noticia.id}" class="btn btn-primary">Leia mais</a>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  // Página detalhes.html
  if (document.querySelector("#detalhe-container")) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const noticia = noticias.find(n => n.id === id);
    const container = document.getElementById("detalhe-container");
  
    if (noticia) {
      container.innerHTML = `
        <div class="card">
          <img src="${noticia.imagem}" class="card-img-top" alt="${noticia.titulo}">
          <div class="card-body">
            <h2>${noticia.titulo}</h2>
            <p>${noticia.conteudo}</p>
          </div>
        </div>
      `;
    } else {
      container.innerHTML = "<p class='text-danger'>Notícia não encontrada.</p>";
    }
  }
  