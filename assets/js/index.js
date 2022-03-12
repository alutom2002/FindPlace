function SearchDropdown() {
    let dropdown = document.querySelectorAll(".dropdown-btn");
    let dropdownMenu = document.querySelectorAll(".search-dropdown ul");

    dropdown.forEach((element, index) => {
        element.onclick = function() {
            let temp = document.querySelector(".search-dropdown ul.active");
            if (temp == null) {
                dropdownMenu[index].classList.add("active");
            } else {
                document.querySelector(".search-dropdown ul.active").classList.remove("active");
            }
        }
    })

    let list1 = document.querySelectorAll(".list-1");
    let list2 = document.querySelectorAll(".list-2");
    let list3 = document.querySelectorAll(".list-3");
    let list4 = document.querySelectorAll(".list-4");

    list1.forEach((element) => {
        element.onclick = function() {
            document.querySelector(".list-1.selected").classList.remove("selected");
            element.classList.add("selected");
        }
    })

    list2.forEach((element) => {
        element.onclick = function() {
            document.querySelector(".list-2.selected").classList.remove("selected");
            element.classList.add("selected");
        }
    })

    list3.forEach((element) => {
        element.onclick = function() {
            document.querySelector(".list-3.selected").classList.remove("selected");
            element.classList.add("selected");
        }
    })

    list4.forEach((element) => {
        element.onclick = function() {
            document.querySelector(".list-4.selected").classList.remove("selected");
            element.classList.add("selected");
        }
    })

}

SearchDropdown();