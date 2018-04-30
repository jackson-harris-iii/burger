DROP DATABASE IF EXISTS dlbc5v3bfxbntng4;
CREATE DATABASE dlbc5v3bfxbntng4;
USE dlbc5v3bfxbntng4;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
	burger_name varchar (255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY(id)
);
