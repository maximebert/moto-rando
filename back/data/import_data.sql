BEGIN;


INSERT INTO "user" ("alias", "email", "password", "presentation")
VALUES
('marc93', 'm.marc@email.fr', 'MonPassWordBidon', 'Ma présentation, qui ne dit pas grand chose sur moi'),
('fabio20', 'q.fabio@email.com', 'UnAutrePassWordBidon', 'Presentation pour fabio, qui ne dit pas grand chose non plus'),
('johan05', 'z.johan@yahoo.pt', 'PassWordUnPeuMoinsBidon', 'Voici qui je suis, un utilisateur lambda'),
('jean-mich', 'harleydu77@gmail.com', 'johnny4ever', 'a que coucou'),
('maurice', 'popeye99@gmail.com', 'popeye', 'un pastis sinon rien'),
('keke93', 'kevinbg7@gmail.com', 'suzuki', 'lé moto arlé c nul '),
('yann', 'yann01@yahoo.com', 'secret1234', 'personne timide a la recherche de biker'),
('celestin', 'celestin01@yahoo.com', 'secret4567', 'personne etravagante a la recherche de biker'),
('luc', 'luc01@yahoo.com', 'secret89', 'personne amourex de la vitesse a la recherche de biker');




INSERT INTO "itinerary" ("title", "description", "duration", "highway", "kilometer", "curve", "user_id")
VALUES
('les gorges du Verdon par Vinon', 'Profitez de cet itinéraire pour vous bamader le long du lac de Ste Croix et y découvrir un merveilleux paysage', '02:30:00', FALSE, 206, 4, 1),
('le litoral de Cassis', 'Une petite balade le long du litoral, pour profiter du bon air marin', '01:30:00', FALSE, 120, 2, 3),
('la corniche des Cévennes', 'au milieu de la verdure cevenole, ce trajet vous permettra de découvrir de jolies routes et de rider entre potes', '02:00:00', TRUE, 164, 5, 2),
('abaye de frigolet', 'magnifique abaye dans les alpilles', '01:50:00' , FALSE , 30, 3 , 4),
('stade velodrome', 'un lieu de pelerinage pour les amoureux du ballon rond...', '03:00:00' , FALSE , 10, 1 , 5),
('saintes maries de la mer', 'magnifique balade au coeur de la camargue ', '01:50:00' , FALSE , 30, 3 , 6),
('frot','balade le long du canal','05:10:00',FALSE,300,5,7),
('blamont','balade en montagne','01:32:00',TRUE,'80',5,8),
('couché de soleil','balade en bord de mer','02:16:30',TRUE,'80',1,9);




INSERT INTO  "motorbike" ("brand", "model", "description", "user_id")
VALUES
('KTM', '790 Duke', 'Full origine, ma moto est la version noir et orange, avec un ajout de liseret orange sur les jantes', 1),
('Honda', 'CBR900RR', 'Moto Vintage, avec déco HRC, pot Devil et commandes reculées', 6),
('Kawasaki', 'Z900', 'Serie spécial 50th anniversary, Total look rouge', 8),
('harley davidson', 'sportster s', 'La Sportster™ S ouvre le premier chapitre d’un tout nouveau livre de la saga Sportster. Descendante d’une lignée apparue en 1957 qui a dominé la compétition, cette nouvelle-née a été repensée pour balayer les normes d’aujourd’hui.', 4),
('ducati', 'monster', 'va vite en ligne droite...', 5),
('yamaha', 'chappy', 'jé mi 1 po bidalo ele pren 52 kilometreur facil', 6),
('Yamaha','R1M','model de course', 9),
('Harley Davidson','road king','un petit bijou couleur métallique', 7),
('ducati','monster','pour un plaisir de performance', 8);


INSERT INTO "picture" ("title", "description", "link", "user_id", "motorbike_id", "itinerary_id")
VALUES
('Le lac de Ste Croix', 'Vue du lac de Ste Croix depuis le point sublime', 'https://www.onesteptotheworld.com/europe/france/provence/les-gorges-du-verdon/', 2, null, 1),
('Cassis', 'Vue sur mer depuis Cassis', 'https://www.terre.tv/wp-content/uploads/2020/01/Cassis-%C2%A9-iStock.jpg', 6, null, 3),
('Z900', 'Z900 de toto', 'https://www.tuningblog.eu/wp-content/uploads/2022/01/Z900_50th.jpg', 3, 2, null),
('abaye de frigolet', 'frigolet', 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Abbaye_de_Frigolet%2C_vue_int%C3%A9rieure_%281%29.jpg', 4, null, 4),
('stade velodrome', 'allez lom', 'https://upload.wikimedia.org/wikipedia/commons/4/44/Stade_V%C3%A9lodrome_OM-ManUTD_57957spectateurs.jpg', 5, null, 5),
('saintes maries de la mer', 'flamant rose', 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Portrait_de_flamant_rose_dans_la_r%C3%A9serve_nationale_de_Camargue.jpg', 6, null, 6),
('photo1', 'description 1', 'https://www.vtrmotoren.nl/uploads/listings/ICON_A564B3-0C258E-600142-B31151-E262CE-4A7469.png', 9, 9, null),
('photo2', 'desciption 2','https://motorcycles-for-sale.biz/img/motorcyclephotos/full/motorbike37888.jpg', 7, 7, null ),
('photo3', 'description 3', 'https://park.shifting-gears.com/wp-content/uploads/2019/04/Monster-797.jpg', 8, 8, null ),
('test1', 'test desc 1', 'test link 1', 2, null, 1),
('test2', 'test desc 2', 'test link 2', 2, null, 1),
('test3', 'test desc 3', 'test link 3', 2, null, 1),
('test4', 'test desc 4', 'test link 4', 1, null, 10),
('790 test', '790 test desc', '790 test link', 1, 1, null);

UPDATE "picture" SET "link" = 'https://lesgorgesduverdon.fr/wp-content/uploads/2021/02/photo-mailingbis.jpg' WHERE "id" = 1;


COMMIT;
