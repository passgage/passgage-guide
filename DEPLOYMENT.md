# Vercel Deployment Rehberi

Bu rehber, Passgage Kurulum Rehberini Vercel'e nasıl deploy edeceğinizi adım adım açıklar.

## Ön Gereksinimler

1. **Vercel Hesabı:** https://vercel.com/signup adresinden ücretsiz hesap oluşturun
2. **Git Repository:** (Opsiyonel) GitHub, GitLab veya Bitbucket hesabı

## Yöntem 1: Vercel CLI ile Deploy (Hızlı)

### 1. Vercel CLI'yi Yükleyin

```bash
npm install -g vercel
```

### 2. Vercel'e Giriş Yapın

```bash
vercel login
```

Tarayıcınızda açılan sayfadan giriş yapın.

### 3. Deploy Edin

Proje klasöründe şu komutu çalıştırın:

```bash
vercel
```

İlk deployment için birkaç soru sorulacak:
- **Set up and deploy?** → Y (Yes)
- **Which scope?** → Hesabınızı seçin
- **Link to existing project?** → N (No)
- **Project name?** → `passgage-guide` (veya istediğiniz isim)
- **In which directory is your code located?** → `./` (Enter)

Deployment tamamlandığında size bir URL verilecek:
```
https://passgage-guide.vercel.app
```

### 4. Production Deploy

Test ettikten sonra production'a almak için:

```bash
vercel --prod
```

## Yöntem 2: Vercel Dashboard ile Deploy

### 1. GitHub'a Push Edin (Önce Git Repository Oluşturun)

```bash
# Git repository'si oluşturun (henüz yoksa)
git init

# Dosyaları ekleyin
git add .
git commit -m "Initial commit: Passgage kurulum rehberi"

# GitHub'a push edin
git remote add origin https://github.com/USERNAME/passgage-guide.git
git branch -M main
git push -u origin main
```

### 2. Vercel Dashboard'a Gidin

https://vercel.com/new adresine gidin

### 3. Repository'yi İçe Aktarın

1. "Import Git Repository" seçeneğini seçin
2. GitHub hesabınıza bağlanın
3. `passgage-guide` repository'sini seçin
4. "Import" butonuna tıklayın

### 4. Proje Ayarları

- **Framework Preset:** Other (veya boş bırakın)
- **Root Directory:** `./`
- **Build Command:** (boş bırakın, statik site)
- **Output Directory:** `./`

"Deploy" butonuna tıklayın.

## Yöntem 3: Drag & Drop ile Deploy

### 1. Vercel Dashboard'a Gidin

https://vercel.com/new adresine gidin

### 2. Klasörü Sürükle-Bırak

Proje klasörünüzü doğrudan Vercel sayfasına sürükleyip bırakın.

Deployment otomatik olarak başlayacaktır.

## Deployment Sonrası

### Özel Domain Ekleme

1. Vercel Dashboard → Projeniz → Settings → Domains
2. Domain adınızı girin (örn: `guide.passgage.com`)
3. DNS kayıtlarını Vercel'in verdiği şekilde güncelleyin

### Environment Variables (İhtiyaç Halinde)

Şu an için environment variable'a ihtiyaç yok, ancak gelecekte eklemek isterseniz:

1. Vercel Dashboard → Projeniz → Settings → Environment Variables
2. Key-Value çiftleri ekleyin

### Otomatik Deploy (Git ile)

GitHub repository'si bağladıysanız:
- Her `git push` otomatik olarak yeni bir deployment tetikler
- `main` branch production'a deploy olur
- Diğer branch'ler preview URL'leri alır

## Güncelleme Yayınlama

### CLI ile:
```bash
# Değişiklikleri commit edin
git add .
git commit -m "Screenshot'lar eklendi"

# Vercel'e deploy edin
vercel --prod
```

### Git ile (Otomatik):
```bash
git add .
git commit -m "Screenshot'lar eklendi"
git push origin main
```

Vercel otomatik olarak algılayıp deploy edecektir.

## Performans Optimizasyonu

### 1. Screenshot Optimizasyonu

Screenshot'ları eklemeden önce optimize edin:

```bash
# ImageMagick ile (kurulu değilse: brew install imagemagick)
mogrify -resize 1170x2532 -quality 85 screenshots/*.png

# veya online araç kullanın: tinypng.com
```

### 2. Cache Ayarları

`vercel.json` dosyasında zaten yapılandırılmış:
- HTML: 1 saat cache
- Screenshot'lar: 24 saat cache

### 3. CDN

Vercel otomatik olarak global CDN kullanır. Ekstra ayar gerekmez.

## Monitoring ve Analytics

### 1. Vercel Analytics

```bash
# Vercel Analytics ekleyin (opsiyonel)
vercel env add NEXT_PUBLIC_VERCEL_ANALYTICS_ID
```

### 2. Google Analytics

`index.html` dosyasına Google Analytics kodu ekleyin (opsiyonel):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Sorun Giderme

### Deploy Edilmiyor?

1. **vercel.json dosyasını kontrol edin**
   ```bash
   cat vercel.json
   ```

2. **Logs'u inceleyin**
   ```bash
   vercel logs
   ```

3. **Vercel Dashboard'da hata mesajlarını kontrol edin**
   https://vercel.com/dashboard

### Screenshot'lar Görünmüyor?

1. Dosya yollarını kontrol edin (büyük/küçük harf duyarlı)
2. `screenshots/` klasörünün deploy edildiğini doğrulayın
3. Tarayıcı cache'ini temizleyin

### SSL Hatası?

Vercel otomatik SSL sağlar. 24-48 saat içinde aktif olmalıdır.

## Yararlı Komutlar

```bash
# Mevcut deployment'ları listele
vercel list

# Deployment loglarını görüntüle
vercel logs [deployment-url]

# Projeyi sil (dikkatli!)
vercel remove passgage-guide

# Domain ekle
vercel domains add guide.passgage.com

# Environment variable ekle
vercel env add

# Deployment URL'sini aç
vercel open
```

## Deployment Checklist

Deploy etmeden önce:

- [ ] Screenshot'lar eklendi mi?
- [ ] Screenshot boyutları optimize edildi mi?
- [ ] `index.html` test edildi mi? (lokal olarak)
- [ ] Hassas bilgiler (API key, şifre) yok mu?
- [ ] `vercel.json` yapılandırması doğru mu?
- [ ] `.gitignore` dosyası var mı?

Deploy sonrası:

- [ ] Deployment başarılı mı?
- [ ] Tüm sayfalar açılıyor mu?
- [ ] Screenshot'lar yüklendi mi?
- [ ] Mobil görünüm test edildi mi?
- [ ] Performans kabul edilebilir mi?

## İletişim ve Destek

Deployment ile ilgili sorun yaşarsanız:

- **Vercel Documentation:** https://vercel.com/docs
- **Vercel Support:** https://vercel.com/support
- **Passgage Destek:** deneyim@passgage.com

---

**Hazırlayan:** Claude Code
**Tarih:** 2024
**Versiyon:** 1.0
