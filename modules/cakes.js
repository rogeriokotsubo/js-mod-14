export function changeProductsCakes(){
  document.querySelector('.image1').style.backgroundImage = 'url(./assets/img/01.jpg)';
  document.querySelector('.image2').style.backgroundImage = 'url(./assets/img/04.jpg)';
  document.querySelector('.image3').style.backgroundImage = 'url(./assets/img/05.jpg)';
  document.querySelector('.image4').style.backgroundImage = 'url(./assets/img/06.jpg)';
  document.querySelector('.image5').style.backgroundImage = 'url(./assets/img/07.jpg)';
  document.querySelector('.image6').style.backgroundImage = 'url(./assets/img/08.jpg)';
  document.querySelector('.image7').style.backgroundImage = 'url(./assets/img/01.jpg)';
  document.querySelector('.image8').style.backgroundImage = 'url(./assets/img/04.jpg)';
}

export function goCakes(){
  return `
  <section id="container-main">
  <h1 class="h1-title"> 
    BOLOS.
  </h1>
  <div id="ctn-main"> 
    <img class="main-image-prod" src="./assets/img/08.jpg">
  </div>  
</section>

<!-- Carrossel -->
<section class="ctn-images-cakes-prod">
  <span class="txt-instagram">Siga-me no Instagram</span>
  <div id="ctn-images"> 
    <div class="image1">
      <div class="txt-hover1"> 
        @wix: #wix,<br />
        #website<br />
        #freewesite,<br />
        websitetemplate,<br />
        #wix.com
      </div>
    </div>
    <div class="image2">
      <div class="txt-hover2"> 
        @wix: #wix,<br />
        #website<br />
        #freewesite,<br />
        websitetemplate,<br />
        #wix.com
      </div>
    </div>
    <div class="image3">
      <div class="txt-hover3"> 
        @wix: #wix,<br />
        #website<br />
        #freewesite,<br />
        websitetemplate,<br />
        #wix.com
      </div>
    </div>
    <div class="image4">
      <div class="txt-hover4"> 
        @wix: #wix,<br />
        #website<br />
        #freewesite,<br />
        websitetemplate,<br />
        #wix.com
      </div>
    </div>
    <div class="image5">
      <div class="txt-hover5"> 
        @wix: #wix,<br />
        #website<br />
        #freewesite,<br />
        websitetemplate<br />
      </div>
    </div>
    <div class="image6">
      <div class="txt-hover6"> 
        @wix: #wix,<br />
        #website<br />
        #freewesite,<br />
        websitetemplate<br />
      </div>
    </div>
    <div class="image7">
      <div class="txt-hover7"> 
        @wix: #wix,<br />
        #website<br />
        #freewesite,<br />
        websitetemplate<br />
      </div>
    </div>
    <div class="image8">
      <div class="txt-hover8"> 
        @wix: #wix,<br />
        #website<br />
        #freewesite,<br />
        websitetemplate<br />
      </div>
    </div>
  </div>  
</section> 

<!-- Contato     -->
<section class="ctn-email">
  <span class="txt-sign">Assine a minha newsletter</span>
  <input type="email" class="input-email" required placeholder="Insira seu email aqui*">
  <div id="ctn-btn-sign">
    <a id="btn-sign">
      <div id="divlink-sign">
          Inscrever-se
      </div>
    </a>  
  </div>
</section> 
`;
}