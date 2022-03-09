BEGIN;

INSERT INTO "district" ("name", "latitude", "longitude", "zoom")
VALUES
('Alsace', 48.32, 7.44, 8),
('Aquitaine', 44.6, 0, 8),
('Auvergne', 45.7797, 3.08694, 8),
('Basse Normandie', 48.878847, -0.515749, 8),
('Bourgogne', 47.9503, 6.05583, 8),
('Bretagne', 48.202047, -2.932644, 8),
('Centre', 47, 1.45, 8),
('Champagne-Ardenne', 	48.7934092, 4.4725249, 8),
('Corse', 41.91, 8.73, 8),
('Franche-Comté', 	47.280513, 	4.999437, 8),
('Haute Normandie', 49.524641, 0.882833, 8),
('Ile-de-France', 48.8499198, 2.6370411, 8),
('Languedoc-Roussillon', 	43.5912356, 3.2583626, 8),
('Limousin', 45.8932231, 1.5696018, 8),
('Lorraine', 	48.8744233, 6.2080932, 8),
('Midi-Pyrénées', 44.0859426, 1.5208624, 8),
('Nord-Pas-de-Calais', 50.4801153, 2.7937265, 8),
('Pays de la Loire', 47.7632836, -0.3299687, 8),
('Picardie', 49.663613, 2.528073, 8),
('Poitou-Charentes', 45.903552, -0.3091837, 8),
('Provence-Alpes-Côte-dAzur', 43.55, 5.41, 8),
('Rhône-Alpes', 45.22, 5.13, 8);

INSERT INTO "itinerary" ("title", "description", "hour", "minute", "highway", "kilometer", "curve", "trace", "district_id", "user_id")
VALUES
('circuit par les gorges du Verdon', 'En partant de Palut sur verdon, profitez des gorges du verdon en revenant par la route de la crete et le super restaurant du chalet de la maline',  02, 30, FALSE, 206, 3, NULL , 21 ,1),
('saintes maries de la mer', 'venez découvrir le village des saintes marie de la mer lieux de pélerinage des gens du voyage au coeur de la camargue!', 00, 45, FALSE , 30, 3, NULL, 21, 6),
('abaye de frigolet', 'Depuis Avignon, Venez découvrir cette manifique abbaye du XIIe siècle dans un vallon sauvage au milieu des pins', 01, 00, FALSE , 30, 3 , NULL , 21, 4),
('Montpellier-Toulouse', 'Roadtrip, à faire sur plusieurs jours entre amis, de montpellier à toulouse en passant par Narbonne, Carcassonne, et castelnaudary. Un plaisir pour les yeux et pour les papilles!', 02, 49, TRUE, 250, 1, NULL, 13, 3),
('Vin de la vallée du rhone', 'En partant de beaume de venise, suivez la route des grands vin de la vallée du rhone', 48, 00, TRUE , 300, 2 , NULL , 21, 5),
('Mont saint michel', 'balade autour du lac de brennilis, avec magnifique vu sur le mont saint michel', 02, 00, FALSE , 50, 3 , NULL , 6, 1),
('Villages en Alsace', 'Découvrir les plus beaux ', 02, 00, FALSE , 50, 3 , NULL , 1, 1);

COMMIT;
