document.querySelector("#box").addEventListener('change', function() {
    if (this.checked) {
        document.body.style.backgroundColor = "black";
    } else {
        document.body.style.backgroundColor = "white";
    }
});
document.querySelector("#form").addEventListener('submit', function(event) {
    let log = document.querySelector("#email");
    let pass = document.querySelector("#password");
    log.style.borderColor = "crimson";
    pass.style.borderColor = "crimson";
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if (log.value.trim() == '' && pass.value.trim() == '') {
        log.style.borderColor = "blue";
        pass.style.borderColor = "blue";
        alert("Введите адрес эл. почты и пароль");
        event.preventDefault();
    } else if (log.value.trim() == '') {
        log.style.borderColor = "blue";
        alert("Введите адрес эл. почты");
        event.preventDefault();
    } else if (pass.value.trim() == '') {
        pass.style.borderColor = "blue";
        alert("Введите пароль");
        event.preventDefault();
    } else if (log.value.length < 3) {
        log.style.borderColor = "blue";
        alert("Адрес эл. почты должен содержать не менее 3 символов");
        event.preventDefault();
    } else {
        let s = 0;
        let n = 0;
        for (let i = 0; i < pass.value.length; i++)
            for (let j = 0; j < numbers.length; j++)
                if (pass.value[i] == numbers[j]) n++;
        for (let i = 0; i < pass.value.length; i++)
            for (let j = 0; j < en.length; j++)
                if (pass.value[i].toLowerCase() == en[j]) s++;
        if (n == 0 || s == 0) {
            pass.style.borderColor = "blue";
            alert("Пароль должен содержать цифры и буквы");
            event.preventDefault();
        }
    }
});