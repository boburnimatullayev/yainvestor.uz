let obj = [
    {
        Id: 1097,
        title:"Производство фармацевтических товаров",
        text1:"Необходимая сумма инвестиций: $ 1 360 000",
        text2:"Рентабельность инвестиционного капитала: 84%",
        text3:"Чистая прибыль по проекту: $ 1636 428",
        img:"../img/loyihalar/loyiha1.png",
        category:"yangi",
    },
    {
        Id: 1148,
        title:"Платформа для абитуриентов и студентов",
        text1:"Необходимая сумма инвестиций: $ 14 000",
        text2:"Рентабельность инвестиционного капитала: 160% ",
        text3:"Чистая прибыль в год: $ 24 912",
        img:"../img/loyihalar/loyiha2.jpg",
        category:"yangi",
    
    
    },
    {
        Id: 1150,
        title:"Птицефабрика",
        text1:"Необходимая сумма инвестиций: $ 42 950 ",
        text2:"Рентабельность инвестиционного капитала: 336%",
        text3:"Чистая прибыль в год: $ 180 720",
        img:"../img/loyihalar/loyiha3.jpg",
        category:"yangi",
        
    },
    {
        Id: 1143,
        title:"Продуктовый магазин",
        text1:"Необходимая сумма инвестиций: $ 11 000 ",
        text2:"Рентабельность инвестиционного капитала: 137%",
        text3:"Чистая прибыль в год: $ 16 800",
        img:"../img/loyihalar/loyiha4.jpg",
        category:"yangi",
        
    },
    
    {
        Id: 1140,
        title:"Ароматизация помещений",
        text1:"Необходимая сумма инвестиций: $ 10 000",
        text2:"Рентабельность инвестиционного капитала: 83%",
        text3:"Чистая прибыль в год: $ 9 200",
        img:"../img/loyihalar/loyiha5.jpg",
        category:"yangi",
        
    },
    {
        Id: 1125,
        title:"Скотоводческий комплекс ипереработка молока",
        text1:"Необходимая сумма инвестиций: $ 774 165",
        text2:"Рентабельность инвестиционного капитала: 69%",
        text3:"Чистая прибыль в год: $ 594 861",
        img:"../img/loyihalar/loyiha6.jpg",
        category:"yangi",
        
    },
    {
        Id: 1100,
        title:"IT академия",
        text1:"Необходимая сумма инвестиций: $ 75 000",
        text2:"Рентабельность инвестиционного капитала: 130%",
        text3:"Чистая прибыль в год: $ 390 120",
        img:"../img/loyihalar/loyiha7.jpg",
        category:"yangi",
        
    },
    {
        Id: 1161,
        title:"Завод по производству бетона ",
        text1:"Необходимая сумма инвестиций: $ 200 000",
        text2:"Рентабельность инвестиционного капитала: 67% ",
        text3:"Чистая прибыль от проекта $ 336 000",
        img:"../img/loyihalar/loyiha8.jpg",
        category:"yangi",
        
    },
    {
        Id: 1175,
        title:"Дистрибьюторская компания",
        text1:"Необходимая сумма инвестиций: $ 10 000",
        text2:"Рентабельность инвестиционного Капитала: 442%",
        text3:"Чистая прибыль в год: $ 55 200",
        img:"../img/loyihalar/loyiha9.jpg",
        category:"yangi",
        
    },
    {
        Id: 1139,
        title:"Экспорт мёда и растительного масла",
        text1:"Необходимая сумма инвестиций: $ 77 300",
        text2:" Рентабельность инвестиционного капитала: 374% ",
        text3:"Чистая прибыль в год: $ 289 100",
        img:"../img/loyihalar/loyiha10.jpg",
        category:"yangi",
        
    },
    {
        Id: 1104,
        title:"ПроизводстВО брендовых пакетов и упаковоК",
        text1:"Необходимая сумма инвестиций: $ 540 000",
        text2:"Рентабельность инвестиционного капитала: 82%",
        text3:" Чистая прибыль в год: $ 632 400",
        img:"../img/loyihalar/loyiha11.jpg",
        category:"yangi",
        
    },
    {
        Id: 1133,
        title:"Выращивание лекарственных растений и переработка (расширение деятельности)",
        img:"../img/finshimg/img1.jpg",
        category:"eski",
        
    },
    {
        Id: 704,
        title:"Инвестиции в майнинг с залоговойгарантией",
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
        title:"Услуги по поступлению в зарубежные ВУЗы (расширение деятельности)",
        img:"../img/finshimg/img4.jpg",
        category:"eski",
        
    },
    {
        Id: 1206,
        title:"Компания дубляжа аниме и мультсериалов (Расширение деятельности)",
        img:"../img/finshimg/img5.jpg",
        category:"eski",
        
    },
    {
        Id: 1153,
        title:"Переработка арахиса (расширение деятельности с залоговым обеспечением)",
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
            <div class="index-techer2 ruindex-ticher">
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