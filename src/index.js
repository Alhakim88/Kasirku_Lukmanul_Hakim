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
// ............................................

// import { stdin as input, stdout as output } from "node:process";
// import * as readline from "node:readline/promises";
// // console.log (MenjalankanNode());
// const rl = readline.createInterface({ input, output });
// const daftar = [
//   {
//     nama: "Teh Celup",
//     harga: 5000,
//   },
//   {
//     nama: "Coca-cola",
//     harga: 8000,
//   },
// ];

// console.table(daftar);
// let pilihYa;
// do {
//   pilihYa = await rl.question("Pilih Menu :");
//   switch (pilihYa) {
//     case "1":
//       // TAMBAH
//       const nama = await rl.question("Nama Produk : ");
//       if (nama === "") {
//         console.log(`Isi duku nama Produk!`);
//         break;
//       }
//       let harga = 0;
//       while (true) {
//         let hargaString = await rl.question("Harga Produk : ");
//         harga = Number(hargaString);
//         if (hargaString.trim() !== "" && !isNaN(harga) && harga > 0) {
//           // console.log(`Isi dulu harga atau harga tidak boleh minus!`);
//           break;
//         }
//         console.log(`Harga gagal ter Input`);
//       }
//       daftar.push({ nama, harga });
//       console.log(`Berhasil Bertambah!`);
//       // console.table(daftar);
//       break; // ..........................
//     case "2":
//       // LIHAT
//       console.table(daftar);
//       break;
//     case "3":
//       // CARI
//       const cari = await rl.question("Ketik yg dicari : ");
//       let ketemu = 0;
//       for (const d of daftar) {
//         if (d.nama.toLocaleLowerCase().includes(cari.toLocaleLowerCase())) {
//           console.table({
//             nama: d.nama,
//             harga: d.harga,
//           });
//           ketemu++;
//         }
//       }
//       if (ketemu === 0) {
//         console.log(`Data tidak ditemukan!`);
//       }
//       break;
//     case "4":
//       // KELUAR
//       console.log(`Se u by ...`);
//       break;

//     default:
//       console.log(`Pilihan tidak dikenal`);
//       break;
//   }
// } while (pilihYa !== "4");
// rl.close();
//....................................

// import { MenjalankanNode } from "./menjalankan_node.js";
// import * as readline from "node:readline/promises";
// import { stdin as input, stdout as output } from "node:process";
// // console.log(MenjalankanNode());

// const rl = readline.createInterface({ input, output });

// const daftar = [
//   {
//     nama: "Teh Celup",
//     harga: 5000,
//   },
//   {
//     nama: "Coca-cola",
//     harga: 8000,
//   },
// ];

// console.table(daftar);
// let pilihYa;
// do {
//   pilihYa = await rl.question("Pilih Menu :");
//   switch (pilihYa) {
//     case "1":
//       // TAMBAH
//       const nama = await rl.question("Nama Produk : ");
//       if (nama === "") {
//         console.log(`Isi dulu nama Produk!`);
//         break;
//       }
//       let harga = 0;
//       while (true) {
//         let hargaString = await rl.question("Harga Produk : ");
//         harga = Number(hargaString);
//         if (hargaString.trim() !== "" && !isNaN(harga) && harga > 0) {
//           break;
//         }
//         console.log(`Harga gagal ter input`);
//       }
//       daftar.push({ nama, harga });
//       console.log(`Berhasil Bertambah!`);
//       // console.table(daftar);
//       break; //---------------------------------------------------------------------------------
//     case "2":
//       // LIHAT
//       console.table(daftar);
//       break;
//     case "3":
//       // CARI
//       const cari = await rl.question("Ketik yg dicari : ");
//       let ketemu = 0;
//       for (const d of daftar) {
//         if (d.nama.toLowerCase().includes(cari.toLowerCase())) {
//           console.table({
//             nama: d.nama,
//             harga: d.harga,
//           });
//           ketemu++;
//         }
//       }
//       if (ketemu === 0) {
//         console.log(`Data tidak ditemukan!`);
//       }
//       break;
//     case "4":
//       // KELUAR
//       console.log(`Dah Lah....`);
//       break;

//     default:
//       console.log(`Pilihan tidak dikenali`);
//       break;
//   }
// } while (pilihYa !== "4");
// rl.close();
import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";
import {
  lihatData,
  tambahData,
  tampilkanMenu,
} from "./controller/productController.js";
async function jalanApk() {
  let pilihan;
  const rl = readline.createInterface({ input, output });
  do {
    tampilkanMenu();
    pilihan = await rl.question("Pilih Menu :");
    switch (pilihan) {
      case "1":
        await tambahData(rl);
        break;
      case "2":
        lihatData();
        break;
      case "3":
        await cariData(rl);
        break;
      case "4":
        console.log("Selamat tinggal...");
        break;

      default:
        console.log("Menu tidak ditemukan!");
        break;
    }
  } while (pilihan !== "4");
  rl.close();
}
jalanApk();

//.............................................
// let pilihan;
// do {
//   console.log("1 Tambah · 2 Lihat · 3 Cari · 4 Keluar");
//   pilihan = await rl.question("Pilih menu: ");
//   switch (pilihan) {
//     case "1":
//       /* tambah */ break;
//     case "2":
//       console.table(daftar);
//       break;
//     case "3":
//       /* cari */ break;
//     case "4":
//       console.log("Sampai jumpa!");
//       break;
//     default:
//       console.log("Menu tidak dikenal");
//   }
// } while (pilihan !== "4");
// rl.close();
