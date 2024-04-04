class Venda {
    private nomeCliente: string;
    private telefone: string;
    private produto: string;
    private lente: string;
    private desconto: number;
    private valorFinal: number;
  
    constructor(nomeCliente: string, telefone: string, produto: string, lente: string, desconto: number) {
      this.nomeCliente = nomeCliente;
      this.telefone = telefone;
      this.produto = produto;
      this.lente = lente;
      this.desconto = desconto;
      this.valorFinal = 0;
    }
  
    calcularValorFinal(): void {
      // Aqui você pode adicionar a lógica para calcular o valor final com base nos produtos selecionados e no desconto
      let precoProduto: number = 0;
      let precoLente: number = 0;
  
      // Defina os preços dos produtos e lentes conforme necessário
      switch (this.produto) {
        case 'armacao':
          precoProduto = 100;
          break;
        case 'oculos':
          precoProduto = 80;
          break;
        default:
          precoProduto = 0;
      }
  
      switch (this.lente) {
        case 'lente1':
          precoLente = 50;
          break;
        case 'lente2':
          precoLente = 70;
          break;
        case 'sem_lente':
          precoLente = 0;
          break;
        default:
          precoLente = 0;
      }
  
      // Calcule o valor total com base nos preços dos produtos e lentes, e aplique o desconto
      let total: number = precoProduto + precoLente;
      this.valorFinal = total - this.desconto;
    }
  
    realizarVenda(): void {
      // Aqui você pode adicionar a lógica para realizar a venda, como enviar os dados para um servidor, etc.
      console.log("Venda realizada com sucesso!");
      console.log("Nome do Cliente:", this.nomeCliente);
      console.log("Telefone:", this.telefone);
      console.log("Produto:", this.produto);
      console.log("Lente:", this.lente);
      console.log("Desconto:", this.desconto);
      console.log("Valor Final:", this.valorFinal);
    }
  }
  
  // Exemplo de uso
  let venda = new Venda("João", "123456789", "armacao", "lente1", 10);
  venda.calcularValorFinal();
  venda.realizarVenda();
  