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

let botao2 = document.querySelector('#botao_vender').addEventListener('click', () => {
    const campos = document.querySelectorAll('#nome_cliente, #telefone, #produto, #lente,#desconto, #valor_final');
    let preenchido = true;

    campos.forEach(campo => {
        if (campo.value === "") {
            preenchido = false;
            return;
        }
    });

    if (preenchido) {
        const nome = document.querySelector('#nome_cliente').value;
        const telefone = document.querySelector('#telefone').value;
        const produto = document.querySelector('#produto').value;
        const lente = document.querySelector('#lente').value;
        const desconto = document.querySelector('#desconto').value;
        let valorFinal = parseFloat(document.querySelector('#valor_final').value);
        
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td>${nome}</td>
            <td>${telefone}</td>
            <td>${produto}</td>
            <td>${lente}</td>
            <td>${desconto + "%"}</td>
            <td>${valorFinal.toFixed(2)}</td>
        `;
    
        document.querySelector('#tabela_vendas tbody').appendChild(novaLinha);

        campos.forEach(campo => {
            campo.value = "";
        });
    } else {
        alert("Preencha todas as informações");
    }
});


