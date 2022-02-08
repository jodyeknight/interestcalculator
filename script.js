function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    
    if(principal <= 0){
        alert("enter a positive number");
         document.getElementById("principal").focus();
    }
    
    result = document.getElementById("result");
    result.innerHTML="The interest $" + interest;
    
    
}