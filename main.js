const select = document.querySelector(".filter")

select.addEventListener("change", function (e) {
    const chosen_city = e.target.value;
    const currently_visible = document.querySelectorAll(".item.active")
    const make_visible = document.querySelectorAll(`.item.${chosen_city}, .item.national`)

    currently_visible.forEach(function (cities) {
        cities.classList.remove("active");
    })
    make_visible.forEach(function (cities) {
            cities.classList.add("active");
    })
    })