<template>
    <div id="migration" class="mig__container">
        <div class=" anim anim--scroll anim--left">
            <div class="mig__inner">
                <h2 class="mig__heading">WEBからのお問い合わせ</h2>
                <div class="btn--mig">
                    <div class="btn--mig__effect"></div>
                    <a href="#">CONTACT</a>
                </div>
                <p class="mig__time">受付時間：平日9:00 - 18:00</p>
            </div>
        </div>
        <div class="anim anim--scroll anim--left">
            <div class="mig__inner">
                <h2 class="mig__heading">よくあるご質問</h2>
                <div class="btn--mig">
                    <div class="btn--mig__effect"></div>
                    <a href="#">FAQ</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

/*  回遊
------------------------------------------------------------------------------*/
.mig__container > div {
 position: relative;
 height: 48vw;
}

.mig__container > div:nth-of-type(1) {
 width: 100%;
 background-image: -moz-linear-gradient(0deg, #e2e3e7 0%, #c8cbd3 50%, #c7c8cb 100%, #c8cbd2 100%);
 background-image: -webkit-linear-gradient(0deg, #e2e3e7 0%, #c8cbd3 50%, #c7c8cb 100%, #c8cbd2 100%);
}

.mig__container > div:nth-of-type(2) {
 width: 100%;
 background-image: -moz-linear-gradient(0deg, rgba(199, 206, 216, 0.99608) 0%, #9faab7 100%);
 background-image: -webkit-linear-gradient(0deg, rgba(199, 206, 216, 0.99608) 0%, #9faab7 100%);
}

@media screen and (min-width: 801px) {
 .mig__container {
  display: flex;
 }
 .mig__container > div {
  width: 50%;
  height: 18.75vw;
 }
}

@media screen and (min-width: 1601px) {
 .mig__container > div {
  height: 300px;
 }
}

.mig__inner {
 position: absolute;
 top: 50%;
 left: 50%;
}

@media screen and (max-width: 800px) {
 .mig__inner {
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
 }
}

@media screen and (min-width: 801px) {
 .mig__inner {
  top: 3.4375vw;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
 }
}

@media screen and (min-width: 1601px) {
 .mig__inner {
  top: 55px;
 }
}

/* ----------------- セクション英語見出し - */
.mig__heading {
 color: #fff;
 font-size: 4.53333vw;
 font-weight: 700;
 text-align: center;
 white-space: nowrap;
}

.mig__time {
 color: #fff;
 font-size: 3.46667vw;
 font-weight: 700;
 text-align: center;
}

@media screen and (min-width: 801px) {
 .mig__heading {
  font-size: 1.5vw;
 }
 .mig__time {
  font-size: 1vw;
 }
}

@media screen and (min-width: 1601px) {
 .mig__heading {
  font-size: 24px;
  font-size: 2.4rem;
 }
 .mig__time {
  font-size: 16px;
  font-size: 1.6rem;
 }
}

/* ----------------- メインコンテンツ部分 - */
.btn--mig {
 position: relative;
 display: inline-flex;
 justify-content: center;
 align-items: center;
 margin: 4.66667vw auto;
 width: 55.33333vw;
 height: 14.66667vw;
 border: 1px solid #fff;
 overflow: hidden;
 cursor: pointer;
}

.btn--mig a {
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 height: 146.66667vw;
 color: #fff;
 font-family: "Montserrat", sans-serif;
 font-size: 4.53333vw;
 font-weight: 600;
 text-align: center;
 letter-spacing: .3em;
 transition: all .5s ease;
 z-index: 2;
}

.btn--mig__effect {
 position: absolute;
 width: 100%;
 height: 146.66667vw;
 left: -100%;
 background-color: #fff;
 transition: all .5s ease;
 z-index: 1;
}

.btn--mig:hover .btn--mig__effect {
 left: 0;
}

.mig__container div:nth-of-type(1) .btn--mig:hover a {
 color: #c7c8ca;
}

.mig__container div:nth-of-type(2) .btn--mig:hover a {
 color: #9ea7b2;
}

@media screen and (min-width: 801px) {
 .btn--mig {
  margin: 1.5625vw auto;
  width: 25.3125vw;
  height: 6.25vw;
 }
 .btn--mig a {
  height: 6.25vw;
  font-size: 1.5vw;
 }
}

@media screen and (min-width: 1601px) {
 .btn--mig {
  margin: 25px auto;
  width: 405px;
  height: 100px;
 }
 .btn--mig a {
  height: 100px;
  font-size: 24px;
  font-size: 2.4rem;
 }
}

</style>