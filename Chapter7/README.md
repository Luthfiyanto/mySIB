# Challenge 7 : Unit Testing

Tugas ini bertujuan untuk dapat melakukan unit testing dan deployment. Projek yang digunakan ini mengimplementasikan design service repository pattern dengan menerapkan fitur authentication dan authorization serta association antara user dengan car. Kemudian hasil dari API yang dibuat didokumentasikan menggunakan Swagger yang bisa diakses melalui endpoint _( https://luthfiy-binar-rental-car.up.railway.app/ )_ setelah menjalankan projek.

**Catatan** *untuk fasilitator:* <br>
Projek yang dideploy tidak menggunakan repo ini, oleh sebab root di repo ini yang tidak langsung berada di subrepo Chapter7, sehingga saya perlu men-Copy projek Chapter7 ke dalam repo terpisah dan disesuaikan agar dapat melakukan deployment. Jadi harap dimaklumi jika terdapat konfigurasi database yang belum berubah untuk repo ini.

## Database dan Schema

Pada tugas ini mengambil studi kasus rental mobil dengan desain tabel tunggal sebagaimana diagram berikut ini

![ERD](https://github.com/Luthfiyanto/mySIB/blob/main/Chapter5/data/schema.png)

## HOW TO RUN PROJECT

1. **Download atau Clone repository**
2. **Install Dependencies**<br>
   Jalankan perintah

   ```bash
   npm install
   ```

3. **Konfigurasi file**<br>
   Sesuaikan file config.json dengan database yang akan terhubung
4. **Siapkan database**<br>
   Jalankan perintah berikut untuk melakukan migrasi database:

   ```bash
   npx sequelize db:migrate
   ```

   Pastikan setiap atribut tabel user dan cars tersedia di database setelah melakukan migrasi.

   Kemudian generate seeder bila memerlukan data dummy dengan command:

   ```bash
   npx sequelize db:seed:all
   ```

   Sampai langkah ini, database seharusnya sudah terisi

5. **Jalankan Server**<br>
   File index.js akan dijalankan dengan command berikut.

   ```bash
   npm run start
   ```

   atau

   ```bash
   node index.js
   ```

   Untuk running local, Server akan berjalan pada port default 8000 dan bisa dicek dengan mengetik url 'localhost:8000'

## TESTING WITH POSTMAN

Gunakan url server \_(https://luthfiy-binar-rental-car.up.railway.app/) untuk mengakses secara langsung atau menggunakan localhost:8000 untuk yang berjalan di server local
Lakukan pengujian dengan mengirimkan request sesuai endpoint berikut:

- POST/user/register
- POST/user/admin/register
- POST/user/login
- GET/user/me

- GET/
- GET/cars
- GET/cars/:id
- POST/cars
- PUT/cars/:id
- DELETE/cars/:id

Untuk dokumentasi API lebih lengkap dapat diakses melalui:
localhost:8000/api-docs <br>
atau <br>
\_(https://luthfiy-binar-rental-car.up.railway.app/api-docs)

# Pembagian role dan access

Sebelum mengakses endpoint cars, pastikan user telah registrasi dan login untuk mendapatkan token. Token tersebut nantinya akan dikirimkan pada header authorization dengan tipe bearerToken. Ini akan menentukan akses dari setiap role.

- SUPERADMIN
  access: semua operasi
- ADMIN
  access: semua operasi kecuali untuk register admin
- MEMBER
  access: hanya bisa menampilkan data cars
