document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('posterForm');
  const fileInput = document.getElementById('file_poster');
  const fileError = document.getElementById('file_error');
  const submitBtn = document.getElementById('submitPosterBtn');
  const messageDiv = document.getElementById('submitMessage');

  // GANTI URL INI DENGAN URL WEB APP GOOGLE APPS SCRIPT ANDA
  const API_URL = "https://script.google.com/macros/s/AKfycb.../exec"; 

  // Validasi ukuran file (Maks 5MB)
  fileInput.addEventListener('change', function() {
    if (this.files && this.files[0]) {
      const file = this.files[0];
      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > 5) {
        fileError.style.display = 'block';
        this.value = ''; // Reset input
      } else {
        fileError.style.display = 'none';
      }
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const file = fileInput.files[0];
    if (!file) {
      alert("Pilih file poster terlebih dahulu!");
      return;
    }

    // Ubah UI tombol saat loading
    const originalBtnText = submitBtn.innerText;
    submitBtn.innerText = "Mengirim...";
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";
    messageDiv.style.display = 'none';

    try {
      const base64Data = await convertFileToBase64(file);
      const fileFormat = file.name.split('.').pop().toUpperCase();
      const fileSizeMB = parseFloat((file.size / (1024 * 1024)).toFixed(2));

      // Buat struktur JSON sesuai permintaan
      const payload = {
        peserta: {
          nama_lengkap: document.getElementById('nama_lengkap').value,
          nik_karyawan: document.getElementById('nik_karyawan').value,
          jabatan: document.getElementById('jabatan').value,
          area_kerja: document.getElementById('area_kerja').value
        },
        karya: {
          judul_poster: document.getElementById('judul_poster').value,
          tema: document.getElementById('tema').value,
          deskripsi_singkat: document.getElementById('deskripsi_singkat').value,
          file_poster: base64Data, // Data base64 file
          file_name: file.name,
          format_file: fileFormat,
          ukuran_file_mb: fileSizeMB
        }
      };

      // Kirim ke backend (Google Apps Script)
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', // Plain text untuk menghindari preflight error CORS di GAS
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.status === "success") {
        messageDiv.innerText = "Karya berhasil dikirim! Terima kasih atas partisipasi Anda.";
        messageDiv.style.background = "rgba(46, 204, 113, 0.2)";
        messageDiv.style.color = "#2ecc71";
        messageDiv.style.border = "1px solid #2ecc71";
        messageDiv.style.display = "block";
        form.reset();
      } else {
        throw new Error(result.message || "Terjadi kesalahan pada server.");
      }

    } catch (error) {
      console.error(error);
      messageDiv.innerText = "Gagal mengirim karya: " + error.message;
      messageDiv.style.background = "rgba(230, 57, 70, 0.2)";
      messageDiv.style.color = "#e63946";
      messageDiv.style.border = "1px solid #e63946";
      messageDiv.style.display = "block";
    } finally {
      // Kembalikan tombol ke keadaan semula
      submitBtn.innerText = originalBtnText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = "1";
    }
  });

  // Helper fungsi untuk convert File ke Base64 (hanya bagian datanya saja)
  function convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      };
      reader.onerror = error => reject(error);
    });
  }
});
