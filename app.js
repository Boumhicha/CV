document.getElementById('button1').addEventListener
('click', loadTxt);
//load txt
function loadTxt() {
  fetch('data.txt')
  .then(function(response){
    return response.text();
  })
  .then(function(data){
    console.log(data);
    document.getElementById('result').innerHTML=data;
  })
}
