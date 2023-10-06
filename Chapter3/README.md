# Challenge 3 : HTTP Server and Restful APi

Tugas ini bertujuan untuk mengimplementasikan http server menggunakan ExpressJs dengan menerapkan konsep restful API.

## DOWNLOAD dan EKSTRAK / CLONE REPO

Dalam repo ini terdiri dari 5 file utama:

- index.js : berisi routing dan menjadi file yang akan dijalankan
- handler.js : berisi fungsi handler yang aktif untuk mengembalikan response
- middleware : berisi fungsi untuk memastikan bahwa data yang diminta ada atau tidak
- car.js : berfungsi untuk menghimpun data dari json menjadi collection data untuk kemudian dapat dimanipulasi
- data/carsData.json : berisi data mobil dengan properti yang telah disederhanakan daripada sebelumnya yang ada pada file cars.json (data untuk tugas challenge sebelumnya)

## INSTALL DEPENDENCIES

Jalankan perintah:
```bash
npm install
```

## JALANKAN SERVER

Jalankan file index.js dengan command:
```bash
npm run start
```
atau
```bash
node index.js
```

## TESTING DENGAN POSTMAN

Gunakan port 8000 untuk mengakses.
Silahkan lakukan pengujian dengan mengirimkan request sesuai endpoint berikut:

- GET/
- GET/cars
- GET/cars/:id
- POST/cars
- PUT/cars/:id
- DELETE/cars/:id
