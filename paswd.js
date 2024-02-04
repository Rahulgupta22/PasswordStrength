let pass = document.getElementById("pass");
let msg = document.getElementById("message");
let strth = document.getElementById("strength");

pass.addEventListener("input", () => {
    if(pass.value.length > 0)
    {
        msg.style.display= "block";
    }
    else{
        msg.style.display = "none";
    }

    if(pass.value.length < 4)
    {
        strth.innerHTML="weak";
        pass.style.borderColor="#ff5925";
        msg.style.color="#ff5925";
    }
    else if(pass.value.length >= 4 && pass.value.length <8)
    {
        strth.innerHTML="medium";
        pass.style.borderColor="yellow";
        msg.style.color="yellow";
    }

    if(pass.value.length >= 8)
    {
        strth.innerHTML="strong";
        pass.style.borderColor="#26d730";
        msg.style.color="#26d730";
    }

})