
window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loader")  
  });
let obj = [
{
    Id: 1097,
    title:"Farmatsevtika mahsulotlarini ishlab chiqarish",
    text1:"Kerakli investitsiya miqdori: $ 1 360 000",
    text2:"Investitsiya kapitalining rentabelligi: 84%",
    text3:"Loyihaning sof daromadi: $ 1636 428",
    img:"../img/loyihalar/loyiha1.png",
    category:"yangi",
},
{
    Id: 1148,
    title:"Abituriyentlar va talabalar uchun platforma",
    text1:"Kerakli investitsiya miqdori: $ 14 000",
    text2:"Investitsiya kapitalining rentabelligi: 160% ",
    text3:"Yillik sof foyda: $ 24 912",
    img:"../img/loyihalar/loyiha2.jpg",
    category:"yangi",


},
{
    Id: 1150,
    title:"Parrandachilik fermasi",
    text1:"Kerakli investitsiya miqdori: $ 42 950 ",
    text2:"Investitsiya kapitalining rentabelligi: 336%",
    text3:"Yillik sof foyda: $ 180 720",
    img:"../img/loyihalar/loyiha3.jpg",
    category:"yangi",
    
},
{
    Id: 1143,
    title:"Oziq-ovqat do'koni",
    text1:"Kerakli investitsiya miqdori: $ 11 000 ",
    text2:"Investitsiya kapitalining rentabelligi: 137%",
    text3:"Yillik sof foyda: $ 16 800",
    img:"../img/loyihalar/loyiha4.jpg",
    category:"yangi",
    
},

{
    Id: 1140,
    title:"Binolarni aromatizatsiya qilish",
    text1:"Kerakli investitsiya miqdori: $ 10 000",
    text2:"Investitsiya kapitalining rentabelligi: 83%",
    text3:"Yillik sof foyda: $ 9 200",
    img:"../img/loyihalar/loyiha5.jpg",
    category:"yangi",
    
},
{
    Id: 1125,
    title:"Chorvachilik kompleksi sutni qayta ishlash",
    text1:"Kerakli investitsiya miqdori: $ 774 165",
    text2:"Investitsiya kapitalining rentabelligi: 69%",
    text3:"Yillik sof foyda: $ 594 861",
    img:"../img/loyihalar/loyiha6.jpg",
    category:"yangi",
    
},
{
    Id: 1100,
    title:"It akademiyasi",
    text1:"Kerakli investitsiya miqdori: $ 75 000",
    text2:"Investitsiya kapitalining rentabelligi: 130%",
    text3:"Yillik sof foyda: $ 390 120",
    img:"../img/loyihalar/loyiha7.jpg",
    category:"yangi",
    
},
{
    Id: 1161,
    title:"Beton zavodi ",
    text1:"Kerakli investitsiya miqdori: $ 200 000",
    text2:"Investitsiya kapitalining rentabelligi: 67% ",
    text3:"Loyihadan sof foyda $ 336 000",
    img:"../img/loyihalar/loyiha8.jpg",
    category:"yangi",
    
},
{
    Id: 1175,
    title:"Дистрибьюторская компания",
    text1:"Kerakli investitsiya miqdori: $ 10 000",
    text2:"Investitsiya kapitalining rentabelligi: 442%",
    text3:"Yillik sof foyda: $ 55 200",
    img:"../img/loyihalar/loyiha9.jpg",
    category:"yangi",
    
},
{
    Id: 1139,
    title:"Asal va o'simlik yog'ini eksport qilish",
    text1:"Kerakli investitsiya miqdori: $ 77 300",
    text2:" Investitsiya kapitalining rentabelligi: 374% ",
    text3:"Yillik sof foyda: $ 289 100",
    img:"../img/loyihalar/loyiha10.jpg",
    category:"yangi",
    
},
{
    Id: 1104,
    title:"Tovar paketlari va paketlarini ishlab chiqarish",
    text1:"Kerakli investitsiya miqdori: $ 540 000",
    text2:"Investitsiya kapitalining rentabelligi: 82%",
    text3:" Yillik sof foyda: $ 632 400",
    img:"../img/loyihalar/loyiha11.jpg",
    category:"yangi",
    
},
{
    Id: 1133,
    title:"Dorivor o'simliklarni etishtirish va qayta ishlash (faoliyatni kengaytirish)",
    img:"../img/finshimg/img1.jpg",
    category:"eski",
    
},
{
    Id: 704,
    title:"Garov kafolati bilan qazib olishga investitsiyalar",
    img:"../img/finshimg/img2.jpg",
    category:"eski",
    
},
{
    Id: 1211,
    title:"Проект продан в день презентации!",
    img:"../img/finshimg/img3.jpg",
    category:"eski",
    
},
{
    Id: 1181,
    title:"Xorijiy universitetlarga kirish xizmatlari (faoliyatni kengaytirish)",
    img:"../img/finshimg/img4.jpg",
    category:"eski",
    
},
{
    Id: 1206,
    title:"Anime va animatsion seriyalarning dublyaj kompaniyasi (faoliyatni kengaytirish)",
    img:"../img/finshimg/img5.jpg",
    category:"eski",
    
},
{
    Id: 1153,
    title:"Yong'oqni qayta ishlash (garov bilan faoliyatni kengaytirish)",
    img:"../img/finshimg/img6.jpg",
    category:"eski",
    
},




]

let list = document.querySelector(".index-techer-list")
let list2 = document.querySelector(".index-techer-list2")

function loader (){
    let ui = ""
    obj.map(item => {
    if(item.category == "yangi"){
        ui += `
        <li class="index-ticher-item">
        <div class="index-techer2">
            <div class="index-techer-img-con">
               <img src="${item.img}" alt="" class="index-ticher-img">
                  
            </div>
            <div class="index-ticher--info">
            <span class="index-ticher-id">№${item.Id}</span>

                <h3 class="index-ticher--name">${item.title} </h3>
                 <div class="icon-check"> <div class="check"><i class="fa-solid fa-check"></i> </div><p class="index-ticher--title"> ${item.text1}</p></div> 
                 <div class="icon-check"> <div class="check"><i class="fa-solid fa-check"></i> </div><p class="index-ticher--title"> ${item.text2}</p></div> 
                 <div class="icon-check"> <div class="check"><i class="fa-solid fa-check"></i> </div><p class="index-ticher--title"> ${item.text3}</p></div> 
              
            </div>
        </div>
    </li>
        `
    }
        return list.innerHTML = ui
    })
}

loader()

function loader2 (){
    let ui2 = ""
    obj.map(item => {
    if(item.category == "eski"){
        ui2 += `
        <li class="index-ticher-item">
        <div class="index-techer2 finish-tich">
            <div class="index-techer-img-con finish-con ">
               <img src="${item.img}" alt="" class="index-ticher-img finish-item-img">
                  
            </div>
            <div class="index-ticher--info finish-info">
            <span class="index-ticher-id">№${item.Id}</span>

                <h3 class="index-ticher--name title">${item.title} </h3>
                
              
            </div>
        </div>
    </li>
        `
    }
        return list2.innerHTML = ui2
    })
}

loader2()







//  video page

let play = document.querySelector(".you")
let videoPlay = document.querySelector(".video-play")
let close = document.querySelector(".video-close")
let ifra = document.querySelector("#video-iframe")

play.addEventListener("click", () => {
    
    videoPlay.style.display = "flex"
})

close.addEventListener("click", () => {
    videoPlay.style.display = "none"
    ifra.setAttribute("src","https://www.youtube.com/embed/Ia6vpiszE3I")
})  



// menu page 


const btn = document.querySelector(".language")
const open = document.querySelector(".open-langu")
let menuOpen = false

btn.addEventListener("click", () =>{
    if(!menuOpen){
        open.classList.add("open")
        menuOpen = true
    }
    else{
        open.classList.remove("open")
        menuOpen = false
    }
}) 