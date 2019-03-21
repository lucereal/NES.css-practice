var schedule = require('node-schedule')
var request = require('request');

function foo(){
    var rule = new schedule.RecurrenceRule();
    rule.hour = 2;
    
    let quotep = document.querySelector("#quote")

    var j = schedule.scheduleJob(rule, function(){
        console.log("new quote!!");
        request('http://quotes.rest/qod.json', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            var quote = JSON.parse(body).contents.quotes[0].quote
            quotep.innerHTML = quote;
    
        });
    })
}
foo();

var fishbtn = document.querySelector("#fishbtn");
fishbtn.addEventListener("click", function(){
    console.log("fish");
    
   
    
})
function fish(){
    console.log("fish");
    
}