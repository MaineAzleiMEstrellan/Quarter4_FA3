function display(){

    var num=prompt("Enter a number: ");
    while( isNaN(num)){
       
        num=prompt("Enter a VALID number: ");
    }
    var output="";
    document.getElementById("inpdisplay").innerHTML="Number Inputted: "+num+"<br><br>";

    if(num%2==0){

        for (let i = num; i >= 1; i--) {
            for (let m = 1; m <= i; m++) {
                output += i + " ";
            }
            output += "<br>";
        }
        
    }else{
        for (let i = num; i >= 1; i--) {
            for (let m = 1; m <= num; m++) {
                output += i + " ";
            }
            output += "<br>";
        }
        
    }
    document.getElementById("result1").innerHTML = output;
    return false;
}

let names = [];

function Contacts() {
    var output = "";
    for (let i = 0; i < names.length; i++) {
        output += names[i] + " ";
    }
    document.getElementById("result2").innerHTML = output;
}

function add() {
    var name = document.getElementById("name").value;
    if (name === "") {
        alert("Please enter a valid name.");
        return;
    }

    if (names.length === 7) {
        names.shift(); 
    }

    names.push(name); 
    document.getElementById("name").value = ""; 
    Contacts();
    return false;
}

function remove() {
    if (names.length > 0) {
        names.pop(); 
    }
    Contacts();
    return false;
}