"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    $.get('/fortune', (Response) =>{
    $('#fortune-text').html(Response)
    });
    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};
    $.get(url,formData,(TempForecast) => {
        $('#weather-info').html(TempForecast.forecast)
        // alert(TempForecast.forecast);
    })


    // TODO: request weather with that URL and show the forecast in #weather-info
}

// {temp: TEMP, forecast: FORECAST}
$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();
    
    let melonInput = {
        
        'melon_type': $('#melon-type-field').val(),
        'qty': $('#qty-field').val()
    }

    $.post('/order-melons.json', melonInput,(msgCode) => {
        if (msgCode.code !== "ERROR"){
            $('#order-status').html(msgCode.msg);    
        }else {
            $('#order-status').addClass("order-error");
            $('#order-status').html(msgCode.msg);
        }
    });

    // return jsonify({'code': result_code, 'msg': result_text})

    // TODO: show the result message after your form
   
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);