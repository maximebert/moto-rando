BEGIN;

-- Update des liens vers les fichiers json en local

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

COMMIT;
