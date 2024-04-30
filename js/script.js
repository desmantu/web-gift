 const body = document.getElementsByTagName('body');
 var button = document.getElementById('open');
 const imgPertama = document.getElementById('img-1');
 const imgKedua = document.getElementById('img-2');
 const imgKetiga = document.getElementById('img-3');
 const imgKeempat = document.getElementById('img-4');
 const imgKelima = document.getElementById('img-5');
 const imgKeenam = document.getElementById('img-6');
 const imgKetujuh = document.getElementById('img-7');
 const imgKedelapan = document.getElementById('img-8');
 const imgKesembilan = document.getElementById('img-9');
 const imgKesepuluh = document.getElementById('img-10');
 const kotakButton = document.getElementById('text');
 const index = document.getElementById('index');

 button.addEventListener('click', function() {
    if(button.classList.contains('active')) {
        button.classList.remove('active');
        imgPertama.classList.remove('animate__fadeOut');
        imgKedua.classList.remove('animate__fadeOut');
        imgKetiga.classList.remove('animate__fadeOut');
        imgKeempat.classList.remove('animate__fadeOut');
        imgKelima.classList.remove('animate__fadeOut');
        imgKeenam.classList.remove('animate__fadeOut');
        imgKetujuh.classList.remove('animate__fadeOut');
        imgKedelapan.classList.remove('animate__fadeOut');
        imgKesembilan.classList.remove('animate__fadeOut');
        imgKesepuluh.classList.remove('animate__fadeOut');
        kotakButton.classList.remove('animate__fadeOut');
        index.classList.remove('animate__fadeInUp');




        console.log('tombol dinonaktifkan');
    } else {
        button.classList.add('active');
        imgPertama.classList.add('animate__fadeOut');
        imgKedua.classList.add('animate__fadeOut');
        imgKetiga.classList.add('animate__fadeOut');
        imgKeempat.classList.add('animate__fadeOut');
        imgKelima.classList.add('animate__fadeOut');
        imgKeenam.classList.add('animate__fadeOut');
        imgKetujuh.classList.add('animate__fadeOut');
        imgKedelapan.classList.add('animate__fadeOut');
        imgKesembilan.classList.add('animate__fadeOut');
        imgKesepuluh.classList.add('animate__fadeOut');
        kotakButton.classList.add('animate__fadeOut');
        index.classList.add('animate__fadeInUp');


        console.log('Tombol di aktifkan');
    }
 });

