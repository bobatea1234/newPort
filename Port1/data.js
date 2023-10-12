const abtmebutton = document.getElementById("mybutton");
const abtme = document.getElementById("abtme");

abtmebutton.addEventListener("click", function() {
    abtme.scrollIntoView({ behavior: 'smooth' });
});





const edubutton = document.getElementById("edub");
const eduinfo = document.getElementById("info");

edubutton.addEventListener("click", function() {
    eduinfo.innerHTML = "• Elementary school since 2010";
});



const edubutton2 = document.getElementById("edub2");
const eduinfo2 = document.getElementById("info2");

edubutton2.addEventListener("click", function() {
    eduinfo2.innerHTML = "• Primary school since 2013 <br> • Grade 1 - 6 / GPA = 4.00";
});



const edubutton3 = document.getElementById("edub3");
const eduinfo3 = document.getElementById("info3");

edubutton3.addEventListener("click", function() {
    eduinfo3.innerHTML = "• High school since 2013 <br> • Grade 7 - 10 / GPA = 3.54 <br> • Grade 11 - 13 / GPA = 3.68 <br> • Grade 11 / GPA = 3.64 <br> • Grade 12 / GPA = 3.-- <br> • Grade 13 / GPA = 3.--";
    
});
