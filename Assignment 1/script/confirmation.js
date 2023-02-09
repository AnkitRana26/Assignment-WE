const detials = JSON.parse(localStorage.getItem('details')) ||{};

document.getElementById('emailId').innerText=detials.emailId;
document.getElementById('phoneNumber').innerText=`${detials.countryCode} ${detials.number}`



