
// Exibe uma mensagem temporária (alerta) na tela
function mostrarMensagem(mensagem, tipo = 'success') {
	const alerta = document.createElement('div');
	alerta.className = `alert alert-${tipo} alert-temp`;
	alerta.role = 'alert';
	alerta.innerText = mensagem;
	document.body.appendChild(alerta);
	setTimeout(() => {
		alerta.remove();
	}, 3500);
}

// Exemplo: mostrar data/hora atual em um elemento com id="dataHora"
function atualizarDataHora() {
	const el = document.getElementById('dataHora');
	if (el) {
		const agora = new Date();
		el.textContent = agora.toLocaleString('pt-BR');
	}
}
setInterval(atualizarDataHora, 1000);

// Manipulação do formulário de cadastro
document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('formCadastro');
	if (form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			// Validação simples (HTML5 já faz a maior parte)
			mostrarMensagem('Cadastro realizado com sucesso!', 'success');
			form.reset();
		});
	}
});
