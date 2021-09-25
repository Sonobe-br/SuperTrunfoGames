let carta1 = {
    nome: "Vincent Luis",
    imagem: "https://www.slowtwitch.com/articles/images/8/199958-largest_VincentLuis_Wins_.jpg",
    atributos: {
        natação: 10,
        ciclismo: 8,
        corrida: 9

    } 
};

let carta2 = {
    nome: "Guilherme Gil",
    imagem:"https://pbs.twimg.com/profile_images/673496079565004800/dOsTMgbu_400x400.jpg",
    atributos: {
        natação: 8,
        ciclismo: 9,
        corrida: 10

    } 
};

let carta3 = {
    nome: "Alistar Brownlee",
    imagem:"https://www.yorkshirepost.co.uk/images-a.jpimedia.uk/imagefetch/http://www.lep.co.uk/webimage/Prestige.Item.1.108967012!image/image.jpg?width=640",
    atributos: {
        natação: 10,
        ciclismo: 8,
        corrida: 10

    } 
};

let carta4 = {
    nome: "Manoel Messias",
    imagem:"https://dhojeinterior.com.br/wp-content/uploads/2019/11/manoel-messias-copa-do-mundo-ouro-triatlo.jpg",
    atributos: {
        natação: 8,
        ciclismo: 9,
        corrida: 10

    } 
};



let cartas = [carta1,carta2,carta3, carta4];
let cartaMaquina;
let cartaJogador;

function sortearCarta(){
    let numeroCartaMaquina = parseInt(Math.random() * 4);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);

    let numeroCartaJogador = parseInt(Math.random() * 4);
    while(numeroCartaMaquina == numeroCartaJogador){
        numeroCartaJogador = parseInt(Math.random() * 4);
    }

    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
    
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador(); //função na linha 96
}

function obtemAtributoSelecionado(){
    let radioAtributos = document.getElementsByName("atributo"); 
    for (let i = 0; i < radioAtributos.length; i++){
        if (radioAtributos[i].checked == true){
        return radioAtributos[i].value; 
        }
    }
}

function jogar(){
    let atributoSelecionado = obtemAtributoSelecionado();
    let divResultado = document.getElementById("resultado");

    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = "<p class = 'resultado-final'>You Win</p>";
    } else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = "<p class = 'resultado-final'>You Loose</p>";
    } else {
        htmlResultado = "<p class = 'resultado-final'>Draw</p>";
    }
    divResultado.innerHTML = htmlResultado;

    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina();
}

function exibirCartaJogador(){
    let divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    //divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"; esta é a mesma forma de descrever o código como na linha 98;
    
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';
    let tagHTML = "<div id='opcoes' class='carta-status'>";  

    let opcoesTexto = "";
    for (let atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"; 
    }
    
    let nome = `<p class = "carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina(){
    let divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';
    let tagHTML = "<div id='opcoes' class='carta-status'>";  

    let opcoesTexto = "";
    for (let atributo in cartaMaquina.atributos){
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"; 
    }
    
    let nome = `<p class = "carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";

}