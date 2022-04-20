console.log("Code your solution!");

let form = document.querySelector("#inputForm");
console.log(form); //null? FORGOT DEFER
const error = document.querySelector("#errormsg");
console.log(error); //null? FORGOT DEFER
const list = document.querySelector("#todolist");

form.addEventListener("submit", (event) => {
    event.preventDefault(); //prevent page from refreshing
    let text = event.target.todoField.value; //Submit button is linked to 
                                            //the textfield (id todoField), and that's where 
                                            //this is pulled from
    console.log(text);
    list.innerHTML += `<li>${text}</li`;
});
