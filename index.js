var schedule = require('node-schedule')
var request = require('request');


function foo(){
    var rule = new schedule.RecurrenceRule();
    // rule.hour = 7;
   rule.minute = 32;
    let quotep = document.querySelector("#quote")
    let quoteauthor = document.querySelector("#quoteauthor");
    var j = schedule.scheduleJob(rule, function(){
        console.log("new quote!!");
        request('http://quotes.rest/qod.json', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            var quote = JSON.parse(body).contents.quotes[0]
            quotep.innerHTML = quote.quote;
            quoteauthor.innerHTML = quote.author
        });
    })
}
foo();

window.onload = function(){
    console.log("loaded")
    let quotep = document.querySelector("#quote")
    let quoteauthor = document.querySelector("#quoteauthor");
    request('https://quotes.rest/qod.json', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        var quote = JSON.parse(body).contents.quotes[0]
        quotep.innerHTML = quote.quote;
        quoteauthor.innerHTML = quote.author
    });
}

let emailbtn = document.querySelector("#emailbtn")
emailbtn.addEventListener("click", function(){
    console.log("email");
    let quotep = document.querySelector("#quote")
    let quoteauthor = document.querySelector("#quoteauthor");
    request('https://quotes.rest/qod.json', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        var quote = JSON.parse(body).contents.quotes[0]
        quotep.innerHTML = quote.quote;
        quoteauthor.innerHTML = quote.author
    });

   
   
})

