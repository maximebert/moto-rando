-- Verify ocolis:initdb on pg

BEGIN;

SELECT id FROM "user" WHERE false;
SELECT id FROM "itinerary" WHERE false;
SELECT id FROM "motorbike" WHERE false;
SELECT id FROM "picture" WHERE false;

ROLLBACK;
