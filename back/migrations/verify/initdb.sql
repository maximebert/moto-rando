-- Verify motorando:initdb on pg

BEGIN;

-- afin de vérifier le bon déroulement d'un deploiement on peut créer des instructions SQL
-- ici on est dans la vérifiaction de la création de table et de leur colonne, on peut donc vérifier de plusieurs façons
-- la plus simple avec un select

SELECT id FROM "user" WHERE false;
SELECT id FROM "itinerary" WHERE false;
SELECT id FROM "motorbike" WHERE false;
SELECT id FROM "picture" WHERE false;

-- ici pas de commit mais un rollback cela permet de ne pas réellement exécuter les instruction présente dans la transaction. Par contre dans le cas ou vous feriez une insertion de test, cela engendrerai une incrémentation des clé primaires qui elle ne serais annulé par le rollback. Mais en soit ce n'est pas un gros problème.

ROLLBACK;
