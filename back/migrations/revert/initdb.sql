-- Revert motorando:initdb from pg
-- reverse the order of tables to delete

BEGIN;

DROP TABLE IF EXISTS "picture", "motorbike", "itinerary", "user";

COMMIT;
