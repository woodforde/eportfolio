console.log("test")


// template_y03hkqt
// service_7buibm5
// vj12xtnfVPvphFNBm
function contact(event) {
    event.preventDefault();
    console.log(event.target)
}

let modalIsOpen = false;

function toggleModal() {
    if (modalIsOpen) {
        document.body.classList.remove("modal--open");
    } else {
        document.body.classList += (" modal--open");
    }
    modalIsOpen = !modalIsOpen;
}