// Napisati funkciju koja uzima 1 parametar - limit. Funkcija treba da vrati objekat koji sadrži
// broj između 0 i limit koji pravi najdužu Collatz sekvencu i niz sa brojevima iz te sekvence.
// Collatz sekvenca se pravi tako da svaki broj dijelimo sa 2 ako je paran, a množimo sa 3 i
// dodajemo 1 na taj proizvod ukoliko je polazni broj neparan.
// Npr. 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// Svaka Collatz sekvenca završava sa brojem 1. Sekvence spremati u nizove. Ukoliko 2 ili
// više brojeva prave Collatz sekvencu iste dužine, a ta dužina je najveća, funkcija treba da
// vrati najveći broj koji pravi tu sekvencu.