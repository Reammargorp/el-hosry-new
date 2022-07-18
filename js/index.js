let slideOne = document.getElementById("slide-one");
let slideTwo = document.getElementById("slide-two");

console.log(slideOne)

setInterval( () => { 
  slideOne.classList.toggle("active")
  slideTwo.classList.toggle("active")
}, 5000)

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

let serviceSearch = ["services" , "service" , "خدماتنا" , "الخدمات"]
let articleSearch = ["articles" , "article" , "مقالاتنا" , "المقالات"]
let contractsSearch = ["concrats" , "التعاقدات" , "التعاقدات التامينية" , "التعاقجات التأمينية"]
let branchSearch = ["branch" , "branches" , "الفروع" , "فروعنا"]
let doctorsSearch = ["doctor" , "doctors" , "الاطباء" , "الأطباء" , "اطبائنا"]
let jobsSearch = ["jobs" , "job" , "الوظائف" , "وظائفنا"]
let aboutSearch = ["about us" , "About Us" , "من نحن" , "عن الحصري كلينك التخصصية" , "عن الحصري كلينك"]
let indexSearch = ["الرئيسية" , "الصفحة الرئيسية" , "home page"]
let bookSearch = ["booking" , "حجز موعد" , "الحجز"]
let drWaleedSearch = ["DrWaleed" , "Dr Waleed" , "dr waleed" , "Dr Waleed Haikal" , "dr waleed haikal" , "الدكتور وليد هيكل" , "دكتور وليد هيكل" , "دكتور وليد" , "الدكتور وليد"]



let mainText = document.querySelector(".main-search .search-bar .mainText");
let mainSubmit = document.querySelector(".main-search .search-bar .mainSubmit");

mainSubmit.onclick = function (e) {
for(let s = 0; s < serviceSearch.length ; s++) {
    if (mainText.value == serviceSearch[s]) {
        open("file:///E:/programming/my-work/el-hosry-new/html/services.html" ,"")
    }
}
for(let a = 0; a < articleSearch.length ; a++) {
    if (mainText.value == articleSearch[a]) {
        open("file:///E:/programming/my-work/el-hosry-new/html/about.html" ,"")
    }
}
for(let c = 0; c < contractsSearch.length ; c++) {
    if (mainText.value == contractsSearch[c]) {
        open("file:///E:/programming/my-work/el-hosry-new/html/contracts.html" ,"")
    }
}
for(let b = 0; b < branchSearch.length ; b++) {
    if (mainText.value == branchSearch[b]) {
        open("file:///E:/programming/my-work/el-hosry-new/html/branch.html" ,"")
    }
}
for(let d = 0; d < doctorsSearch.length ; d++) {
    if (mainText.value == doctorsSearch[d]) {
        open("file:///E:/programming/my-work/el-hosry-new/html/doctors.html" ,"")
    }
}
for(let j = 0; j < jobsSearch.length ; j++) {
    if (mainText.value == jobsSearch[j]) {
        open("file:///E:/programming/my-work/el-hosry-new/html/jobs.html" ,"")
    }
}
for(let o = 0; o < aboutSearch.length ; o++) {
    if (mainText.value == aboutSearch[o]) {
        open("file:///E:/programming/my-work/el-hosry-new/html/about.html" ,"")
    }
}
for(let i = 0; i < indexSearch.length ; i++) {
    if (mainText.value == indexSearch[i]) {
        open("file:///E:/programming/my-work/el-hosry-new/html/index.html" ,"")
    }
}
for(let p = 0; p < bookSearch.length ; p++) {
    if (mainText.value == bookSearch[p]) {
        open("file:///E:/programming/my-work/el-hosry-new/html/book.html" ,"")
    }
}
for(let r = 0; r < drWaleedSearch.length ; r++) {
    if (mainText.value == drWaleedSearch[r]) {
        open("file:///E:/programming/my-work/el-hosry-new/html/doctorWaleedInfo.html" ,"")
    }
}
if (mainText.value == "") {
    open("file:///E:/programming/my-work/el-hosry-new/html/404.html" ,"")
}

}

let menuText = document.querySelector(".menu-search .menu-text");
let menuSubmit = document.querySelector(".menu-search .menu-submit");

console.log(menuText)

menuSubmit.onclick = function (e) {
    for(let s = 0; s < serviceSearch.length ; s++) {
        if (menuText.value == serviceSearch[s]) {
            open("file:///E:/programming/my-work/el-hosry-new/html/services.html" ,"")
        }
    }
    for(let a = 0; a < articleSearch.length ; a++) {
        if (menuText.value == articleSearch[a]) {
            open("file:///E:/programming/my-work/el-hosry-new/html/about.html" ,"")
        }
    }
    for(let c = 0; c < contractsSearch.length ; c++) {
        if (menuText.value == contractsSearch[c]) {
            open("file:///E:/programming/my-work/el-hosry-new/html/contracts.html" ,"")
        }
    }
    for(let b = 0; b < branchSearch.length ; b++) {
        if (menuText.value == branchSearch[b]) {
            open("file:///E:/programming/my-work/el-hosry-new/html/branch.html" ,"")
        }
    }
    for(let d = 0; d < doctorsSearch.length ; d++) {
        if (menuText.value == doctorsSearch[d]) {
            open("file:///E:/programming/my-work/el-hosry-new/html/doctors.html" ,"")
        }
    }
    for(let j = 0; j < jobsSearch.length ; j++) {
        if (menuText.value == jobsSearch[j]) {
            open("file:///E:/programming/my-work/el-hosry-new/html/jobs.html" ,"")
        }
    }
    for(let o = 0; o < aboutSearch.length ; o++) {
        if (menuText.value == aboutSearch[o]) {
            open("file:///E:/programming/my-work/el-hosry-new/html/about.html" ,"")
        }
    }
    for(let i = 0; i < indexSearch.length ; i++) {
        if (menuText.value == indexSearch[i]) {
            open("file:///E:/programming/my-work/el-hosry-new/html/index.html" ,"")
        }
    }
    for(let p = 0; p < bookSearch.length ; p++) {
        if (menuText.value == bookSearch[p]) {
            open("file:///E:/programming/my-work/el-hosry-new/html/book.html" ,"")
        }
    }
    for(let r = 0; r < drWaleedSearch.length ; r++) {
        if (menuText.value == drWaleedSearch[r]) {
            open("file:///E:/programming/my-work/el-hosry-new/html/doctorWaleedInfo.html" ,"")
        }
    }
    if (menuText.value == "") {
        open("file:///E:/programming/my-work/el-hosry-new/html/404.html" ,"")
    }
    
    }

  let btnTop = document.querySelector(".btn-up")

  window.onscroll = function(){

    if(window.scrollY >= 300) {
      btnTop.style.opacity = "1"
    }
    if(window.scrollY < 300) {
      btnTop.style.opacity = "0"
    }

  }


  let addressBoxes = document.querySelectorAll(".address-box")
  let addressOne   = document.querySelector(".address-one")
  let addressTwo   = document.querySelector(".address-two")
  let addressThree = document.querySelector(".address-three")
  let addressFour  = document.querySelector(".address-four")
  let iframeOne    = document.querySelectorAll(".location .row .col-md-6 iframe")[0]
  let iframeTwo    = document.querySelectorAll(".location .row .col-md-6 iframe")[1]
  let iframeThree  = document.querySelectorAll(".location .row .col-md-6 iframe")[2]
  let iframeFour   = document.querySelectorAll(".location .row .col-md-6 iframe")[3]
  console.log(iframeOne)


    addressOne.onclick = function() {
      iframeOne.classList.add("active")
      iframeTwo.classList.remove("active")
      iframeThree.classList.remove("active")
      iframeFour.classList.remove("active")
    }
    addressTwo.onclick = function() {
      iframeOne.classList.remove("active")
      iframeTwo.classList.add("active")
      iframeThree.classList.remove("active")
      iframeFour.classList.remove("active")
    }
    addressThree.onclick = function() {
      iframeOne.classList.remove("active")
      iframeTwo.classList.remove("active")
      iframeThree.classList.add("active")
      iframeFour.classList.remove("active")
    }
    addressFour.onclick = function() {
      iframeOne.classList.remove("active")
      iframeTwo.classList.remove("active")
      iframeThree.classList.remove("active")
      iframeFour.classList.add("active")
    }
    

