# Docker-1

## Server Systems

- Docker, geliştiricilerin, sistem yöneticilerinin vb. uygulamalarını ana işletim sisteminde (yani Linux) çalıştırmak üzere bir sanal alan (konteyner olarak adlandırılır) içinde kolayca dağıtmalarına olanak tanıyan bir araçtır. Docker, kullanıcıların bir uygulamayı tüm bağımlılıklarıyla birlikte yazılım geliştirme için standart bir birime paketlemelerine olanak tanır.

- Docker, kullanıcıların bir uygulamayı tüm bağımlılıklarıyla birlikte yazılım geliştirme için standart bir birime paketlemelerine olanak tanır.

- Server Ne İşe Yarar?
  İnternet kullanımının yaygınlaşmasıyla birlikte Server’lar oldukça önemli bir konuma gelmiştir. Çünkü Server’lar olmasaydı, Web de olmazdı. Server; veri tabanı bulundurur, bir ağı yönetir ve uygulama ya da dosya paylaşımının yapılmasını sağlar. Server’lar farklı şekillerde kullanılabildiği için kullanım amacına göre özel yazılımlar bulunmaktadır.

- Server Çeşitleri Nelerdir?
  Server çeşitlerini depolama yapılarına ve kullanım amaçlarına göre iki ana başlık altında sıralayabiliriz. Bu bağlamda Depolama Yapılarına göre Server türleri şu şekildedir;

· Dedicated Server

· Cloud Server

· VPS Server

- Kullanım Amaçlarına göre Server türleri ise şu şekildedir;

· Medya Server

· Web Server

· Online Game Server

· FTP Server

· Proxy Server

· DNS Server

· E-Mail Server

· File Server


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

```sh

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
    $ docker system prune -f -a
    # Interaktif modda aç:
    $ docker run -it <imagename> sh
    # Interaktif moddan çık:
    $ exit

```
