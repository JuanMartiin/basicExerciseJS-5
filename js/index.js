const button = document.getElementById("submit");
const posicion = document.getElementById('posicion');
const respuesta = document.getElementById('respuesta');
let jugador = document.getElementById('barcosJugador');
let maquina1 = document.getElementById('barcosMaquina');
let barcosMaquina = 5;
let barcosJugador = 5;


async function login(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
  }

  let barcos = [
    [],[],[],[],[],[],[],[],[],[],
  ];
  barcos[3][3] = "1";
  barcos[4][3] = "1";
  barcos[5][3] = "1";
  barcos[5][9] = "1";
  barcos[7][6] = "1";
  barcos[2][5] = "2";
  barcos[3][7] = "2";
  barcos[1][8] = "2";
  barcos[5][5] = "2";
  barcos[9][1] = "2";

  button.addEventListener('click', () =>{
    init();
  });

  function init(){
    var validPos =  /^\(\d+,\d+\)$/;

    if( validPos.test(posicion.value) ){
        var content = posicion.value;
        var comprobacion = content.substring(2,3);
        var comprobacion1 = content.substring(4,5);

        if(comprobacion == "," && comprobacion1 == ")"){
            mirarPosicion();
        }else{
            respuesta.innerHTML ='Casilla fuera de tablero. Forma correcta: (0-9,0-9)';
            return;
        };
        
        maquina();
    }else{
        respuesta.innerHTML = 'No se mandó de forma correcta. Forma correcta: (0-9,0-9)';
    };
  }

  function mirarPosicion(){
    var content = posicion.value;
    var col = content.substring(1,2);
    var fil = content.substring(3,4);
    
    if(barcos[col][fil] == "2"){
        barcosMaquina--;
        alert('Hundido, al jugador 2 le quedan: ' + barcosMaquina + ' barcos!');
        maquina1.innerHTML = barcosMaquina;
        barcos[col][fil] = "";
        if(barcosMaquina==0){
            alert("Victoria!");
        };
    }else{
        alert('Jugador 1 disparó al agua!');
    }
  }

  function maquina(){
    var col = Math.floor(Math.random() * 10);
    var fil = Math.floor(Math.random() * 10);
    if(barcos[col][fil] == "1"){
        barcosJugador--;
        respuesta.innerHTML = 'Hundido, al jugador 1 le quedan: ' + barcosJugador + ' barcos!';
        jugador.innerHTML = barcosJugador;
        barcos[col][fil] = "";
        if(barcosJugador==0){
            respuesta.innerHTML = "Derrota!";
        };
    }else{
        respuesta.innerHTML = 'Jugador 2 disparó al agua!';
    }
  }