// ════════════════════════════════════════════════
    //  KONFIGURASI — GANTI NOMOR WA HSE OFFICER DI SINI
    // ════════════════════════════════════════════════
    const HSE_WA_NUMBER_OBSERVASI = '6285388881989'; // Form Laporan Observasi
    const HSE_WA_NUMBER_SECURITY = '6281250406463'; // Form Security Daily Activity (Silakan ganti dengan nomor PIC)
    const HSE_WA_NUMBER_SCAFFOLDING = '6285388881989'; // Form Scaffolding Daily Activity (Silakan ganti dengan nomor PIC)
    const HSE_WA_NUMBER_NIGHTSHIFT = '6285388881989'; // Form Night Shift Activity (Silakan ganti dengan nomor PIC)
    //  Format: 62 + nomor tanpa angka 0 di depan
    //  Contoh: 0812-3456-7890 → 6281234567890
    // ════════════════════════════════════════════════

    function submitToWhatsApp(e) {
      e.preventDefault();

      const nama = document.getElementById('f-name').value.trim();
      const hp = document.getElementById('f-phone').value.trim() || 'Tidak dicantumkan';
      const lokasi = document.getElementById('f-location').value.trim();
      const dept = document.getElementById('f-dept').value || 'Tidak disebutkan';
      const kategori = document.getElementById('f-category').value;
      const risiko = document.getElementById('f-risk').value;
      const waktu = document.getElementById('f-datetime').value;
      const deskripsi = document.getElementById('f-desc').value.trim();
      const tindakan = document.getElementById('f-action').value.trim() || 'Belum ada tindakan';
      const urgent = document.getElementById('f-urgent').checked;

      // Format tanggal
      const tgl = waktu ? new Date(waktu).toLocaleString('id-ID', {
        day: '2-digit', month: 'long', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
      }) : 'Tidak disebutkan';

      // Susun pesan WA
      const urgentLine = urgent ? '\n🚨 *STATUS: MENDESAK — TINDAKAN SEGERA DIPERLUKAN!*\n' : '';

      const pesan = `${urgentLine}
🛡️ *LAPORAN OBSERVASI HSE*
${'─'.repeat(30)}

👤 *Pelapor:* ${nama}
📞 *Kontak:* ${hp}
🏢 *Departemen:* ${dept}
📅 *Waktu:* ${tgl}

📍 *Lokasi:* ${lokasi}
🏷️ *Kategori:* ${kategori}
${risiko ? `⚠️ *Tingkat Risiko:* ${risiko}` : ''}

📝 *Deskripsi Kejadian:*
${deskripsi}

🛠️ *Tindakan Sementara:*
${tindakan}

${'─'.repeat(30)}
_Laporan dikirim melalui Portal HSE_
_${new Date().toLocaleString('id-ID')}_
`.trim();

      // Encode dan buka WA
      const encoded = encodeURIComponent(pesan);
      const waUrl = `https://wa.me/${HSE_WA_NUMBER_OBSERVASI}?text=${encoded}`;

      // Animasi tombol
      const btn = document.getElementById('wa-submit-btn');
      btn.innerHTML = '⏳ Sedang Membuka WhatsApp…';
      btn.disabled = true;

      window.open(waUrl, '_blank');

      setTimeout(() => {
        btn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        ✅ WhatsApp Berhasil Dibuka!`;
        btn.style.background = '#128c7e';

        // Reset form setelah 4 detik
        setTimeout(() => {
          document.getElementById('wa-observation-form').reset();
          document.getElementById('f-datetime').value = new Date().toISOString().slice(0, 16);
          btn.innerHTML = `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Kirim Laporan via WhatsApp`;
          btn.style.background = '#25d366';
          btn.disabled = false;
        }, 4000);
      }, 600);
    }

    // Set default datetime ke sekarang
    document.getElementById('f-datetime').value = new Date().toISOString().slice(0, 16);

    function switchSafetyTab(tabId) {
      // Update Tab Buttons
      document.querySelectorAll('.safety-tab-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');

      // Toggle Form Contents
      document.querySelectorAll('.safety-form-content').forEach(content => {
        content.style.display = 'none';
      });
      if (tabId === 'observasi') {
        document.getElementById('form-observasi').style.display = 'block';
      } else if (tabId === 'security') {
        document.getElementById('form-security').style.display = 'block';
      } else if (tabId === 'scaffolding') {
        document.getElementById('form-scaffolding').style.display = 'block';
      } else if (tabId === 'nightshift') {
        document.getElementById('form-nightshift').style.display = 'block';
      }
    }

    function submitSecurityToWhatsApp(e) {
      e.preventDefault();

      const nama = document.getElementById('sec-name').value.trim();
      const position = document.getElementById('sec-position').value.trim();
      const rawDate = document.getElementById('sec-date').value;
      const location = document.getElementById('sec-location').value.trim();
      const shift = document.getElementById('sec-shift').value;

      const supervise = document.getElementById('sec-supervise').value;
      const attendance = document.getElementById('sec-attendance').value;
      const vendor = document.getElementById('sec-vendor').value;

      const gate = document.getElementById('sec-gate').value.trim();
      const yard = document.getElementById('sec-yard').value.trim();
      const patrol = document.getElementById('sec-patrol').value.trim();

      const issues = document.getElementById('sec-issues').value.trim() || 'Tidak ada masalah';

      const tglObj = rawDate ? new Date(rawDate) : new Date();
      const tglFormatted = tglObj.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });

      const pesan = `🛡️ *SECURITY DAILY ACTIVITY REPORT*
${'─'.repeat(30)}

👤 *Nama Lengkap:* ${nama}
🛡️ *Position:* ${position}
📅 *Tanggal:* ${tglFormatted}
📍 *Location:* ${location}
⏱️ *Shift:* ${shift}

📋 *Manpower Summary:*
• Total Manpower Supervise: ${supervise}
• Worker Attendance Today: ${attendance}
• Contractor / Vendor: ${vendor}

📝 *Daily Activities:*
🚪 _Gate Security:_
${gate}

🏗️ _Security Yard 2:_
${yard}

🚶 _Security Patrol:_
${patrol}

⚠️ *Observation & Issues:*
${issues}

${'─'.repeat(30)}
_Dikirim melalui Portal HSE Security_
_${new Date().toLocaleString('id-ID')}_
`.trim();

      const encoded = encodeURIComponent(pesan);
      const waUrl = `https://wa.me/${HSE_WA_NUMBER_SECURITY}?text=${encoded}`;

      const btn = document.getElementById('wa-security-submit-btn');
      btn.innerHTML = '⏳ Sedang Membuka WhatsApp…';
      btn.disabled = true;

      window.open(waUrl, '_blank');

      setTimeout(() => {
        btn.innerHTML = `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Kirim Laporan via WhatsApp
        `;
        btn.disabled = false;
        document.getElementById('wa-security-form').reset();
      }, 3000);
    }

    function submitScaffoldingToWhatsApp(e) {
      e.preventDefault();

      const nama = document.getElementById('scaf-name').value.trim();
      const position = document.getElementById('scaf-position').value.trim();
      const rawDate = document.getElementById('scaf-date').value;
      const shift = document.getElementById('scaf-shift').value;

      const activity = document.getElementById('scaf-activity').value.trim();
      const status = document.getElementById('scaf-status').value;
      const manpower = document.getElementById('scaf-manpower').value;
      const reason = document.getElementById('scaf-reason').value.trim() || 'Tidak ada alasan khusus';

      const tglObj = rawDate ? new Date(rawDate) : new Date();
      const tglFormatted = tglObj.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });

      const pesan = `🏗️ *SCAFFOLDING DAILY ACTIVITY REPORT*
${'─'.repeat(30)}

👤 *Nama Lengkap:* ${nama}
👷 *Position:* ${position}
📅 *Date:* ${tglFormatted}

⏱️ *Daily Activity (${shift})*
• *Activity:* ${activity}
• *Status:* ${status}
• *ManPower:* ${manpower}
• *Reason:* ${reason}

${'─'.repeat(30)}
_Dikirim melalui Portal HSE Scaffolding_
_${new Date().toLocaleString('id-ID')}_
`.trim();

      const encoded = encodeURIComponent(pesan);
      const waUrl = `https://wa.me/${HSE_WA_NUMBER_SCAFFOLDING}?text=${encoded}`;

      const btn = document.getElementById('wa-scaffold-submit-btn');
      btn.innerHTML = '⏳ Sedang Membuka WhatsApp…';
      btn.disabled = true;

      window.open(waUrl, '_blank');

      setTimeout(() => {
        btn.innerHTML = `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Kirim Laporan via WhatsApp
        `;
        btn.disabled = false;
        document.getElementById('wa-scaffolding-form').reset();
      }, 3000);
    }

    function submitNightShiftToWhatsApp(e) {
      e.preventDefault();

      const nama = document.getElementById('night-name').value.trim();
      const position = document.getElementById('night-position').value.trim();
      const rawDate = document.getElementById('night-date').value;
      const activity = document.getElementById('night-activity').value.trim();
      const team = document.getElementById('night-team').value;
      const area = document.getElementById('night-area').value;
      const condition = document.getElementById('night-condition').value;
      const remarks = document.getElementById('night-remarks').value.trim();

      const tglObj = rawDate ? new Date(rawDate) : new Date();
      const tglFormatted = tglObj.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });

      const pesan = `🌙 *NIGHT SHIFT ACTIVITY REPORT*
${'─'.repeat(30)}

👤 *Nama Lengkap:* ${nama}
👷 *Position:* ${position}
📅 *Date:* ${tglFormatted}

📝 *Activity:* 
${activity}

👥 *Team:* ${team}
📍 *Area Condition:* ${area}
🔎 *Condition:* ${condition}
💬 *Remarks:* ${remarks}

${'─'.repeat(30)}
_Dikirim melalui Portal HSE_
_${new Date().toLocaleString('id-ID')}_
`.trim();

      const encoded = encodeURIComponent(pesan);
      const waUrl = `https://wa.me/${HSE_WA_NUMBER_NIGHTSHIFT}?text=${encoded}`;

      const btn = document.getElementById('wa-nightshift-submit-btn');
      btn.innerHTML = '⏳ Sedang Membuka WhatsApp…';
      btn.disabled = true;

      window.open(waUrl, '_blank');

      setTimeout(() => {
        btn.innerHTML = `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Kirim Laporan via WhatsApp
        `;
        btn.disabled = false;
        document.getElementById('wa-nightshift-form').reset();
      }, 3000);
    }