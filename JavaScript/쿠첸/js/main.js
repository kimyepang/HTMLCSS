let head_bg = document.querySelector(".head")
let gnb = document.querySelectorAll(".menu > li");
let sub = document.querySelectorAll(".sub")
let subUl = document.querySelectorAll(".sub ul")

function myfnc(){
  sub.forEach(function(v,k){
    v.classList.remove("on");
    v.style.height = 0 + "px";
  })
  head_bg.style.height = 0+"px";
  head_bg.style.backgroundColor = "none";
}

gnb.forEach(function(v,k){
  v.onmouseenter = function(){
    head_bg.style.backgroundColor = "#fff";
    document.querySelector(".logo img").src="images/logo-d.svg";
    try{
      subUl.forEach(function(){
        let ht = subUl[k].offsetHeight + 120;
        console.log("ht");
        gnb[k].querySelector(".sub").style.height = ht + "px";
        gnb[k].querySelector(".sub").classList.add("on");
        head_bg.style.height = ht+"px";
      })
    } catch(error){ //에러난 코드는 위에꺼 처리하지 말고 이것만 처리해라. 왜냐면 sub가 없는 애들도 있으니까
      head_bg.style.height = 80+"px";
    }
    
  }
  v.onmouseleave = function(){
    myfnc();
  }

})

head_bg.onmouseenter = function(){
  gnb.forEach(function(v,k){
    v.querySelector("a").classList.add("on")
  })
}
head_bg.onmouseleave = function(){
  my();
}


function my(){
  gnb.forEach(function(v,k){
    v.querySelector("a").classList.remove("on");
  })
}
