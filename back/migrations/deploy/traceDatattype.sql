-- Deploy motorando:traceDatattype to pg

BEGIN;

ALTER TABLE "itinerary"
  ALTER COLUMN "trace" TYPE text;

COMMIT;
