console.log('SCRIPT START')
console.log('Declare testable functions.....................')

function LengthConverter(valNum) {
    return valNum/39370;
  }
  console.log('Defined LengthConverter=' + LengthConverter)
  console.log('Declare event listeners .......................')
  
  document.getElementById('clicking').addEventListener('click', function () {

    const i = parseInt(document.getElementById('inputInches').value)
    console.log('i=' + i)
    const ans ='your conversion to kilometers is ' + LengthConverter(i) + '.'
    document.getElementById('result').innerHTML = ans
  })
  console.log('SCRIPT END')  
  var request = new XMLHttpRequest();
request.open('GET', 'https://codepen.io/saikirandd/pen/PVrgNL.html');
request.onreadystatechange = function () { 
    // 4. check if the request has a readyState of 4, which indicates the server has responded (complete)
    if (request.readyState === 4) {
        // 5. insert the text sent by the server into the HTML of the 'ajax-content'
        document.getElementById('ajax').innerHTML = request.responseText;
    }
};

function sendTheAJAX() {
    request.send();
    document.getElementById('show').style.display = 'none';
}

//referred : https://www.w3schools.com/jquery/ajax_ajax.asp