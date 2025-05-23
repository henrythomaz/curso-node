const btn = document.getElementById('btn');
btn.addEventListener('click', enviarLink);

function enviarLink() {
  const name = document.getElementById("name").value;
  const site = document.getElementById("link").value;

  fetch("http://localhost:3000/customers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
  body: JSON.stringify({ name, site })
  })
  .then(response => response.json())
  .then(data => {
    console.log("Link criado:", data);
    carregarLinks();
  });
}

function carregarLinks() {
  fetch("http://localhost:3000/customers")
    .then(response => response.json())
    .then(links => {
      const res = document.getElementById("res");
      res.innerHTML = "";

      links.forEach(link => {
        const div = document.createElement("div");
        div.className = "site";
        div.id = `site-${link.id}`;
        div.innerHTML = `
          <h2>${link.name}</h2>
          <p>${link.site}</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="lixeira" onclick="deletarLink(${link.id})" viewBox="0 0 448 512">
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32l21.2 339c1.6 25.3 22.6 45 47.9 45h245.8c25.3 0 46.3-19.7 47.9-45L416 128z"/>
          </svg>
        `;
        res.appendChild(div);
      });
    });
}

function deletarLink(id) {
  fetch(`http://localhost:3000/customers/${id}`, {
    method: "DELETE"
  }).then(() => {
    carregarLinks();
  });
}

// Carrega os links ao abrir a página
window.onload = carregarLinks;
