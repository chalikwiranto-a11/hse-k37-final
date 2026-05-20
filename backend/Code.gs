// GANTI DENGAN ID FOLDER GOOGLE DRIVE ANDA UNTUK MENYIMPAN POSTER
var FOLDER_ID = "MASUKKAN_ID_FOLDER_GOOGLE_DRIVE_ANDA_DISINI";

// GANTI DENGAN NAMA SHEET AKTIF ANDA (Bawah kiri layar Google Sheets)
var SHEET_NAME = "Sheet1";

function doPost(e) {
  // Setup output header (CORS)
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  };

  try {
    // 1. Parsing payload JSON dari Frontend
    var data = JSON.parse(e.postData.contents);
    var peserta = data.peserta;
    var karya = data.karya;
    
    // 2. Decode Base64 & Upload ke Google Drive
    var fileUrl = "No File";
    if (karya.file_poster) {
      // Decode base64
      var byteCharacters = Utilities.base64Decode(karya.file_poster);
      
      // Ambil mimetype berdasarkan ekstensi/format_file
      var mimeType = "image/jpeg"; // default
      if (karya.format_file === "PNG") {
        mimeType = "image/png";
      }
      
      // Bikin Blob
      var blob = Utilities.newBlob(byteCharacters, mimeType, peserta.nama_lengkap + "_" + karya.file_name);
      
      // Simpan ke Drive
      var folder = DriveApp.getFolderById(FOLDER_ID);
      var driveFile = folder.createFile(blob);
      
      // Atur hak akses agar URL bisa diakses siapa saja (Opsional jika ingin preview langsung)
      // driveFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      
      fileUrl = driveFile.getUrl();
    }
    
    // 3. Simpan data ke Google Sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    var timestamp = new Date();
    
    // Sesuaikan dengan susunan Kolom di Spreadsheet Anda
    // Kolom: Timestamp | Nama Lengkap | NIK Karyawan | Jabatan | Area Kerja | Judul Poster | Tema | Deskripsi Singkat | URL Poster | Format File | Ukuran (MB)
    sheet.appendRow([
      timestamp,
      peserta.nama_lengkap,
      peserta.nik_karyawan,
      peserta.jabatan,
      peserta.area_kerja,
      karya.judul_poster,
      karya.tema,
      karya.deskripsi_singkat,
      fileUrl,
      karya.format_file,
      karya.ukuran_file_mb
    ]);
    
    // 4. Return respon sukses ke Frontend
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Data dan file berhasil disimpan."
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);
    
  } catch(error) {
    // Return respon error
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);
  }
}

// Menangani permintaan Pre-flight (OPTIONS) dari browser
function doOptions(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(headers);
}
