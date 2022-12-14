
let key = "33695b2ce4b245baa488f877245de4ef";

async function getData(){

    try{

        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=15&apiKey=${key}`);
        let data  = await res.json();

        console.log(data);
        let Newsdata = data.articles;
        appendData(Newsdata);
    }
    catch(error){
        console.log("error:",error);
    }
}

getData();

async function getPopular(){

    try{

        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=general&pageSize=5&apiKey=${key}`);
        let data  = await res.json();

        console.log(data);
        let Populardata = data.articles;
        appendPopularData(Populardata);
    }
    catch(error){
        console.log("error:",error);
    }
}
getPopular();
async function getMviewed(){

    try{

        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=5&apiKey=${key}`);
        let data  = await res.json();

        console.log(data);
        let Mvieweddata = data.articles;
        appendMviewedData(Mvieweddata);
    }
    catch(error){
        console.log("error:",error);
    }
}

getMviewed();

function appendData(Newsdata){

    Newsdata.forEach ((el)=> {

        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src=el.urlToImage;
        image.addEventListener("click", function fullNews(){
            console.log(image);
            localStorage.setItem("Imagespo",JSON.stringify(el));
            window.location.href="fullnewsSpo.html";
            })
        let title = document.createElement("p");
        title.innerText=el.title;
        title.addEventListener("click", function fullNews(){
            console.log(image);
            localStorage.setItem("Imagespo",JSON.stringify(el));
            window.location.href="fullnewsSpo.html";
            })
        div.append(image,title);
        document.getElementById("mid-section").append(div);
        
    });
};
function appendPopularData(Populardata){

    Populardata.forEach ((el)=> {

        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src=el.urlToImage;
        image.addEventListener("click", function fullNews(){
            console.log(el);
            localStorage.setItem("Imagespo",JSON.stringify(el));
            window.location.href="fullnewsSpo.html";
            })
        let title = document.createElement("p");
        title.addEventListener("click", function fullNews(){
            console.log(el);
            localStorage.setItem("Imagespo",JSON.stringify(el));
            window.location.href="fullnewsSpo.html";
            })
        title.innerText=el.title;
        div.append(image,title);
        document.getElementById("popular").append(div);
        
    });
};
function appendMviewedData(Mvieweddata){

    Mvieweddata.forEach ((el)=> {

        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src=el.urlToImage;
        image.addEventListener("click", function fullNews(){
            console.log(image);
            localStorage.setItem("Imagespo",JSON.stringify(el));
            window.location.href="fullnewsSpo.html";
            })
        let title = document.createElement("p");
        title.innerText=el.title;
        title.addEventListener("click", function fullNews(){
            console.log(image);
            localStorage.setItem("Imagespo",JSON.stringify(el));
            window.location.href="fullnewsSpo.html";
            })
        div.append(image,title);
        document.getElementById("most-viewed").append(div);
        
    });
};
let disBlk = ()=>{
    document.querySelector("#srch").style.display="block";
    document.querySelector("#sIcon").style.marginTop="56px";
    document.querySelector("#srch").style.marginTop="15px";
    // document.querySelector("#srch").style.
    setTimeout(disNon,15000);
}
let disNon = ()=>{
    document.querySelector("#sIcon").style.marginTop="3px";
    document.querySelector("#srch").style.display="none";
}