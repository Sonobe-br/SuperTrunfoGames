let carta1 = {
    nome: "Vincent Luis FR",
    imagem: "https://www.slowtwitch.com/articles/images/8/199958-largest_VincentLuis_Wins_.jpg",
    atributos: {
        swimming: 10,
        cycling: 8,
        running: 9

    } 
};

let carta2 = {
    nome: "Luisa Baptista BR",
    imagem:"https://cronos-media.sesisenaisp.org.br//api/media/1-0/files?img=img_64_201110_b11ff7a5-fcf1-4fe2-89fe-cdb60c95f09d_o.jpg&tipo=m",
    atributos: {
        swimming: 8,
        cycling: 9,
        running: 10
    } 
};

let carta3 = {
    nome: "Alistar Brownlee UK",
    imagem:"https://www.yorkshirepost.co.uk/images-a.jpimedia.uk/imagefetch/http://www.lep.co.uk/webimage/Prestige.Item.1.108967012!image/image.jpg?width=640",
    atributos: {
        swimming: 10,
        cycling: 8,
        running: 10
    } 
};

let carta4 = {
    nome: "Manoel Messias BR",
    imagem:"https://dhojeinterior.com.br/wp-content/uploads/2019/11/manoel-messias-copa-do-mundo-ouro-triatlo.jpg",
    atributos: {
        swimming: 8,
        cycling: 9,
        running: 10
    } 
};

let carta5 = {
    nome: "Kristian Blummenfelt NO",
    imagem:"https://i0.wp.com/www.trisportmag.com.br/wp-content/uploads/2021/05/186472558_10162159923734572_5802056187184303779_n.jpg?fit=1629%2C1084&ssl=1",
    atributos: {
        swimming: 10,
        cycling: 8,
        running: 10
    }
}

let carta6 = {
    nome: "Javier Gomes Noya ESP",
    imagem:"https://www.mundotri.com.br/wp-content/uploads/2015/08/gomezstockholmwin.jpg",
    atributos: {
        swimming: 9,
        cycling: 10,
        running: 9
    }
}

let carta7 = {
    nome: "Vittoria Lopes BR",
    imagem:"https://agenciaolimpica.com.br/wp-content/uploads/2019/08/Vittoria-Lopes-Leeds-2.jpg",
    atributos: {
        swimming: 9,
        cycling: 8,
        running: 10
    }
}

let carta8 = {
    nome: "Pâmela Oliveira BR",
    imagem:"http://midias.gazetaonline.com.br/_midias/jpg/2014/12/16/pamela_oliveira_triathlon_org_-1552131.jpg",
    atributos: {
        swimming: 10,
        cycling: 9,
        running: 9
    }
}

let cartas = [carta1,carta2,carta3, carta4, carta5, carta6, carta7, carta8];
let cartaMaquina;
let cartaJogador;

function sortearCarta(){
    let numeroCartaMaquina = parseInt(Math.random() * 8);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);

    let numeroCartaJogador = parseInt(Math.random() * 8);
    while(numeroCartaMaquina == numeroCartaJogador){
        numeroCartaJogador = parseInt(Math.random() * 8);
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