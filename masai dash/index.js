function Manage(i,n,b,u,c){
    this.img=i;
    this.name=n;
    this.batch=`FT-WEB BATCH${b}`;
    this.unit=u;
    this.course=c;
}

// let usermanage=JSON.parse(localStorage.getItem("studs")) || [];

function management(e){
e.preventDefault();

    let form=document.getElementById("students");

    let img=document.getElementById("image").value;

    let name=document.getElementById("name").value;
    
    let batch=document.getElementById("batch").value;

    let unit=document.getElementById("unit").value;

    let course=document.getElementById("course").value;

    // console.log(img,name,batch,unit,course);

    let p1=new Manage(img,name,batch,unit,course);
    console.log("p1:",p1);

    let usermanage=JSON.parse(localStorage.getItem("studs")) || [];

    usermanage.push(p1);
     console.log(usermanage);
    // console.log(usermanage);

    localStorage.setItem("studs",JSON.stringify(usermanage));


}

function cal(){
    let usermanage=JSON.parse(localStorage.getItem("studs")) || [];
    
    let object={};

    for(let i=0;i<usermanage.length;i++){
        if(!object[usermanage[i].batch]){
            object[usermanage[i].batch]=0;
        }
    }
    

    for(let i=0;i<usermanage.length;i++){
        object[usermanage[i].batch]++;
    }
    

    console.log(object);
}
cal();