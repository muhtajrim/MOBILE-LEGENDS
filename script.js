document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form standar

    // Mengambil data dari form
    const formData = new FormData(event.target);

    // Mengirim data ke Apps Script
    fetch(
      "https://script.google.com/macros/s/AKfycbwmm9L-2V-yE3oqGMdiiWqf4SwHrq-uy_dZ_9btXMjIbn8qlgu0GtiI5egs8B34M4Ve/exec",
      {
        // Ganti dengan URL Apps Script Anda
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("response").textContent = data; // Menampilkan respons dari server
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("response").textContent =
          "Terjadi kesalahan saat mengirim data.";
      });
  });
