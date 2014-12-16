CREATE TABLE dwarves (firstName VARCHAR(25), lastName VARCHAR(50), addr VARCHAR(100),
                      email VARCHAR(100) PRIMARY KEY, personalBlurb VARCHAR(500), preferredRate INT,
                      preferredJobs VARCHAR(100), skills VARCHAR(100));

CREATE TABLE contractors (companyName VARCHAR(100) PRIMARY KEY, firstName VARCHAR(25), lastName VARCHAR(50),
                            email VARCHAR(100));

CREATE TABLE jobs (jobName VARCHAR(50) PRIMARY KEY, contractor VARCHAR(100), startDate DATE, endDate DATE,
                    workersNeeded INT, positionsNeeded VARCHAR(200), FOREIGN KEY (contractor) REFERENCES contractors(companyName));
