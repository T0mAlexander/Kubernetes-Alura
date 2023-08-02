FROM mysql
COPY backup-db.sh /
RUN chmod +x /backup-db.sh
ENTRYPOINT [ "backup-db.sh" ]