const BtnGranBretana = document.querySelector('.btn-gran-bretana')
const HistoryGranBretana = document.querySelector('.history-gran-bretana')
const ContainerGranBretana = document.querySelector('.container-gran-bretana')

BtnGranBretana.addEventListener('click', (e) => {

    const ParrafoGranBretana = HistoryGranBretana.querySelector('div')
    if(ParrafoGranBretana){
        HistoryGranBretana.removeChild(ParrafoGranBretana)
    }else{
        HistoryGranBretana.innerHTML += `<div class="card">   
        <div id="carouselExampleIndicators" class="carousel slide">
             <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/GranBretaña/GB-1.jpeg" class="d-block w-100" alt="Premio Gran Bretaña">
    </div>
    <div class="carousel-item">
      <img src="./img/GranBretaña/GB-3.jpeg" class="d-block w-100 "  alt="Premio Gran Bretaña">
    </div>
    <div class="carousel-item">
      <img src="./img/GranBretaña/GB-4.jpeg" class="d-block w-100" alt="Premio Gran Bretaña">
    </div>  
  </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
  </div>
    <div class="card-body">
        <p class="card-text"><strong>LINDA DAMA VOLVIÓ A SU TIRO Y A SU NIVEL PARA GANAR EN FORMA CORTA PERO CONCLUYENTE!</strong><br>
        a defensora del STUD FIORELLA E IGNACIO largó y se pareció a la de antes de su última presentación, 
        tomó la punta, la fue a pelear GATA DE VERANO y la dejó hacer la punta pero la controló de cerca, en la recta final, 
        rápidamente de la mano de  EMANUEL PEREZ DE GRAN CONDUCCIÓN fue a buscar la punta, hizo rebotar a LOS ANGELES para liberarse, 
        disparar y ponerse a cubierto de la larga atropellada de LA FIRMANTE, que intentó pero no pudo ante la gran guapeada
        de la mejor yegua de este tiro. </p>
    </div>        
        
    </div>`
    }


})
// CLASICO ZUMARAN Y AROCENA 2023
const BtnZumaran = document.querySelector('.btn-zumaran')
const HistoryZumaran = document.querySelector('.history-zumaran')
const ContainerZumaran = document.querySelector('.container-zumaran')

BtnZumaran.addEventListener('click', (e) => {

    const ParrafoZumaran = HistoryZumaran.querySelector('div')
    if(ParrafoZumaran){
        HistoryZumaran.removeChild(ParrafoZumaran)
    }else{
        HistoryZumaran.innerHTML += `<div class="card">   
        <div id="carouselExampleIndicators" class="carousel slide">
             <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/Zumaran/za-1.jpg" class="d-block w-100" alt="Premio Zumaran">
    </div>
    <div class="carousel-item">
      <img src="./img/Zumaran/za-2.jpg" class="d-block w-100 alto"  alt="Premio Zumaran">
    </div>
    <div class="carousel-item">
      <img src="./img/Zumaran/za-3.jpg" class="d-block w-100" alt="Premio Zumaran">
    </div>  
  </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
  </div>
    <div class="card-body">
        <p class="card-text"><strong>LINDA DAMA VOLVIÓ A DEMOSTRAR QUE ES LA MEJOR EN LA MEDIA DISTANCIA TANTO EN CESPED COMO EN ARENA!</strong><br> 
        La defensora del STUD FIORELLA E IGNACIO fue nuevamente conducida a la perfección por Javier Emanuel Perez de principio a fin, 
        al no correr Catri tomo la punta y la armó a su ritmo, la trató de presionar Canción Maleva pero en vez de presionarla le sirvió porque la ayudó 
        a marcar el tren de la carrera, ya al entrar a la recta Emanuel venia relajado esperando a Suprema D'OR, no se apuró nunca, cuando Julio salió a buscar 
        la carrera, ahi si movió a su conducida y salió como recién largada, PINGA Y PICO LA DE JOSIANE que si no estuviera Girona Fiver, sin duda seria la mejor 
        yegua del medio, bueno, ES LA SEGUNDA MEJOR YEGUA DEL URUGUAY.</p>
    </div>        
        
    </div>`
    }


})

// CLASICO ESTADOS UNIDOS DE AMERICA 2023

const BtnEEUU = document.querySelector('.btn-eeuu')
const HistoryEEUU = document.querySelector('.history-eeuu')
const ContainerEEUU = document.querySelector('.container-eeuu')

BtnEEUU.addEventListener('click', (e) => {

    const ParrafoEEUU = HistoryEEUU.querySelector('div')
    if(ParrafoEEUU){
        HistoryEEUU.removeChild(ParrafoEEUU)
    }else{
        HistoryEEUU.innerHTML += `<div class="card">   
        <div id="carouselExampleIndicators" class="carousel slide">
             <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/EEUU/eeuu-1.jpg" class="d-block w-100" alt="Premio EEUU">
    </div>
    <div class="carousel-item">
      <img src="./img/EEUU/eeuu-2.jpg" class="d-block w-100 alto"  alt="Premio EEUU">
    </div>
    <div class="carousel-item">
      <img src="./img/EEUU/eeuu-3.jpg" class="d-block w-100" alt="Premio EEUU">
    </div>  
  </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
  </div>
    <div class="card-body">
        <p class="card-text"><strong>GANO NUEVAMENTE LINDA DAMA Y ESTA VEZ FUE POR DEMOLICIÓN!! CORRE UN DISPARATE</strong> <br> 
        La muy bien llevada por Javier Emanuel Perez quue controló siempre a Linda Rubia de carrera suicida que le costó el segundo puesto,
        suicida por los parciales, pero lo importante es que la defensora del Fiorella e Ignacio sigue ganando y cada vez mejor. </p>
    </div>        
        
    </div>`
    }


})




// -------------------------------------AQUI COMIENZA LA PAGINA 2 DE LA GALERIAS --------------------------------
// CODIGO PARA PASAR DE LA PAGINA 1 A LA PAGINA 2 DE GALERIAS
const BtnFollowing1 = document.querySelector('.btn-following-1');
const ContainerGalery = document.querySelector('.container-galery');
const ContainerGalery2 = document.querySelector('.container-galery-two');

BtnFollowing1.addEventListener('click', (e) => {
    ContainerGalery.style.display = 'none';
    ContainerGalery2.style.display = 'block';

})

// CODIGO PARA PASAR DE LA PAGINA 2 A LA PAGINA 1 DE GALERIAS CON BOTON BACK

const BtnBack = document.querySelector('.back');
BtnBack.addEventListener('click', (e) => {
    ContainerGalery.style.display = 'block';
    ContainerGalery2.style.display = 'none';
})



// CLASICO URUGUAY

const BtnUruguay = document.querySelector('.btn-uruguay')
const HistoryUruguay = document.querySelector('.history-uruguay')
const ContainerUruguay = document.querySelector('.container-uruguay')

BtnUruguay.addEventListener('click', (e) => {

    const ParrafoUruguay = HistoryUruguay.querySelector('div')
    if(ParrafoUruguay){
        HistoryUruguay.removeChild(ParrafoUruguay)
    }else{
        HistoryUruguay.innerHTML += `<div class="card">   
        <div id="carouselExampleIndicators" class="carousel slide">
             <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/Uruguay/uruguay-1.jpg" class="d-block w-100" alt="Premio Clásico Uruguay">
    </div>
    <div class="carousel-item">
      <img src="./img/Uruguay/uruguay-2.jpg" class="d-block w-100 alto"  alt="Premio Clásico Uruguay">
    </div>
    <div class="carousel-item">
      <img src="./img/Uruguay/uruguay-3.jpg" class="d-block w-100" alt="Premio Clásico Uruguay">
    </div>  
  </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
  </div>
    <div class="card-body">
        <p class="card-text"><strong>VOLVIÓ A GANAR LA PINGA DE LINDA DAMA</strong> <br>
        Otro nuevo clásico para la defensora del stud FIORELLA E IGNACIO que de la mano de Josiane Gulart está haciendo una tremenda
        campaña, Emanuel Perez de gran conducción, como siempre, la puso tercera por dentro controlando a Linda Rubia, la fue acercando
        a la punta y aepenas pisó el derecho se puso a acompañar a la puntera, por los 250 Emanuel remata la carrera y termina ganando con
        facilidad. Segunda Linda Rubia que volvió a correr muy bien, jugándose desde el vamos y cayendo con la mejor yegua de media distancia
        de Maroñas.</p>
    </div>        
        
    </div>`
    }
})

//Clásico Brasil

const BtnBrasil = document.querySelector('.btn-brasil')
const HistoryBrasil = document.querySelector('.history-brasil')
const ContainerBrasil = document.querySelector('.container-brasil')

BtnBrasil.addEventListener('click', (e) => {

    const ParrafoBrasil = HistoryBrasil.querySelector('div')
    if(ParrafoBrasil){
        HistoryBrasil.removeChild(ParrafoBrasil)
    }else{
        HistoryBrasil.innerHTML += `<div class="card">   
        <div id="carouselExampleIndicators" class="carousel slide">
             <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/Brasil/Brasil-1.jpg" class="d-block w-100" alt="Premio Clásico Brasil">
    </div>
    <div class="carousel-item">
      <img src="./img/Brasil/Brasil-2.jpg" class="d-block w-100 alto"  alt="Premio Clásico Brasil">
    </div>
    <div class="carousel-item">
      <img src="./img/Brasil/Brasil-3.jpg" class="d-block w-100" alt="Premio Clásico Brasil">
    </div>  
  </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
  </div>
    <div class="card-body">
        <p class="card-text"><strong>LINDA DAMA VOLVIÓ A GANAR BÁRBARO!</strong> <br>
        La defensora del stud FIORELLA E IGNACIO fue conducida al detalle por Javier Emanuel Perez, le salieron a pelear
        y la dejó tercera, tomó la punta Linda Rubia perseguida por Olympic Miami, mientras Emanuel traía tercera a la de
        Josiane que anda en un momento tremendo, ya en la recta le buscó la segunda línea y fue a buscar sin apuro a Linda Rubia, 
        ya en los 300 estaba a la par, pero no remató la carrera, sólo a brazos le fue sacando pequeñas ventajas que en los 100 finales
        amplió para ganar su NOVENA CARRERA!</p>
    </div>        
        
    </div>`
    }
})

//Handicap Yerba Amarga

const BtnYerbaAmarga = document.querySelector('.btn-yerba-amarga')
const HistoryYerbaAmarga = document.querySelector('.history-yerba-amarga')
const ContainerYerbaAmarga = document.querySelector('.container-yerba-amarga')

BtnYerbaAmarga.addEventListener('click', (e) => {

    const ParrafoYerbaAmarga = HistoryYerbaAmarga.querySelector('div')
    if(ParrafoYerbaAmarga){
        HistoryYerbaAmarga.removeChild(ParrafoYerbaAmarga)
    }else{
        HistoryYerbaAmarga.innerHTML += `<div class="card">   
        <div id="carouselExampleIndicators" class="carousel slide">
             <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/YerbaAmarga/YerbaAmarga-1.jpg" class="d-block w-100" alt="Handicap Especial Yerba Amarga">
    </div>
    <div class="carousel-item">
      <img src="./img/YerbaAmarga/YerbaAmarga-2.jpg" class="d-block w-100 alto"  alt="Handicap Especial Yerba Amarga">
    </div>
    
  </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
  </div>
    <div class="card-body">
        <p class="card-text"><strong>LINDA DAMA FUE SOBERBIA A SABIENDAS QUE LE DISPENSABA UNA "MONTAÑA" DE KILOS A SUS RIVALES!</strong> <br>
        La carrera desde el comienzo tuvo a cuatro protagonistas: Wired Storm, Linda Dama, Catri y Play Keep; las tres primeras fueron las que
        movieron la carrera seguidas de cerca por Play Keep. En los 200 dominó Linda Dama a Wired Strom por dentro se resistió Catri, por flanco
        externo arremetió Play Keep para llegar segunda. Formidable desde punto de vista la actuación de Linda Dama, la elección de la carrera
        por parte de su cuidadora Josiane Gulart y la conducción de Raúl Silvera, que buscó desde la largada hasta los 150 finales que la excelente
        pinga no sintiese los 65.5 kilos recibidos.</p>
    </div>        
        
    </div>`
    }
})


// -------------------------------------AQUI COMIENZA LA PAGINA 3 DE LA GALERIAS --------------------------------

// Premio Topo Do Soul

const BtnTopoDoSoul = document.querySelector('.btn-topo-do-soul')
const HistoryTopoDoSoul = document.querySelector('.history-topo-do-soul')
const ContainerTopoDoSoul = document.querySelector('.container-topo-do-soul')

BtnTopoDoSoul.addEventListener('click', (e) => {

  const ParrafoTopoDoSoul = HistoryTopoDoSoul.querySelector('div')
  if(ParrafoTopoDoSoul){
      HistoryTopoDoSoul.removeChild(ParrafoTopoDoSoul)
  }else{
      HistoryTopoDoSoul.innerHTML += `<div class="card">   
      <div id="carouselExampleIndicators" class="carousel slide">
           <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
      <div class="carousel-inner">
  <div class="carousel-item active">
    <img src="./img/TopoDoSoul/TopoDoSoul-1.jpg" class="d-block w-100" alt="Premio Topo do Soul">
  </div>
  <div class="carousel-item">
    <img src="./img/TopoDoSoul/TopoDoSoul-2.jpg" class="d-block w-100 alto"  alt="Premio Topo do Soul">
  </div>
  <div class="carousel-item">
    <img src="./img/TopoDoSoul/TopoDoSoul-3.jpg" class="d-block w-100 alto"  alt="Premio Topo do Soul">
  </div>
  <div class="carousel-item">
    <img src="./img/TopoDoSoul/TopoDoSoul-4.jpg" class="d-block w-100 alto"  alt="Premio Topo do Soul">
  </div>
  <div class="carousel-item">
    <img src="./img/TopoDoSoul/TopoDoSoul-5.jpg" class="d-block w-100 alto"  alt="Premio Topo do Soul">
  </div>
  
</div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
  </button>
</div>
  <div class="card-body">
      <p class="card-text"><strong>LINDA DAMA FUE SOBERBIA A SABIENDAS QUE LE DISPENSABA UNA "MONTAÑA" DE KILOS A SUS RIVALES!</strong> <br>
      La carrera desde el comienzo tuvo a cuatro protagonistas: Wired Storm, Linda Dama, Catri y Play Keep; las tres primeras fueron las que
      movieron la carrera seguidas de cerca por Play Keep. En los 200 dominó Linda Dama a Wired Strom por dentro se resistió Catri, por flanco
      externo arremetió Play Keep para llegar segunda. Formidable desde punto de vista la actuación de Linda Dama, la elección de la carrera
      por parte de su cuidadora Josiane Gulart y la conducción de Raúl Silvera, que buscó desde la largada hasta los 150 finales que la excelente
      pinga no sintiese los 65.5 kilos recibidos.</p>
  </div>        
      
  </div>`
  }
})

// Premio Zumaran 2023

const BtnZumaran2023 = document.querySelector('.btn-zumaran-2023')
const HistoryZumaran2023 = document.querySelector('.history-zumaran-2023')
const Zumaran2023 = document.querySelector('.container-zumaran-2023')

BtnZumaran2023.addEventListener('click', (e) => {

  const ParrafoZumaran2023 = HistoryZumaran2023.querySelector('div')
  if(ParrafoZumaran2023){
      HistoryZumaran2023.removeChild(ParrafoZumaran2023)
  }else{
      HistoryZumaran2023.innerHTML += `<div class="card">   
      <div id="carouselExampleIndicators" class="carousel slide">
           <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
      <div class="carousel-inner">
  <div class="carousel-item active">
    <img src="./img/Zumaran2023/Zumaran2023-1.jpg" class="d-block w-100" alt="Clasico Zumaran y Arocena 2023">
  </div>
  <div class="carousel-item">
    <img src="./img/Zumaran2023/Zumaran2023-2.jpg" class="d-block w-100 alto"  alt="Clasico Zumaran y Arocena 2023">
  </div>
  <div class="carousel-item">
  <img src="./img/Zumaran2023/Zumaran2023-3.jpg" class="d-block w-100 alto"  alt="Clasico Zumaran y Arocena 2023">
</div>
<div class="carousel-item">
<img src="./img/Zumaran2023/Zumaran2023-4.jpg" class="d-block w-100 alto"  alt="Clasico Zumaran y Arocena 2023">
</div>
<div class="carousel-item">
<img src="./img/Zumaran2023/Zumaran2023-5.jpg" class="d-block w-100 alto"  alt="Clasico Zumaran y Arocena 2023">
</div>
  
  
</div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
  </button>
</div>
  <div class="card-body">
      <p class="card-text"><strong>IMPONENTE DEMOSTRACIÓN DE LINDA DAMA!!!!</strong><br>  
      Ganó de punta a punta y fue UN ESPECTÁCULO verla correr, Javier Emanuel Pérez la conoce mucho e hizo sentir al resto que 
      eran perdedoras a su lado, cuando y como quiso puso a correr a la hija de The Leopard para sacar varios cuerpos, 
      MERECIA EL APLAUSO de todos los espectadores.</p>
  </div>        
      
  </div>`
  }
})

//Premio Gomek

const BtnGomek = document.querySelector('.btn-gomek')
const HistoryGomek = document.querySelector('.history-gomek')
const Gomek = document.querySelector('.container-gomek')

BtnGomek.addEventListener('click', (e) => {

  const ParrafoGomek = HistoryGomek.querySelector('div')
  if(ParrafoGomek){
      HistoryGomek.removeChild(ParrafoGomek)
  }else{
      HistoryGomek.innerHTML += `<div class="card">   
      <div id="carouselExampleIndicators" class="carousel slide">
           <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              
          </div>
      <div class="carousel-inner">
  <div class="carousel-item active">
    <img src="./img/Gomek/Gomek-1.jpg" class="d-block w-100" alt="Premio Gomek">
  </div>
  <div class="carousel-item">
    <img src="./img//Gomek/Gomek-2.jpg" class="d-block w-100 alto"  alt="Premio Gomek">
  </div>
  
</div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
  </button>
</div>
  <div class="card-body">
      <p class="card-text"><strong>LINDA DAMA CORRE UN DISPARATE!!!</strong><br>
      Volvió a demostrar ganando de punta a punta, Javier Emanuel Pérez de soberbio año la puso adelante y que la siguieran, 
      trató de hacerlo Belma pero nunca fue de riesgo, ya en la recta final se veía que ganaba por lo que quería. Muy bien presentada por Josiane Gulart.</p>
  </div>        
      
  </div>`
  }
})




// CODIGO PARA PASAR DE LA PAGINA 2 A LA PAGINA 3 DE GALERIAS CON BOTON NEXT

const BtnFollowing2 = document.querySelector('.next-2');
const ContainerGalery3 = document.querySelector('.container-galery-three');

BtnFollowing2.addEventListener('click', (e) => {
    ContainerGalery2.style.display = 'none';
    ContainerGalery3.style.display = 'block';

});

// CODIGO PARA PASAR DE LA PAGINA 3 A LA PAGINA 2 DE GALERIAS CON BOTON BACK

const BtnBack2 = document.querySelector('.btn-following-3');
BtnBack2.addEventListener('click', (e) => {
    ContainerGalery2.style.display = 'block';
    ContainerGalery3.style.display = 'none';
})


// -------------------------------------AQUI COMIENZA LA PAGINA 4 DE LA GALERIAS --------------------------------

//CODIGO PARA PASAR DE LA PAGINA 3 A LA PAGINA 4 DE GALERIAS CON BOTON NEXT

const BtnFollowing3 = document.querySelector('.next-3');
const ContainerGalery4 = document.querySelector('.container-galery-four');

BtnFollowing3.addEventListener('click', (e) => {
    ContainerGalery3.style.display = 'none';
    ContainerGalery4.style.display = 'block';

}
);

// Premio Aly's Time

const BtnAlysTime = document.querySelector('.btn-alys-time')
const HistoryAlysTime = document.querySelector('.history-alys-time')
const AlysTime = document.querySelector('.container-alys-time')

BtnAlysTime.addEventListener('click', (e) => {

  const ParrafoAlysTime = HistoryAlysTime.querySelector('div')
  if(ParrafoAlysTime){
      HistoryAlysTime.removeChild(ParrafoAlysTime)
  }else{
      HistoryAlysTime.innerHTML += `<div class="card">   
      <div id="carouselExampleIndicators" class="carousel slide">
           <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              
          </div>
      <div class="carousel-inner">
  <div class="carousel-item active">
    <img src="./img/Aly'sTime/Aly'sTime-1.jpg" class="d-block w-100" alt="Premio Aly's Time">
  </div>
  <div class="carousel-item">
    <img src="./img/Aly'sTime/Aly'sTime-2.jpg" class="d-block w-100 alto"  alt="Premio Aly's Time">
  </div>
  <div class="carousel-item">
  <img src="./img/Aly'sTime/Aly'sTime-3.jpg" class="d-block w-100 alto"  alt="Premio Aly's Time">
</div>
<div class="carousel-item">
<img src="./img/Aly'sTime/Aly'sTime-4.jpg" class="d-block w-100 alto"  alt="Premio Aly's Time">
</div>
  
</div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
  </button>
</div>
  <div class="card-body">
      <p class="card-text"><strong>LINDA DAMA CORRE UN DISPARATE!!!</strong><br>
      Volvió a demostrar ganando de punta a punta, Javier Emanuel Pérez de soberbio año la puso adelante y que la siguieran, 
      trató de hacerlo Belma pero nunca fue de riesgo, ya en la recta final se veía que ganaba por lo que quería. Muy bien presentada por Josiane Gulart.</p>
  </div>        
      
  </div>`
  }
})
// Premio Seeking halo
const BtnSeeking = document.querySelector('.btn-seeking')
const HistorySeeking = document.querySelector('.history-seeking')
const SeekingHalo = document.querySelector('.container-seeking')

BtnSeeking.addEventListener('click', (e) => {

  const ParrafoSeeking = HistorySeeking.querySelector('div')
  if(ParrafoSeeking){
      HistorySeeking.removeChild(ParrafoSeeking)
  }else{
      HistorySeeking.innerHTML += `<div class="card">   
      <div id="carouselExampleIndicators" class="carousel slide">
           <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              
          </div>
      <div class="carousel-inner">
  <div class="carousel-item active">
    <img src="./img/SeekingHalo/Seeking-1.jpg" class="d-block w-100" alt="Premio Seeking Halo">
  </div>
  <div class="carousel-item">
    <img src="./img/SeekingHalo/Seeking-2.jpg" class="d-block w-100 alto"  alt="Premio Seeking Halo">
  </div>
  <div class="carousel-item">
  <img src="./img/SeekingHalo/Seeking-3.jpg" class="d-block w-100 alto"  alt="Premio Seeking Halo">
</div>
<div class="carousel-item">
<img src="./img/SeekingHalo/Seeking-4.jpg" class="d-block w-100 alto"  alt="Premio Seeking Halo">
</div>
  
</div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
  </button>
</div>
  <div class="card-body">
      <p class="card-text"><strong>LINDA DAMA GANÓ FACIL COMO SE ESPERABA!!</strong><br>
      Fue de punta a punt, Javier Emanuel Pérez la administró a la perfección dejando al resto luchar por el segundo puesto,
      tercera victoria para la hija de The Leopard y Radio Continental</p>
  </div>        
      
  </div>`
  }
})

//Premio Artic Sum

const BtnArtic = document.querySelector('.btn-artic')
const HistoryArtic = document.querySelector('.history-artic')
const Artic = document.querySelector('.container-artic')

BtnArtic.addEventListener('click', (e) => {

  const ParrafoArtic = HistoryArtic.querySelector('div')
  if(ParrafoArtic){
      HistoryArtic.removeChild(ParrafoArtic)
  }else{
      HistoryArtic.innerHTML += `<div class="card">   
      <div id="carouselExampleIndicators" class="carousel slide">
           <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              
              
          </div>
      <div class="carousel-inner">
  <div class="carousel-item active">
    <img src="./img/ArticSun/ArticSun-1.jpg" class="d-block w-100" alt="Premio Artic Sun">
  </div>
  <div class="carousel-item">
    <img src="./img//ArticSun/ArticSun-1.jpg" class="d-block w-100 alto"  alt="Premio Artic Sun">
  </div>  
  
</div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
  </button>
</div>
  <div class="card-body">
      <p class="card-text"><strong>LINDA DAMA GANÓ FACIL COMO SE ESPERABA!!</strong><br>
      Fue de punta a punt, Javier Emanuel Pérez la administró a la perfección dejando al resto luchar por el segundo puesto,
      tercera victoria para la hija de The Leopard y Radio Continental</p>
  </div>        
      
  </div>`
  }
})


//CODIGO PARA PASAR DE LA PAGINA 4 A LA PAGINA 3 DE GALERIAS CON BOTON BACK

const BtnBack3 = document.querySelector('.btn-following-4');
BtnBack3.addEventListener('click', (e) => {
    ContainerGalery3.style.display = 'block';
    ContainerGalery4.style.display = 'none';
})

// Aqui comienza la pagina 5 de galerias
// Premio Storm Danger

const BtnStorm = document.querySelector('.btn-storm')
const HistoryStorm = document.querySelector('.history-storm')
const Storm = document.querySelector('.container-storm')

BtnStorm.addEventListener('click', (e) => {

  const ParrafoStorm = HistoryStorm.querySelector('div')
  if(ParrafoStorm){
      HistoryStorm.removeChild(ParrafoStorm)
  }else{
      HistoryStorm.innerHTML += `<div class="card">   
      <div id="carouselExampleIndicators" class="carousel slide">
           <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            
              
          </div>
      <div class="carousel-inner">
  <div class="carousel-item active">
    <img src="./img/StormDanger/StormDanger-1.jpg" class="d-block w-100" alt="Premio Storm Danger">
  </div>
  <div class="carousel-item">
    <img src="./img/StormDanger/StormDanger-2.jpg" class="d-block w-100 alto"  alt="Premio Storm Danger">
  </div>
  
  
</div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
  </button>
</div>
  <div class="card-body">
      <p class="card-text">Marmota</p>
  </div>        
      
  </div>`
  }
})

//Codigo para pasar de la pagina 4 a la pagina 5 de galerias con boton next

const BtnFollowing4 = document.querySelector('.next-4');
const ContainerGalery5 = document.querySelector('.container-galery-five');

BtnFollowing4.addEventListener('click', (e) => {
    ContainerGalery4.style.display = 'none';
    ContainerGalery5.style.display = 'block';

}
);
