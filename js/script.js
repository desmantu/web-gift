 const body = document.getElementsByTagName('body');
 var button = document.getElementById('open');
 const imgPertama = document.getElementById('img-1');
 const imgKedua = document.getElementById('img-2');
 const imgKetiga = document.getElementById('img-3');
 const imgKeempat = document.getElementById('img-4');
 const imgKelima = document.getElementById('img-5');
 const kotakButton = document.getElementById('text');

 button.addEventListener('click', function() {
    if(button.classList.contains('active')) {
        button.classList.remove('active');
        imgPertama.classList.remove('animate__fadeOut');
        imgKedua.classList.remove('animate__fadeOut');
        imgKetiga.classList.remove('animate__fadeOut');
        imgKeempat.classList.remove('animate__fadeOut');
        imgKelima.classList.remove('animate__fadeOut');
        kotakButton.classList.remove('animate__fadeOut');



        console.log('tombol dinonaktifkan');
    } else {
        button.classList.add('active');
        imgPertama.classList.add('animate__fadeOut');
        imgKedua.classList.add('animate__fadeOut');
        imgKetiga.classList.add('animate__fadeOut');
        imgKeempat.classList.add('animate__fadeOut');
        imgKelima.classList.add('animate__fadeOut');
        kotakButton.classList.add('animate__fadeOut');


        console.log('Tombol di aktifkan');
    }
 });

