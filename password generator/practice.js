const displayofpassword= document.getElementById("input-tesk");
const generate = document.getElementById("generate");

const length = 12;

const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowercase = "qwertyuiopasdfghjklzxcvbnm";
const numbers= "1234567890";
const characters = "!@#$%^&*()_+-=[]}{|;:,.<>/";

const allChars = uppercase + lowercase +numbers + characters;

function createPassword(){
    let password= "";
    
    password+= uppercase[Math.floor(Math.random() * uppercase.length)];
    password+= lowercase[Math.floor(Math.random() * lowercase.length)];
    password+= numbers[Math.floor(Math.random() * numbers.length)];
    password+= characters[Math.floor(Math.random() * characters.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
        console.log(password)
    }
    displayofpassword.value=password;

};

function copyPassword(){
    displayofpassword.select();
    document.execCommand("copy");
};