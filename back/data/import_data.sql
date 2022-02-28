BEGIN;


INSERT INTO "user" ("alias", "email", "password", "presentation", "created_at", "updated_at")
VALUES
();

INSERT INTO "itinary" ("title", "description", "duration", "highway", "kilometer", "curve", "user_id", "created_at", "updated_at")
VALUES
();

INSERT INTO  "motorbike" ("brand", "model", "description", "user_id", "created_at", "updated_at")
VALUES
();

INSERT INTO "picture" ("title", "description", "link", "user_id", "motorbike_id", "itinary_id", "created_at", "updated_at")
VALUES
();


COMMIT;
