let botao = document.querySelector('#botao');

botao.addEventListener('click', () => {
    let nome = document.querySelector('#nome_cliente').value;
    let telefone = document.querySelector('#telefone').value;
    let produto = document.querySelector('#produto').value;
    let lente = document.querySelector('#lente').value;
    let desconto = parseFloat(document.querySelector('#desconto').value);
    let valorFinal = 0;

    if(nome !== "" && telefone !== ""){
        switch (produto) {
            case 'armacao':
                valorFinal += 50;
                break;
            case 'oculos':
                valorFinal += 80;
                break;
        }
    
        switch (lente) {
            case 'lente1':
                valorFinal += 30;
                break;
            case 'lente2':
                valorFinal += 40;
                break;
        }
    
        if (!isNaN(desconto)) {
            valorFinal -= (desconto / 100) * valorFinal;
        }
          
        document.querySelector('#valor_final').value = valorFinal.toFixed(2);
    }else{
        alert("Insira as informações corretamente");
    }

    
});
