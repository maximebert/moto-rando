### création de la bdd

à la racine du projet

-`sudo -i -u postgres`

-`psql`

-`CREATE ROLE omoto WITH LOGIN PASSWORD 'omoto';`

-`CREATE DATABASE "omoto" OWNER omoto;`

Pour sortir : `exit` (x2)

-`psql -U omoto -d omoto -f bdd/create_db.sql;`

-`psql -U omoto -d omoto -f bdd/seed_pres.sql;`

-`psql -U omoto -d omoto -f bdd/seed2.sql;`

### modif du .env dans le dossier back

PORT=3000
PGHOST=localhost
PGUSER=omoto
PGPASSWORD=omoto
PGDATABASE=omoto
