export const MenjalankanNode = () => {
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
};
