for(var i = 1; i < 1001; i++){ 
var li = document.createElement('li');
li.textContent=i;
if(i%16 == 0){
 li.textContent='16の倍数';
}
 else if(i%2 == 0){
  li.textContent='2の倍数';
 }
  else if(i%8 == 0){
  li.textContent='8の倍数';
 }
 
  
  document.getElementById('list').appendChild(li);
  
  
 }

 
