<template>
    <div id="hero" class="sec__hero">
        <div class="anim anim--load anim--in">
            <img src="~assets/img/hero/image1.jpg" srcset="~assets/img/hero/image1.jpg 1x,~assets/img/hero/image1-2x.jpg 2x" class="ofi ofi--hero" alt="教育の力で社会により良い変革を">
        </div>
        <div class="hero__content anim anim--load anim--left">
            <p class="hero__catch">
                <span class="hero__catch__move">教育の力で</span>
                <br>
                <span class="hero__catch__move">社会により良い<span class="hero__catch__color">変革</span>を</span>
            </p>
            <p class="hero__text">Make a friendly world everyone can positively teach and learn.</p>
        </div>
        <div class="hero__btn">
            <div class="btn btn--radius btn--hero btn--green anim anim--load anim--bottom">
                <div class="btn--radius__effect"></div>
                <a href="#"><span>RECRUIT</span><span>採用</span></a>
            </div>
            <div class="btn btn--radius btn--hero btn--blue anim anim--load anim--bottom">
                <div class="btn--radius__effect"></div>
                <a href="#"><span>CONTACT</span><span>お問い合わせ</span></a>
            </div>
        </div>
        <div class="hero__scroll">
            <div class="anim anim--load anim--bottom">
                <a href="#mission">
                    <img src="~assets/img/hero/scroll.png" srcset="~assets/img/hero/scroll.png 1x,~assets/img/hero/scroll-2x.png 2x" class="img__fit" alt="SCROLL">
                </a>
            </div>
        </div>
    </div>
</template>

<style>

/*  メインビジュアル
------------------------------------------------------------------------------*/
.hero {
 position: relative;
}

.sec__hero {
 position: relative;
 height: calc(800 / 750 * 100vw);
 background-color: #fff;
}

.hero--page {
 height: 80vw;
}

@media screen and (min-width: 801px) {
 .sec__hero {
  height: calc(800 / 1600 * 100vw);
 }
 .hero--page {
  height: 26.25vw;
 }
}

@media screen and (min-width: 1601px) {
 .sec__hero {
  height: 800px;
 }
 .hero--page {
  height: 420px;
 }
}

.hero--post {
 background-position: top center;
 background-size: cover;
 overflow: hidden;
 z-index: 0;
}

.hero--post:before {
 content: '';
 position: absolute;
 width: calc(100% + 10px);
 height: calc(100% + 10px);
 background: inherit;
 top: -5px;
 left: -5px;
 -webkit-filter: blur(5px) brightness(130%);
 filter: blur(5px) brightness(130%);
 /* 最背面へ */
 z-index: -2;
}

.hero--post:after {
 content: '';
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background-color: rgba(255, 255, 255, 0.7);
 z-index: -1;
}

/* ----------------- テキスト - */
.hero__content {
 position: absolute;
 top: 45.33333vw;
 left: 3.33333vw;
 z-index: 2;
}

.hero__content--recruit {
 position: absolute;
 top: 45.33333vw;
 left: 50%;
 -webkit-transform: translateX(-50%);
 transform: translateX(-50%);
 z-index: 2;
}

.hero__catch {
 position: relative;
 font-size: 5.06667vw;
 font-weight: 700;
 line-height: 1.8em;
 letter-spacing: .3em;
 white-space: nowrap;
}

.hero__catch span {
 padding: .2em 0;
 background-color: rgba(255, 255, 255, 0.4);
}

.hero__content--recruit .hero__catch > span {
 padding: .2em .4em;
 background-color: rgba(255, 255, 255, 0.7);
 text-align: center;
}

.hero__content--recruit {
 top: 73.33333vw;
 text-align: center;
}

.hero__catch__color {
 background: linear-gradient(to right, #4ce6cf 25%, #d3f8ae 75%);
 color: transparent;
 -webkit-background-clip: text;
}

.hero__catch__color--orange {
 background: linear-gradient(to right, #f7cb6b 25%, #fba980 75%);
 color: transparent;
 -webkit-background-clip: text;
}

.hero__catch__move {
 position: relative;
}

.hero__catch__move:after {
 content: '';
 position: absolute;
 right: 0;
 top: 0;
 z-index: 1;
 display: block;
 width: 100%;
 height: 100%;
 background-color: #4ce6cf;
 transition: width .5s ease-in-out 0s;
}

.hero__catch__move.is-move:after {
 width: 0;
}

@media all and (-ms-high-contrast: none) {
 /* IE10,11用 */
 .hero__catch__color {
  background: none;
  color: #4ce6cf;
 }
 .hero__catch__color--orange {
  background: none;
  color: #fba980;
 }
}

.hero__text {
 margin-top: 1em;
 font-family: "Montserrat", sans-serif;
 font-size: 3.73333vw;
 font-weight: 600;
 line-height: 1.4em;
}

@media screen and (min-width: 801px) {
 .hero__content {
  top: 20vw;
  left: 2.5vw;
 }
 .hero__content--recruit {
  top: 30.3125vw;
 }
 .hero__catch {
  font-size: 3vw;
 }
 .hero__text {
  font-size: 1.125vw;
  line-height: 1em;
 }
}

@media screen and (min-width: 1601px) {
 .hero__content {
  top: 320px;
  left: 40px;
 }
 .hero__content--recruit {
  top: 485px;
 }
 .hero__catch {
  font-size: 48px;
  font-size: 4.8rem;
 }
 .hero__text {
  font-size: 18px;
  font-size: 1.8rem;
 }
}

.hero__btn {
 position: absolute;
 top: 22.66667vw;
 right: 3.33333vw;
 width: 29.33333vw;
}

.hero__btn > div:nth-of-type(1) {
 margin-bottom: 1em;
}

.btn--hero a {
 padding: .5em 0;
 display: block;
 flex-wrap: wrap;
}

.btn--hero span {
 display: block;
 width: 100%;
 font-size: 2.66667vw;
}

.btn--hero span:nth-of-type(1) {
 margin-bottom: .5em;
}

.hero__scroll {
 position: absolute;
 bottom: 5.33333vw;
 left: 50%;
 width: 10.26667vw;
 -webkit-transform: translateX(-50%);
 transform: translateX(-50%);
}

.hero__scroll a {
 display: block;
}

.hero__scroll a:hover {
 transform: translateY(-10px);
}

@media screen and (min-width: 801px) {
 .hero__btn {
  top: 10.625vw;
  right: 2.5vw;
  width: 12.5vw;
 }
 .btn--hero span {
  font-size: 0.9375vw;
 }
 .hero__scroll {
  bottom: 2.5vw;
  width: 4.8125vw;
 }
}

@media screen and (min-width: 1601px) {
 .hero__btn {
  top: 170px;
  right: 40px;
  width: 200px;
 }
 .btn--hero span {
  font-size: 15px;
  font-size: 1.5rem;
 }
 .hero__scroll {
  bottom: 40px;
  width: 77px;
 }
}

.heroP__inner {
 position: absolute;
 top: 50%;
 left: 50%;
 width: 92vw;
 -webkit-transform: translate(-50%, -50%);
 transform: translate(-50%, -50%);
}

.heroPS__inner {
 position: absolute;
 top: 33.33333vw;
 left: 50%;
 width: 92vw;
 -webkit-transform: translate(-50%, -50%);
 transform: translate(-50%, -50%);
}

.sec__hero--recruit .heroP__inner {
 top: 30.66667vw;
}

@media screen and (max-width: 800px) {
 .sec__hero--recruit .heading {
  text-align: left !important;
 }
 .sec__hero--recruit .heading__inner:after {
  left: 0 !important;
  -webkit-transform: translateX(0);
  transform: translateX(0);
 }
}

.heroP__title {
 position: absolute;
 top: 50%;
 left: 0;
 -webkit-transform: translateY(-50%);
 transform: translateY(-50%);
}

@media screen and (min-width: 801px) {
 .heroP__inner {
  top: 50%;
  left: 50%;
  width: 43.125vw;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
 }
 .heroP__inner,
 .heroPS__inner {
  top: 50%;
  left: 50%;
  width: 75vw;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
 }
 .sec__hero--recruit .heroP__inner {
  top: 12.5vw;
 }
}

@media screen and (min-width: 1601px) {
 .heroP__inner,
 .heroPS__inner {
  width: 1200px;
 }
 .sec__hero--recruit .heroP__inner {
  top: 200px;
 }
}

.hero__post__title__container {
 position: absolute;
 top: 24vw;
 left: 0;
 border-left: 0.53333vw solid #333;
}

.hero__post__title {
 width: 100%;
 padding: .5em 0 .5em 1em;
 font-size: 4vw;
 line-height: 1.6em;
 font-weight: 700;
}

@media screen and (min-width: 801px) {
 .hero__post__title__container {
  top: 0;
  left: 11.5625vw;
  border-left: 0.125vw solid #333;
 }
 .hero__post__title {
  width: 56.25vw;
  font-size: 2.25vw;
 }
}

@media screen and (min-width: 1601px) {
 .hero__post__title__container {
  left: 185px;
  border-left: 2px solid #333;
 }
 .hero__post__title {
  width: 900px;
  font-size: 36px;
  font-size: 3.6rem;
 }
}

</style>