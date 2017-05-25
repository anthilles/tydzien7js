var a = prompt('Wpisz pierwszą liczbę'),
    b = prompt('Wpisz drugą liczbę'),
    value = (a * a) + (2 * a * b) - (b * b);

console.log(value);

if (value > 0) {
    console.log('wynik dodatni');
} else {
    console.log('wynik ujemny');
}