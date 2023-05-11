let darkmode = localStorage.getItem('darkmode');
if (darkmode == 'on')
   document.body.classList.toggle("darkmode");

function myFunction() {
   mode = localStorage.getItem('darkmode');
   if (mode == 'on')
      localStorage.setItem('darkmode', 'off');
   else
      localStorage.setItem('darkmode', 'on');
   // mode = localStorage.getItem('darkmode');
   document.body.classList.toggle("darkmode");
}
