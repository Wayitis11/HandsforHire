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

var c_form = document.getElementById("client_register");
var login_form = document.getElementById("login");
var message = document.getElementById("message");





if (c_form) {
    c_form.addEventListener("submit", clientRegister);
}

if (login_form) {
    login_form.addEventListener("submit", userLogin);
}






/* client register function  */

function clientRegister(e) {
    e.preventDefault();
    console.log("worked");
    // var url = "https://hands/forhire.herokuapp.com/api/register-client/";
    var url = "http://127.0.0.1:8000/api/register-client/";

    var email = document.getElementById("c_email").value;
    var username = document.getElementById("c_username").value;
    var password = document.getElementById("c_password").value;
    var password2 = document.getElementById("c_password2").value;
    console.log(email);
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
                password: password,
                password2: password2,
            }),
        })
        .then((response) => response.json())
        .then((response) => {
            console.log("this is response", response);
            message.innerHTML += "<h6>" + JSON.stringify(response) + "</h6>";
            if (response.success === true) {
                // window.location.href = "https://handsforhire.herokuapp.com/email/success/";
                window.location.href = "http://127.0.0.1:8000/email/success/";
            }
        })
        .catch((err) => {
            console.log(err);
        });
}



/* user login function */
function userLogin(e) {
    e.preventDefault();
    console.log("login form");

    // var url = "https://handsforhire.herokuapp.com/api/account/login/";
    var url = "http://127.0.0.1:8000/api/account/login/";
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "X-CSRFToken": csrftoken,
            },
            body: JSON.stringify({ username: username, password: password }),
        })
        .then((res) => res.json())
        .then((res) => {
            console.log("this is response", res);
            message.innerHTML += "<h6>" + JSON.stringify(res.message) + "</h6>";

            if (res.success === true) {
                message.innerHTML += "<h6> Login Successful </h6>";
            }
        })
        .catch((err) => {
            console.log(err);
        });
}






allProfessionals()

function allProfessionals() {

    var all_professionals = document.getElementById('all_professionals')

    // var url = "https://handsforhire.herokuapp.com/api/list-all-professionals/";
    var url = "http://127.0.0.1:8000/api/list-all-professionals/";

    fetch(url, {
        method:'GET'
    })
    .then((res)=>res.json())
    .then((res)=>{
        console.log("this is response", res);

            var all_prof_list = res

            for (var i in all_prof_list) {
                var item = `
                            <div>
                                <div class="row p-3 bg-white border rounded" >
                                <div class="col-md-3 mt-1 text-center">
                                    <img class="img-fluid img-responsive rounded-circle profile-image" src="${all_prof_list[i].professional.profilePicture}">
                                    <p><i class="fas fa-globe-asia"></i> online</p>
                                </div>
                                <div class="col-md-6 mt-1">
                                    <h5>${all_prof_list[i].professional.first_name} ${all_prof_list[i].professional.last_name}</h5>
                                    <div class="d-flex flex-row">
                                        <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>(10 reviews)</span>
                                    </div>

                                    <p class="text-justify  para mb-0"> ${all_prof_list[i].professional.about_me.substring(0,180)}... <br><br></p>
                                </div>
                                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                    <div class="d-flex flex-row align-items-center">
                                        <h4 class="mr-1">NPR: ${all_prof_list[i].professional.charge_fee}/hr</h4>
                                    </div>

                                    <div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-sm" type="button">Hire</button><button class="btn btn-outline-success btn-sm mt-2" type="button">View Profile</button></div>
                                </div>
                                </div>
                            </div>`

                            if(all_professionals != null){
                                all_professionals.innerHTML += item
                            }

                            
            }
    })
}





    