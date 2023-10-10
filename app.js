let allUsers = [];
let bouton = document.querySelector('.btnAjouter');
bouton.addEventListener('click', function (e) {
  e.preventDefault();
  let utilisateur = {
    nom: document.getElementById('nom').value,
    prenom: document.getElementById('prenom').value,
    email: document.getElementById('email').value,
    telephone: document.getElementById('tel').value,
  };

  //   _____________
  const list = document.querySelector('#list');
  const tr = document.createElement('tr');
  tr.innerHTML = `
  <td>${utilisateur.nom}</td> <td>${utilisateur.prenom}</td> <td>${utilisateur.email}</td> <td>${utilisateur.telephone}</td>
    <td>
      <a href="#" class="btn btn-warning btn-sm modifier">Modifier</a>
      <a href="#" class="btn btn-danger btn-sm supprimer">Supprimer</a>
    </td>                `;
  list.appendChild(tr);

  // Vider les inputs
  document.getElementById('nom').value = '';
  document.getElementById('prenom').value = '';
  document.getElementById('email').value = '';
  document.getElementById('tel').value = '';
  console.log(utilisateur);
});

// Suppression
document.querySelector('#list').addEventListener('click', (e) => {
  target = e.target;
  if (target.classList.contains('supprimer')) {
    target.parentElement.parentElement.remove();
  }
});

// Modification
document.querySelector('#list').addEventListener('click', (e) => {
  target = e.target;
  if (target.classList.contains('modifier')) {
    document.querySelector('#nom').value =
      target.parentElement.parentElement.children[0].textContent;
    document.querySelector('#prenom').value =
      target.parentElement.parentElement.children[1].textContent;
    document.querySelector('#email').value =
      target.parentElement.parentElement.children[2].textContent;
    document.querySelector('#tel').value =
      target.parentElement.parentElement.children[3].textContent;
    target.parentElement.parentElement.remove();
  }
});
