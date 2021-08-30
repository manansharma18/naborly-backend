CREATE DATABASE naborly_listings;

use naborly_listings;

create table listings(
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
property varchar(40),
latitude decimal(8,6),
longitude decimal(9,6),
city varchar (20),
country varchar(10),
monthly_rate int,
lease_term_months int,
total_views int
);


LOAD DATA LOCAL INFILE "/Users/ghaziabadconnect/Desktop/Naborly-code-challenge-sample-data-2.csv" INTO TABLE naborly_listings.listings
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(property,latitude,	longitude,	city,	country,	monthly_rate,	lease_term_months,	total_views);


SET GLOBAL local_infile=1;
drop table listings;