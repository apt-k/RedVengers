// Kritik & Saran
const feedbackForm = document.getElementById("feedback-form");
const feedbackList = document.getElementById("daftar-feedback");

feedbackForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan").value;
  const item = document.createElement("li");
  item.className = "list-group-item";
  item.innerHTML = `<strong>${nama}:</strong> ${pesan}`;
  feedbackList.appendChild(item);
  feedbackForm.reset();
});

const feedbackDummy = [
  { nama: "Salsa", pesan: "Web ini sangat membantu! 👍" },
  { nama: "Raka", pesan: "Semoga tersedia fitur lokasi donor terdekat yaa!" },
  { nama: "Gilang", pesan: "Tambahin notifikasi jadwal donor dong min" },
  { nama: "Salsa", pesan: "Kalo ada fitur live chat keren banget!" }
];
feedbackDummy.forEach((d) => {
  const item = document.createElement("li");
  item.className = "list-group-item";
  item.innerHTML = `<strong>${d.nama}:</strong> ${d.pesan}`;
  feedbackList.appendChild(item);
});

// Q&A
const faqForm = document.getElementById("faq-form");
const daftarQA = document.getElementById("daftar-qa");

// Fungsi membuat kotak Q&A
function buatKotakQA(nama, pertanyaan, jawaban = null, penjawab = null) {
  const kotak = document.createElement("div");
  kotak.className = "border-start border-danger ps-3 mb-3";

  const tanya = document.createElement("p");
  tanya.innerHTML = `<strong>${nama}:</strong> ${pertanyaan}`;
  kotak.appendChild(tanya);

  let belum = null;
  if (jawaban) {
    const jawab = document.createElement("div");
    jawab.className = "bg-light border rounded p-2";
    jawab.innerHTML = `<strong>${penjawab ?? "Jawaban"}:</strong> ${jawaban}`;
    kotak.appendChild(jawab);
  } else {
    belum = document.createElement("p");
    belum.className = "text-muted fst-italic";
    belum.innerText = "(Belum ada jawaban)";
    kotak.appendChild(belum);
  }

  const btn = document.createElement("button");
  btn.className = "btn btn-outline-danger btn-sm mt-1";
  btn.innerText = "Balas";
  btn.addEventListener("click", () => {
    btn.disabled = true;

    const input = document.createElement("input");
    input.className = "form-control my-2";
    input.placeholder = "Tulis jawaban...";

    const kirim = document.createElement("button");
    kirim.className = "btn btn-danger btn-sm mb-2";
    kirim.innerText = "Kirim";

    kirim.addEventListener("click", () => {
      const isi = input.value.trim();
      if (isi !== "") {
        const jawabanBaru = document.createElement("div");
        jawabanBaru.className = "bg-light border rounded p-2";
        jawabanBaru.innerHTML = `<strong>Jawaban:</strong> ${isi}`;
        kotak.appendChild(jawabanBaru);
        input.remove();
        kirim.remove();
        if (belum) belum.remove();
      }
    });

    kotak.appendChild(input);
    kotak.appendChild(kirim);
  });

  kotak.appendChild(btn);
  return kotak;
}

// Form submit: Tambah pertanyaan dari user
faqForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = document.getElementById("nama-penanya").value;
  const pertanyaan = document.getElementById("pertanyaan").value;
  const kotak = buatKotakQA(nama, pertanyaan);
  daftarQA.appendChild(kotak);
  faqForm.reset();
});

// Dummy Q&A dengan nama penjawab
const dummyQA = [
  {
    nama: "Tania",
    pertanyaan: "Saya baru sembuh dari flu, bisa donor ga ya?",
    jawaban: "Tunggu minimal 14 hari setelah sembuh total ya kak.",
    penjawab: "MinVengers"
  },
  {
    nama: "Yoga",
    pertanyaan: "BB aku cuma 45kg, aman nggak untuk donor?",
    jawaban: "Jangan dulu kak, minimal 50kg ya demi keselamatan.",
    penjawab: "MinVengers"
  },
  {
    nama: "Rina",
    pertanyaan: "Bisa donor pas lagi haid nggak?",
    jawaban: "Sebaiknya tunggu selesai haid dulu biar badan fit kak.",
    penjawab: "MinVengers"
  },
  {
    nama: "Dito",
    pertanyaan: "Donor darah bikin gemuk?",
    jawaban: "Mitos tuh! Donor darah nggak bikin berat badan naik.",
    penjawab: "MinVengers"
  }
];

// Tampilkan dummy ke halaman
dummyQA.forEach((d) => {
  const kotak = buatKotakQA(d.nama, d.pertanyaan, d.jawaban, d.penjawab);
  daftarQA.appendChild(kotak);
});


// Review
const reviewForm = document.getElementById("review-form");
const reviewList = document.getElementById("daftar-review");

reviewForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = document.getElementById("nama-review").value;
  const isi = document.getElementById("isi-review").value;
  const rating = document.getElementById("rating").value;

  const item = document.createElement("li");
  item.className = "list-group-item";
  item.innerHTML = `<strong>${nama}</strong> (${rating}⭐):<br>${isi}`;
  reviewList.appendChild(item);

  reviewForm.reset();
});

const reviewDummy = [
  { nama: "Andi", isi: "Donor di Redvengers cepat & ramah!", rating: 5 },
  { nama: "Bella", isi: "Tempatnya nyaman dan bersih!", rating: 4 },
  { nama: "Budi", isi: "Konfirmasi email sempat error kemarin.", rating: 3 },
  { nama: "Ciara", isi: "Donor di Redvengers sangat cepat dan ramah!", rating: 5 },
  { nama: "Beverly", isi: "Tempatnya bersih dan nyaman. Good job!", rating: 5 }
];

reviewDummy.forEach((r) => {
  const item = document.createElement("li");
  item.className = "list-group-item";
  item.innerHTML = `<strong>${r.nama}</strong> (${r.rating}⭐):<br>${r.isi}`;
  reviewList.appendChild(item);
});
