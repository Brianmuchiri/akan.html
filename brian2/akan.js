
function getAkanName

    var Days ={"Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",};
    var maleAkanName =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","kofi","Kwame",];
    var femaleAkanName ={"Akosua","Adettwoa","Abenaa","Akua","Yaa","Afua","Ama",};
    var myBirthday = document.getElementById("myBirthDate").value;
    var myGender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    if(myBirthday === "") {
        document.getElementById("message").innerHTML = "<div> You Didnt Submit a Valid Date!</div>";
    } 
    else {
    for(var i=0;i<myGender.length;i++){
        if(myGender[i].checked){
            if(myGender[i].value === "Male") {
                document.getElementById("message").innerHTML = "born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + maleAkanNames[dayOfTheWeek] + "</span>";
            }
            else{
                document.getElementById("message").innerHTML = "born on a <span>" + days[dayOfTheWeek] + "</span>,  Your Akan Name's <span>" + femaleAkanName[dayOfTheWeek + "</span>"];
            }
            break;
        }
        else{
            document.getElementById("message").innerHTML = "<div> Please Select a Gender </div>";
        }
        }
    }
    }