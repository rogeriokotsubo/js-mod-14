export function changeProductsHome(){
  document.querySelector('.image1').style.backgroundImage = 'url(../assets/img/01.jpg)';
  document.querySelector('.image2').style.backgroundImage = 'url(../assets/img/02.jpg)';
  document.querySelector('.image3').style.backgroundImage = 'url(../assets/img/03.jpg)';
  document.querySelector('.image4').style.backgroundImage = 'url(../assets/img/10.jpg)';
  document.querySelector('.image5').style.backgroundImage = 'url(../assets/img/09.jpg)';
  document.querySelector('.image6').style.backgroundImage = 'url(../assets/img/06.jpg)';
  document.querySelector('.image7').style.backgroundImage = 'url(../assets/img/11.jpg)';
  document.querySelector('.image8').style.backgroundImage = 'url(../assets/img/08.jpg)';
}


export function goHome(){

return `
<section id="container-main">
<h1 class="h1-title"> 
  BOLOS DA RAFAELA.
</h1>
<div id="ctn-main"> 
  <img class="main-image" src="../assets/img/imagem1.webp">
  <div id="ctn-main-txt"> 
    <p>Bolos Especiais</p>
    <p>para Casamentos</p>
    <p>e Festas</p>
    <div id="ctn-btn">
      <a id="btn-online" >
        <div id="divlink">
            Peça aqui
        </div>
      </a>  
    </div>   
  </div>
  <img class="main-image" src="../assets/img/imagem2.webp">
</div>  
</section>

<!-- Bolos da Lia -->
<section class="ctn-cakes">
<div class="ctn-cake-bar">
  <p>BOLOS PERSONALIZADOS AO SEU GOSTO E ESTILO</p>
</div>
<div id="ctn-img-cakes"> 
  <div class="cakes-image1"> 
    <div id="ctn-btn-lia">
      <a id="btn-lia">
        <div id="divlink-lia">
            Conheça a Lia
        </div>
      </a>  
    </div> 
  </div>
  <div class="cakes-image2"> 
    <div id="ctn-btn-contact">
      <a id="btn-contact">
        <div id="divlink-contact">
            Contate-me
        </div>
      </a>  
    </div> 
  </div>
</div>  
</section>      

<!-- Carrossel -->
<section class="ctn-images-cakes">
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