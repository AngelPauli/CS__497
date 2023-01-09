const btn1 = document.getElementById("btnOne");
const btn2 = document.getElementById("btnTwo");
const btn3 = document.getElementById("btnThree");
const btn4 = document.getElementById("btnFour");
const input1 = document.getElementById("input");

btn1.onclick = () => {
    document.getElementById("paraOne").innerHTML = 
             Number(document.getElementById("paraOne").innerHTML) + 1;
};



const colors = ["red", "orange", "yellow", "blue", "green", "brown"];
let index = 0;
btn2.onclick = () => {
    document.getElementById("paraTwo").style.color = colors[index%colors.length];
    index++;

};

btn4.onclick = () => {
    let value1 = Number(document.getElementById("numberOne").value);
    let value2 = Number(document.getElementById("numberTwo").value);
    document.getElementById("paraThree").innerHTML = value1 * value2;
};

input1.oninput = () => {
    document.getElementById("paraFour").innerHTML = input1.value;
};