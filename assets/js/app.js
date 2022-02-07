// classes for
const ft = new Fetch();
const ui = new UI();

// event listeners

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
    const currentVal = search.value;

    ft.getCurrent(currentVal).then((data) => {
        // call ui
        ui.populatedUI(data);
        // save to local storage
        ui.saveToLS(data);
    });
});

// local storage event listeners

window.addEventListener("DOMContentLoaded", () => {
    const dataSaved = ui.getFromLS();
});