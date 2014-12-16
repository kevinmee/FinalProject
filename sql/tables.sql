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

INSERT INTO dwarves VALUES (
    'img/dwarf2.jpg',
    'Thorin',
    'Singing, Dancing, Drinking',
    'Heir to throne',
    'Thorin is the leader of the Company of Dwarves who aim to reclaim the Lonely Mountain from Smaug the dragon. \n\nHe is the son of Thráin II, grandson of Thrór, and becomes King of Durins Folk during their exile from Erebor.',
    'Mead',
    'Quarters',
    'Smaug',
    'Anything edible',
    '100 Misty Mountain Way, Erebor, Middle Earth',
    '999-IAM-KING',
    'Thorin@Oakenshield.com'
);

INSERT INTO dwarves VALUES (
    'img/dwarf3.jpg',
    'Balin',
    'Cleaning and Dusting',
    'Barkeep',
    'Balin was one of the twelve companions of Thorin and Bilbo Baggins on the Quest of Erebor. He wears a scarlet hood. \n\nHe and his younger brother, Dwalin, were the sons of Fundin, and thus of the royal line of Durin.',
    'Ale',
    'Minesweeper',
    'Smaug',
    'Anything edible',
    '14 Misty Mountain Way, Erebor, Middle Earth',
    '999-WE-CLEAN',
    'BalinTheBarkeep@TheyComeInPints.com'
);

INSERT INTO dwarves VALUES (
    'img/dwarf4.jpg',
    'Fundin',
    'Royalty',
    'Heir to throne',
    'Fundin was a Dwarf of the royal line of Durin. \n\nHe was the son of Farin, brother of Gróin and father of Balin and Dwalin, who were two of Thorin Oakenshields companions on the Quest of Erebor.',
    'Ale',
    'Tic Tac Toe',
    'Death',
    'Anything edible',
    '22 Gold Lane, Erebor, Middle Earth',
    '12-TRUE-KING',
    'FundinForKing@HouseDurin.com'
);

INSERT INTO dwarves VALUES (
    'img/dwarf5.jpg',
    'Kili',
    'Mining, sleeping',
    'Miner',
    'Kíli was one of the twelve companions of Thorin and Bilbo on the Quest of Erebor. \n\nHe and his brother Fíli were the biological sons of Dís, Thorins sister. He had a blue cloak and a yellow beard.',
    'Ale and Mead',
    'Duck Duck Goose',
    'Smaug',
    'Cheese and bread',
    '123 Miners Blv. apt. 23, Erebor, Middle Earth',
    '88-MINE4YOU',
    'TheOneTrueMiner@MineOrMine.com'
);

INSERT INTO dwarves VALUES (
    'img/dwarf6.jpg',
    'Doc',
    'Whistling, First Aid',
    'Doctor',
    'Doc Lives with his six other brothers. He and his brothers enjoy mining for gems while whistling.',
    'Mead',
    'Simon Says',
    'Wicked Witch',
    'Cheese and bread',
    '1 Lost in Woods ln, Enchanted Forest',
    '1-YOUR-DOC',
    'Doc@7dwarves.com'
);

INSERT INTO dwarves VALUES (
    'img/dwarf7.jpg',
    'Bashful',
    'Whistling, Drawing',
    'Miner',
    'Bashful Lives with his six other brothers. He and his brothers enjoy mining for gems while whistling.',
    'Mead',
    'Checkers',
    'Wicked Witch',
    'Cheese and bread',
    '1 Lost in Woods ln, Enchanted Forest',
    '1-OH-SHUCKS',
    'Bashful@7dwarves.com'
);

INSERT INTO dwarves VALUES (
    'img/dwarf9.jpg',
    'Happy',
    'Whistling, Optimistic view on everything',
    'Miner',
    'Happy Lives with his six other brothers. He and his brothers enjoy mining for gems while whistling.',
    'Soda',
    'Red Rover',
    'Wicked Witch',
    'Cheese and bread',
    '1 Lost in Woods ln, Enchanted Forest',
    '9-HAPPYNESS',
    'Happy@7dwarves.com'
);

INSERT INTO dwarves VALUES (
    'img/dwarf10.jpg',
    'Sneezy',
    'Whistling, Dancing',
    'Miner',
    'Sneezy Lives with his six other brothers. He and his brothers enjoy mining for gems while whistling.',
    'Water',
    'Simon Says',
    'Wicked Witch',
    'Cheese and bread',
    '1 Lost in Woods ln, Enchanted Forest',
    '1-GOD-BLESS',
    'Sneezy@7dwarves.com'
);

CREATE TABLE productivity (
    job VARCHAR(25),
    withDwarf INT,
    withoutDwarf INT
);

INSERT INTO productivity VALUES ('Mining', 50, 15);
INSERT INTO productivity VALUES ('Smithing', 75, 25);
INSERT INTO productivity VALUES ('Orc Slaying', 83, 32);
INSERT INTO productivity VALUES ('Eating', 100, 31);