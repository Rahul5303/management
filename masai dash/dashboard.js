function append(){
    let usermanage=JSON.parse(localStorage.getItem("studs")) || [];

    let container=document.getElementById("container");

    // to get remove from main page se bhi delete honaa chaiye isliye hume innerhtml container kaa use krna chaiye//
    container.innerHTML=null;

    
    usermanage.forEach(function(elem,index){

// console.log(elem);
let box=document.createElement("div");

let img=document.createElement("img");
img.src=elem.image;

let h3=document.createElement("h3");
h3.innerText=elem.name;

let p1=document.createElement("p");
p1.innerText=elem.unit;

let p2=document.createElement("p");
p2.innerText=elem.batch;

let p3=document.createElement("p");
p3.innerText=elem.course;

let btn=document.createElement("button");
btn.innerText="Remove";
btn.addEventListener("click",function(){
    remove(index);
});


box.append(img,h3,p1,p2,p3,btn);

container.append(box);

    });
}

append();


function remove(index){
    // console.log(index);
    let usermanage=JSON.parse(localStorage.getItem("studs")) || [];

    let newusermanage=usermanage.filter(function(elem,i){

        if(i===index){
            let trash=JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(elem);

            localStorage.setItem("trash",JSON.stringify(trash));
        }
        else{
          return  i!==index;
        }

    });
    // dom as well localstorage//
    // yahe se bas localstorage me data hi store hoga aur delete krr sakte hai pr main page se delete nahi hoga isliye hume conatiner.innerhtml kaa use krna padega main page se remove kene ke liye

    localStorage.setItem("studs",JSON.stringify(newusermanage));
    append();
    // append also cALL always remember it//
}