# 🐰 Tamagotchi Tavşan Uygulaması

Bu proje, **React Native** kullanılarak geliştirilmiş basit bir **dijital evcil hayvan (Tamagotchi)** uygulamasıdır. Amaç, React Native’in temel kavramları olan **Component, Props, State ve JSX** yapılarını uygulamalı olarak kullanmaktır.

Uygulamada kullanıcı, sevimli bir tavşan ile etkileşime geçebilir ve onu **besleyerek veya onunla oynayarak** mutluluk ve açlık seviyelerini değiştirebilir.

---

## 🎯 Özellikler

* 🧩 **Component Yapısı**
  Uygulamada yeniden kullanılabilir bir `Pet` component’i bulunmaktadır.

* 📦 **Props Kullanımı**
  Evcil hayvanın **isim** ve **tür** bilgileri props aracılığıyla component’e gönderilmektedir.

* 🔄 **State Yönetimi**
  Uygulamada iki adet state bulunmaktadır:

  * `aclik`
  * `mutluluk`

* 🎮 **Kullanıcı Etkileşimi**

  * **Besle** butonu → açlık seviyesini azaltır
  * **Oyna** butonu → mutluluk seviyesini artırır

* 🐰 **Dinamik Emoji**
  Tavşanın emojisi durumuna göre değişir:

  * Çok mutluysa → mutlu emoji
  * Çok açsa → üzgün emoji

---

## 🛠 Kullanılan Teknolojiler

* React Native
* Expo
* JavaScript
* JSX

---

## 🚀 Projeyi Çalıştırma

Projeyi bilgisayarınıza klonlayın:

```id="gitclone01"
git clone https://github.com/kullaniciadi/tamagotchi-pet.git
```

Proje klasörüne girin:

```id="cd01"
cd tamagotchi-pet
```

Bağımlılıkları yükleyin:

```id="npm01"
npm install
```

Projeyi başlatın:

```id="start01"
npm start
```

Daha sonra uygulamayı **Expo Go uygulaması** veya **web tarayıcı** üzerinden görüntüleyebilirsiniz.

---

## 📸 Uygulama İçeriği

Uygulama ekranında şu bilgiler yer alır:

* Evcil hayvanın ismi
* Türü
* Açlık seviyesi
* Mutluluk seviyesi
* Besle ve Oyna butonları

---
