# 🐙 Git Komut Rehberi (Cheatsheet)

## 📦 Temel Komutlar
| Komut | Açıklama |
|-------|----------|
| `git init` | Yeni bir Git deposu oluşturur |
| `git clone <url>` | Uzak depoyu yerel makineye kopyalar |
| `git status` | Depo durumunu gösterir (değişiklikleri listeler) |
| `git config --global user.name "Adınız"` | Global kullanıcı adı ayarlar |
| `git config --global user.email "email@ornek.com"` | Global email ayarlar |

## 📝 Değişiklik Yönetimi
| Komut | Açıklama |
|-------|----------|
| `git add <dosya>` | Belirtilen dosyayı staging alanına ekler |
| `git add .` | Tüm değişiklikleri staging alanına ekler |
| `git reset <dosya>` | Dosyayı staging alanından çıkarır |
| `git commit -m "mesaj"` | Staging'deki değişiklikleri commit'ler |
| `git commit --amend` | Son commit'i düzenler (mesaj veya dosya ekleme) |

## 🔍 Geçmişi İnceleme
| Komut | Açıklama |
|-------|----------|
| `git log` | Commit geçmişini gösterir |
| `git log --oneline` | Commit geçmişini kısa gösterir |
| `git log --graph` | Commit geçmişini grafiksel gösterir |
| `git show <commit-id>` | Belirli bir commit'in detaylarını gösterir |
| `git diff` | Staging'de olmayan değişiklikleri gösterir |
| `git diff --staged` | Staging'deki değişiklikleri gösterir |

## 🌿 Branch (Dal) Yönetimi
| Komut | Açıklama |
|-------|----------|
| `git branch` | Tüm branch'leri listeler |
| `git branch <isim>` | Yeni branch oluşturur |
| `git checkout <branch>` | Branch değiştirir |
| `git checkout -b <yeni-branch>` | Yeni branch oluşturup ona geçer |
| `git merge <branch>` | Belirtilen branch'i mevcut branch'le birleştirir |
| `git branch -d <branch>` | Branch siler |
| `git rebase <branch>` | Branch'i rebase eder |

## ☁️ Uzak Depo (Remote) İşlemleri
| Komut | Açıklama |
|-------|----------|
| `git remote -v` | Bağlı uzak depoları listeler |
| `git remote add <isim> <url>` | Yeni uzak depo ekler |
| `git push <remote> <branch>` | Commit'leri uzak depoya gönderir |
| `git pull <remote> <branch>` | Uzak depodan değişiklikleri çeker |
| `git fetch <remote>` | Uzak depodaki değişiklikleri getirir (birleştirmeden) |
| `git push -u origin <branch>` | Branch'i uzak depoya gönderir ve ilişkilendirir |

## ⏪ Geri Alma İşlemleri
| Komut | Açıklama |
|-------|----------|
| `git restore <dosya>` | Dosyadaki değişiklikleri geri alır |
| `git restore --staged <dosya>` | Dosyayı staging alanından çıkarır |
| `git reset --hard HEAD` | Tüm değişiklikleri son commit durumuna getirir |
| `git revert <commit-id>` | Belirli bir commit'i geri alır (yeni commit oluşturarak) |

## 🏷️ Tag (Etiket) Yönetimi
| Komut | Açıklama |
|-------|----------|
| `git tag` | Tüm tag'leri listeler |
| `git tag <tag-isim>` | Yeni tag oluşturur |
| `git tag -a v1.0 -m "sürüm 1.0"` | Açıklamalı tag oluşturur |
| `git push origin <tag-isim>` | Tag'ı uzak depoya gönderir |
| `git push origin --tags` | Tüm tag'leri uzak depoya gönderir |

## 🗃️ Stash (Geçici Saklama)
| Komut | Açıklama |
|-------|----------|
| `git stash` | Geçici değişiklikleri kaydeder |
| `git stash list` | Stash listesini gösterir |
| `git stash apply` | Son stash'i geri yükler |
| `git stash drop` | Son stash'i siler |
| `git stash pop` | Son stash'i geri yükler ve siler |

## 💡 Pratik İpuçları
- `git help <komut>` ile komut yardımını görüntüleyin
- Commit mesajlarını açıklayıcı ve kısa tutun
- Sık sık commit yapın (atomik commit'ler)
- `.gitignore` dosyası kullanarak gereksiz dosyaları takip etmeyin
- `git alias` kullanarak sık kullandığınız komutları kısaltabilirsiniz