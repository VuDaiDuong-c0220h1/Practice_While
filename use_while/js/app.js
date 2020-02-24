let num;
let total = 0;
while (num !== -1){
    num = parseInt(prompt("Enter a number: "));
    if (num === -1)
        break;
    alert(num);
    total += num;
}
alert(total)

let i = 1;
while (i <= 100){
    document.write("<hr width ="  + i +  "% >");
    i++;
}
