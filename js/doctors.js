
let closeBtn = document.querySelector(".search-close-btn button")

closeBtn.onclick =function() {
  mainSearch.classList.toggle("active")
  document.body.style.overflowY = "visible"
  contactBtn.style.zIndex = "1000"
}

let searchOpener = document.querySelector(".search-opener")
let mainSearch = document.querySelector(".main-search")
searchOpener.onclick = function() {
  mainSearch.classList.toggle("active")
  document.body.style.overflowY = "hidden"
  contactBtn.style.zIndex = "1"
}

let contactIcon = document.querySelector(".contact-icon")
let contactIconI = document.querySelector(".contact-icon i")
let social = document.querySelector(".contact-btn .social")
console.log(contactIconI)
contactIcon.onclick = function() {
  social.classList.toggle("active")
  if(contactIconI.classList.value == "fas", "fa-comment-dots") {
    contactIconI.classList.remove("fas" ,"fa-comment-dots")
    contactIconI.classList.add("fa-solid", "fa-xmark")
  }
}

let mainText = document.querySelector(".main-search .search-bar .mainText");
let mainSubmit = document.querySelector(".main-search .search-bar .mainSubmit");
console.log(mainText)
mainSubmit.onclick = function (e) {
    if (mainText.value == "services" || mainText.value == "service" || mainText.value == "الخدمات" ||   mainText.value == "خدمات") {
        mainText.value = ""
       open("services.html" ,"")
    }
    if (mainText.value == "مقالاتنا" || mainText.value == "article" || mainText.value == "المقالات" ||   mainText.value == "مقالاتنا") {
        mainText.value = ""
        open("articles.html" ,"")
    }
    if (mainText.value == "الرئيسيه" || mainText.value == "main" ) {
        mainText.value = ""
       open("index.html" ,"")
    }
    if (mainText.value == "تواصل معنا" || mainText.value == "contact" || mainText.value == "التواصل" || mainText.value == "اتصل بنا" || mainText.value == "التواصل") {
        mainText.value == ""
       open("contact.html" ,"")
    }
    if (mainText.value == "job" || mainText.value == "jobs" || mainText.value == "الوظائف" || mainText.value == "وظيفه") {
      mainText.value == ""
     open("job.html" ,"")
  }
  if (mainText.value == "الكشف الاونلاين" || mainText.value == "كشف" || mainText.value == "الكشف" || mainText.value == "medical") {
    mainText.value == ""
   open("medical.html" ,"")
}
    else {
        mainText.value == ""
        open("404.html" ,"")
    }
  };

let menuText = document.querySelector(".menu-search .menu-text");
let menuSubmit = document.querySelector(".menu-search .menu-submit");
menuSubmit.onclick = function (e) {
    if (menuText.value == "services" || menuText.value == "service" || menuText.value == "الخدمات" ||   menuText.value == "خدمات") {
        menuText.value = ""
       open("services.html" ,"")
    }
    if (menuText.value == "مقالاتنا" || menuText.value == "article" || menuText.value == "المقالات" ||   menuText.value == "مقالاتنا") {
        menuText.value = ""
        open("articles.html" ,"")
    }
    if (menuText.value == "الرئيسيه" || menuText.value == "main" ) {
        menuText.value = ""
       open("index.html" ,"")
    }
    if (menuText.value == "تواصل معنا" || menuText.value == "contact" || menuText.value == "التواصل" || menuText.value == "اتصل بنا" || menuText.value == "التواصل") {
        menuText.value == ""
       open("contact.html" ,"")
    }
    if (menuText.value == "job" || menuText.value == "jobs" || menuText.value == "الوظائف" || menuText.value == "وظيفه") {
      menuText.value == ""
     open("job.html" ,"")
  }
  if (menuText.value == "الكشف الاونلاين" || menuText.value == "كشف" || menuText.value == "الكشف" || menuText.value == "medical") {
    menuText.value == ""
   open("medical.html" ,"")
}
    else {
        menuText.value == ""
        open("404.html" ,"")
    }
  };


  let btnTop = document.querySelector(".btn-up")

  window.onscroll = function(){

    if(window.scrollY >= 300) {
      btnTop.style.opacity = "1"
    }
    if(window.scrollY < 300) {
      btnTop.style.opacity = "0"
    }

  }


  let addressLinkOne   = document.querySelector(".all")
  let addressLinkTwo   = document.querySelector(".all2")
  let addressLinkThree = document.querySelector(".all3")
  let addressLinkFour  = document.querySelector(".all4")
  let addressLinkFive  = document.querySelector(".all5")
  let addressLinks     = document.querySelectorAll(".address-links ul li")
  let doctorBoxes      = document.querySelectorAll(".doctor-box")
  let doctros          = document.querySelectorAll(".doctor")

  
  console.log(doctorBoxes[3].classList.contains("col-lg-3"))
 
  addressLinkOne.onclick =function() {
    for(let i = 0 ; i < addressLinks.length ; i++) {
      addressLinks[i].classList.remove("active")
      addressLinkOne.classList.add("active")
    }
    for(let i = 0 ; i < doctorBoxes.length; i++) {
      doctorBoxes[i].style.display = "flex"
    }
  }
  addressLinkTwo.onclick =function() {
    for(let i = 0 ; i < addressLinks.length ; i++) {
      addressLinks[i].classList.remove("active")
      addressLinkTwo.classList.add("active")
    }
    for(let i = 0 ; i < doctorBoxes.length; i++) {
      doctorBoxes[i].style.display = "none"
      if(doctorBoxes[i].classList.contains("zayed")) {
        doctorBoxes[i].style.display = "flex"
      }
    }
  }
  addressLinkThree.onclick =function() {
    for(let i = 0 ; i < addressLinks.length ; i++) {
      addressLinks[i].classList.remove("active")
      addressLinkThree.classList.add("active")
    }
    for(let i = 0 ; i < doctorBoxes.length; i++) {
      doctorBoxes[i].style.display = "none"
      if(doctorBoxes[i].classList.contains("october")) {
        doctorBoxes[i].style.display = "flex"
      }
    }
  }
  addressLinkFour.onclick =function() {
    for(let i = 0 ; i < addressLinks.length ; i++) {
      addressLinks[i].classList.remove("active")
      addressLinkFour.classList.add("active")
    }
    for(let i = 0 ; i < doctorBoxes.length; i++) {
      doctorBoxes[i].style.display = "none"
      if(doctorBoxes[i].classList.contains("cairo")) {
        doctorBoxes[i].style.display = "flex"
      }
    }
  }
  addressLinkFive.onclick =function() {
    for(let i = 0 ; i < addressLinks.length ; i++) {
      addressLinks[i].classList.remove("active")
      addressLinkFive.classList.add("active")
    }
    for(let i = 0 ; i < doctorBoxes.length; i++) {
      doctorBoxes[i].style.display = "none"
      if(doctorBoxes[i].classList.contains("giza")) {
        doctorBoxes[i].style.display = "flex"
      }
    }
  }


  var doctorList = document.getElementById("list");
  
  
  
  doctorList.onchange = function() {
    var selectedValue = document.getElementById("list").value;
    for(let i = 0 ; i < addressLinks.length ; i++) {
      addressLinks[i].classList.remove("active")
      addressLinkOne.classList.add("active")
    }
    if(selectedValue === "حدد العيادات") {
      for(let i = 0 ; i < doctorBoxes.length; i++) {
        doctorBoxes[i].style.display = "block"
      }
    }
    if(selectedValue === "جراحه") {
      for(let i = 0 ; i < doctorBoxes.length; i++) {
        doctorBoxes[i].style.display = "none"
        if(doctorBoxes[i].classList.contains("جراحه")) {
          doctorBoxes[i].style.display = "flex"
        }
      }
    }
    if(selectedValue === "اسنان") {
      for(let i = 0 ; i < doctorBoxes.length; i++) {
        doctorBoxes[i].style.display = "none"
        if(doctorBoxes[i].classList.contains("اسنان")) {
          doctorBoxes[i].style.display = "flex"
        }
      }
    }
    if(selectedValue === "توليد") {
      for(let i = 0 ; i < doctorBoxes.length; i++) {
        doctorBoxes[i].style.display = "none"
        if(doctorBoxes[i].classList.contains("توليد")) {
          doctorBoxes[i].style.display = "flex"
        }
      }
    }
    if(selectedValue === "عيون") {
      for(let i = 0 ; i < doctorBoxes.length; i++) {
        doctorBoxes[i].style.display = "none"
        if(doctorBoxes[i].classList.contains("عيون")) {
          doctorBoxes[i].style.display = "flex"
        }
      }
    }
  }
