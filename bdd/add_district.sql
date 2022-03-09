BEGIN;

CREATE TABLE "district" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "latitude" INT,
    "longitude" INT ,
    "zoom" INT NOT NULL,
    "highway" BOOLEAN,

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

ALTER TABLE "itinerary"
ADD COLUMN "district_id" int REFERENCES "district"("id");


COMMIT;
