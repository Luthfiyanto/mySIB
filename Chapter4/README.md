# Challenge 4 : Database & Async Function

Tugas ini bertujuan untuk mengimplementasikan database menggunakan DBMS Postgre yang diintegrasikan dengan Restful API melalui ORM Sequelize.

## Database dan Schema

Pada tugas ini mengambil studi kasus rental mobil dengan desain tabel tunggal sebagaimana diagram berikut ini

![ERD](https://github.com/Luthfiyanto/mySIB/blob/main/Chapter4/data/erd.png)

## HOW TO RUN PROJECT

1. Download atau Clone repository
2. Install Dependencies
   Jalankan perintah
   
   ```bash
   npm install
   ```

3. Konfigurasi file
   Sesuaikan file config.json dengan database yang akan terhubung
4. Siapkan database
   Jalankan perintah berikut untuk melakukan migrasi database:

   ```bash
   npx sequelize db:migrate
   ```

   Pastikan kolom-kolom berikut tersedia di database setelah melakukan migrasi.
   
   - Id
   - name
   - type
   - image
   - capacity
   - rentPerDay
   - availableAt
   - createAt
   - updateAt
   
   Kemudian generate seeder bila memerlukan data dummy dengan command:
   
   ```bash
   npx sequelize db:seeder:all
   ```
   
   Sampai langkah ini, database seharusnya sudah terisi 
5. Jalankan Server
   File index.js akan dijalankan dengan command berikut.
   
   ```bash
   npm run start
   ```
   
   atau
   
   ```bash
   node index.js
   ```
   
   Server akan berjalan pada port 8000 dan bisa dicek dengan mengetik url 'localhost:8000'

## TESTING WITH POSTMAN

Gunakan url server dengan port 8000 untuk mengakses.
Lakukan pengujian dengan mengirimkan request sesuai endpoint berikut:

- GET/
- GET/cars
- GET/cars/:id
- POST/cars
- PUT/cars/:id
- DELETE/cars/:id
