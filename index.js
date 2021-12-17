function populaTabela(){
    if (localStorage.getItem("produtos")){
        let produtos = JSON.parse(localStorage.getItem("produtos"))
        $("#tblProdutos tbody").html("")
        produtos.forEach((produto) => {
            $("#tblProdutos tbody").append(`<tr>
                <td>${produto.nome}</td>
                <td>${produto.quantidade}</td>
                <td>${produto.valor}</td>
                <td style = "width: 50px"><button type = "button" class = "btn btn-info">E</button></td>
                <td style = "width: 50px"><button type = "button" class = "btn btn-danger">D</button></td>    
            </tr>`)
        })
    }

}
$(() => {
    //Código executado no carregamento da página
    populaTabela()
    alert("Mensagem apresentada no carregamento do sistema");
    $("#btnSalvar").click(() => {
        localStorage.setItem("key", "efetivo valor que será armazenado")
    //    console.log("Função click funcionou!!")
        let produto = {}
        produto.nome = $("#nmProduto").val()
        produto.quantidade = $("#quantidade").val()  
        produto.valor = $("#vlrProduto").val()    
        let listaProdutos = []
        if(localStorage.getItem("produtos")){
            listaProdutos = JSON.parse(localStorage.getItem("produtos"))
        }
        listaProdutos.push(produto)

        localStorage.setItem("produtos",JSON.stringify(listaProdutos))

        alert("Produto cadastrado com sucesso!")

        $("#nmProduto").val("")
        $("#quantidade").val("")
        $("#vlwProduto").val("")

        populaTabela()
    })
})

