function getLoginData(){
    let userName = document.getElementById("inp_name").value;
    console.log(`${userName} just logged in.`);
    localStorage.setItem("logged_in_user", userName);
}

function welcoming(){
    let user = localStorage.getItem("logged_in_user");
    alert(`Login Successful! Welcome back, ${user}. Please click "Ok" to continue and let's start to heat up your foods ^^`);
}

function getSettingsData(){
    let start = document.getElementById("inp_start_time").value;
    let stop = document.getElementById("inp_start_time").value;
    let duration = start - stop;
    let power = document.getElementById("inp_power").value;
    console.log(`The microwave is set to ${power} in ${duration}`);
}