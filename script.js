// Pesan saat tombol kejutan ditekan
function ucapan() {
    const pesan = document.getElementById("pesan");

    pesan.innerHTML = `
        🎉 Selamat Ulang Tahun! 🎂<br><br>
        Semoga panjang umur, sehat selalu,
        dimudahkan segala urusan, dan semua cita-citamu tercapai.
        Terima kasih sudah menjadi pribadi yang hebat.
        <br><br>
        ❤️<b>@Anugrah</b>.
    `;

    pesan.style.opacity = "1";
    pesan.style.transform = "scale(1)";
}

// Membuat balon melayang
function buatBalon() {
    const balon = document.createElement("div");

    balon.innerHTML = "🎈";
    balon.className = "balloon";

    balon.style.left = Math.random() * 100 + "vw";
    balon.style.fontSize = (30 + Math.random() * 30) + "px";
    balon.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(balon);

    setTimeout(() => {
        balon.remove();
    }, 10000);
}

// Membuat balon setiap 600ms
setInterval(buatBalon, 600);

// Efek confetti sederhana
function confetti() {
    for (let i = 0; i < 80; i++) {
        const item = document.createElement("div");

        item.innerHTML = "✨";
        item.style.position = "fixed";
        item.style.left = Math.random() * 100 + "vw";
        item.style.top = "-20px";
        item.style.fontSize = (10 + Math.random() * 20) + "px";
        item.style.transition = "4s linear";

        document.body.appendChild(item);

        setTimeout(() => {
            item.style.top = "110vh";
            item.style.transform = `rotate(${Math.random() * 720}deg)`;
        }, 50);

        setTimeout(() => {
            item.remove();
        }, 4000);
    }
}

// Jalankan confetti saat tombol diklik
document.addEventListener("DOMContentLoaded", () => {
    const tombol = document.getElementById("btnUcapan");

    if (tombol) {
        tombol.addEventListener("click", () => {
            ucapan();
            confetti();
        });
    }
});