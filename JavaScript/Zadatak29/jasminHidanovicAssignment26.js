// Napišite funkciju koja uzima niz kao ulaz i vraća novi niz u kojem su
// uklonjeni duplirani elementi. Redoslijed elemenata u rezultirajućem
// nizu treba biti zadržan.

function uklonjeniDuplikati(nekiNiz) {

    return nekiNiz.filter((elem, index) => nekiNiz.indexOf(elem) === index)
}

console.log(uklonjeniDuplikati([1,2,1,1,2,3]))
console.log(uklonjeniDuplikati(['angel', 'music', 'music', 'angel']))