
window.onload = () => {
    roll();
}

function roll() {
    const URL = "https://api.adviceslip.com/advice";
    fetch(URL).then(res => {
        return res.json();
    }).then(advice => {
        console.log(advice);
        document.getElementById("adviceID").innerText = advice.slip.id;
        document.getElementById("adviceText").innerText = advice.slip.advice;
    })
 
}