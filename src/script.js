const mssg = document.querySelector('#mssg'),
      text = 'Happy Holidays! Best of health and happiness :) — Klea ❤ —',
      speed = 50;

// Dynamic typewriting 
let i = 0; 
function write() {
  if ( i < text.length ) {
    let letter = text.charAt(i);
    
    mssg.innerHTML += letter;
    
    if ( letter === '!' || letter === ')' ) {
      mssg.innerHTML += '<br />';
    }
    
    i++;
    
    setTimeout(write, speed);
  }
} 

write();

// Display action item for animation after typing ends
let animate = setTimeout( () => {
  document.querySelector('#lottie').innerHTML = '<lottie-player src="${../new_year_greet.json}"  background="transparent"  speed="1" loop  autoplay></lottie-player>';
  
}, text.length * 52);

