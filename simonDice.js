
const puntos = document.getElementById('puntos')
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const gameBoard = document.getElementById('gameboard')
const btn_empezar = document.getElementById('btn_empezar')
// const gradosGiro = 0
btn_empezar.addEventListener('click',empezarJuego)
const ULTIMO_NIVEL = 10
class Juego{
  constructor(){
    this.inicializar = this.inicializar.bind(this)
    this.giro = 0
    this.inicializar()
    this.generarSecuencia()
    setTimeout( ()=>{
      this.siguienteNivel()
    },2000)
  }
  inicializar(){
    this.elegirColor = this.elegirColor.bind(this)
    this.siguienteNivel = this.siguienteNivel.bind(this)
    this.toggleBtnEmpezar()
    this.nivel = 1
    this.puntosJuego = 0
    this.colores = {
      celeste,violeta,naranja,verde
    }
  }
  toggleBtnEmpezar(){
    // debugger
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
    // this.iluminarSecuencia = this.iluminarSecuencia.bind(this)
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
    switch(color){
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
  iluminarSecuencia(){
    for(let i = 0; i< this.nivel; i++){
      let color = this.numeroAcolor(this.secuencia[i])
      setTimeout( ()=> this.iluminarColor(color),1000*i)
    }
  }
 
  iluminarColor(color){
    this.colores[color].classList.add('light')
    setTimeout( ()=> this.apagarColor(color),350)
  }
  apagarColor(color){
    this.colores[color].classList.remove('light')
  }
  agregarEventosClick(){
    this.colores.celeste.addEventListener('click',this.elegirColor)
    this.colores.violeta.addEventListener('click',this.elegirColor)
    this.colores.naranja.addEventListener('click',this.elegirColor)
    this.colores.verde.addEventListener('click',this.elegirColor)
  }
  eliminarEventosClick(){
    this.colores.celeste.removeEventListener('click',this.elegirColor)
    this.colores.violeta.removeEventListener('click',this.elegirColor)
    this.colores.naranja.removeEventListener('click',this.elegirColor)
    this.colores.verde.removeEventListener('click',this.elegirColor)
  }
  elegirColor(ev){
    const nombreColor = ev.target.dataset.color
    const numeroColor = this.colorAnumero(nombreColor)
    this.iluminarColor(nombreColor)

    if(numeroColor === this.secuencia[this.subnivel]){
      this.subnivel++
      this.sumarPuntos()
      if(this.subnivel === this.nivel){
        this.nivel++
        
        this.giro++
        this.rotar()
        this.eliminarEventosClick()
        if(this.nivel === ULTIMO_NIVEL + 1 ){
          this.ganoElJuego()
        }else{
          setTimeout(this.siguienteNivel,1500)
        }
      }
    }else{
      this.perdioElJuego()
    }
  }
  sumarPuntos(){
    this.puntosJuego+=10
    puntos.innerHTML = this.puntosJuego
  }
  ganoElJuego(){
    swal('SimonDice','Ganaste','success')
    .then( ()=>{
      this.inicializar()
     
    })
  }
  perdioElJuego(){
    swal('SimonDice','Buen intento', 'error')
    .then( ()=>{
      this.eliminarEventosClick()
      this.inicializar()
    })
  }
  rotar(){
    var angulo = this.giro *45

    var rotacion = `rotate(${angulo}deg)`
    gameBoard.style.transform = rotacion 
  }
  
}

// var PuntosTotales = prompt('puntos?')
function empezarJuego(){
  juego = new Juego()
}
