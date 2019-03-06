$(document).ready(function(){
   let slider = $('.slider'); // bloc carrousel
   let picture = $('.slider img');
   let indexPicture = picture.length - 1; // Nombre d'image dans le carrousel
   let i = 0;
   let currentPicture = picture.eq(i);

   // Affichage uniquement de la première image
   picture.css('display', 'none');
   currentPicture.css('display', 'block');

   // function next
    $('.next').click(function(){
       i++;
       if (i > indexPicture) {
           i = 0;
       }
       picture.fadeOut(1500);
       currentPicture = picture.eq(i);
       currentPicture.fadeIn(1500);
    });

    // function prev
    $('.prev').click(function(){
        i--;
        if (i < 0) {
            i = indexPicture;
        }
        picture.fadeOut(1500);
        currentPicture = picture.eq(i);
        currentPicture.fadeIn(1500);
    });

    // function defilement automatique
    function slidePicture()
    {
        setTimeout(function(){
            if (i < indexPicture) {
                i++;
            } else {
                i = 0;
            }

            picture.fadeOut(1500);
            currentPicture = picture.eq(i);
            currentPicture.fadeIn(1500);

            slidePicture();
        }, 3000);
    }

    slidePicture();

});