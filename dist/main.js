(()=>{"use strict";const e=()=>{const e=document.querySelector(".content");for(;e.firstChild;)e.removeChild(e.lastChild)},t=()=>{const t=document.querySelector(".content__grid");document.querySelector(".content").hasChildNodes&&e(),t.style.display="flex",t.style.flexDirection="column",document.querySelector(".content").insertAdjacentHTML("beforeend",'<h2 class="heading__secondary home__heading">WELCOME!</h2>'),document.querySelector(".content").insertAdjacentHTML("beforeend",'<img src="img/hillary_welcome.jpg" alt="Picture of the owner" class="home__img">'),document.querySelector(".content").insertAdjacentHTML("beforeend","<div class=\"home__text\">It's like I always say. I'm a business man</div> --\x3e</img>")};console.log("HELLO ITS WORKING"),t(),document.getElementById("btn__about").addEventListener("click",(()=>{const t=document.querySelector(".content__grid");e(),t.style.display="grid",t.style.gridTemplateColumns="35% 65%",t.style.gridTemplateRows="max-content 100%",t.style.gridTemplateAreas='"nav-bar nav-bar" "img content-text"',document.querySelector(".content").insertAdjacentHTML("beforeend",'<div class="about__img"><img src="img/briss_1.jpg" alt="picture of owner" class="content__img img__top"><img src="img/shop.jpg" alt="picture of shop" class="content__img img__bottom"></div>'),document.querySelector(".content").insertAdjacentHTML("beforeend",'<div class="content__text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque esse tenetur, architecto nulla in magnam dignissimos optio hic eveniet nesciunt ipsum ullam inventore ab laboriosam aspernatur! Beatae deleniti vel adipisci aperiam ex at? Possimus mollitia recusandae sequi magni expedita quia nemo culpa cum placeat nobis sint, eveniet ullam optio cupiditate ut. Eligendi doloremque rerum facilis quisquam a dolor similique veniam atque quod officia consectetur dignissimos ipsum veritatis, libero et maxime molestiae numquam vitae nemo rem? Esse ab possimus inventore! Eius velit, soluta assumenda non dicta labore fugit laudantium tempora aspernatur, officia asperiores blanditiis explicabo suscipit maiores quas nesciunt praesentium.</p></div>')})),document.getElementById("btn__home").addEventListener("click",t)})();