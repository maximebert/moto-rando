BEGIN;

INSERT INTO "district" ("name", "latitude", "longitude", "zoom")
VALUES
('Auvergne-Rhône-Alpes', 45, 5, 8),
('Bourgogne-Franche-Comté', 47, 5, 8),
('Bretagne', 48, 7, 8),
('Centre-Val de Loire', 47, 2, 8),
('Corse', 42, 9, 8),
('Grand Est', 48., 5, 8),
('Hauts-de-France', 49, 2, 8),
('Île-de-France', 48, 2, 8),
('Normandie', 49, 0, 8),
('Nouvelle-Aquitaine', 45, 0, 8),
('Occitanie', 43., 1, 8),
('Pays de la Loire', 48, 0, 8),
('Provence-Alpes-Côte dAzur', 44, 5, 8);

INSERT INTO "itinerary" ("title", "description", "hour", "minute", "highway", "kilometer", "curve", "trace", "district_id", "user_id")
VALUES
('circuit par les gorges du Verdon', 'En partant de Palut sur verdon, profitez des gorges du verdon en revenant par la route de la crete et le super restaurant du chalet de la maline',  02, 30, FALSE, 206, 3, NULL , 13 ,1),
('saintes maries de la mer', 'venez découvrir le village des saintes marie de la mer lieux de pélerinage des gens du voyage au coeur de la camargue!', 00, 45, FALSE , 30, 3, NULL, 13, 6),
('abaye de frigolet', 'Depuis Avignon, Venez découvrir cette manifique abbaye du XIIe siècle dans un vallon sauvage au milieu des pins', 01, 00, FALSE , 30, 3 , NULL , 13, 4),
('Montpellier-Toulouse', 'Roadtrip, à faire sur plusieurs jours entre amis, de montpellier à toulouse en passant par Narbonne, Carcassonne, et castelnaudary. Un plaisir pour les yeux et pour les papilles!', 02, 49, TRUE, 250, 1, NULL, 11, 3),
('Vin de la vallée du rhone', 'En partant de beaume de venise, suivez la route des grands vin de la vallée du rhone', 48, 00, TRUE , 300, 2 , NULL , 13, 2),
('Mont saint michel', 'balade autour du lac de brennilis, avec magnifique vu sur le mont saint michel', 02, 00, FALSE , 50, 3 , NULL , 3, 1),
('Villages en Alsace', 'Découvrir les plus beaux village en Alsace ', 02, 00, FALSE , 180, 3 , NULL , 6, 1),
('les dunes du pilat', 'Depuis Arcachon tout en suivant la mer découvrez les Dunes du Pilat', 01, 30, FALSE , 100, 3 , NULL , 10, 5)
('Au coeur de la corse', 'En partant par ajaccio passez par corte et calvi pour un roadtrip au coeur de la Corse (attention aux coup de fusil) ', 05, 00, FALSE , 450, 3 , NULL , 5, 5),
('Les monuments Parisiens', 'tour eiffel, notre dame, arc de triomphe, louvre ... touts les monuments parisiens ', 05, 00, FALSE , 450, 3 , NULL , 8, 6);

COMMIT;
