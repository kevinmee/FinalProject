CREATE TABLE dwarves (
    headshotSrc VARCHAR(50),
    name VARCHAR(50) PRIMARY KEY,
    skills VARCHAR(200),
    jobs VARCHAR(200),
    details VARCHAR(200),
    drink VARCHAR(25),
    game VARCHAR(25),
    fear VARCHAR(25),
    love VARCHAR(25),
    address VARCHAR(200),
    number VARCHAR(25),
    email VARCHAR(100)
);

CREATE TABLE contractors (companyName VARCHAR(100) PRIMARY KEY, firstName VARCHAR(25), lastName VARCHAR(50),
                            email VARCHAR(100));

CREATE TABLE jobs (jobName VARCHAR(50) PRIMARY KEY, contractor VARCHAR(100), startDate DATE, endDate DATE,
                    workersNeeded INT, positionsNeeded VARCHAR(200), FOREIGN KEY (contractor) REFERENCES contractors(companyName));

INSERT INTO dwarves VALUES (
    'img/dwarf.jpg',
    'Gimli',
    'Slaying orcs, eating salted pork',
    'Going on long quests to save Middle Earth',
    'Gimli, son of Gloin, hails from the House of Durin born in the year 2879 of the Third Age.\n\nHe enjoys friendly competition with elves, and loves to engage in gluttonous banter with other dwarves.\n\nGimli is the perfect worker for your job!',
    'Mead',
    'Monopoly',
    'Balrog',
    'Anything edible',
    '1 Misty Mountain Way, Erebor, Middle Earth',
    '999-LUV-PORK',
    'gimli@theonering.com'
);