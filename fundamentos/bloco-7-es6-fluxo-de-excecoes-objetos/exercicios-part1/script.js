const trativa = (valueDois, valueTres) => {
    if (!valueDois || !valueTres ) {
        throw new Error('Erro: Insira um valor numérico');
    }
    if(isNaN(valueDois) || isNaN(valueTres)) {
        throw new Error('Error: Insira valores nas 2 caixas')
    }
}

function sum() {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const valueDois = Number(value1);
    const valueTres = Number(value2);

    try {
        trativa(valueDois, valueTres)
        document.getElementById('result').innerHTML = `Resultado: ${valueDois + valueTres}`;
    } catch (erro) {
        return document.getElementById('result').innerHTML = erro.message;
    } finally {
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
    }
}
window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
}