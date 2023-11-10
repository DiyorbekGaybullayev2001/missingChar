
// Examples

// missingChar('kitten', 1) → ktten
// missingChar('kitten', 0) → itten
// missingChar('kitten', 4) → kittn



let btn = document.getElementById("btn")

btn.onclick = function missingChar(){
    let str = document.getElementById("matn").value;
    let n = document.getElementById("son").value;
    let natija = document.getElementById("par")

    return natija.innerHTML= str.substring( 0, n )+str.substring(n+1, str.length)
    
  }