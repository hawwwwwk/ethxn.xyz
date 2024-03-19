FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y apache2

RUN rm /var/www/html/index.html

COPY . /var/www/html

EXPOSE 80

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]