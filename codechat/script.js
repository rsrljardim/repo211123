// IMPORT ---------------------------------------------------------------------

import { contatos } from './data.js';

// CONST ----------------------------------------------------------------------
const inpNome = document.querySelector('#inpNome');
const inpTelefone = document.querySelector('#inpTelefone');
const inpEmail = document.querySelector('#inpEmail');
const inpGrupos = document.querySelector('#inpGrupos');

let modal = document.querySelector('#modal');
let btnAdicionar = document.querySelector ('#btnAdicionar');
let btnFechaModal = document.querySelector('#btnFechaModal');



btnAdicionar.onclick = function(){
  modal.style.display =  "block";
}

btnFechaModal.onclick = function(){
  modal.style.display = "none";
}





// EVENTOS --------------------------------------------------------------------

carregaDados();


// FUNCOES --------------------------------------------------------------------

function carregaDados() {
  const divTabela = document.querySelector('#divTabela');
  let tabela;

  tabela =
    `<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Telefone</th>
      <th>E-mail</th>
      <th>Grupos</th>
      <th>Ações</th>
    </tr>
  </thead>
  <tbody>`;

  contatos.forEach(linha => {
    const { id, ...rest } = linha;
    
    tabela += `<tr data-key="${id}">`;
    for (const key in rest) {
      tabela += `<td>${rest[key]}</td>`;
    }

    tabela +=
      `<td>
    <div class="flex justify-end gap-3">
      <button data-key="${id}" class="bg-amber-50 px-1 rounded-md hover:bg-amber-100 focus:ring focus:ring-amber-100 focus:outline-none" name="editBtn">
        <span class="material-symbols-outlined text-xl text-amber-400">edit</span>
      </button>
      <button data-key="${id}" class="bg-red-50 px-1 rounded-md hover:bg-red-100 focus:ring focus:ring-red-100 focus:outline-none" name="removeBtn">
        <span class="material-symbols-outlined  text-xl text-red-400">delete</span>
      </button>
    </div>
  </td>`;
    tabela += '</tr>';
  });

  tabela += '</tbody></table>';
  divTabela.innerHTML = tabela;

  
}