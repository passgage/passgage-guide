# Passgage Screenshots & Photos

Bu klasör Passgage kurulum rehberi için gerekli tüm screenshot ve fotoğrafları organize eder.

## Klasör Yapısı

```
screenshots/
├── ios/                 # iOS kurulum screenshot'ları
├── android/             # Android kurulum screenshot'ları
└── access-tag/          # Access Tag kurulum fotoğrafları
```

## Platform-Specific Requirements

### iOS Screenshots
iOS rehberi için App Store, Settings, ve uygulama içi ekran görüntüleri gereklidir.

**Detaylar için**: [ios/README.md](ios/README.md)

**Toplam gerekli**: ~12-15 screenshot
- App Store görünümü
- iOS Settings ekranları (Privacy, Notifications)
- Passgage uygulama ekranları
- Face ID/Touch ID ekranları
- Sorun giderme ekranları

### Android Screenshots
Android rehberi için Google Play, Huawei AppGallery, Settings ve manufacturer-specific NFC ekranları gereklidir.

**Detaylar için**: [android/README.md](android/README.md)

**Toplam gerekli**: ~18-20 screenshot
- Google Play & Huawei AppGallery
- **Battery optimization ekranları** (KRİTİK!)
- Android Settings ekranları
- Passgage uygulama ekranları
- **Üretici bazlı NFC aktivasyon** (Samsung, Huawei, Xiaomi, Stock Android)
- Sorun giderme ekranları

### Access Tag Photos
Access Tag fiziksel kurulum rehberi için product photos ve installation process fotoğrafları gereklidir.

**Detaylar için**: [access-tag/README.md](access-tag/README.md)

**Toplam gerekli**: ~25-30 fotoğraf
- Paket içeriği
- Lokasyon planlama örnekleri
- **3 montaj yöntemi** (Yapışkan, Vida, Manyetik) - her biri adım adım
- QR yapılandırma
- Bakım ve sorun giderme

## Genel Teknik Özellikler

### Screenshots (iOS/Android)
- **Format**: PNG (kayıpsız) veya JPG (yüksek kalite)
- **Boyut**:
  - iOS: Minimum 750x1334px (iPhone 8)
  - Android: Minimum 1080x1920px (Full HD)
- **Max file size**: 500KB per screenshot
- **Dil**: Türkçe arayüz
- **Device**: Modern cihazlar (notch/punch-hole ile)
- **Privacy**: Kişisel bilgileri blur veya maskelemek

### Photos (Access Tag)
- **Format**: JPG
- **Boyut**: 1920x1080px (landscape) veya 1080x1920px (portrait)
- **Max file size**: 800KB per photo
- **Kalite**: Yüksek çözünürlük, net focus
- **Aydınlatma**: İyi ışıklandırılmış, doğal ışık
- **Arka plan**: Temiz, professional

## İsimlendirme Konvansiyonu

```
stepX-description-variant.ext

Örnekler:
step1-appstore.png
step2-location-permission.png
step3-login-screen.png
step5-samsung-nfc-settings.png
```

**Kurallar**:
- Küçük harf kullan
- Tire (-) ile ayır
- Step numarası ile başla
- Açıklayıcı isim ver
- Variant varsa sonuna ekle

## Optimizasyon

Tüm görseller optimize edilmeli:
- PNG için: TinyPNG veya ImageOptim
- JPG için: 85-90% quality
- Progressive JPEG kullan
- Metadata kaldır (ExifTool)

```bash
# ImageOptim (macOS)
imageoptim screenshots/ios/*.png

# TinyPNG CLI
tinypng screenshots/ios/*.png

# ImageMagick resize & optimize
mogrify -resize 1200x -quality 85 screenshots/android/*.jpg
```

## Placeholder Kullanımı

Şu anda tüm sayfalarda placeholder görseller kullanılmaktadır:
- "Screenshot Placeholder" metni
- Gri arka plan
- Icon görseli

**Gerçek screenshot/fotoğraflar eklendiğinde**:
1. İlgili klasöre yükle
2. İsimlendirme kurallarına uy
3. Optimize et
4. HTML'de placeholder'ı değiştir:
   ```html
   <!-- Eski -->
   <div class="phone-screen">
       <div class="screenshot-placeholder">
           <i class="fas fa-camera"></i>
           <p>Screenshot Placeholder</p>
       </div>
   </div>

   <!-- Yeni -->
   <div class="phone-screen">
       <img src="../screenshots/ios/step1-appstore.png"
            alt="App Store'da Passgage">
   </div>
   ```

## Ekip İçin Notlar

### Öncelik Sırası

1. **Android Battery Optimization** (EN ÖNEMLİ)
   - Kullanıcılar için kritik
   - Üretici bazlı farklılıklar var
   - `android/step2-battery-optimization.png`

2. **Android NFC Activation** (Samsung, Huawei, Xiaomi, Stock)
   - Her üretici için ayrı
   - `android/step5-*-nfc.png`

3. **Access Tag Installation Steps**
   - 3 montaj yöntemi için adım adım
   - `access-tag/step3-*.jpg`

4. **iOS & Android Login/Check-in**
   - Ortak işlevler
   - Her platform için

5. **Troubleshooting Screenshots**
   - Hata ekranları
   - Sorun giderme adımları

### Çekim İpuçları

1. **Temiz ekranlar**: Notification'ları temizle, WiFi/battery full
2. **Türkçe arayüz**: Cihaz dilini Türkçe yap
3. **Dark mode kapalı**: Light mode kullan (daha net)
4. **Gerçek veri**: Sahte/test verileri yerine gerçek Passgage verileri
5. **High res**: En yüksek çözünürlükte çek, sonra optimize et

## Contribution

Screenshot/fotoğraf eklemek için:
1. İlgili platform klasörü README'yi kontrol et
2. Gerekli screenshot'ları çek
3. Optimize et
4. PR oluştur veya doğrudan commit et

## Lisans

© 2024 Passgage. Tüm görseller Passgage mülkiyetindedir.
