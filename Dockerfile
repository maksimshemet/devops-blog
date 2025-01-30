FROM docker.io/httpd:2.4

LABEL maintainer="Балакучі Голови Team" \
      description="Dentistry" \
      version="1.0"

# Create necessary directories
RUN mkdir -p /usr/local/apache2/htdocs && \
    mkdir -p /usr/local/apache2/conf/sites && \
    chown -R www-data:www-data /usr/local/apache2/htdocs

# Copy website files
COPY dist /usr/local/apache2/htdocs/

# # Copy Apache configuration
# COPY site.conf /usr/local/apache2/conf/sites/

# # Enable required modules
# RUN sed -i \
#     -e 's/#LoadModule rewrite_module/LoadModule rewrite_module/' \
#     -e 's/#LoadModule headers_module/LoadModule headers_module/' \
#     -e 's/#LoadModule deflate_module/LoadModule deflate_module/' \
#     -e 's/#LoadModule filter_module/LoadModule filter_module/' \
#     /usr/local/apache2/conf/httpd.conf

# # Include custom configuration
# RUN echo "Include conf/sites/site.conf" >> /usr/local/apache2/conf/httpd.conf

# Set permissions for rootless operation
RUN chown -R www-data:www-data /usr/local/apache2/conf/sites && \
    chmod -R 755 /usr/local/apache2/htdocs && \
    chmod -R 755 /usr/local/apache2/conf/sites

EXPOSE 80

CMD ["httpd-foreground"]