$(window).scroll(function() {
    var scrollTop = $(this).scrollTop(); /* posição atual do scroll */
    var windowHeight = $(this).height(); /* altura da janela */
    $('.animated-img').each(function() {
      var topDistance = $(this).offset().top; /* distância da imagem ao topo */
      if (topDistance < scrollTop + windowHeight) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(-100px)');
      }
    });
  });

$(function(){

    $('h1')
    .hide()
    .delay(1000)
    .fadeIn("slow")

})

$(function(){

  $('h2')
  .hide()
  .delay(1000)
  .fadeIn("ease")

})


// fade in quando eu scrollo adicionando a classe .visible na minha div main-sec 
$(document).ready(function() {
  $(window).scroll(function() {
    $(".main-sec").each(function() {
      var topDistance = $(this).offset().top;
      var windowHeight = $(window).height();
      if (topDistance - windowHeight < $(window).scrollTop()) {
        $(this).addClass("visible");
      }
    });
  });
});

/* function para hover */
$(function(){
  $('i.fa-html5').hover(function(){
    var text = '<strong>HTML 5</strong> é a mais recente versão da linguagem de marcação usada para estruturar o conteúdo e layout de uma página da web, com novos recursos e elementos para criar sites interativos e responsivos, suporte nativo para áudio e vídeo, elementos de formulário avançados, gráficos vetoriais escaláveis e muito mais. Ele é amplamente utilizado para desenvolver sites e aplicativos da web modernos.'
    $("div.text-sobre-icon").html(text).css('opacity', '1');
    $("div.text-sobre-icon").addClass('div-text');
    $("div.text-sobre-icon").css({
      "margin":"10px",
      "padding-top":"40px"
    })
  })
})

$(function(){
  $('i.fa-css3-alt').hover(function(){
    var text = '<strong>CSS</strong> significa Cascading Style Sheets (Folhas de Estilo em Cascata) e é uma linguagem de estilo usada para descrever a apresentação de documentos HTML (ou XML). O CSS é usado para definir a aparência visual e o layout de uma página da web, separando o conteúdo HTML da apresentação visual.'
    $("div.text-sobre-icon").html(text).css('opacity', '1');
    $("div.text-sobre-icon").addClass('div-text');
    $("div.text-sobre-icon").css({
      "margin":"10px",
      "padding-top":"40px"
    })
  })
})

$(function(){
  $('i.fa-js').hover(function(){
    var text = '<strong>JavaScript</strong> é uma linguagem de programação usada principalmente para adicionar interatividade e dinamismo a sites da web. É executado no navegador do usuário e permite que os desenvolvedores criem e manipulem elementos HTML e CSS, respondam a eventos de usuário, validem formulários, criem animações, interajam com APIs externas e muito mais. Ele é uma das três principais tecnologias da web, juntamente com HTML e CSS, e é suportado por todos os principais navegadores da web.'
    $("div.text-sobre-icon").html(text).css('opacity', '1');
    $("div.text-sobre-icon").addClass('div-text');
    $("div.text-sobre-icon").css({
      "margin":"10px",
      "padding-top":"40px"
    })
  })
})


/* Function para click (mobile) */
$(function(){
  $('i.fa-html5').click(function(){
    var text = '<strong>HTML 5</strong> é a mais recente versão da linguagem de marcação usada para estruturar o conteúdo e layout de uma página da web, com novos recursos e elementos para criar sites interativos e responsivos, suporte nativo para áudio e vídeo, elementos de formulário avançados, gráficos vetoriais escaláveis e muito mais. Ele é amplamente utilizado para desenvolver sites e aplicativos da web modernos.'
    $("div.text-sobre-icon").html(text).css('opacity', '1');
    $("div.text-sobre-icon").addClass('div-text');
    $("div.text-sobre-icon").css({
      "margin":"10px",
      "padding-top":"40px"
    })
  })
})

$(function(){
  $('i.fa-css3-alt').click(function(){
    var text = '<strong>CSS</strong> significa Cascading Style Sheets (Folhas de Estilo em Cascata) e é uma linguagem de estilo usada para descrever a apresentação de documentos HTML (ou XML). O CSS é usado para definir a aparência visual e o layout de uma página da web, separando o conteúdo HTML da apresentação visual.'
    $("div.text-sobre-icon").html(text).css('opacity', '1');
    $("div.text-sobre-icon").addClass('div-text');
    $("div.text-sobre-icon").css({
      "margin":"10px",
      "padding-top":"40px"
    })
  })
})

$(function(){
  $('i.fa-js').click(function(){
    var text = '<strong>JavaScript</strong> é uma linguagem de programação usada principalmente para adicionar interatividade e dinamismo a sites da web. É executado no navegador do usuário e permite que os desenvolvedores criem e manipulem elementos HTML e CSS, respondam a eventos de usuário, validem formulários, criem animações, interajam com APIs externas e muito mais. Ele é uma das três principais tecnologias da web, juntamente com HTML e CSS, e é suportado por todos os principais navegadores da web.'
    $("div.text-sobre-icon").html(text).css('opacity', '1');
    $("div.text-sobre-icon").addClass('div-text');
    $("div.text-sobre-icon").css({
      "margin":"10px",
      "padding-top":"40px"
    })
  })
})



