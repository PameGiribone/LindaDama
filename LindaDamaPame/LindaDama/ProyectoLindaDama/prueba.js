// Gran Bretaña
const BtnGb = document.querySelector(".btn-gb");
const PhotosGb = document.querySelector(".gb");

BtnGb.addEventListener("click", () => {

    //PhotosGb es el div donde se va a crear otro div adentro mostrando la tarjeta con las fotos.
  if (PhotosGb.childElementCount > 0) {
    //Si ya hay un div adentro, no se va a crear otro div.
    //Se crea un div adentro de PhotosGb.    
    const divGb = document.createElement("div");
    //Se agrega el div creado a PhotosGb.
    PhotosGb.appendChild(divGb);
    //Se agrega el contenido al div creado, el carrusel con las imagenes y el texto.
    divGb.innerHTML = `
    <div class="card">   
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
      <img src="./img/GranBretaña/GB-3.jpeg" class="d-block w-100 alto"  alt="Premio Gran Bretaña">
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
        <p class="card-text"><strong>LINDA DAMA VOLVIÓ A SU TIRO Y A SU NIVEL PARA GANAR EN FORMA CORTA PERO CONCLUYENTE!</strong>.</p>
    </div>        
        <button class="btn btn-primary" onclick="this.parentElement.remove(); BtnGb.disabled = false;">Cerrar</button>
    </div>`;
    //Se deshabilita el botón para que no se pueda crear otro div.
    BtnGb.disabled = true;
  }
});

// Zumarán Arocena
const BtnZa = document.querySelector(".btn-za");
const PhotosZa = document.querySelector(".za");

BtnZa.addEventListener("click", () => {
    if (PhotosZa.childElementCount > 0) {
      const divZa = document.createElement("div");
      PhotosZa.appendChild(divZa);
      divZa.innerHTML = `
      <div class="card">   
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
        <img src="./img/GranBretaña/GB-3.jpeg" class="d-block w-100 alto"  alt="Premio Gran Bretaña">
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
          <p class="card-text"><strong>LINDA DAMA VOLVIÓ A SU TIRO Y A SU NIVEL PARA GANAR EN FORMA CORTA PERO CONCLUYENTE!</strong>.</p>
      </div>        
          <button class="btn btn-primary" onclick="this.parentElement.remove(); BtnGb.disabled = false;">Cerrar</button>
      </div>`;
      BtnZa.disabled = true;
    }
  });
  //Estados Unidos de América
const BtnUsa = document.querySelector(".btn-usa");
const PhotosUsa = document.querySelector(".usa");

BtnUsa.addEventListener("click", () => {
    if (PhotosUsa.childElementCount > 0) {
      const divUsa = document.createElement("div");
      PhotosUsa.appendChild(divUsa);
      divUsa.innerHTML = `
      <div class="card">   
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
        <img src="./img/GranBretaña/GB-3.jpeg" class="d-block w-100 alto"  alt="Premio Gran Bretaña">
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
          <p class="card-text"><strong>LINDA DAMA VOLVIÓ A SU TIRO Y A SU NIVEL PARA GANAR EN FORMA CORTA PERO CONCLUYENTE!</strong>.</p>
      </div>        
          <button class="btn btn-primary" onclick="this.parentElement.remove(); BtnGb.disabled = false;">Cerrar</button>
      </div>`;
      BtnUsa.disabled = true;
    }
  });


