/*
1.Stwórz obiekt user. Powienien mieć na starcie kilka atrybutów:
-firstName
-lastName
-age
-gender

Domyślnie wartości tych atrybutów nie mogą być puste
*/
var user = {
    firstName: 'Janek',
    secondName: 'Kowalski',
    age: 20,
    gender: 'male'
};

console.log(user);

/*
2. Za pomoca promptu zapytaj uzytkownika strony o następujące cechy:
-imie
-nazwisko
-wiek
-płeć (napisz infromację, że ma wybrać male albo female)

Dane z proptmu zapisuj jako trybuty twojego obiektu person. czyli, gdy user poda imie, to ma byc ono zapisane do person.name itd.
*/
user.firstName = prompt('Proszę podać swoje imię');
user.secondName = prompt('Proszę podać swoje nazwisko');
user.age = prompt('Wiek');  
user.gender = prompt('Płeć (male/female)');

console.log(user);
/*
3. Sprawdź, czy wszystkie atrybuty mają jakąś wartość. Jesli któryś z nich jest pusty, to wpisz w konsolce info - "Brak danych"

TIP: możesz użyć jednego ifa - if((warunek) && (warunek))...
*/

//wg mnie && tutaj się nie sprawdzi, aby wyrzuciło komunikat o błędzie wszystkie pola powinny być puste, a przecież może być tylko jedno błędne
if (user.firstName == '' || user.secondName == '' || user.age == '' || user.gender == ''){
    console.log('Błędne dane - czy wszystkie pola zostały wypełnione prawidłowo?');
}else{
    console.log(user);
}

/*
4. Utwórz pętle switch dla dwoch opcji - "male" i "female"
dla case male ustaw console.log("Jesteś mężczyzną");
dla case female ustaw console.log("Jesteś kobietą");, jako default console.log("Jestes...???");
*/
switch (user.gender){
    case 'male':
        console.log('jesteś mężczyzną');
        break;
    case 'female':
        console.log('jesteś kobietą');
        break;
    default:
        console.log('jesteś ????');
}

/*
5. Utwórz pętle if-else. Jeśli użytkownik ma mniej niz 18 lat to wpisz w konsolkę "...i dzieckiem", jesli ma 18 lat - "...i juz doroslym", a jesli cos innego (weicej niz 18) - "i dorosłym"
*/
if (user.age < 18){
    console.log('... i jesteś dzieckiem');
}else if (user.age > 18){
    console.log('.... i dorosłym');
}else{
    console.log('...i już dorosłym');
}
/*
6. Wpisz w konsolkę informację o imieniu i nazwisku. "...a na imie Ci ".
*/
console.log ('A na imię Ci: ' + user.firstName + ' a nazwisko: ' + user.secondName);


/*7. Utwórz nowe repo w gicie. Skopiuj kod js na lokalny komputer, stwórz index.html, który bedzie z niego korzystal i spushuj projekt na guthuba.
*/