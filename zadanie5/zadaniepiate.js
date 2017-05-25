var a = prompt('Wpisz pierwszą liczbę'),
    b = prompt('Wpisz drugą liczbę'),
    value = (a * a) + (2 * a * b) - (b * b);

console.log(value);

if (value > 0) {
    console.log('wynik dodatni');
} else if (value < 0) {
    console.log('wynik ujemny');
} else {
    console.log('wynik jest równy zero');
}