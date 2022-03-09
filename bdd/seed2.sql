BEGIN;

INSERT INTO "itinerary" ("title", "description", "hour", "minute", "highway", "kilometer", "curve", "trace", "district_id", "user_id")
VALUES
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

COMMIT;
