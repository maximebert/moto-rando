BEGIN;

UPDATE "picture" SET "itinerary_id" = 14
WHERE "link" = 'http://localhost:3000/geoJson/valdeloire.geojson';

UPDATE "picture" SET "title" = 'narbonne', "link" = 'http://localhost:3000/images/narbonne.jpg' WHERE "id" = 43;

