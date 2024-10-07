// funcoes das calculadorass


function conversaoReal(){

    const valorReal = parseFloat(document.getElementById('valorMoeda').value)

    const conversaoReal = valorReal / 5;
    

    document.getElementById('resultadoDolar').value = (conversaoReal)

}

function conversaoDolar(){

    const valorReal = parseFloat(document.getElementById('valorMoeda').value)

    const conversaoDolar = valorReal * 5
    

    document.getElementById('resultadoDolar').value = (conversaoDolar)
}

function contaSubtracao(){

    const valor1 = parseFloat(document.getElementById('valor1').value)
    const valor2 = parseFloat(document.getElementById('valor2').value)

    const resultadoSubtracao = valor1 - valor2;


    document.getElementById('resultado').value = (resultadoSubtracao)

}


function contaDivisao(){

    const valor1 = parseFloat(document.getElementById('valor1').value)
    const valor2 = parseFloat(document.getElementById('valor2').value)

    const resultadoDivisao = valor1 / valor2;


    document.getElementById('resultado').value = (resultadoDivisao)

}


function contaMultiplicacao(){

    const valor1 = parseFloat(document.getElementById('valor1').value)
    const valor2 = parseFloat(document.getElementById('valor2').value)

    const resultadox = valor1 * valor2;


    document.getElementById('resultado').value = (resultadox ) 

}

function contaAdicao() {
    const valor1 = parseFloat(document.getElementById('valor1').value)
    const valor2 = parseFloat(document.getElementById('valor2').value)

    const resultado = valor1 + valor2;


    document.getElementById('resultado').value = ( resultado)
    }


    function apagarConteudo(){

        document.getElementById('valor1').value =''
        document.getElementById('valor2').value =''
        document.getElementById('valorMoeda').value =''
        document.getElementById('resultado').value =''
        
    document.getElementById('resultadoDolar').value =''
    }


    function conversorCelsius(){

        const valorFahrenheit = parseFloat(document.getElementById('temperatura').value)

        const resultado = (valorFahrenheit - 32)  *5 /9;

        document.getElementById('resultadoTemperatura').value = resultado;

    }
    
    function conversorFahrenheit(){

        const valorCelsius = parseFloat(document.getElementById('temperatura').value)

        const resultado = (valorCelsius + 32) *9 /5 ;

        document.getElementById('resultadoTemperatura').value = resultado;
        
    }



// FUNÇÕES DO MENU HAMBURGUER

botao_menu.onclick = () =>{ // funcao

        if (menu_mobile.style.display === 'block'){
            menu_mobile.style.display = 'none'
        } else{
            menu_mobile.style.display = 'block'
        }
    }


