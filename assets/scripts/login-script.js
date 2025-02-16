/*Comment : Membuat variabel untuk setiap elemen view */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/*Comment : Membuat variabel untuk memyimpan informasi email dan password */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/*Comment : menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    // Comment : Mendapatkan input email dan password pengguna dari form.
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;
  
    /* Comment : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */
    if (email == expectedEmail && password == expectedPassword){
      goToHome();
    } else {
      showPopUp();
    }
});
