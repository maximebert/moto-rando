-- Revert motorando:addDisctrict from pg
BEGIN;

ALTER TABLE "itinerary"
DROP COLUMN "district_id";

DROP TABLE "district" ;


COMMIT;

