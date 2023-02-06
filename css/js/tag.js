document.querySelectorAll(".tag").forEach(element => {
const tagName = element.tagName.toLocaleLowerCase();


    element.style.borderColor = "#616161"

    if(!element.classList.contains("nolabel")){
        const label = document.createElement("label")

        label.style.backgroundColor = "#616161"
        label.innerHTML = tagName
        element.insertBefore(label, element.childNodes[0])
    }
})