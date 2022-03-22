-- Deploy motorando:durationChange to pg

BEGIN;

ALTER TABLE "itinerary"
DROP COLUMN "duration";

ALTER TABLE "itinerary"
ADD COLUMN "hour" INT NOT NULL DEFAULT 1,
ADD COLUMN "minute" INT NOT NULL DEFAULT 1;

COMMIT;
