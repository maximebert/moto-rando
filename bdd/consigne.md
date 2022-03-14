### nouvelle création de la BDD (14/023/2022)

à la racine du projet

-`sudo -i -u postgres`

-`psql`

-`DROP DATABASE "omoto";`

puis
-`CREATE DATABASE "omoto" OWNER omoto;`

Pour sortir : `exit` (x2)

-`psql -U omoto -d omoto -f bdd/create_db.sql;`

-`psql -U omoto -d omoto -f bdd/seed_pres.sql;`

-`psql -U omoto -d omoto -f bdd/seed2.sql;`

-`psql -U omoto -d omoto -f bdd/seed3_pictures-json.sql;`

------------------------------------------------------------------
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
