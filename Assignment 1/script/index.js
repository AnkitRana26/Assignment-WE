
const validateDetails = (e) => {


    e.preventDefault();
    const emailId = document.getElementById("emailId").value;
    const countryCode = document.getElementById("countryCode").value;
    const number = document.getElementById("phoneNumber").value;



    if (number.length !== 10) {
        alert("You have entered an invalid Mobile number");
        return;
    } else if (emailId.length < 5) {
        alert("You have entered an invalid email address");
        return;
    }

    const data ={
        emailId,
        countryCode,
        number
    }

    localStorage.setItem('details',JSON.stringify(data));
    location.href ='pages/confirmation.html';


}

document.getElementById("form").addEventListener("submit", validateDetails);