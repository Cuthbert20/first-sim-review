--items table schema
CREATE TABLE item (
id SERIAL PRIMARY KEY,
item_name VARCHAR(50),
last_seen_location VARCHAR(100),
last_seen_time VARCHAR(100)
)

--adding to table
INSERT INTO item (item_name, last_seen_location, last_seen_time)
VALUES
('Rodmus Prime','little red','20 years ago'),
('phone','school','2 hours ago'),
('foot','butt','2 years ago')
--shut your fucking mouth spencer