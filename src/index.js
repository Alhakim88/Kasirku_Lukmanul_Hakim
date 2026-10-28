// console.log("Welcome Al Hakim");
// const namaProduk = "Mintak Goreng Sania 2 Liter";
// const hargaSatuan = "18500";
// const jumlahBeli = 2;

// console.log(
//   `Nama Produk adalah :${namaProduk} Total adalah : ${(hargaSatuan * jumlahBeli).toLocaleString("id-ID")}`,
// );

// // .........OBJECT.........
// const ProdukWarung = {
//   id: 1,
//   nama: "Pecel Lele",
//   kategori: "Makanan",
//   hargaBeli: 9000,
//   hargaJual: 14000,
//   stock: 3,
//   batasMin: 5,
// };
// console.log(`
//     ID PRODUCT: SKU-${ProdukWarung.id}
//     Nama Product: ${ProdukWarung.nama}
//     Kategori: ${ProdukWarung.kategori}
//     Harga Beli: Rp. ${ProdukWarung.hargaBeli.toLocaleString("id-ID")}
//     Harga Jual: Rp. ${ProdukWarung.hargaJual.toLocaleString("id-ID")}
//     stock: ${ProdukWarung.stock}`);

// // .............OBJECT DENGAN KONDISI.............
// console.log(`
//     Status: ${ProdukWarung.stock < ProdukWarung.batasMin ? "Restock" : "Tersedia"}
//     `);
// // .............LOOPING ARRAY OBJECT.............
// const daftarProduk = [
//   { nama: "Telor", harga: 25000, stock: 15 },
//   { nama: "Beras", harga: 14500, stock: 25 },
//   { nama: "Minyak Ros Brand", harga: 39000, stock: 45 },
// ];

// for (const product of daftarProduk) {
//   console.log(`
//             Nama Produk: ${product.nama},
//             Harga: ${product.harga},
//             Stock: ${product.stock}`);
// }
// console.log(daftarProduk[1]);
// //...... FUNCTION.........
// function hargaMargin(hargaJual, hargaBeli) {
//   return hargaJual - hargaBeli;
// }
// function formatRupiah(angka) {
//   return `Rp. ${angka.toLocaleString("id-ID")}`;
// }
// const product = {
//   nama: "Nasi Uduk",
//   hargaJual: 25000,
//   hargaBeli: 15000,
// };
// console.log(formatRupiah(product.hargaBeli));
// console.log(formatRupiah(product.hargaJual));
// console.log(hargaMargin(product.hargaJual, product.hargaBeli));

console.log("==================================================");
console.log("LAPORAN HARIAN POS: Toko Berkah Warung (kasirku)");
console.log("Kasir Bertugas: Lukmanul Hakim");
console.log("==================================================");

// DATA PRODUK
const daftarProduk = [
  {
    nama: "Minyak Goreng Sania 2L",
    hargaBeli: 33000,
    hargaJual: 37000,
    stock: 5,
    batasMin: 5,
  },
  {
    nama: "Beras Remos 5Kg",
    hargaBeli: 65000,
    hargaJual: 72000,
    stock: 1,
    batasMin: 5,
  },
  {
    nama: "Gula Pasir 1Kg",
    hargaBeli: 14000,
    hargaJual: 16000,
    stock: 3,
    batasMin: 5,
  },
];

// FUNCTION FORMAT RUPIAH
function formatRupiah(angka) {
  return `Rp. ${angka.toLocaleString("id-ID")}`;
}

// VARIABEL LAPORAN
let totalAset = 0;
let barangPerhatian = 0;

// LOOPING PRODUK
for (const produk of daftarProduk) {
  const margin = produk.hargaJual - produk.hargaBeli;
  const status = produk.stock <= produk.batasMin ? "Perlu Restock" : "Aman";

  // Total aset berdasarkan harga beli x stok
  totalAset += produk.hargaBeli * produk.stock;

  if (status === "Perlu Restock") {
    barangPerhatian++;
  }

  console.log(`Produk\t\t: ${produk.nama}`);
  console.log(
    `Harga Jual\t: ${formatRupiah(produk.hargaJual)} (Margin: ${formatRupiah(margin)})`,
  );
  console.log(`Stok Gudang\t: ${produk.stock} unit | Status: ${status}`);
  console.log("--------------------------------------------------");
}

// RINGKASAN LAPORAN
console.log(`Total Estimasi Aset Toko: ${formatRupiah(totalAset)}`);
console.log(`Barang Butuh Perhatian\t: ${barangPerhatian} item`);
console.log("==================================================");
