# Passgage Kurulum Rehberi

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://kilavuz.passgage.com)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://vercel.com)

Modern, interaktif Passgage kurulum rehberi. Kullanıcılara platform bazlı (iOS, Android, Access Tag) görsel ve adım adım kurulum sürecini anlatan çok sayfalık web uygulaması.

## 🌐 Canlı Demo

**https://kilavuz.passgage.com**

## ✨ Özellikler

- 🎯 **Çok Yollu Yapı:** iOS, Android ve Access Tag için ayrı rehber sayfaları
- 📱 **Platform-Specific:** Her platform için özelleştirilmiş talimatlar ve görsel rehber
- 🎨 **Modern Tasarım:** Passgage.com branding ile uyumlu, platform-spesifik renkler
- 🚀 **Gelişmiş Animasyonlar:** Float, pulse, scroll-triggered fade animasyonlar
- 📊 **İnteraktif Navigasyon:** Scroll tracking ile otomatik progress güncelleme
- 📈 **Google Analytics:** Detaylı kullanıcı davranış analizi ve platform-specific event tracking
- 📱 **Responsive:** Mobil-first tasarım, tüm cihazlarda mükemmel görünüm
- ⚙️ **Modüler Yapı:** Paylaşımlı CSS/JS assets ile kolay bakım
- 🔧 **İOS Özellikleri:** Face ID, otomatik NFC, Safari-specific troubleshooting
- 🤖 **Android Özellikleri:** Battery optimization, manufacturer-specific NFC paths, MIUI/OneUI support
- 🏷️ **Access Tag:** Fiziksel kurulum, 3 montaj yöntemi, bakım ve troubleshooting

## 🛠️ Teknolojiler

- **HTML5** - Semantic markup
- **Tailwind CSS 3.x** - Utility-first CSS framework (CDN)
- **CSS3** - Custom animations and complex components
- **Vanilla JavaScript** - ES6+, Intersection Observer API
- **Google Fonts** - Plus Jakarta Sans
- **Font Awesome 6.5.1** - Icon library
- **Google Analytics 4** - Analytics & custom event tracking

### CSS Mimarisi (Hybrid Approach)

Bu proje **Tailwind CSS + Custom CSS** hybrid yaklaşımı kullanır:

- **Tailwind CDN** (~60-70%): Layout, spacing, typography, colors, simple components
- **Custom CSS** (~30-40%): Complex animations, pseudo-elements, state management

**Neden Hybrid?**
- ✅ Zero build process (CDN kullanımı)
- ✅ Hızlı development ve kolay bakım
- ✅ Complex components için custom CSS esnekliği
- ✅ Mobile-first responsive design
- ✅ Platform-specific branding kolaylığı

## 🚀 Hızlı Başlangıç

### Lokal Olarak Çalıştırma

```bash
# Repository'yi clone edin
git clone https://github.com/passgage/passgage-guide.git
cd passgage-guide

# Tarayıcıda açın
open index.html

# veya Python server ile
python3 -m http.server 8000
# http://localhost:8000 adresine gidin
```

### Screenshot Ekleme

1. Mobil uygulama screenshot'larını çekin
2. `screenshots/` klasörüne kaydedin
3. Detaylı rehber için `screenshots/README.md` dosyasına bakın

## 📁 Dosya Yapısı

```
passgage-guide/
├── index.html                          # Landing page (Hero + 3 seçim kartı) + Tailwind CDN
├── ios.html                            # iOS kurulum rehberi (6 adım) + Tailwind CDN
├── android.html                        # Android kurulum rehberi (6 adım) + Tailwind CDN
├── access-tag.html                     # Access Tag kurulum rehberi (5 adım) + Tailwind CDN
├── index-backup.html                   # Legacy single-page version
├── assets/
│   ├── css/
│   │   ├── animations.css              # Keyframe animations (@keyframes)
│   │   └── custom-components.css       # Complex components (progress-nav, accordion, phone-mockup)
│   └── js/
│       ├── common.js                   # Analytics, scroll effects
│       └── navigation.js               # Progress tracking
├── screenshots/
│   ├── ios/                            # iOS screenshots (11 screenshots) + README
│   ├── android/                        # Android screenshots (11 screenshots) + README
│   ├── access-tag/                     # Access Tag photos + README
│   └── README.md                       # Screenshot guide
├── CLAUDE.md                           # Claude Code documentation (updated)
├── DEPLOYMENT.md                       # Vercel deployment guide
├── vercel.json                         # Vercel configuration
├── .gitignore                          # Git ignore rules
└── README.md                           # This file
```

### CSS Architecture

**Tailwind CDN Configuration (in each HTML `<head>`)**:
- Custom color palette (iOS black/gray, Android green, Access Tag blue)
- Custom shadows (soft, medium, strong, card, phone)
- Custom animations (float, pulse-slow, fade-in-up, slide-in-left/right)
- Custom font sizes (display, hero)
- Custom spacing utilities

**custom-components.css** (Complex components kept as custom CSS):
- `.progress-nav` - Progress navigation with state management
- `.phone-mockup`, `.phone-frame` - Phone screenshot display with pseudo-elements
- `.accordion` - Collapsible content with toggle logic
- `.hero-bg`, `.hero-grid` - Hero background effects
- `.gradient-text` - Brand gradient text effect
- `.nfc-message-box` - Android NFC activation notice
- `.warning-box` - Critical warning messages
- `.manufacturer-badge` - Samsung/Huawei/Xiaomi/Google badges
- `.settings-path` - iOS/Android settings navigation paths

## 📋 Sayfa Yapısı

### Landing Page (index.html)
- Hero section ile giriş
- 3 platform seçim kartı:
  - **iOS** (black/gray gradient) → ios.html
  - **Android** (green gradient) → android.html
  - **Access Tag** (blue gradient) → access-tag.html
- Features overview
- Contact & footer

### iOS Rehberi (ios.html)
6 adımlı kurulum ak\u0131\u015f\u0131:
1. Download - App Store
2. Permissions - iOS Settings paths
3. Login - Face ID/Touch ID
4. Check-in Methods
5. NFC Setup - Otomatik (kurulum gerekmez)
6. Troubleshooting - Safari, GPS, iCloud

### Android Rehberi (android.html)
6 adımlı kurulum ak\u0131\u015f\u0131:
1. Download - Google Play & Huawei AppGallery
2. Permissions - **Battery optimization** (kritik!)
3. Login - Fingerprint auth
4. Check-in Methods
5. NFC Setup - Manuel (Samsung, Huawei, Xiaomi, Stock Android)
6. Troubleshooting - Battery, Play Services, MIUI/OneUI

### Access Tag Rehberi (access-tag.html)
5 adımlı fiziksel kurulum:
1. Paket İçeriği - Unboxing, specs, tools
2. Lokasyon Planlama - Height, visibility, environment
3. Fiziksel Montaj - 3 yöntem (yapışkan, vida, manyetik)
4. QR Yapılandırma - Admin panel setup
5. Bakım & Sorun Giderme - Maintenance schedule, troubleshooting

## 🎨 Özelleştirme

### Renkleri Değiştirme

Tailwind configuration (her HTML dosyasının `<head>` bölümünde):

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'passgage-red': '#FF501D',
                'passgage-gold': '#FFD700',
                'android-green': '#3ddc84',
                'android-dark': '#073042',
                'ios-black': '#1d1d1f',
                'ios-gray': '#86868b',
                'tag-blue': '#2872fa',
                'tag-navy': '#1a5490',
            },
        },
    },
}
```

### Tailwind Utility Kullanımı

**Layout & Spacing**:
```html
<div class="max-w-4xl mx-auto px-6 py-20">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Content -->
    </div>
</div>
```

**Colors & Gradients**:
```html
<div class="bg-gradient-to-br from-android-green to-android-dark text-white">
    <h2 class="text-neutral-900">Title</h2>
</div>
```

**Responsive Design**:
```html
<div class="text-lg md:text-xl lg:text-2xl">
    <!-- Mobile: lg, Tablet: xl, Desktop: 2xl -->
</div>
```

### İçerik Güncelleme

Tüm içerik Türkçe. İlgili HTML dosyalarını (index.html, ios.html, android.html, access-tag.html) düzenleyin.

### Yeni Component Ekleme

1. **Basit components için**: Tailwind utilities kullanın
2. **Kompleks components için**: `custom-components.css` dosyasına ekleyin
3. **Animasyonlar için**: `animations.css` dosyasında `@keyframes` tanımlayın

## 📊 Analytics

Google Analytics 4 entegre edilmiştir:

- **Tracking ID:** `G-374JCV17P7`
- **Dashboard:** https://analytics.google.com

### Takip Edilen Custom Events

1. `download_click` - App store indirme butonları
2. `navigation_click` - Progress step navigasyonu
3. `faq_open/faq_close` - Accordion etkileşimleri
4. `contact_click` - İletişim e-postası tıklamaları
5. `cta_click` - Hero CTA butonları
6. `scroll_depth` - Sayfa okuma derinliği (25%, 50%, 75%, 100%)
7. `external_link` - Dış link tıklamaları

## 🚀 Deployment

### Vercel (Otomatik)

Bu repository Vercel ile bağlantılı. Her `git push` otomatik deployment tetikler.

```bash
# Manuel deployment
vercel --prod
```

Detaylı deployment rehberi için `DEPLOYMENT.md` dosyasına bakın.

## 🤝 Katkıda Bulunma

Bu açık kaynak bir Passgage projesidir. Katkılarınızı bekliyoruz!

1. Bu repository'yi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

## 📄 Lisans

© 2024 Passgage. Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Website:** https://passgage.com
- **Destek:** deneyim@passgage.com
- **Repository:** https://github.com/passgage/passgage-guide

## 🙏 Teşekkürler

- **Design:** Passgage Design Team
- **Development:** Passgage Development Team
- **Tool Used:** [Claude Code](https://claude.ai/code)

---

**Made with ❤️ by Passgage Team**
