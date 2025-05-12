const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  enviarLink();
});

function enviarLink() {
  const link = document.getElementById("link").value;
  const name = document.getElementById("name").value;
  const res = document.getElementById("res");

  res.innerHTML += `
  <div id="sites">
    <h1>${name}</h1>
    <h2>${link}</h2>
  </div>
  `
}