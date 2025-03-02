function nightDayHandler(self){ 
var target=document.querySelector('body');
  if (self.value==='Night') {
    target.style.backgroundColor='black';
    target.style.color = 'white';
    self.value='Day'; 
    var alist=document.querySelectorAll('a');
    var i=0;
    while(i<alist.length){
    alist[i].style.color='yellow';  
    i=i+1;
       }
     } else {
    target.style.backgroundColor='white';
    target.style.color = 'black';
    self.value='Night';
    var alist=document.querySelectorAll('a');
    var i=0;
    while(i<alist.length){
    alist[i].style.color='blue';  
    i=i+1;
       }
     }
  } 
