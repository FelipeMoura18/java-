// função auxilia para retornar true quando a tela for memor que 980px
 
function isMobile(){
    return window.innerWidth <= 980;
};
 
//==============
// Menu Lateral
//=============
 
// trazendo o menu lateral
const sidebar = document.getElementById("sidebar");
//selecionando a area principal do conteudo
const content =  document.getElementById("content");
//seleciona o botão e abre o menu lateral
const menuToggleBtn = document.getElementById("menuToggleBtn");
//seleiocna o botão de fechar qye abre para o mobile
const closeSidebarBtn = document.getElementById("closeSidebarBtn");
//traz o fundo escuro quando ha a arbetura do menu
const overlay = document.getElementById("overlay");
 
 
//========================================
// funções de funcionamento do menu mobile
//========================================
 
function openSidebarMobile() {
//adicionar a classe que rece o menu
    sidebar.classList.add("open");
    // TRAZ O OVERLAY
    overlay.classList.add("show");
    //impedir a rolagem da tela do fundo
    document.body.classList.add("no-scroll");
 
};
 
function closeSidebarMobile(){
    //removendo  a classe que rece o menu
    sidebar.classList.remove("open");
    // esconde O OVERLAY
    overlay.classList.remove("show");
    //libera a rolagem da pagina
    document.body.classList.remove("no-scroll");      
};
 
//=========================================
// funções de funcionamento do menu desktop
//=========================================
 
function toggleSidebarDesktop() {
    //o mobile é recolhido ou expandido
    sidebar.classList.toggle("collapsed");
    //ajusta o conteudo do site principal
    content.classList.toggle("expanded")
}
 
 
 
 
 
//=========================================
// CONSTRUÇÃO DA LÓGICA DO ABRIR E FECHAR
//=========================================
 
 
function handleMenuToggle(){
if (isMobile()){
    if (sidebar.classList.contains("open")){
        closeSidebarMobile();
    }else {
        openSidebarMobile()
    }
}else{
    toggleSidebarDesktop();
}
};
 
 
 
//=========================================
// EVENTOS DO MENU
//=========================================
 
 
//Adiciona o evento para abertura do menu
menuToggleBtn.addEventListener("click", handleMenuToggle);
 
//Adiciona o evento para fechamento do menu via botão
closeSidebarBtn.addEventListener("click", closeSidebarMobile);
//Adiciona 'o event,o de fechamento clicando no overlay(fora)
overlay.addEventListener("click",closeSidebarMobile);
 
 
 
 


////==============================
//              MODAL
///===============================

const openGeneralModalBtn = document.getElementById ("openGeneralModalBtn");

const modal = document.getElementById("modal");


 const modalTitle = document.getElementById("modalTitle");

 const modalText = document.getElementById("modalText");

  const closeModalBtn = document.getElementById("closeModalBtn");

  const closeModalFooterBtn = document.getElementById("closeModalFooterBtn");

  ////==============================
//     Função pricipal  MODAL
///===============================

function openModal(title, text){
    modalTitle.textContent= title;
    modalText.textContent= text;
    modal.classList.add("show");
    document.body.classList.add("no-scroll");

};

function closeModal(){
    modal.classList.remove("show");
    document.body.classList.remove("no-scroll");

};


 ////==============================
////        Eventos  MODAL
///===============================

openGeneralModalBtn.addEventListener("click", function (){
  
    openModal(
               "Projeto de revisão",
               "esse projeto foi pensado para realizar a revisão de javascript com foco em interações comuns do front-end: busca, modal, carrosel, menu laterL E CARDS"


    );
});


closeModalBtn.addEventListener("click", closeModal);


closeModalFooterBtn.addEventListener("click", closeModal);

 ////==============================
//// MODAL DOS CARDS
///===============================

const openCardModalButtons = document.querySelectorAll(".open-card-modal");

openCardModalButtons.forEach(
    function(button){
           button.addEventListener("click", function(){
           const card = button.closest(".card");
           const title = card.querySelector("h4").textContent;
           const text = card.querySelector("p").textContent;

           openModal(title, text);

           });
        });

////==============================
//// Barra de busca 
///===============================

const searchInput = document.getElementById("searchInput");

const card = document.querySelectorAll(".card");

const emptyState= document.getElementById("emptyState");

searchInput.addEventListener("input", function(){

    const term = searchInput.value.toLowerCase().trim();
      let visibleCard = 0;

      card.forEach(function(cards){
           const title = cards.querySelector("h4").textContent.toLowerCase();
      
      if(title.includes(term)){
        cards.classList.remove("hidden-card");
        visibleCard++;
      } else {
        cards.classList.add("hidden-card");
      }
      
        });

        if(visibleCard===0){
            emptyState.classList.add("show");
        }else{
            emptyState.classList.remove("show");
        }
});


////==============================
//// Carrossel de slides
///===============================


const carouselImage = document.getElementById("carouselImage");
const carouselTitle = document.getElementById("carouselTitle");
const carouselText = document.getElementById("carouselText");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const slides =[
    {
        image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
        title:"revisão prática com JavaScripit",
        text:"Um exemplo simples para trabalhar com eventos, funções, arrays e manipulação de DOM"
    },
    {
        image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
        title:"CÓDIGO QUE PODE SER REAPROVEITADO",
        text:"A estrura visual "
    },
     {
        image:"https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1400&q=80",
        title:"CONSTRUÇÃO POR ETAPAS",
        text:"PODEMOS DESENVOLVER CADA RECURSO SEPARADAMENTE E DEPOIS INTEGRAR TUDO NO MESMO OBJETO"
    }
];

let currentSlide = 0;

function renderSlide(){
 const slide = slides[currentSlide];

 carouselImage.src = slide.image;


 carouselImage.alt=slide.title;
  carouselTitle.textContent=slide.title;
  carouselText.textContent=slide.text;
};

nextBtn.addEventListener("click", function(){
      currentSlide++;

      if(currentSlide>=slides.length){
        currentSlide=0;
      }
      renderSlide();
});


prevBtn.addEventListener("click", function(){
    currentSlide--;

    if(currentSlide<0){
        currentSlide=slides.length -1;
    };
    renderSlide();
});

////==============================
//// Fechar tecla esc
///===============================

document.addEventListener("keydown", function(event){
                if(event.key==="Escape"){
                    closeModal();
                    if(isMobile() && sidebar.classList.contains("open")){
                        closeSidebarMobile();
                    };
                };
});

renderSlide();

////==============================
//// Accordeeon - perguntas frequentes
///===============================

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(function(item) {
    const questionBtn = item.querySelector(".faq-question");
    questionBtn.addEventListener("click", function() {
        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
            }
        });
        item.classList.toggle("active");
    });
});