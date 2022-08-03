        
        
        var botaoBuscarInfo = document.getElementById("BotaoMostrar");

        botaoBuscarInfo.onclick = function(){
            let moeda = document.getElementById("Moeda").value;
            let data = document.getElementById("Data").value;
            buscarInfo(moeda, data)
        }



        function buscarInfo(moeda, data) {

            var xhr = new XMLHttpRequest(); 

            xhr.open("GET", "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='" +moeda+ "'&@dataCotacao='" +data+ "'&$top=100&$format=json&$select=paridadeCompra,paridadeVenda,cotacaoCompra,cotacaoVenda,dataHoraCotacao,tipoBoletim")


            //https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='EUR'&@dataCotacao='06-14-2022'&$top=100&$format=json&$select=paridadeCompra,paridadeVenda,cotacaoCompra,cotacaoVenda,dataHoraCotacao,tipoBoletim
            xhr.addEventListener("load", function(){
                var resposta = xhr.responseText;
                mostrarInformacoes(resposta)

                var objetos = JSON.parse(resposta);
                console.log(objetos)

                objetos.forEach(element => {
                    console.log(element)
                });
            })
            
            xhr.send()

        }

        function mostrarInformacoes(params) {
            console.log(params);
        }
        

        //Transforma um objeto JS em JSON 