BEGIN;

--setting up the structure
DROP TABLE 

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "alias" TEXT NOT NULL UNIQUE,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "presentation" TEXT,

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "district" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "latitude" INT,
    "longitude" INT ,
    "zoom" INT NOT NULL,

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "itinerary" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hour" INT NOT NULL DEFAULT 1,
    "minute" INT NOT NULL DEFAULT 1,
    "highway" BOOLEAN,
    "kilometer" INT NOT NULL,
    "curve" INT NOT NULL,
    "trace" TEXT,

    "user_id" int REFERENCES "user"("id"),
    "district_id" int REFERENCES "district"("id"),

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "motorbike" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    "user_id" int REFERENCES "user"("id"),

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "picture" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL,
  "description" TEXT,
  "link" TEXT NOT NULL,

  "user_id" int REFERENCES "user"("id"),
  "motorbike_id" int REFERENCES "motorbike"("id"),
  "itinerary_id" int REFERENCES "itinerary"("id"),

  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);


COMMIT;
