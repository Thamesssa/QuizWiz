
let username;
let score =0;


function saveUserName(name){
    if(typeof name !== "string"){
        throw new Error("Enter valid name")
    }
    if(!name){
        throw new Error("Name is required")
    }
    username=name
}




 saveUserName("sisanda")

console.log(username)





export {username, saveUserName}