$(function () {
    var numStr = "";

    while (numStr.length < 4) {
        var randomNum = Math.floor(Math.random() * 10);
        if (numStr.indexOf(randomNum) == -1) {
            numStr += randomNum;
        }
    }

    console.log(numStr);

    $("#submitBtn").click(function () {
        let userInput = $("#userInput").val();
        if (userInput == "") {
            alert("請輸入數字");
            return;
        }
        let a = 0,
            b = 0;

        for (let i = 0; i < 4; i++) {
            if (userInput[i] == numStr[i]) {
                a++;
            } else {
                if (numStr.indexOf(userInput[i]) != -1) {
                    b++;
                }
            }
        }
        let anser = "";
        if (a == 4) {
            anser = "恭喜答對";
        } else {
            anser = a + "A" + b + "B";
        }
        $("#userInput").val("");
        console.log(anser);
        let html = `<div> ${userInput} ${anser} </div>`;
        $("#result").append(html);
    });
})