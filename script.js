const productList = document.querySelector("#product");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-input");
const categoryBtn = document.querySelectorAll(".catg-btn");
const container = document.querySelector("#container");
const open = document.querySelector("#open")
const close = document.querySelector("#close");
const sidebar = document.querySelector("#sidebar");


open.addEventListener("click", () => {
    console.log("open");
    sidebar.style.transform = "translateX(0%)"
});

close.addEventListener("click", () => {
    console.log("closed");
    sidebar.style.transform = "translateX(100%)"
});

function filterProduct() {
    const searchVal = searchInput.value.toLowerCase();
    const productItem = document.querySelectorAll("#product");
    const activeCategory = document.querySelector(".catg-btn.active").dataset.category;

    productItem.forEach(item => {
        const title = item.querySelector("h2").innerText.toLocaleLowerCase();
        const category = item.dataset.category;

        if ((title.includes(searchVal) || searchVal == "") && (category === activeCategory || activeCategory === "all")) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}


function setCategory(e) {
    categoryBtn.forEach(btn => {
        btn.classList.remove("active");
        e.target.classList.add('active');
        filterProduct();
    })
}

categoryBtn.forEach(btn => {
    btn.addEventListener("click", setCategory)
})

searchBtn.addEventListener("click", filterProduct);
searchInput.addEventListener("keyup", filterProduct);
filterProduct();