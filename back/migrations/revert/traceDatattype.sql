-- Revert motorando:traceDatattype from pg

BEGIN;

ALTER TABLE "itinerary"
  ALTER COLUMN "trace" TYPE json;

COMMIT;
