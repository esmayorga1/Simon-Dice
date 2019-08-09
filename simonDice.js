
const puntos = document.getElementById('puntos')
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
class Juego{
  constructor(){
    this.inicializar = this.inicializar.bind(this)
    this.inicializar()
    this.generarSecuencia()
    setTimeout( ()=>{
      this.siguienteNivel()
    },1000)
  }
  inicializar(){
    // this.elegirColor = this.elegirColor.bind(this)
    this.nivel = 1
    this.colores = {
      celeste,violeta,naranja,verde
    }
    this.toggleBtnEmpezar()
  }
  toggleBtnEmpezar(){
    if(btn_empezar.classList.contains('hide')){
      btn_empezar.classList.remove('hide')
    }else{
      btn_empezar.classList.add('hide')
    }
  }
  generarSecuencia(){
    this.secuencia = new Array(10).fill(0).map(n=>Math.floor(Math.random()*4))
  }
  siguienteNivel(){
    this.subnivel=0
    this.iluminarSecuencia()
    this.agregarEventosClick()
  }
  numeroAcolor(numero){
    switch(numero){
      case 0 :
        return 'celeste'
      case 1 : 
        return 'violeta'
      case 2 : 
      return 'naranja'
      case 3 : 
      return 'verde'
    }

  }
  colorAnumero(color){
    switch(numero){
      case 'celeste' :
        return 0
      case 'violeta' : 
        return 1
      case 'naranja' : 
      return 2
      case 'verde' : 
      return 3
    }

  }
}

// var PuntosTotales = prompt('puntos?')
function empezarJuego(){
  juego = new Juego()
}
const btn_empezar = document.getElementById('btn_empezar')
btn_empezar.addEventListener('click',empezarJuego)