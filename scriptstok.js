const form = document.getElementById('filterForm');
const table = document.getElementById('stokTable');
const tbody = table.querySelector('tbody');

const dataStok = [
  { goldar: "A", kota: "Yogyakarta", rhesus: "Positif", jumlah: 25 },
  { goldar: "A", kota: "Yogyakarta", rhesus: "Negatif", jumlah: 10 },
  { goldar: "A", kota: "Solo", rhesus: "Positif", jumlah: 30 },
  { goldar: "B", kota: "Bandung", rhesus: "Positif", jumlah: 20 },
  { goldar: "O", kota: "Surabaya", rhesus: "Negatif", jumlah: 5 },
  { goldar: "AB", kota: "Semarang", rhesus: "Positif", jumlah: 15 }
];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const selectedGoldar = document.getElementById('goldar').value;
  const selectedKota = document.getElementById('city').value;

  const filteredData = dataStok.filter(item => 
    item.goldar === selectedGoldar && item.kota === selectedKota
  );

  tbody.innerHTML = '';

  if (filteredData.length > 0) {
    filteredData.forEach(item => {
      const row = `
        <tr>
          <td>${item.goldar}</td>
          <td>${item.kota}</td>
          <td>${item.rhesus}</td>
          <td>${item.jumlah}</td>
        </tr>
      `;
      tbody.insertAdjacentHTML('beforeend', row);
    });
  } else {
    tbody.innerHTML = `
      <tr>
        <td colspan="4">Data tidak ditemukan.</td>
      </tr>
    `;
  }

  table.style.display = 'table';
});