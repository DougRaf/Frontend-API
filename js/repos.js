// Cria a variavel e a assinatura do método XMLHttpRequest

var request = new XMLHttpRequest()

// Abre uma conecxão, faz a solicitação GET com a URL do endpoint

request.open('GET', 'https://api.github.com/users/mojombo/repos', true)

request.onload = function () {
    var data = JSON.parse(this.response);
    var statusHTML = '';
    $.each(data, function (i, status) {
        statusHTML += '<tr>';
        statusHTML += '<td>' + status.id + '</td>';
        statusHTML += '<td>' + status.name + '</td>';
        statusHTML += '<td>' + status.url + '</td>';    
        statusHTML += '</tr>';
    });
    $('tbody').html(statusHTML);
}

// encerra a solicitação

request.send();