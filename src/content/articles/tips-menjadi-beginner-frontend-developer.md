---
title: "Tips menjadi Beginner Frontend Developer"
date: "June 20, 2023"
description: "Sebagai pemula, Anda tidak perlu memikirkan coding style. Yang terpenting cukup terapkan ketiga prinsip ini untuk segera meningkatkan skill coding anda."
category: [Career Development, Web Development]
tags: [Coding, Self-taught, Beginner, Code style]
coverImage: "/images/articles/frontend.jpg"
slug: "tips-menjadi-beginner-frontend-developer"
---

Kali ini saya akan berbagi tips sedikit mengenai pemrograman, terutama untuk kalian yang ingin belajar untuk menjadi seorang Frontend Developer anda dapat menerapkan tip sederhana ini dalam praktik pengkodean anda segera. 

<Callout>
  Tips ini berlaku untuk semua bidang pemrograman, walaupun judulnya 'Frontend Developer' secara khusus.
</Callout>

## 1. “Return Early” Instead Of Nested Conditions

Dalam pengembangan web, Anda memiliki banyak situasi di mana Anda harus memeriksa apakah kondisi tertentu terpenuhi.

Mari kita ambil contoh rute API yang memvalidasi permintaan dan mengembalikan objek pengguna:

```jsx
export const handler = async (req, res) => {
  if (req.method === 'POST' || req.method === 'OPTIONS') {
    const email = validateEmail(req.body.email);
    if (email) {
      const user = getUserByEmail(email);
      if (user) {
        return res.status(200).json({ user });
      } else {
        return res.status(404).json({ message: 'No user found' });
      }
    } else {
      return res.status(422).json({ message: 'Missing email' });
    }
  } else {
    return res.status(405).json({ message: 'Unsupported message' });
  }
};
```

Meskipun kita tidak memiliki banyak logika yang dikemas dalam fungsi ini, ini sudah terlihat agak berantakan. Secara khusus, ada dua masalah dengan kode ini:



Sulit untuk mengikuti aliran kode. Alih-alih membaca dari atas ke bawah, kita perlu membaca dari kiri ke kanan [Arrow-Anti-Pattern](http://wiki.c2.com/?ArrowAntiPattern).

Sulit untuk mengetahui else yang sesuai untuk setiap *if* . Mereka dipisahkan oleh tubuh besar pernyataan *if*.


Teknik sederhana untuk memperbaiki kode ini adalah dengan memasukkan *Return-Early-Pattern* .


*The Return-Early-Pattern* mengakhiri eksekusi fungsi ketika kondisi tidak terpenuhi. Sehingga hasil yang diharapkan dari fungsi tersebut selalu berada di paling akhir.


Jika kita menulis ulang rute API dari atas, akan terlihat seperti ini:

```jsx
export const handler = async (req, res) => {
  if (req.method !== 'POST' && !req.method !== 'OPTIONS') {
    return res.status(405).json({ message: 'Unsupported message' });
  }

  const email = validateEmail(req.body.email);
  if (!email) {
    return res.status(422).json({ message: 'Missing email' });
  }

  const user = getUserByEmail(email);
  if (!user) {
    return res.status(404).json({ message: 'No user found' });
  }

  return res.status(200).json({ user });
};
```

Dengan Return-Early-Pattern, kita dapat dengan mudah mengikuti eksekusi kode dari atas ke bawah. Karena kita menganggap jalurnya hanya memeriksa value yang hilang, we avoid nesting too many conditions.


Terakhir, sekilas kita bisa melihat hasil yang diharapkan dari fungsi di bagian paling bawah.

## 2. Writing Code For Humans

Menggeneralisasi apa yang kita lakukan di tip sebelumnya membawa kita ke prinsip kedua: tulis kode yang mudah dibaca oleh rekan kerja Anda, bukan oleh mesin.


Kedengarannya sepele, tetapi pada awalnya hal itu sangat mengubah pemikiran saya.


Ketika saya memulai pemrograman, saya selalu menganggapnya sebagai cara untuk berkomunikasi dengan komputer. Kita memberi tahu mesin apa yang harus dilakukan. Padahal kode yang kita tulis dibaca oleh rekan kerja kita - bukan oleh mesin.


Rekan kerja kita adalah orang-orang yang perlu membaca dan memahami kode tersebut. Komputer pada akhirnya mengubah semuanya menjadi 0 dan 1 dan tidak peduli dengan keterbacaan.


Mari kita ambil `groupBy` fungsi ini sebagai contoh:

```jsx
const groupBy = (arr, groupFn) =>
  arr.reduce(
    (grouped, obj) => ({
      ...grouped,
      [groupFn(obj)]: [...(grouped[groupFn(obj)] || []), obj],
    }),
    {}
  );
```

Kami dengan jelas mendemonstrasikan bahwa kami dapat menulis fungsi satu baris yang rumit untuk melakukan operasi sederhana: *take an array and group it*.


Meskipun ini mungkin membuat Anda merasa sedikit lebih senior, ini pasti membuat segalanya lebih sulit untuk dipahami bagi siapa saja yang perlu meninjau ini.


Pertimbangkan implementasi ini sebagai gantinya:

```jsx
const groupBy = (arr, groupFn) => {
  const grouped = {};
  for (const obj of arr) {
    const groupName = groupFn(obj);
    if (!grouped[groupName]) {
      grouped[groupName] = [];
    }
    grouped[groupName].push(obj);
  }
  return grouped;
};
```

Kita bisa membacanya dari atas ke bawah dan langsung tahu apa yang terjadi di setiap baris.


Ini mungkin kelihatan gak keren seperti contoh sebelumnya - benar! 
Tetapi setiap orang yang mengunjungi kembali fungsi ini di masa mendatang akan berterima kasih atas implementasi yang dapat dibaca ini.



## 3. Hiding Information Behind Functions

Ide terakhir untuk meningkatkan gaya kode Anda sebagai developer junior adalah menyembunyikan informasi yang tidak relevan di balik fungsi. Ini juga menguntungkan keterbacaan.


Jika Anda terbiasa dengan React, hook adalah contoh yang bagus untuk prinsip ini:

```jsx
import React, { useState, useEffect } from 'react';

function FriendListItem(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>{props.friend.name}</li>
  );
}
```

Di sini, kami memiliki komponen yang menampilkan item daftar dengan warna status dinamis. Meskipun kode ini dijalankan dengan sangat baik, kode ini merangkum logika yang tidak terkait langsung dengan tujuan komponen `FriendListItem`.


Jika kita mengekstrak logika dan membuat pengait khusus bernama `useFriendStatus`, kita dapat menyederhanakan komponen sebagai berikut:

```jsx
import React, { useState, useEffect } from 'react';

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>{props.friend.name}</li>
  );
}
```

Ini memiliki dua manfaat:



Kita dapat menggunakan kembali `useFriendStatus` logikanya.

Kita menyederhanakan komponen kita menjadi apa yang benar-benar relevan dengan fungsinya.


Lebih umum, prinsip menyembunyikan informasi adalah merangkum informasi yang tidak relevan di balik fungsi abstrak.


Dengan demikian, kita tidak perlu peduli dengan apa yang terjadi di dalam fungsi abstrak (detail implementasi) - kita lebih baik fokus pada tujuannya, yaitu nama fungsi (level of problem domain).
---

Saya harap tips kecil ini bermanfaat bagi Anda! Pada dasarnya, menulis kode yang lebih baik seringkali hanya tentang membuatnya lebih mudah dibaca dan mudah dipahami – untuk Anda sendiri dan orang lain.