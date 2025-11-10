
const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  });
});

document.querySelectorAll('.hidden').forEach(el => myObserver.observe(el));


function mascaraCPF(valor) {
  valor = valor.replace(/\D/g, '');
  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return valor;
}
function mascaraTelefone(valor) {
  valor = valor.replace(/\D/g, '');
  valor = valor.replace(/(\d{2})(\d)/, '($1) $2');
  valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
  return valor;
}
function mascaraCEP(valor) {
  valor = valor.replace(/\D/g, '');
  valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
  return valor;
}


const cpf = document.getElementById('cpf');
const telefone = document.getElementById('telefone');
const cep = document.getElementById('cep');

if (cpf && telefone && cep) {
  cpf.addEventListener('input', e => e.target.value = mascaraCPF(e.target.value));
  telefone.addEventListener('input', e => e.target.value = mascaraTelefone(e.target.value));
  cep.addEventListener('input', e => e.target.value = mascaraCEP(e.target.value));
}


const form = document.getElementById('cadForm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valido = true;


    form.querySelectorAll('.error').forEach(el => el.style.display = 'none');

    
    form.querySelectorAll('input, select').forEach(input => {
      const erro = document.getElementById(`err-${input.id}`);
      if ((!input.checkValidity() || input.value.trim() === '') && erro) {
        erro.style.display = 'block';
        valido = false;
      }
    });

    if (!valido) {
      alert('Por favor, preencha corretamente os campos destacados.');
      return;
    }

    alert('Cadastro enviado com sucesso!');
    form.reset();
    form.scrollIntoView({ behavior: 'smooth' });
  });
}
