const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el")

function save(){
    let inputValue = inputEl.value;
    let li = document.createElement("li");
    li.textContent = inputValue;

    let closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.textContent = "X";
    closeButton.addEventListener("click",function(){
        this.parentElement.remove()
    })

    li.appendChild(closeButton)
    if (inputValue === "") {
            alert("You must write something!");
            } else {
                ulEl.appendChild(li)
            }
        inputEl.value = "";

        li.addEventListener("click", function() {
            this.classList.toggle("checked");
        });
}
inputEl.addEventListener("keyup",function(event){
    if(event.key === "Enter"){
        save();
    }
})


