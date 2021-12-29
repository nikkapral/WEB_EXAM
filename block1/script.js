let data = {
    'Russia': {
        'Sochi' : {
            'price' : 40000
        },
        'Arhiz' : {
            'price' : 30000
        }
    },
    'Spain': {
        'Barcelona' : {
            'price' : 50000
        },
        'Madrid' : {
            'price' : 43840
        }
    }
}

function placeSelector(){
    var $place = $('#place');
    document.getElementById('place').innerHTML=''
    $.each(data[document.getElementById("country").value], function(key, value) {
        var $option = $("<option/>", {
            text: key
        });
        $place.append($option);
    });
}

function calculate(){
    let country = document.getElementById('country').value
    let place = document.getElementById('place').value
    let number = document.getElementById('numberOfPeople').value
    let cost = data[country][place]['price']
    let flag = document.getElementById('flag').checked
    let result = cost * Number(number)
    switch (flag){
        case true:
            alert(result)
            break;
        case false:
            localStorage.setItem('place',cost)
            break;
    }
}



let $country = $('#country');
$.each(data, function(key, value) {
    var $option = $("<option/>", {
        text: key
    });
    $country.append($option);
});
$("#country").on("change",function(){
    placeSelector()
})


