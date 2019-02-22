console.log('SCRIPT START')
console.log('Declare testable functions.....................')

function LengthConverter(valNum) {
    ans=valNum/39370;
  }
  console.log('Defined LengthConverter=' + LengthConverter)
  console.log('Declare event listeners .......................')
  
  document.getElementById('clicking').addEventListener('click', function () {

    const i = parseInt(document.getElementById('inputInches').value)
    console.log('i=' + i)
    const ans ='your conversion to inches is ' + LengthConverter(i) + '.'
    document.getElementById('result').innerHTML = ans
  })
  console.log('SCRIPT END')  