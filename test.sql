INSERT INTO student(studentnr, roepnaam, voorletters, tussenvoegsels,achternaam, adres,postcode, woonplaats, geslacht, telefoon, geboortedatum, schoolgeld, betaald)VALUES (7777,"Robert","R","","Robertsen","Mozartstraat 10", "1313DE", "Almere","M",  "069876540","1997-02-02", "500", "250");





SELECT studentnr, roepnaam, voorvoegsels, achternaam
FROM student 
INNER JOIN studentopleiding ON studentnr = studentnr50  

INNER JOIN opleiding ON opleidingsnaam = opleidingsnaam
WHERE opleiz
dingsnaam = 'ICT beheerder';


insert into opleiding (naam, niveau) values ( "Electronic Engineering", "3");





SELECT DATE_FORMAT(CURTIME(12:30:00), "%d-%m-%Y");





SELECT roepnaam, tussenvoegsels, achternaam, opleiding.naam
FROM student
INNER JOIN studentopleiding
ON studentopleiding.studentnr = student.studentnr
INNER JOIN opleiding
ON opleiding.opleidingscode = studentopleiding.opleidingscode WHERE opleiding.niveau = “4” kreeg je alle opleidingen met alleen niveau 4


SELECT studentnummer,roepnaam,voorvoegsel,achternaam
from student 
where opleiding.naam = "ICT beheerder";


SELECT DATE_FORMAT(CURTIME(12:30:00), "%H-%i-%S");


SELECT roepnaam,opleiding.naam  FROM student 
RIGHT JOIN studentopleiding
USING(roepnaam) 
RIGHT JOIN opleiding 
USING(opleidingscode);




















SELECT roepnaam,tussenvoegsel,achternaam
from student 
where geslacht = "v"







als je de % voor de letter zet dan laat hij zien de wat beeindigd met die letter
en als je de % na de letter zet dan doet hij wat begint met die letter
en als je %(de letter)% doet dan pakt ie zeg maar wnr de letter in 
-- het midden zit hoeft niet prc in het midden maar als het maar niet in het begin is of in het einde

die <> is niet gelijk aan 
en je moet soms kijken of het null is of een lege string ("") dus

je moet ook weten 
lege string is een waarde 
maar null is geen waarde 

hier je moet wel genoeg _ hebben ander geeft hij een error aan okeee
momentje ff kijken hoew aikc httt wacht laat mij prpberen


not like is dat het niet waar is 
dus like betekent als het bijvoorbeeld "A%" met a begint
not like is dus anders om oeee

kijk wat je net gedaan heb is gwn goed 
maar soms moet je bijvoorbeeld 6 of meer hebben 
want wat jij gedaan heb is alleen als je 6 letters hebt dat was de vraag
ja klopt die vraag heb je gwn goed gedaan 
maar je moet straks ook andere hebben dus ik schrijff een betere voor je okee

kijk deze 

die lenght(achternaam) kijkt hvl letter in dat vakje achternaam zijn en dan veroghohhhhhh okeee
dus je kan die bij alle andere ook gebruiken okeeee






kijk bij avg is dus de gemiddelde berekend en in die () moet dan schoolgeeld - betaald 
want je moet de gemiddelde berekenen van de mensen die betaald hebben
en die where betaald = 500 is  zo dat hij pakt alleen de mensen die 500 betaald hebben want je hebt ook sommige die minder betaald hebben 


oke daarvoor kunnen we distinct gebruiken 
wat ie doet is alles wat niet hetzelfde is selecteren 
maar ook niet wat hetzelfde is apart 
dus als je meerdere letter s hebt bijvoorbeeld dan selecteert hij hetmaar een keer oke


select distinct tussenvoegsels from student where = null;

select woonplaats, sum(schoolgeld - betaald)
from student where schoolgeld - betaald <> 0 group by woonplaats;
,.
select geslacht, count(*) from student where geslacht = "V" or geslacht = "M" and woonplaats = "Almere" group by geslacht;  

select roepnaam from student where length(roepnaam) < 5;

update student
set telefoon = "061256890"
where roepnaam,achternaam = "Robert Robertsen";


select geslacht, count(*) from student where geslacht = 'M' and woonplaats = 'Almere';


update student set uitgeschreven = now()
where roepnaam,achternaam = 'Robert Robertsen';

select studentnr, roepnaam, tussenvoegsels, achternaam, adres, postcode, woonplaats, geslacht, telefoon, geboortedatum, uitgeschreven, schoolgeld, betaald, opleiding.naam from student left join studentopleiding using(studentnr) left join opleiding using(opleidingscode);


SELECT roepnaam, FROM student 
RIGHT JOIN studentopleiding
USING(naam);
select 1024*512;

SELECT COUNT(*)
FROM student
WHERE opleiding = 'Applicatieontwikkeling';


SELECT DATEDIFF(NOW(), from student where studentnummer = 8888);






INSERT INTO opleiding (studentnr, woonplaats, roepnaam, etc.)
VALUES (waarde1, waarde2, waarde3, etc.);



insert into product_has_locaties(idpriduct, locatie, antaal) values ("Accuboorhamer", "Almere",10); 



SELECT opleiding.naam, roepnaam, tussenvoegsels, achternaam
FROM student
INNER JOIN studentopleiding 
ON studentopleiding.studentnr = student.studentnr
INNER JOIN opleiding
ON opleiding.opleidingscode = studentopleiding.opleidingscode
WHERE opleiding.naam = "ICT beheerder";
