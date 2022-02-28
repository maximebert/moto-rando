BEGIN;


INSERT INTO "user" ("id", "alias", "email", "password", "presentation")
VALUES
(4, 'jean-mich', 'harleydu77@gmail.com', 'johnny4ever', 'a que coucou'),
(5, 'maurice', 'popeye99@gmail.com', 'popeye', 'un pastis sinon rien'),
(6, 'keke93', 'kevinbg7@gmail.com', 'suzuki', 'lé moto arlé c nul ');

INSERT INTO "itinary" ("id", "title", "description", "duration", "highway", "kilometer", "curve", "user_id")
VALUES
(4, 'abaye de frigolet', 'magnifique abaye dans les alpilles', '01:50:00' , FALSE , 30, 3 , 4),
(5, 'stade velodrome', 'un lieu de pelerinage pour les amoureux du ballon rond...', '03:00:00' , FALSE , 10, 1 , 5),
(6, 'saintes maries de la mer', 'magnifique balade au coeur de la camargue ', '01:50:00' , FALSE , 30, 3 , 6);

INSERT INTO  "motorbike" ("id","brand", "model", "description", "user_id")
VALUES
(4, 'harley davidson', 'sportster s', 'La Sportster™ S ouvre le premier chapitre d’un tout nouveau livre de la saga Sportster. Descendante d’une lignée apparue en 1957 qui a dominé la compétition, cette nouvelle-née a été repensée pour balayer les normes d’aujourd’hui.', 4),
(5, 'ducati', 'monster', 'va vite en ligne droite...', 5),
(6, 'yamaha', 'chappy', 'jé mi 1 po bidalo ele pren 52 kilometreur facil', 6);

INSERT INTO "picture" ("id","title", "description", "link", "user_id", "motorbike_id")
VALUES
(4, 'abaye de frigolet', 'frigolet', 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Abbaye_de_Frigolet%2C_vue_int%C3%A9rieure_%281%29.jpg', 4, 4),
(5, 'stade velodrome', 'allez lom', 'https://upload.wikimedia.org/wikipedia/commons/4/44/Stade_V%C3%A9lodrome_OM-ManUTD_57957spectateurs.jpg', 5, 5),
(6, 'saintes maries de la mer', 'flamant rose', 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Portrait_de_flamant_rose_dans_la_r%C3%A9serve_nationale_de_Camargue.jpg', 6, 6);


COMMIT;
