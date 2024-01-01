const text = document.getElementById("text");
const button = document.getElementById("button");
const textNode = document.getElementById("textNode")
const input = 

// if the add button got clicked it will add new Elements
const newText = document.createElement("p");
textNode.innerHTML("")

button.addEventListener("click", function() {    
    document.body.appendChild(newText)
    newText.appendChild(textNode);
    console.log("halo dek");
})