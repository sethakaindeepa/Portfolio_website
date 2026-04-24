(function (){
    emailjs.init("VhEFxfjs7zkVssLZl");
})();

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_wjwedfp", "template_oeitdlb", params)
        .then(function (response){
          alert("Email sent successfully!");
        }, function (error){
          alert("Failed to send email!");
        });

}