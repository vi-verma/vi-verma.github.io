const user = [
    { name: "Akash", lastmsg: "well", lastSeen: '09:30', img: "img/images.jpeg" },
    { name: "Rajesh", lastmsg: "well", lastSeen: '10:50', img: "img/images.jpeg" },
    { name: "puneet", lastmsg: "well", lastSeen: '7:30', img: "img/images.jpeg" },
    { name: "Amit", lastmsg: "well", lastSeen: '12:20', img: "img/images.jpeg" },
    { name: "shashank", lastmsg: "well", lastSeen: '01:30', img: "img/images.jpeg" },
    { name: "Avnish", lastmsg: "well", lastSeen: '02:55', img: "img/images.jpeg" },
    { name: "suresh", lastmsg: "well", lastSeen: '03:50', img: "img/images.jpeg" },
    { name: "Nash", lastmsg: "well", lastSeen: '08:20', img: "img/images.jpeg" },
    { name: "Akash", lastmsg: "well", lastSeen: '09:30', img: "img/images.jpeg" },
    { name: "Rajesh", lastmsg: "well", lastSeen: '10:50', img: "img/images.jpeg" },
    { name: "puneet", lastmsg: "well", lastSeen: '7:30', img: "img/images.jpeg" },
    { name: "Amit", lastmsg: "well", lastSeen: '12:20', img: "img/images.jpeg" },
    { name: "shashank", lastmsg: "well", lastSeen: '01:30', img: "img/images.jpeg" },
    { name: "Avnish", lastmsg: "well", lastSeen: '02:55', img: "img/images.jpeg" },
    { name: "suresh", lastmsg: "well", lastSeen: '03:50', img: "img/images.jpeg" },
    { name: "Nash", lastmsg: "well", lastSeen: '08:20', img: "img/images.jpeg" },
]

function myFunction() {
    renderUser(user);
}

function renderUser(users) {
    var x = document.getElementById("friends");
    var elem = "";

    for (var i = 0; i < users.length; i++) {
        elem += `<div class="last-chat" onclick="currentChat(${i})" >
                    <div class="ff"><img  class="fdp1" src="${users[i].img}" /></div>
                    <div style="display:inline-block;">
                        <p class="fname">${users[i].name}</p>
                        <p class="extra-information">${users[i].lastmsg}</p>
                    </div>
                    <p class="time">${users[i].lastSeen}</p>   
                    <hr>
                </div> `
    }
    // console.log(elem)
    x.innerHTML = elem;
}

function filterUser(inp){

    //this if statement is used for rendering whole array if no keyword is in input box
    if(inp.value == ""){
        renderUser(user);
        return;
    }

        //this function for rendering user as per search value
    let fUser = user.filter(function(q){
        return q.name == inp.value;
    });

        // let fUser = user.filter((q) => {
        //     return q.name == inp.value;
        // });

        // let fUser = user.filter((q) => q.name == inp.value);
    renderUser(fUser);
} 


function userSorting(){
    user.sort((a,b) => b.name.length - a.name.length);
   renderUser(user);
}





/**
 * crsssscnjsc
 * filter user
 * filteredUser
 *
 * renderUser(filtered)
 *
 *
 */



function currentChat(z) {
    var y = document.getElementById("cUser");
    var cht =  `<div id="headi">
                    <img  class="fdp" src="${user[z].img}" />
                </div>

                <div style="display: inline-block;line-height: 5px;">
                    <p class="name-tag">${user[z].name} </p>
                    <p class="tag-info">online</p>
                </div>
               `
    y.innerHTML = cht;

}


function handleKeyUp(e) {
    if (e.keyCode == 13) {
        chatBoxChat();
    }
    console.log(e);
}




function chatBoxChat(){
    let chat = document.getElementById("inputCht");
    if(chat.value == "") return;

    var chatScreen = document.getElementById("chat-screen");
    chatScreen.innerHTML += `<p style="background: #ddd; border-radius: 10px;padding: 5px;"><br><span > ${chat.value}</span></br></p>`
    chat.value = "";
    chatScreen.scroll(0, chatScreen.scrollHeight);
}