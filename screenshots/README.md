# Screenshot Rehberi

Bu klasör, Passgage kurulum rehberinde kullanılacak mobil uygulama ekran görüntülerini içerir.

## Gerekli Screenshot'lar

Aşağıdaki ekran görüntülerini eklemeniz gerekiyor:

### 1. App Store İndirme (`step1-appstore.png`)
- **Boyut:** 1170 x 2532 px (iPhone 13 Pro veya benzeri)
- **İçerik:** App Store'da Passgage uygulamasının indirme sayfası
- **Alternatif:** Uygulama ana ekranı

### 2. Giriş Ekranı (`step2-login.png`)
- **Boyut:** 1170 x 2532 px
- **İçerik:** Passgage giriş ekranı (kullanıcı adı ve şifre alanları)
- **Not:** Hassas bilgileri blur yapın veya örnek veriler kullanın

### 3. QR Kod Tarama (`step3-qr-scan.png`)
- **Boyut:** 1170 x 2532 px
- **İçerik:** QR kod tarayıcı ekranı açık halde
- **Not:** QR kod çerçevesi görünür olmalı

### 4. Ana Ekran / Dashboard (Opsiyonel: `step3-dashboard.png`)
- **Boyut:** 1170 x 2532 px
- **İçerik:** Uygulama ana ekranı, menü ve özellikler görünür

### 5. Konum İzni / Ayarlar (Opsiyonel: `step4-location.png`)
- **Boyut:** 1170 x 2532 px
- **İçerik:** Konum izni isteği veya ayarlar ekranı

## Screenshot Nasıl Alınır?

### iOS (iPhone)
1. Ekran görüntüsü almak istediğiniz sayfayı açın
2. Yan tuş + Ses Açma tuşuna aynı anda basın
3. Screenshot Fotoğraflar uygulamasına kaydedilir
4. Bilgisayara aktarın (AirDrop, iCloud, kablo ile)

### Android
1. Ekran görüntüsü almak istediğiniz sayfayı açın
2. Güç + Ses Kısma tuşlarına aynı anda basın
3. Screenshot Galeri'ye kaydedilir
4. Bilgisayara aktarın (USB, Google Photos)

## Dosya İsimlendirme

Screenshot dosyalarını şu formatta kaydedin:
```
step1-appstore.png
step2-login.png
step3-qr-scan.png
step3-dashboard.png
step4-location.png
```

## Boyut ve Format

- **Format:** PNG (tercih edilen) veya JPG
- **Boyut:** Minimum 1170 x 2532 px (iPhone 13 Pro çözünürlüğü)
- **Aspect Ratio:** 9:19.5 (modern akıllı telefon oranı)
- **Optimizasyon:** Yükleme hızı için dosya boyutunu 500KB altında tutun

## HTML'e Ekleme

Screenshot'ları ekledikten sonra, `index.html` dosyasında şu satırları güncelleyin:

```html
<!-- Step 1 - Screenshot Placeholder -->
<div class="screenshot-placeholder">
    <i class="fas fa-mobile-alt"></i>
    <p>Ekran görüntüsü eklenecek:<br>App Store indirme</p>
</div>
```

Bu satırı şununla değiştirin:
```html
<img src="screenshots/step1-appstore.png" alt="App Store'da Passgage uygulaması">
```

## Mockup Araçları (Opsiyonel)

Daha profesyonel görünüm için screenshot'ları telefon frame'i içinde göstermek isterseniz:

### Online Araçlar
- **Mockuphone:** https://mockuphone.com (ücretsiz)
- **Smartmockups:** https://smartmockups.com (freemium)
- **Shot Snap:** https://shotsnapp.com (freemium)

### Offline Araçlar
- **Figma:** Telefon mockup frame'leri kullanın
- **Sketch:** Apple mockup şablonları

**Not:** Mevcut `index.html` zaten telefon frame'i CSS ile oluşturduğu için, doğrudan screenshot'ları kullanabilirsiniz. Ekstra mockup aracına ihtiyaç yoktur.

## Screenshot Kalite Kontrol

Eklemeden önce kontrol edin:
- [ ] Ekran görüntüsü net ve okunabilir mi?
- [ ] Hassas bilgiler (kullanıcı adı, şifre, kişisel veriler) var mı?
- [ ] Dosya boyutu 500KB'ın altında mı?
- [ ] Dosya ismi doğru formatta mı?
- [ ] Aspect ratio doğru mu? (dikey telefon ekranı)

## Sorun mu Var?

Screenshot'ları eklerken sorun yaşıyorsanız:
1. Dosya yollarını kontrol edin (`screenshots/dosya-adi.png`)
2. Dosya isimlerinde Türkçe karakter kullanmayın
3. Tarayıcınızın cache'ini temizleyin (Ctrl/Cmd + Shift + R)
4. Console'da hata mesajı var mı kontrol edin (F12)

---

**Hazırlayan:** Claude Code
**Tarih:** 2024
