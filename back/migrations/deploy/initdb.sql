BEGIN;

--setting up the structure

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "alias" TEXT NOT NULL UNIQUE,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "presentation" TEXT,

    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "itinerary" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" INTERVAL,
    "highway" BOOLEAN,
    "kilometer" INT NOT NULL,
    "curve" INT NOT NULL,
    "trace" JSON,

    "user_id" int REFERENCES "user"("id"),


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
