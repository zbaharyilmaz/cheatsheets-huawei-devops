# Docker-1

## Server Systems

- Docker, geliştiricilerin, sistem yöneticilerinin vb. uygulamalarını ana işletim sisteminde (yani Linux) çalıştırmak üzere bir sanal alan (konteyner olarak adlandırılır) içinde kolayca dağıtmalarına olanak tanıyan bir araçtır. Docker, kullanıcıların bir uygulamayı tüm bağımlılıklarıyla birlikte yazılım geliştirme için standart bir birime paketlemelerine olanak tanır.

- Docker, kullanıcıların bir uygulamayı tüm bağımlılıklarıyla birlikte yazılım geliştirme için standart bir birime paketlemelerine olanak tanır.

- Physical Servers (BareMetal Servers):

  - Bilgisayar -> Yüksek donanım, özel işlemciler, özel işletim sistemleri.
  - Kurulum: zor
  - VeriTaşıma: zor
  - Maliyet: yüksek
  - Dedicated Servers

- Virtual Servers (VMs: Virtual Machines):

  - Bir fiziksel makina içinde çok sanal makina.
  - Kurulum: orta (iso image)
  - VeriTaşıma: orta
  - Maliyet: orta
  - Bir makinaden diğer makinaya geçiş zorluğu.
  - Hypervisor yazılımları -> vmware.com
  - VPS (Virtual Private Server), VDS (Virtual Dedicated Server)

- Containers:
  - Bir fiziksel/sanal makina içinde çok konteyner.
  - Kurulum: kolay (docker image)
  - VeriTaşıma: kolay
  - Maliyet: düşük
  - Tüm konteynerları aynı ortamdan yönetebilme.
  - Microservice mimarisi.
  - Container yazılımları -> docker.com

## Temel Bilgiler

- IP ve Port:
  - Default portlar -> 80 443 \* <https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers>
  - http -> 80 \* <http://clarusway.com> == <http://clarusway.com:80>
  - https -> 443 \* <https://clarusway.com> == <https://clarusway.com:443> (need SSL)

---

# Docker

## Yüklemeler

- Docker Desktop -> <https://www.docker.com/products/docker-desktop/>

  - Windows ve Macos için setup dosyası mevcut.
  - Linux sistemlere CLI üzerinden kurulum yapılabilir. -> <https://docs.docker.com/desktop/install/linux-install/>

- Docker Hub -> <https://hub.docker.com>

- VSCode Docker Extension -> <https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker>

## DOCKER

- <https://docs.docker.com/get-started/docker_cheatsheet.pdf>

```sh

    docker --version
    docker version

    docker info

    docker --help
    docker help
    docker build --help

    docker search <imagename> # search on dockerhub

```

## Docker Commands

````sh

        # Image build et:
    $ docker build .
    # Image build et ve image'a isim ver:
    $ docker build . --tag <imagename>
    $ docker build . -t <imagename>
    # Image build et ve image'a isim:sürüm ver:
    $ docker build . -t <imagename>:v2
    $ docker build . -t <imagename>:v2 --no-cache

    # Image'leri listele:
    $ docker image ls
    $ docker images
    # Image sil:
    $ docker rmi <imagename>
    $ docker rmi <imagename> -f
    # Image'leri sil (kullanılmayanlar):
    $ docker image prune -f -a
    # Image tag ekle/değiştir: (copy/paste yapar)
    $ docker tag <imagename> <newimagename>

    # Image'den Container aç:
    $ docker run <imagename>
    # Image'den Container aç ve container'a isim ver:
    $ docker run --name <containername> <imagename>

    # Container'leri listele:
    $ docker container ls
    $ docker ps
    # Container'leri listele (tümü):
    $ docker container ls -a
    $ docker ps -a
    # Container başlat/durdur:
    docker start|stop <containername>
    # Container sil:
    $ docker rm <containername>
    $ docker rm <containername> -f
    # Container'leri sil (kullanılmayanlar):
    $ docker container prune -f

    # Interaktif modda aç:
    $ docker run -it <imagename> sh
    # Interaktif moddan çık:
    $ exit

    $ docker login # Otomatik giriş (kullanıcı bilgilerini docker-desktop'tan alır)
    $ docker login -u <kullanıcı_adı> # Manuel giriş
    $ docker tag <image_name> <kullanıcı_adı>/<image_name>[:tag] # Depo ile bağlantı kur ve etiket ayarla
    $ docker push <kullanıcı_adı>/<image_name>[:tag] # Yükle
    $ docker pull <image_name> # Çek
    $ docker search <image_name> # Ara

# Pasif konteynerleri/görüntüleri/önbellekleri durdur ve sil.
$ docker system prune -a -f # Gereksiz tüm konteynerleri, görüntüleri ve önbellekleri siler

## .dockerignore

```dockerignore

*.pyc
*.pyo
*.mo
*.db
*.css.map
*.egg-info
*.sql.gz
.cache
.project
.idea
.pydevproject
.idea/workspace.xml
.DS_Store
.git/
.sass-cache
.vagrant/
__pycache__
dist
docs
env/
logs
src/{{ project_name }}/settings/local.py
src/node_modules
web/media
web/static/CACHE
stats
Dockerfile
Footer
node_modules/
npm-debug.log

# Docker Compose

* https://docs.docker.com/compose/compose-file/

/docker-compose.yml:

```yml
version: "3.9" # opsiyonel.

services:

    frontend:
        # container_name: frontend # (default:key)
        image: "docker-compose-frontend" # image_name
        build: ./frontend # Dockerize edilecek klasör (dockerfile)
        ports:
            # dış/iç port numaraları
            - 5173:5173
            - 3000:5173
            - 80:5173
        restart: on-failure # hata anında tekrar çalıştır.
        depends_on:
            # önce aşağıdakileri çalıştır.
            - backend # aşağıda tanımlandı.

    backend:
        # container_name: backend # (default:key)
        image: "docker-compose-backend" # image_name
        build: ./backend # Dockerize edilecek klasör (dockerfile)
        ports:
            # dış/iç port numaraları
            - 8000:8000
        restart: on-failure # hata anında tekrar çalıştır.

    # $ docker compose up # compose çalıştır.
    # $ docker compose up -d --build # compose daemon aç ve tekrar build et.
    # $ docker compose down # compose kapat.
     # $ docker compose down -v # compose tümünü kapat.


````
