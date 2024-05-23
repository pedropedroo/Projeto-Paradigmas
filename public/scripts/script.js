    let botaoConsulta = document.querySelector('#botao').addEventListener('click', () => {
        let produto = document.querySelector('#produto').value;
        let lente = document.querySelector('#lente').value;
        let desconto = document.querySelector('#desconto').value;
        let valorFinal = parseFloat(document.querySelector('#valor_final').value);

        valorFinal = 0;

        if(produto !== "" && lente !== ""){
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



    let botaoVenda = document.querySelector('#botao_vender').addEventListener('click', () => {
        const campos = document.querySelectorAll('#nome_cliente, #telefone, #produto, #lente,#desconto, #valor_final');
        let preenchido = true;

        campos.forEach(campo => {
            if (campo.value === "") {
                preenchido = false;
                return;
            }
        });

        if (preenchido) {
            let data = new Date();
            let dia = data.getDate();
            let mes = data.getMonth() + 1;
            let ano = data.getFullYear();
            let dataCompleta = dia + '/' + mes + '/' + ano;
            const nome = document.querySelector('#nome_cliente').value;
            const telefone = document.querySelector('#telefone').value;
            const produto = document.querySelector('#produto').value;
            const lente = document.querySelector('#lente').value;
            const desconto = document.querySelector('#desconto').value;
            let valorFinal = parseFloat(document.querySelector('#valor_final').value);
            
            const novaLinha = document.createElement('tr');
            novaLinha.innerHTML = `
                <td>${dataCompleta}</td>
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
        dataCompleta = ""
    });


