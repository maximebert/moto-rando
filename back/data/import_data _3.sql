BEGIN;


INSERT INTO "user" ("alias", "email", "password", "presentation")
VALUES
(7'yann', 'yann01@yahoo.com', "secret1234", 'personne timide a la recherche de biker'),
(8'celestin', 'celestin01@yahoo.com', "secret4567", 'personne etravagante a la recherche de biker'),
(9'luc', 'luc01@yahoo.com', "secret89", 'personne amourex de la vitesse a la recherche de biker');

INSERT INTO "itinary" ("title", "description", "duration", "highway", "kilometer", "curve", "user_id")
VALUES
(7'frot','balade le long du canal','05:10:00',"false",'300',"2",7),
(8'blamont','balade en montagne','01:32:00',"true",'80',"5",8),
(9'couché de soleil','balade en bord de mer','02:16:30',"true",'80',"1",9);

INSERT INTO  "motorbike" ("brand", "model", "description", "user_id")
VALUES
(7'Yamaha','R1M','model de course', 9),
(8'Harley Davidson','road king','un petit bijou couleur métallique', 7),
(9'ducati','monster','pour un plaisir de performance', 8);

INSERT INTO "picture" ("title", "description", "link", "user_id", "motorbike_id", "itinary_id")
VALUES
('photo1', 'description 1', 'https://www.vtrmotoren.nl/uploads/listings/ICON_A564B3-0C258E-600142-B31151-E262CE-4A7469.png',9,9,null),
('photo2', 'desciption 2','https://motorcycles-for-sale.biz/img/motorcyclephotos/full/motorbike37888.jpg',7,7,null ),
('photo3', 'description 3', 'https://park.shifting-gears.com/wp-content/uploads/2019/04/Monster-797.jpg' 8,8,null );

COMMIT;
