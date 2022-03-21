// Cria a variavel e a assinatura do método XMLHttpRequest

var request = new XMLHttpRequest()

// Abre uma conecxão, faz a solicitação GET com a URL do endpoint

request.open('GET', 'https://api.github.com/users/mojombo', true)


request.onload = function () {  
  var data = JSON.parse(this.response);
  var statusHTML = '';
  $.each([data], function(i, status) {  
    statusHTML += '<h5 class="mo">ID : ' + status.id + '</h5>';
    statusHTML += '<h5 class="mo">NOME : ' + status.login + '</h5>';
    statusHTML += '<h5 class="mo">URL DO GITHUB : ' + status.html_url + '</h5>';
    statusHTML += '<h5 class="mo">CONTA DESDE : ' + status.created_at.replace(/(\d*)-(\d*)-(\d*).*/, '$1-$2-$3').split('-').reverse().join('/') + '</h5>';
    statusHTML += '<h5 class="mo">IMG : <center> <img id="img" src=' + status.avatar_url + ' alt="some text" width=60 height=40> </h5>';
   
  });  
  $('h5').html(statusHTML);
}


// encerra a solicitação

request.send();



