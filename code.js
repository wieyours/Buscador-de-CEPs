async function getCepInfo() {
    var cep = document.querySelector("#cep");
 //!cep.value.length == 8
 //8 < cep.value.length < 8
    if(!(cep.value.length == 8)) {
        alert("Invalid CEP!");
        return;
    }

    var reply = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
    var data = await reply.json();
    
    if(data.erro){
        alert("CEP not found!")
        return;
    }

    console.log(data.localidade);
    console.log(data.estado);
    console.log(data.bairro);
    console.log(data.logradouro);

    document.querySelector("#cidade").innerHTML = data.localidade;
    document.querySelector("#estado").innerHTML = data.estado;
    document.querySelector("#bairro").innerHTML = data.bairro;
    document.querySelector("#rua").innerHTML = data.logradouro;


}

function clearCep(){
    document.querySelector("#cep").value = "";
    document.querySelector("#cidade").innerHTML = "";
    document.querySelector("#estado").innerHTML = "";
    document.querySelector("#bairro").innerHTML = "";
    document.querySelector("#rua").innerHTML = "";
}
