// Cria a variavel e a assinatura do método XMLHttpRequest

var request = new XMLHttpRequest()

// Abre uma conecxão, faz a solicitação GET com a URL do endpoint

request.open('GET', 'https://api.github.com/users/mojombo', true)


request.onload = function () {  
  var data = JSON.parse(this.response);
  var statusHTML = '';
  $.each([data], function(i, status) {  
    statusHTML += '<h5 class="mo">' + status.id + '</h5>';
    statusHTML += '<h5 class="mo">' + status.login + '</h5>';
    statusHTML += '<h5 class="mo">' + status.html_url + '</h5>';
    statusHTML += '<h5 class="mo">' + status.created_at + '</h5>';
    statusHTML += '<h5 class="img"><center> <img src=' + status.avatar_url + ' alt="some text" width=60 height=40> </h5>';
   
  });  
  $('h5').html(statusHTML);
}


// encerra a solicitação

request.send();



