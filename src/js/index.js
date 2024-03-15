const inputs = document.querySelectorAll('.input');
const botaoEnviar = document.getElementById('botao');
const obrigatorio = document.querySelectorAll('.obrigatorio');
const formulario = document.querySelector('.formulario');

function preenchidoOuNao(event) {
    event.preventDefault();

    inputs.forEach(input => {
        {
            let textoDigitado = input.value
            if (textoDigitado === "") {
                input.classList.add('nao-preenchido');
                input.classList.remove('preenchido');
            } else {
                input.classList.add('preenchido');
                input.classList.remove('nao-preenchido');
            }

            obrigatorio.forEach(obrigatorio => {
                if (textoDigitado === ""){
                    obrigatorio.classList.add('mostrar')
                } else if (textoDigitado !== ""){
                    obrigatorio.classList.remove('mostrar')
                }
            })
        }

        })
    };

formulario.addEventListener('submit', preenchidoOuNao);