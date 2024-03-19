FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y apache2

RUN rm /var/www/html/index.html

COPY . /var/www/html

COPY ./custom.conf /usr/local/apache2/conf/custom.conf

RUN echo "Include /usr/local/apache2/conf/custom.conf" \
    >> /usr/local/apache2/conf/httpd.conf

EXPOSE 80

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]