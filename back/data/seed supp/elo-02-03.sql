INSERT INTO "picture" ("title", "description", "link", "user_id", "motorbike_id", "itinerary_id")
VALUES
  ('test4', 'test desc 4', 'test link 4', 1, null, 10),
  ('790 test', '790 test desc', '790 test link', 1, 1, null);

UPDATE "picture" SET "link" = 'https://lesgorgesduverdon.fr/wp-content/uploads/2021/02/photo-mailingbis.jpg' WHERE "id" = 1;
