BEGIN;


INSERT INTO "user" ("id", "alias", "email", "password", "presentation")
VALUES
(1, 'marc93', 'm.marc@email.fr', 'MonPassWordBidon', 'Ma présentation, qui ne dit pas grand chose sur moi'),
(2, 'fabio20', 'q.fabio@email.com', 'UnAutrePassWordBidon', 'Presentation pour fabio, qui ne dit pas grand chose non plus'),
(3, 'johan05', 'z.johan@yahoo.pt', 'PassWordUnPeuMoinsBidon', 'Voici qui je suis, un utilisateur lambda');

INSERT INTO "itinary" ("id", "title", "description", "duration", "highway", "kilometer", "curve", "user_id")
VALUES
(1, 'les gorges du Verdon par Vinon', 'Profitez de cet itinéraire pour vous bamader le long du lac de Ste Croix et y découvrir un merveilleux paysage', '02:30:00', FALSE, 206, 4),
(2, 'le litoral de Cassis', 'Une petite balade le long du litoral, pour profiter du bon air marin', '01:30:00', FALSE, 120, 2),
(3, 'la corniche des Cévennes', 'au milieu de la verdure cevenole, ce trajet vous permettra de découvrir de jolies routes et de rider entre potes', '02:00:00', TRUE, 164, 5);


INSERT INTO  "motorbike" ("id", "brand", "model", "description", "user_id")
VALUES
(1, 'KTM', '790 Duke', 'Full origine, ma moto est la version noir et orange, avec un ajout de liseret orange sur les jantes', 1),
(2, 'Honda', 'CBR900RR', 'Moto Vintage, avec déco HRC, pot Devil et commandes reculées', 6),
(3, 'Kawasaki', 'Z900', 'Serie spécial 50th anniversary, Total look rouge', 8);

INSERT INTO "picture" ("id", "title", "description", "link", "user_id", "motorbike_id", "itinary_id")
VALUES
(1, 'Le lac de Ste Croix', 'Vue du lac de Ste Croix depuis le point sublime', 'https://www.onesteptotheworld.com/europe/france/provence/les-gorges-du-verdon/', 2, null, 1),
(2, 'Cassis', 'Vue sur mer depuis Cassis', 'https://www.terre.tv/wp-content/uploads/2020/01/Cassis-%C2%A9-iStock.jpg', 6, null, 3),
(3, 'Z900', 'Z900 de toto', 'https://www.tuningblog.eu/wp-content/uploads/2022/01/Z900_50th.jpg', 3, 2, null);


COMMIT;
