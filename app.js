/***** 1 задание *****/

$(".sortButton").click(function(){
    const sortArray = $(".sortInput").val().split(" ");
    const desc = +$(".sortDesc").val();
    sortArray.sort(function(a, b) {
        return desc * (a - b);
    });
    $(".sortInput").val(sortArray.join(" "));
});

/***** 2 задание *****/

for(let i = 0; i < 3; i++){
    for(let j = 0; j < 20; j++){
        $(".flag").append("<div class='color_" + i  + " line'>" + "O".repeat(80) + "</div>");
    }
}

/***** 3-4 задание *****/

$(".addPhone").click(function(){
    const newPhone = $("#form .phone").last().clone();
    const n = $("#form .phone").length
    newPhone.find(".label").html("Телефон " + (n+1));
    $("#form .phonesWrap").append(newPhone);
});

/***** 5 задание *****/

class Person{
    constructor(name, phone, comment) {
        this.name = name;
        this.phone = phone;
        this.comment = comment;
    }
    send() {
        for (let key in this){
            $("#form2 ." + key).val(this[key]);
            console.log(key, this[key])
        }
    }
}

const person = new Person("Иванов А А", "89827473237"  ,"Первый пользоватеь");

$("#form2 .submit").click(function(){person.send()})
