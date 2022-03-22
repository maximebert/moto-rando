BEGIN;

DROP TABLE IF EXISTS "user", "motorbike", "district", "picture", "itinerary";
--setting up the structure

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "alias" TEXT NOT NULL UNIQUE,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "presentation" TEXT,

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "district" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "latitude" INT,
    "longitude" INT ,
    "zoom" INT NOT NULL,

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "itinerary" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hour" INT NOT NULL DEFAULT 1,
    "minute" INT NOT NULL DEFAULT 1,
    "highway" BOOLEAN,
    "kilometer" INT NOT NULL,
    "curve" INT NOT NULL,
    "trace" TEXT,

    "user_id" int REFERENCES "user"("id"),
    "district_id" int REFERENCES "district"("id"),

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "motorbike" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    "user_id" int REFERENCES "user"("id"),

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "picture" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL,
  "description" TEXT,
  "link" TEXT NOT NULL,

  "user_id" int REFERENCES "user"("id"),
  "motorbike_id" int REFERENCES "motorbike"("id"),
  "itinerary_id" int REFERENCES "itinerary"("id"),

  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);


INSERT INTO "district" ("name", "latitude", "longitude", "zoom")
VALUES
('Auvergne-Rhône-Alpes', 45, 5, 8),
('Bourgogne-Franche-Comté', 47, 5, 8),
('Bretagne', 48, -2, 8),
('Centre-Val de Loire', 47, 2, 8),
('Corse', 42, 9, 8),
('Grand Est', 48., 5, 8),
('Hauts-de-France', 49, 2, 8),
('Île-de-France', 48, 2, 8),
('Normandie', 49, 0, 8),
('Nouvelle-Aquitaine', 45, 0, 8),
('Occitanie', 43., 1, 8),
('Pays de la Loire', 48, 0, 8),
('Provence-Alpes-Côte dAzur', 44, 5, 8),
('Toute la France', 47, 2, 6);

INSERT INTO "user" ("alias", "email", "password", "presentation")
VALUES
('marc13', 'm.mammmrc@email.fr', '$2b$10$IzG.uHBC1e73YX7AJZxRLODjFYjbMxSXHKznCrMYrJPFv/kn676rG', 'Venant de Narbonne je suis passioné d emoto depusi tout petit'),
('fabio22', 'q.fabimmmo@email.com', '$2b$10$IzG.uHBC1e73YX7AJZxRLODjFYjbMxSXHKznCrMYrJPFv/kn676rG', 'Salut je suis fabio je viens de Rome et je suis arrivé en France depuis 5 ans, quel beau pays !'),
('johanne005', 'z.johmmman@yahoo.pt', '$2b$10$Mp5CAkKzDdFSWlwgBIZm3eYI46KN8ywfm7edEqAvg3YERM6iqKmje', 'bonjour, je suis de gap , il me tarde de découvrir de nouvelles routes de montagnes'),
('jeanjean00006', 'harlmmeydu77@gmail.com', '$2b$10$ZaWEOcTpCNRY83./p0evmev3FBMHPL1xCWM36Eo0yeKek4Ctauje6', ' salut, motard regulier je pars en balade tout les weeks end'),
('maurice13200', 'popeymme13@gmail.com', '$2b$10$/1V85CxsfGd4hJLQH8Fc0.w2hSeQEJuKcKmjZi1UDddwgyuF5vPo.', 'Salut, jeanjean motard depuis 35 ans jai participé au paris dakard en 91 et maintenant je cherche des petites balades sympa près de Nice'),
('keKe93', 'kevinbmmg7@gmail.com', '$2b$10$oi10rWV8Qwphtk2C2X4J0.IVHGXCrG6.t0EBDeHMI8idFKrus3nDW', 'Hello, kevin de paris, jadore me ballader la nuit au coeur de paris à fond!');

INSERT INTO  "motorbike" ("brand", "model", "description", "user_id")
VALUES
('KTM', '790 Duke', 'Full origine, ma moto est la version noir et orange, avec un ajout de liseret orange sur les jantes', 1),
('Honda', 'CBR900RR', 'Moto Vintage, avec déco HRC, pot Devil et commandes reculées', 2),
('Kawasaki', 'Z900', 'Serie spécial 50th anniversary, Total look rouge', 3),
('harley davidson', 'sportster s', 'La Sportster™ S ouvre le premier chapitre d’un tout nouveau livre de la saga Sportster. Descendante d’une lignée apparue en 1957 qui a dominé la compétition, cette nouvelle-née a été repensée pour balayer les normes d’aujourd’hui.', 5),
('Yamaha','R1M','model de course', 6),
('Harley Davidson','road king','un petit bijou couleur métallique', 4);

INSERT INTO "itinerary" ("title", "description", "hour", "minute", "highway", "kilometer", "curve", "trace", "district_id", "user_id")
VALUES
('circuit par les gorges du Verdon', 'En partant de Palut sur verdon, profitez des gorges du verdon en revenant par la route de la crete et le super restaurant du chalet de la maline',  02, 30, FALSE, 206, 3, NULL , 13 ,1),
('saintes maries de la mer', 'venez découvrir le village des saintes marie de la mer lieux de pélerinage des gens du voyage au coeur de la camargue!', 00, 45, FALSE , 30, 3, NULL, 13, 6),
('abaye de frigolet', 'Depuis Avignon, Venez découvrir cette manifique abbaye du XIIe siècle dans un vallon sauvage au milieu des pins', 01, 00, FALSE , 30, 3 , NULL , 13, 4),
('Montpellier-Toulouse', 'Roadtrip, à faire sur plusieurs jours entre amis, de montpellier à toulouse en passant par Narbonne, Carcassonne, et castelnaudary. Un plaisir pour les yeux et pour les papilles!', 02, 49, TRUE, 250, 1, NULL, 11, 3),
('Vin de la vallée du rhone', 'En partant de beaume de venise, suivez la route des grands vin de la vallée du rhone', 48, 00, TRUE , 300, 2 , NULL , 13, 2),
('Mont saint michel', 'balade autour du lac de brennilis, avec magnifique vu sur le mont saint michel', 02, 00, FALSE , 50, 3 , NULL , 3, 1),
('Villages en Alsace', 'Découvrir les plus beaux village en Alsace ', 02, 00, FALSE , 180, 3 , NULL , 6, 1),
('les dunes du pilat', 'Depuis Arcachon tout en suivant la mer découvrez les Dunes du Pilat', 01, 30, FALSE , 100, 3 , NULL , 10, 5),
('Au coeur de la corse', 'En partant par ajaccio passez par corte et calvi pour un roadtrip au coeur de la Corse (attention aux coup de fusil) ', 05, 00, FALSE , 450, 3 , NULL , 5, 5),
('Les monuments Parisiens', 'tour eiffel, notre dame, arc de triomphe, louvre ... touts les monuments parisiens ', 05, 00, FALSE , 450, 3 , NULL , 8, 6),
('DES VIRAGES !', 'Bonjour, suite à une recherche méticuleuse du meilleur trajet de balade possible, jen ai trouvé une pas trop mal avec des beaux virages, quelque endroit sympa et surtout de quoi bien samuser en solo ou à plusieurs. amusez vous bien et v à tous',  03, 30, FALSE, 177, 5, NULL , 13 ,1),
('ROADTRIP 9 -10 JOURS MONTAGNES', 'Au départ de lIDF direction Vosges route des cretes , Jura Suisse , les lacs et cols célèbres, Italie par le Stelvio et lacs de Come et Majeur , retour France par Aoste la Thuile , un bout de la route des grandes Alpes jusqua Annecy et retour IDF', 48, 45, TRUE , 1900, 3, NULL, 13, 2),
('TRANSPYRÉNÉENNE', 'De lAtlantique à la Méditerranée par les cols des Pyrénées', 15, 39, FALSE , 881.88, 3 , NULL , 11, 4),
('VAL DE LOIRE', 'Entre Loire et châteaux. Visite de la Cité Royale de Loches, un peu moins connue que les illustres châteaux bordant la Loire, mais qui vaut le déplacement. Un arrêt dans le petit village de Thésée ou se trouve les imposants vestiges d’un site gallo-romain', 0, 29, TRUE, 206, 1, NULL, 4, 5),
('HAUTE NORMANDIE DE PARIS EN 3 JOURS', 'Les incontournables en 3 jours depuis Paris.Le vexinLe plateau de cauLa cote.Les bords de seine et traversees en bac.e', 11, 00, TRUE , 640, 2 , NULL , 9, 2),
('ROUTE NAPOLÉON - BORD DE MER - VALLÉE DU RHÔNE', 'Route Napoléon - Bord de mer - vallée du Rhône en deux jours. Le retour peut se faire par la route Napoléon en passant par les gorges du Verdon depuis Pertuis. Ravitaillement tout les 120-140 km', 19, 57, TRUE , 1090, 3 , NULL , 13, 3),
('LILLE - CIRCUIT CAROLE', 'Itinéraire de ballade pour aller au circuit Carole, autrement que par lautoroute ', 05, 24, FALSE , 286, 3 , NULL , 8, 3),
('LAC DE CARCÈS AU DÉPART AIX', 'Au départ dAix-en-Provence je vous propose une escapade en arrière pays Varois, pour rejoindre le lac de Carcès et profiter de la vue sur des routes (relativement) peu fréquentées où les virolos sont nombreux et les arrêts bucoliques faciles. ', 03, 27, FALSE , 286, 2 , NULL , 13, 4),
('BALADE EN TERRE DES VOLCANS - 3° ET 4° JOURNÉES', 'Nous quittons notre Provence ensoleillée pour aller user nos pneus sur les belles routes dAuvergne.Notre but : gravir le Puy-de-Dôme. ', 04, 21, FALSE , 267, 5 , NULL , 1, 2),
('VERCORS DES VIRAGES', 'Cette balade moto de 215.2 km seffectue en 03h33 environ. Elle traverse la région : Auvergne-Rhône-Alpes et les départements : Drôme, Isère.', 03, 33, FALSE , 215, 5 , NULL , 1, 2);

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/verdon.geojson'
WHERE "id" = 1;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/saintesMarie.geojson'
WHERE "id" = 2;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/frigolet.geojson'
WHERE "id" = 3;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/toulouse.geojson'
WHERE "id" = 4;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/rhone.geojson'
WHERE "id" = 5;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/saintMichel.geojson'
WHERE "id" = 6;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/alsace.geojson'
WHERE "id" = 7;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/pilat.geojson'
WHERE "id" = 8;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/corse.geojson'
WHERE "id" = 9;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/paris.geojson'
WHERE "id" = 10;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/virage.geojson'
WHERE "id" = 11;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/roadtrip9jours.geojson'
WHERE "id" = 12;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/transpyreneene.geojson'
WHERE "id" = 13;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/valdeloire.geojson'
WHERE "id" = 14;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/normandie.geojson'
WHERE "id" = 15;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/napoleon.geojson'
WHERE "id" = 16;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/lille.geojson'
WHERE "id" = 17;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/lac.geojson'
WHERE "id" = 18;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/volcan.geojson'
WHERE "id" = 19;

UPDATE "itinerary" SET "trace" = 'http://localhost:3000/geoJson/vercors.geojson'
WHERE "id" = 20;


-- Insertion des données dans la table picture

INSERT INTO "picture" ("title", "description", "link", "user_id", "itinerary_id")
  VALUES
  ('village_1', 'joli village en alsace', 'http://localhost:3000/images/village_1.jpg', 1, 7),
  ('village_2', 'joli village en alsace', 'http://localhost:3000/images/village_2.jpg', 1, 7),
  ('village_3', 'jolie village en alsace', 'http://localhost:3000/images/village_3.jpg', 1, 7),
  ('village_4', 'jolie village en alsace', 'http://localhost:3000/images/village_4.jpg', 1, 7),

  ('corse_1', 'Ile de beauté', 'http://localhost:3000/images/corse_1.jpg', 5, 9),
  ('corse_2', 'Ile de beauté', 'http://localhost:3000/images/corse_2.jpg', 5, 9),
  ('corse_3', 'Ile de beauté', 'http://localhost:3000/images/corse_3.jpeg', 5, 9),

  ('frigolet_1', 'Abbaye de Frigolet', 'http://localhost:3000/images/frigolet_1.jpg', 4, 3),
  ('frigolet_2', 'Abbaye de Frigolet', 'http://localhost:3000/images/frigolet_2.jpg', 4, 3),
  ('frigolet_3', 'Abbaye de Frigolet', 'http://localhost:3000/images/frigolet_3.jpg', 4, 3),
  ('frigolet_4', 'Abbaye de Frigolet', 'http://localhost:3000/images/frigolet_4.jpg', 4, 3),

  ('haute-normandie_1', 'Paysages de Normandie', 'http://localhost:3000/images/haute-normandie_1.jpg', 2, 15),
  ('haute-normandie_2', 'Paysages de Normandie', 'http://localhost:3000/images/haute-normandie_2.jpg', 2, 15),
  ('haute-normandie_3', 'Paysages de Normandie', 'http://localhost:3000/images/haute-normandie_3.jpg', 2, 15),

  ('carces_1', 'Lac de Carcès', 'http://localhost:3000/images/carces_1.jpg', 4, 18),
  ('carces_2', 'Lac de Carcès', 'http://localhost:3000/images/carces_2.jpg', 4, 18),
  ('carces_3', 'Lac de Carcès', 'http://localhost:3000/images/carces_3.jpg', 4, 18),

  ('lille', 'Lac de Carcès', 'http://localhost:3000/images/lille.jpg', 3, 17),

  ('arc', 'Monuments Parisiens', 'http://localhost:3000/images/arc.jpg', 6, 10),
  ('eiffel', 'Monuments Parisiens', 'http://localhost:3000/images/eiffel.jpeg', 6, 10),
  ('louvre', 'Monuments Parisiens', 'http://localhost:3000/images/louvre.jpg', 6, 10),
  ('notredame', 'Monuments Parisiens', 'http://localhost:3000/images/notredame.jpg', 6, 10),
  ('pantheon-paris', 'Monuments Parisiens', 'http://localhost:3000/images/pantheon-paris.jpg', 6, 10),

  ('arcachon', 'Circuit Dune du Pilat', 'http://localhost:3000/images/arcachon.jpg', 5, 8),
  ('casino-arcachon', 'Circuit Dune du Pilat', 'http://localhost:3000/images/casino-arcachon.jpg', 5, 8),
  ('dune', 'Circuit Dune du Pilat', 'http://localhost:3000/images/dune.jpg', 5, 8),

  ('roadtrip-alpes_1', 'Alpes', 'http://localhost:3000/images/roadtrip-alpes_1.jpg', 2, 12),
  ('roadtrip-alpes_2', 'Alpes', 'http://localhost:3000/images/roadtrip-alpes_2.jpg', 2, 12),
  ('roadtrip-alpes_3', 'Alpes', 'http://localhost:3000/images/roadtrip-alpes_3.jpg', 2, 12),

  ('route-napoleon_1', 'La route Napoleon', 'http://localhost:3000/images/route-napoleon_1.jpg', 3, 16),
  ('route-napoleon_2', 'La route Napoleon', 'http://localhost:3000/images/route-napoleon_2.jpg', 3, 16),

  ('beaumes', 'La route des vons du Rhône', 'http://localhost:3000/images/beaumes.jpg', 2, 5),
  ('saintjo', 'La route des vons du Rhône', 'http://localhost:3000/images/saintjo.jpg', 2, 5),
  ('sante', 'La route des vons du Rhône', 'http://localhost:3000/images/sante.jpg', 2, 5),

  ('fete', 'Les Saintes Maries de la mer', 'http://localhost:3000/images/fete.jpg', 6, 2),
  ('fete2', 'Les Saintes Maries de la mer', 'http://localhost:3000/images/fete2.jpg', 6, 2),
  ('Plages-Saintes-Maries', 'Les Saintes Maries de la mer', 'http://localhost:3000/images/Plages-Saintes-Maries.jpg', 6, 2),
  ('saintes', 'Les Saintes Maries de la mer', 'http://localhost:3000/images/saintes.jpg', 6, 2),

  ('saint-michel_1', 'Balalde au Mont St Michel', 'http://localhost:3000/images/saint-michel_1.jpg', 1, 6),
  ('saint-michel_2', 'Balalde au Mont St Michel', 'http://localhost:3000/images/saint-michel_2.jpg', 1, 6),
  ('saint-michel_3', 'Balalde au Mont St Michel', 'http://localhost:3000/images/saint-michel_3.jpg', 1, 6),

  ('toulouse', 'Balade entre Montpellier et Toulouse', 'http://localhost:3000/images/toulouse.jpg', 3, 4),
  ('narbonne', 'Balade entre Montpellier et Toulouse', 'http://localhost:3000/images/narbonne.jpg', 3, 4),
  ('montpellier', 'Balade entre Montpellier et Toulouse', 'http://localhost:3000/images/montpellier.jpg', 3, 4),
  ('cassoulet', 'Balade entre Montpellier et Toulouse', 'http://localhost:3000/images/cassoulet.jpg', 3, 4),
  ('carcassonne', 'Balade entre Montpellier et Toulouse', 'http://localhost:3000/images/carcassonne.jpg', 3, 4),
  ('carcassonne2', 'Balade entre Montpellier et Toulouse', 'http://localhost:3000/images/carcassonne2.jpg', 3, 4),

  ('transpyreneenne_1', 'Transpyrénéenne', 'http://localhost:3000/images/transpyreneenne_1.jpg', 4, 13),
  ('transpyreneenne_2', 'Transpyrénéenne', 'http://localhost:3000/images/transpyreneenne_2.jpg', 4, 13),

  ('val-de-loire', 'Val de Loire', 'http://localhost:3000/images/val-de-loire.jpeg', 4, 14),

  ('vercors_1', 'Les petites routes du Vercors', 'http://localhost:3000/images/vercors_1.jpg', 2, 20),
  ('vercors_2', 'Les petites routes du Vercors', 'http://localhost:3000/images/vercors_2.jpg', 2, 20),
  ('vercors_3', 'Les petites routes du Vercors', 'http://localhost:3000/images/vercors_3.jpg', 2, 20),
  ('vercors_4', 'Les petites routes du Vercors', 'http://localhost:3000/images/vercors_4.jpg', 2, 20),
  ('vercors_5', 'Les petites routes du Vercors', 'http://localhost:3000/images/vercors_5.jpg', 2, 20),

  ('cretes', 'Les splendides gorges du Verdon', 'http://localhost:3000/images/cretes.jpg', 1, 1),
  ('gorge3', 'Les splendides gorges du Verdon', 'http://localhost:3000/images/gorge3.jpg', 1, 1),
  ('gorges1', 'Les splendides gorges du Verdon', 'http://localhost:3000/images/gorges1.jpg', 1, 1),
  ('gorges2', 'Les splendides gorges du Verdon', 'http://localhost:3000/images/gorges2.jpg', 1, 1),
  ('maline', 'Les splendides gorges du Verdon', 'http://localhost:3000/images/maline.jpg', 1, 1),
  ('verdon', 'Les splendides gorges du Verdon', 'http://localhost:3000/images/cretes.jpg', 1, 1),

  ('irezatz', 'Des virages', 'http://localhost:3000/images/irezatz.jpg', 1, 11),

  ('volcans_1', 'Les Volacans en Auvergne', 'http://localhost:3000/images/volcans_1.jpg', 2, 19),
  ('volcans_2', 'Les Volacans en Auvergne', 'http://localhost:3000/images/volcans_2.jpg', 2, 19),
  ('volcans_3', 'Les Volacans en Auvergne', 'http://localhost:3000/images/volcans_3.jpg', 2, 19),
  ('volcans_4', 'Les Volacans en Auvergne', 'http://localhost:3000/images/volcans_4.jpg', 2, 19);

UPDATE "picture" SET "itinerary_id" = 14
WHERE "link" = 'http://localhost:3000/geoJson/valdeloire.geojson';

UPDATE "picture" SET "title" = 'narbonne', "link" = 'http://localhost:3000/images/narbonne.jpg' WHERE "id" = 43;

UPDATE "picture" SET "itinerary_id" = 14 WHERE "id" = 50;

COMMIT;
