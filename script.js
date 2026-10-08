let quoteID = document.getElementById('quoteID')
let authorID = document.getElementById('authorID') // samain semua jadi authorID
let btn = document.getElementById('generateBtn') // ambil tombolnya

console.log(quoteID);
console.log(authorID);

async function getQuote() {
    try {
        quoteID.innerHTML = "Loading...";
        authorID.innerHTML = "Loading...";

        let result = await fetch('https://dummyjson.com/quotes/random');
        let data = await result.json();

        quoteID.innerHTML = data.quote;
        authorID.innerHTML = data.author;

    } catch (error) {
        console.log("Error : " + error);
    }
}

// INI KODENYA BIAR TANPA REFRESH BROWSER
btn.addEventListener('click', getQuote);

getQuote(); // ini buat load pertama kali pas buka web