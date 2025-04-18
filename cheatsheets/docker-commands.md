# 🐳 Docker Komut Rehberi

## 📦 Genel Komutlar

| Komut               | Açıklama                             |
| ------------------- | ------------------------------------ |
| `docker version`    | Docker versiyon bilgisi              |
| `docker info`       | Sistem genelinde Docker bilgileri    |
| `docker context ls` | Mevcut Docker context'lerini listele |

## 🔍 Image İşlemleri

| Komut                                  | Açıklama                              |
| -------------------------------------- | ------------------------------------- |
| `docker images` veya `docker image ls` | Image'ları listele                    |
| `docker pull <image>`                  | Docker Hub'dan image indir            |
| `docker build -t <isim> .`             | Dockerfile'dan image oluştur          |
| `docker rmi <image>`                   | Image sil                             |
| `docker history <image>`               | Image katmanlarını göster             |
| `docker image inspect <image>`         | Image detaylarını göster              |
| `docker image prune -a`                | Kullanılmayan tüm image'ları sil      |
| `docker save <image> > dosya.tar`      | Image'ı tar dosyası olarak dışa aktar |
| `docker load < dosya.tar`              | Tar dosyasından image içe aktar       |

## 🚀 Container İşlemleri

| Komut                                     | Açıklama                               |
| ----------------------------------------- | -------------------------------------- |
| `docker run <image>`                      | Container çalıştır                     |
| `docker run -d -p 8080:80 <image>`        | Arka planda çalıştır ve port yönlendir |
| `docker run --rm <image>`                 | Container durunca otomatik silinsin    |
| `docker run -it <image> bash`             | Etkileşimli terminal ile çalıştır      |
| `docker ps`                               | Çalışan container'ları listele         |
| `docker ps -a`                            | Tüm container'ları listele             |
| `docker start <container>`                | Durdurulmuş container'ı başlat         |
| `docker stop <container>`                 | Container'ı durdur                     |
| `docker restart <container>`              | Container'ı yeniden başlat             |
| `docker kill <container>`                 | Container'ı zorla durdur               |
| `docker rm <container>`                   | Container sil                          |
| `docker rename <eski> <yeni>`             | Container yeniden adlandır             |
| `docker attach <container>`               | Çalışan container'a bağlan             |
| `docker exec -it <container> <komut>`     | Container içinde komut çalıştır        |
| `docker update --memory 512M <container>` | Container kaynaklarını güncelle        |
| `docker top <container>`                  | Container'daki processleri göster      |

## 📝 Loglar ve İzleme

| Komut                                | Açıklama                                        |
| ------------------------------------ | ----------------------------------------------- |
| `docker logs <container>`            | Logları göster                                  |
| `docker logs --tail 100 <container>` | Son 100 satır log göster                        |
| `docker inspect <container>`         | Container detaylarını göster                    |
| `docker stats`                       | Container'ların gerçek zamanlı kaynak kullanımı |

## 💾 Volume ve Veri İşlemleri

| Komut                                | Açıklama                                 |
| ------------------------------------ | ---------------------------------------- |
| `docker volume ls`                   | Volume'leri listele                      |
| `docker volume create <isim>`        | Volume oluştur                           |
| `docker volume inspect <isim>`       | Volume detaylarını göster                |
| `docker volume prune`                | Kullanılmayan volume'leri sil            |
| `docker cp <container>:<yol> <host>` | Host ve container arasında dosya kopyala |

## 🌐 Ağ İşlemleri

| Komut                                        | Açıklama              |
| -------------------------------------------- | --------------------- |
| `docker network ls`                          | Ağları listele        |
| `docker network inspect <isim>`              | Ağ detaylarını göster |
| `docker network create <isim>`               | Yeni ağ oluştur       |
| `docker network connect <ağ> <container>`    | Container'ı ağa bağla |
| `docker network disconnect <ağ> <container>` | Ağ bağlantısını kes   |

## 🏷️ Image Tagleme ve Gönderme

| Komut                                | Açıklama                  |
| ------------------------------------ | ------------------------- |
| `docker tag <image> <repo>:<etiket>` | Image'a etiket ekle       |
| `docker login`                       | Docker Hub'a giriş yap    |
| `docker push <image>`                | Image'ı registry'e gönder |

## 🧹 Temizlik

| Komut                    | Açıklama                       |
| ------------------------ | ------------------------------ |
| `docker container prune` | Durdurulmuş container'ları sil |
| `docker image prune`     | Kullanılmayan image'ları sil   |
| `docker system prune`    | Tüm kullanılmayan verileri sil |
| `docker system df`       | Disk kullanımını göster        |
| `docker builder prune`   | Build cache'i temizle          |

## 🐳 Docker Compose

| Komut                                  | Açıklama                         |
| -------------------------------------- | -------------------------------- |
| `docker-compose up`                    | Servisleri başlat                |
| `docker-compose down`                  | Servisleri durdur ve kaldır      |
| `docker-compose build`                 | Servisleri yeniden oluştur       |
| `docker-compose logs`                  | Tüm servis loglarını göster      |
| `docker-compose ps`                    | Compose container'larını listele |
| `docker-compose exec <servis> <komut>` | Serviste komut çalıştır          |

## ⚙️ Diğer Faydalı Komutlar

| Komut                                    | Açıklama                                |
| ---------------------------------------- | --------------------------------------- |
| `docker port <container>`                | Container port yönlendirmelerini göster |
| `docker diff <container>`                | Container'daki değişiklikleri göster    |
| `docker commit <container> <yeni-image>` | Container'dan yeni image oluştur        |
| `docker pause/unpause <container>`       | Container'ı duraklat/devam ettir        |
| `docker scan <image>`                    | Image güvenlik taraması yap             |

## 💡 Pratik İpuçları

- `--help` parametresi tüm komutlarda çalışır (`docker run --help`)
- Container ID'lerde sadece ilk birkaç karakter yeterli (benzersiz olduğu sürece)
- `-f` parametresi birçok komutta zorlama işlemi yapar
- Modern Docker versiyonlarında `docker compose` komutu built-in olarak gelir
