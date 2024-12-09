// Seleciona todos os botões e as listas
const buttons = document.querySelectorAll('.shows__tabs__button');
const lists = document.querySelectorAll('.shows__list');

// Função para exibir a lista correspondente ao botão clicado
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        const targetTab = button.getAttribute('data-tab-button'); // Obtém o valor de data-tab-button

        // Alterna a classe 'btn__active' nos botões
        buttons.forEach(btn => btn.classList.remove('btn__active'));
        button.classList.add('btn__active');

        // Exibe a lista correspondente e oculta as outras
        lists.forEach(list => {
            if (list.getAttribute('data-tab-id') === targetTab) {
                list.style.display = 'grid'; // Exibe a lista correspondente
            } else {
                list.style.display = 'none'; // Oculta as outras listas
            }
        });
    });
});