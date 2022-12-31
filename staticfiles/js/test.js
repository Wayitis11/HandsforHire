function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie("csrftoken");


var p_form = document.getElementById("professional_register");
if (p_form) {
    p_form.addEventListener("submit", professionalRegister);
}

/* professional register function */
function professionalRegister(e) {
    e.preventDefault();
    console.log("worked");
    // var url = "https://handsforhire.herokuapp.com/ap//i/register-electrician/";
    var url = "http://127.0.0.1:8000/api/register-professionals/";


    // var email = document.getElementById("e_email");
    // var username =  document.getElementById("e_username").value;
    // var first_name = document.getElementById("p_first_name").value;
    // var last_name = document.getElementById("p_last_name").value;
    // // var profession = document.getElementById("p_profession").value;
    // var about_me = document.getElementById("p_about_me").value;
    // var password = document.getElementById("e_password").value;
    // var password2 = document.getElementById("e_password2").value;


    if (document.getElementById('e_email') != null) {
        email = document.getElementById("e_email").value;
        console.log(email);
    }

    // var email = ((document.getElementById("e_email")||{}).value)||"";   // document.getElementById("e_email").value;
    // var username =  ((document.getElementById("e_username")||{}).value)||"";   //document.getElementById("e_username").value;
    // var first_name = ((document.getElementById("p_first_name")||{}).value)||"";  // document.getElementById("p_first_name").value;
    // var last_name = ((document.getElementById("p_last_name")||{}).value)||"";  // document.getElementById("p_last_name").value;
    // var profession = ((document.getElementById("p_profession")||{}).value)||""; // document.getElementById("p_profession").value;
    // var about_me = ((document.getElementById("p_about_me")||{}).value)||"";  //  document.getElementById("p_about_me").value;
    // var password = ((document.getElementById("e_password")||{}).value)||"";   //document.getElementById("e_password").value;
    // var password2 = ((document.getElementById("e_password2")||{}).value)||"";  // document.getElementById("e_password2").value;
    
    // console.log(email);
    // var success = false

    fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-type": "application/json",
                "X-CSRFToken": csrftoken,
            },
            body: JSON.stringify({
                username: username,
                email: email,
                first_name:first_name,
                last_name:last_name,
                // profession:profession,
                about_me:about_me,
                password: password,
                password2: password2,
            }),
        })
        .then((response) => response.json())
        .then((response) => {
            console.log("this is response", response);
            // message.innerHTML += "<h6>" + JSON.stringify(response) + "</h6>";
            if (response.success === true) {
                // window.location.href = "https://handsforhire.herokuapp.com/email/success/";
                window.location.href = "http://127.0.0.1:8000/email/success/";
            }
        })
        .catch((err) => {
            console.log(err);
        });
}
