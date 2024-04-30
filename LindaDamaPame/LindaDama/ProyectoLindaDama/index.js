// SECTION TWO

const BtnGalery = document.querySelector('.btn-galery');
const Gb = document.querySelector('.gb');
const GranBretana = document.querySelector('.granBretana');


BtnGalery.addEventListener('click', (e) => {
        if(GranBretana.classList.contains('gb')) {
        GranBretana.classList.remove('gb');
        
       GranBretana.innerHTML += `<p class="history-carrer"> <strong>LINDA DAMA VOLVIÓ A SU TIRO Y A SU NIVEL PARA GANAR EN FORMA CORTA PERO CONCLUYENTE!</strong> , 
       la defensora del STUD FIORELLA E IGNACIO largó y se pareció a la de antes de su última presentación, 
       tomó la punta, la fue a pelear GATA DE VERANO y la dejó hacer la punta pero la controló de cerca, en la recta final, 
       rápidamente de la mano de  EMANUEL PEREZ DE GRAN CONDUCCIÓN fue a buscar la punta, hizo rebotar a LOS ANGELES para liberarse, 
       disparar y ponerse a cubierto de la larga atropellada de LA FIRMANTE, que intentó pero no pudo ante la gran guapeada
       de la mejor yegua de este tiro. </p>
       <div id="carouselExample" class="carousel slide">
         <div class="carousel-inner">
           <div class="carousel-item active">
             <img src="./img/GranBretaña/GB-1.jpeg" class="d-block w-50" alt="Premio Gran Bretaña">
           </div>
           <div class="carousel-item">
             <img src="./img/GranBretaña/GB-2.jpeg" class="d-block w-50" alt="Premio Gran Bretaña">
           </div>
           <div class="carousel-item">
             <img src="./img/GranBretaña/GB-3.jpeg" class="d-block w-50" alt="Premio Gran Bretaña">
           </div>
           <div class="carousel-item">
             <img src="./img/GranBretaña/GB-4.jpeg" class="d-block w-50" alt="Premio Gran Bretaña">
           </div>
           <div class="carousel-item">
             <img src="./img/GranBretaña/GB-5.jpeg" class="d-block w-50" alt="Premio Gran Bretaña">
           </div>
           <div class="carousel-item">
             <img src="./img/GranBretaña/GB-6.jpeg" class="d-block w-50" alt="Premio Gran Bretaña">
           </div>
           <div class="carousel-item">
             <img src="./img/GranBretaña/GB-7.jpg" class="d-block w-50" alt="Premio Gran Bretaña">
           </div>
           <div class="carousel-item">
             <img src="./img/GranBretaña/GB-8.jpg" class="d-block w-50" alt="Premio Gran Bretaña">
           </div>
           
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Next</span>
         </button>
       </div> `


}else {
    GranBretana.classList.add('gb');    
    GranBretana.innerHTML = '';

}


});
//Desplazamiento de Zumaran hacia abajo cuando se da click en btn de carrera superior(clasico gran bretaña)
const ZumaranTxt = document.querySelector('.zumaran');
const ZumaranBtn = document.querySelector('.btn-zumaran');
const ZumaranArocena = document.querySelector('.zumaran-arocena');

BtnGalery.addEventListener('click', (e) => {
    if(ZumaranTxt.classList.contains('zumaran')) {
        ZumaranTxt.classList.remove('zumaran');
        ZumaranBtn.classList.remove('btn-zumaran');
    }else {
        ZumaranTxt.classList.add('zumaran');
        ZumaranBtn.classList.add('btn-zumaran');
    }
});

// Desplazamiento de comentarios y fotos del clasico Zumaran
ZumaranBtn.addEventListener('click', (e) => {
        if(ZumaranArocena.classList.contains('za')) {
        ZumaranArocena.classList.remove('za');

        ZumaranArocena.innerHTML += `<p class="history-carrer"> <strong>LINDA DAMA VOLVIÓ A SU TIRO Y A SU NIVEL PARA GANAR EN FORMA CORTA PERO CONCLUYENTE!</strong> , 
        la defensora del STUD FIORELLA E IGNACIO largó y se pareció a la de antes de su última presentación, 
        tomó la punta, la fue a pelear GATA DE VERANO y la dejó hacer la punta pero la controló de cerca, en la recta final, 
        rápidamente de la mano de  EMANUEL PEREZ DE GRAN CONDUCCIÓN fue a buscar la punta, hizo rebotar a LOS ANGELES para liberarse, 
        disparar y ponerse a cubierto de la larga atropellada de LA FIRMANTE, que intentó pero no pudo ante la gran guapeada
        de la mejor yegua de este tiro. </p>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./img/GranBretaña/GB-1.jpeg" class="d-block w-50" alt="Premio Gran Bretaña">
            </div>
            <div class="carousel-item">
              <img src="./img/GranBretaña/GB-2.jpeg" class="d-block w-50" alt="Premio Gran Bretaña">
            </div>
            <div class="carousel-item">
              <img src="./img/GranBretaña/GB-3.jpeg" class="d-block w-50" alt="Premio Gran Bretaña">
            </div>
            <div class="carousel-item">
              <img src="./img/GranBretaña/GB-4.jpeg" class="d-block w-50" alt="Premio Gran Bretaña">
            </div>
            <div class="carousel-item">
              <img src="./img/GranBretaña/GB-5.jpeg" class="d-block w-50" alt="Premio Gran Bretaña">
            </div>
            <div class="carousel-item">
              <img src="./img/GranBretaña/GB-6.jpeg" class="d-block w-50" alt="Premio Gran Bretaña">
            </div>
            <div class="carousel-item">
              <img src="./img/GranBretaña/GB-7.jpg" class="d-block w-50" alt="Premio Gran Bretaña">
            </div>
            <div class="carousel-item">
              <img src="./img/GranBretaña/GB-8.jpg" class="d-block w-50" alt="Premio Gran Bretaña">
            </div>
            
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>` 
        } else {
                ZumaranArocena.classList.add('za');
                ZumaranArocena.innerHTML = '';
                
        }



});   
        
        
        
        
        
        
        
        





   