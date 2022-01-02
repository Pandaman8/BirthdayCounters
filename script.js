


function updateTC(){
    var days = document.getElementById("TdayCount");
    var hours = document.getElementById("ThourCount");
    var minutes = document.getElementById("TminuteCount");
    var seconds = document.getElementById("TsecondCount");
    var currentTime = new Date();

    var currentYear = currentTime.getFullYear();

    var currentBirthday = new Date(currentYear, 2, 18, 0, 0, 0);

    if(currentTime > currentBirthday){
        currentBirthday =  new Date(currentYear+1, 2, 18, 0, 0, 0);
    }

    var difference = currentBirthday - currentTime;
    var day = Math.floor((difference/(1000*60*60*24)));
    var hour = Math.floor(((difference/(1000*60*60))%24));
    var minute = Math.floor(((difference/(1000*60))%60));
    var second = Math.floor(((difference/1000)%60));

    
    days.innerHTML = (day < 10)? "0" + day : day;
    hours.innerHTML = (hour < 10)? "0" + hour : hour;
    minutes.innerHTML = (minute < 10)? "0" + minute : minute;
    seconds.innerHTML = (second < 10)? "0" + second : second;
}
function updateNC(){
    var days = document.getElementById("NdayCount");
    var hours = document.getElementById("NhourCount");
    var minutes = document.getElementById("NminuteCount");
    var seconds = document.getElementById("NsecondCount");
    var currentTime = new Date();

    var currentYear = currentTime.getFullYear();

    var currentBirthday = new Date(currentYear, 5, 30, 0, 0, 0);

    if(currentTime > currentBirthday){
        currentBirthday =  new Date(currentYear+1, 5, 30, 0, 0, 0);
    }

    var difference = currentBirthday - currentTime;
    var day = Math.floor((difference/(1000*60*60*24)));
    var hour = Math.floor(((difference/(1000*60*60))%24));
    var minute = Math.floor(((difference/(1000*60))%60));
    var second = Math.floor(((difference/1000)%60));

    
    days.innerHTML = (day < 10)? "0" + day : day;
    hours.innerHTML = (hour < 10)? "0" + hour : hour;
    minutes.innerHTML = (minute < 10)? "0" + minute : minute;
    seconds.innerHTML = (second < 10)? "0" + second : second;
}
function updateGC(){
    var days = document.getElementById("GdayCount");
    var hours = document.getElementById("GhourCount");
    var minutes = document.getElementById("GminuteCount");
    var seconds = document.getElementById("GsecondCount");
    var currentTime = new Date();

    var currentYear = currentTime.getFullYear();

    var currentBirthday = new Date(currentYear, 8, 8, 0, 0, 0);

    if(currentTime > currentBirthday){
        currentBirthday =  new Date(currentYear+1, 8, 8, 0, 0, 0);
    }

    var difference = currentBirthday - currentTime;
    var day = Math.floor((difference/(1000*60*60*24)));
    var hour = Math.floor(((difference/(1000*60*60))%24));
    var minute = Math.floor(((difference/(1000*60))%60));
    var second = Math.floor(((difference/1000)%60));

    
    days.innerHTML = (day < 10)? "0" + day : day;
    hours.innerHTML = (hour < 10)? "0" + hour : hour;
    minutes.innerHTML = (minute < 10)? "0" + minute : minute;
    seconds.innerHTML = (second < 10)? "0" + second : second;
}
function updateDC(){
    var days = document.getElementById("DdayCount");
    var hours = document.getElementById("DhourCount");
    var minutes = document.getElementById("DminuteCount");
    var seconds = document.getElementById("DsecondCount");
    var currentTime = new Date();

    var currentYear = currentTime.getFullYear();

    var currentBirthday = new Date(currentYear, 5, 22, 0, 0, 0);

    if(currentTime > currentBirthday){
        currentBirthday =  new Date(currentYear+1, 5, 22, 0, 0, 0);
    }

    var difference = currentBirthday - currentTime;
    var day = Math.floor((difference/(1000*60*60*24)));
    var hour = Math.floor(((difference/(1000*60*60))%24));
    var minute = Math.floor(((difference/(1000*60))%60));
    var second = Math.floor(((difference/1000)%60));

    
    days.innerHTML = (day < 10)? "0" + day : day;
    hours.innerHTML = (hour < 10)? "0" + hour : hour;
    minutes.innerHTML = (minute < 10)? "0" + minute : minute;
    seconds.innerHTML = (second < 10)? "0" + second : second;
}

function updateRC(){
    var days = document.getElementById("RdayCount");
    var hours = document.getElementById("RhourCount");
    var minutes = document.getElementById("RminuteCount");
    var seconds = document.getElementById("RsecondCount");
    var currentTime = new Date();

    var currentYear = currentTime.getFullYear();

    var currentBirthday = new Date(currentYear, 10, 22, 0, 0, 0);

    if(currentTime > currentBirthday){
        currentBirthday =  new Date(currentYear+1, 10, 22, 0, 0, 0);
    }

    var difference = currentBirthday - currentTime;
    var day = Math.floor((difference/(1000*60*60*24)));
    var hour = Math.floor(((difference/(1000*60*60))%24));
    var minute = Math.floor(((difference/(1000*60))%60));
    var second = Math.floor(((difference/1000)%60));

    
    days.innerHTML = (day < 10)? "0" + day : day;
    hours.innerHTML = (hour < 10)? "0" + hour : hour;
    minutes.innerHTML = (minute < 10)? "0" + minute : minute;
    seconds.innerHTML = (second < 10)? "0" + second : second;
}



setInterval(updateTC, 1000);
setInterval(updateNC, 1000);
setInterval(updateGC, 1000);
setInterval(updateDC, 1000);
setInterval(updateRC, 1000);

