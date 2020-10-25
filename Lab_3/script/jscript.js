
console.log("Lab_3 Rozwiazania:");

// ------------------------------ ZAD_1 -------------------------------
function CountCharInString(text)
{
        var count = String(text).length;
        console.info("Liczba liter -> "+count);
}
// ------------------------------ ZAD_2 -------------------------------
function CountValuesInArray(array)
{
    var count=0;
    array.forEach((arg)=>{ count+=arg;});
    return count;
}
var array_egzample = [10,20,30,40,50,60,70,80,90,100];
console.info("[Zad_2] Suma wartosci w tablicy.");
console.info("input -> "+ array_egzample);
console.info("output -> "+ this.CountValuesInArray(array_egzample))

// ------------------------------ ZAD_3 -------------------------------
function TextMixer(text)
{
    var new_text="";
    for(var i=0;i<text.length;i++)
    {
       new_text += i%2==0 ? text[i].toUpperCase() : text[i];
    }
    return new_text;
}

// ------------------------------ ZAD_4 -------------------------------
function isFloat( n ) {
    return typeof n === 'number'
}
function Multiply(a,b)
{
    if( isFloat(a) && isFloat(b) )
        return a*b;
 
    return false;
}

// ------------------------------ ZAD_5 -------------------------------
//Napisz funkcje, która przyjmuje 2 parametry:
function AlaFunction(imie,miesiac)
{
    var toLower=miesiac.toLowerCase();
    var ret_string="";

    switch(toLower)
    {
        case 'styczen':
        case 'grudzien':
        case 'luty':
            ret_string= imie+" jezdzi na sankach";
            break;
        case 'marzec':
        case 'kwiecien':
        case 'maj':
            ret_string= imie+" chodzi po kaluzach";
            break;
        case 'czerwiec':
        case 'lipiec':
        case 'sierpien':
            ret_string= imie+" sie opala";
            break;
        case 'wrzesien':
        case 'pazdziernik':
        case 'listopad':
            ret_string= imie+" zbiera liscie";
            break;
        
        default:
            ret_string= imie+" uczy sie JS";
            break;
    }

    return ret_string;
}

// ------------------------------ ZAD_6 -------------------------------
const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
const str_separator='|';
function SortText(text,separator)
{
    return text.split(separator).sort().join(separator);
}
console.info("[Zad_6] Sortowanie.");
console.info("input -> "+ str);
console.info("output -> "+ this.SortText(str,str_separator));

// ------------------------------ ZAD_7 -------------------------------
function Conv2Upper(str_array)
{
    var new_arr=new Array();
    str_array.forEach((arg)=>{ new_arr.push(arg.toUpperCase()) });
    return new_arr;
}
function Conv2Mixed(str_array)
{
    var new_arr=new Array();
    str_array.forEach((arg)=>{ new_arr.push(TextMixer(arg)) });
    return new_arr;
}
const zad_7_input=["Ania" , "Marcin" , "Bartek" , "Piotr"];
console.info("[Zad_7] ToUpper | Mixed:");
console.info("input -> "+zad_7_input);
console.info("output -> " + Conv2Upper(zad_7_input));
console.info("output -> " +Conv2Mixed(zad_7_input));

// ------------------------------ ZAD_8 -------------------------------
function checkFemale(arg)
{
    return arg.slice(-1) == 'a' ? true : false;
}
console.info("[Zad_8] checkFemale:");
console.info("Ania -> " + checkFemale("Ania"));
console.info("Marcin -> " + checkFemale("Marcin"));

// ------------------------------ ZAD_9 -------------------------------
function countWomanInTable(arr)
{
    var count=0;
    arr.forEach((arg)=>{
        if(checkFemale(arg.split(' ')[0]))
            count++;
     });
     return count;
}

const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Betata Lecka",
    "Katarzyna Melecka"
]
console.info("[Zad_9] countWomanInTable:");
console.info("Ilosc kobiet -> " + countWomanInTable(users));