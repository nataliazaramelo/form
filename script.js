var fonte = document.querySelector('[data-contador-fonte]');
var destino = document.querySelector('[data-contador-destino]');

fonte.addEventListener('keyup', function() {
  var digitado = fonte.value.length;
  var restante = 100 - digitado;
  destino.textContent = restante;
});

var formulario = document.querySelector('form'); // quando clicar em submit vem o Alert

formulario.addEventListener('submit', function(evento) {
  alert('Minha mensagem é: ' + fonte.value); //fonte.value quer digizer que vai aparecer o que foi escrito pelo usuário
  evento.preventDefault();
});

// 'keyup' é o ato de digitar, quantidade de toque
//[data-contador-fonte] [] para deixar claro que é aquilo ali q vc quer. è um array da propriedade
