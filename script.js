function updateRate()
{
    // update changes of slider
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval+"%";
}

function compute()
{
    var principal = document.getElementById("principal").value;

    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;

    // an alert If principal amount field is blank, is zero or is a negative number
    if  (principal <= "0"){
        alert("Enter a positive number");        
        window.location.href="#principal" // focus to the Principal input box
    }
    else{
        // calculating interest
        var interest = principal * rate * years/100;
        // current date + var years
        var year = new Date().getFullYear()+parseInt(years);
        // put the result inside the html and display
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark></br>"+
        "at an interest rate of <mark>"+rate+"%</mark> <br>"+
        "You will receive an amount of <mark>"+interest+"</mark><br>"+
        "in the year <mark>"+year+"</mark>" // highlight with the tag mark
    }
}