CREATE TABLE house (
    id SERIAL PRIMARY KEY,
    property_name VARCHAR(40) NOT NULL,
    property_address VARCHAR(40) NOT NULL,
    property_city VARCHAR(40) NOT NULL,
    property_state VARCHAR(40) NOT NULL,
    property_zip INT NOT NULL
)