function refresh() {
     if (!document.hasFocus()) {
         location.reload()
     } else {
         const remake = setTimeout(refresh, 10)
     }
 }

 document.addEventListener('DOMContentLoaded', function(){
     const start = setTimeout(refresh, 1000)
 });
