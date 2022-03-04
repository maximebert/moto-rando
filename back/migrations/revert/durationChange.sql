-- Revert motorando:durationChange from pg

BEGIN;

ALTER TABLE "itinerary"
DROP COLUMN "hour",
DROP COLUMN "minute";

ALTER TABLE "itinerary"
ADD COLUMN "duration" INTERVAL;

COMMIT;
