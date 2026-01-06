# Passgage Kurulum Rehberi

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://kilavuz.passgage.com)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://vercel.com)

Modern, interaktif Passgage mobil uygulama kurulum rehberi. Kullanıcılara görsel ve adım adım kurulum sürecini anlatan tek sayfalık web uygulaması.

## 🌐 Canlı Demo

**https://kilavuz.passgage.com**

## ✨ Özellikler

- 📱 **Telefon Mockup'ları:** Gerçekçi telefon frame'leri ile mobil uygulama görselleri
- 🎨 **Modern Tasarım:** Passgage.com branding ile uyumlu tasarım
- 🚀 **Gelişmiş Animasyonlar:** Float, pulse, scroll-triggered fade animasyonlar
- 📊 **İnteraktif Navigasyon:** Scroll tracking ile otomatik progress güncelleme
- 🎯 **6 Adımlı Kurulum:** İndirme, giriş, kayıt, NFC, sorun giderme, admin paneli
- 📈 **Google Analytics:** Detaylı kullanıcı davranış analizi ve custom event tracking
- 📱 **Responsive:** Mobil-first tasarım, tüm cihazlarda mükemmel görünüm
- ⚡ **Hızlı:** Tek HTML dosyası, build gerektirmez, CDN üzerinden serve edilir

## 🛠️ Teknolojiler

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS features (Grid, Flexbox, Custom Properties, Animations)
- **Vanilla JavaScript** - ES6+, Intersection Observer API
- **Google Fonts** - Plus Jakarta Sans
- **Font Awesome 6.5.1** - Icon library
- **Google Analytics 4** - Analytics & custom event tracking

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
├── index.html                          # Ana uygulama
├── passgage-kurulum-rehberi.html       # Legacy version
├── screenshots/                         # Mobil uygulama görselleri
│   └── README.md                        # Screenshot rehberi
├── CLAUDE.md                            # Claude Code dokümantasyonu
├── DEPLOYMENT.md                        # Vercel deployment rehberi
├── vercel.json                          # Vercel yapılandırması
├── .gitignore                           # Git ignore kuralları
└── README.md                            # Bu dosya
```

## 🎨 Özelleştirme

### Renkleri Değiştirme

CSS custom properties kullanılıyor, kolayca özelleştirilebilir:

```css
:root {
    --primary-red: #FF501D;
    --primary-gold: #FFD700;
    --primary-blue: #2872fa;
}
```

### İçerik Güncelleme

Tüm içerik Türkçe. `index.html` dosyasındaki ilgili bölümleri düzenleyin.

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
