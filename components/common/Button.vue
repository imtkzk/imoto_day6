<template>
    <div class="btn" :class="btnClass">
        <div :class="btnEffect"></div>
        <a :href="linkUrl">{{linkTitle}}</a>
    </div>
</template>

<script>
export default {
    props: [
        'btnClass',
        `linkUrl`,
        `linkTitle`,
        `btnEffect`
    ]
}
</script>

<style>

/*  ボタン
------------------------------------------------------------------------------*/
.btn__container {
 margin: 0 auto;
 width: 100%;
}

.btn {
 position: relative;
 font-family: "Montserrat", sans-serif, "游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", Meyryo, sans-serif;
}

/* ---------------------------------- スクエアボタン */
.btn--square {
 display: inline-flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 10.66667vw;
 box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.2);
 text-align: center;
 overflow: hidden;
 cursor: pointer;
}

.btn--square a {
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 height: 10.66667vw;
 color: #fff;
 font-size: 3.73333vw;
 font-weight: 700;
 text-decoration: none;
 transition: all .5s ease;
 z-index: 2;
}

.btn--square__effect {
 position: absolute;
 width: 100%;
 height: 10.66667vw;
 left: -100%;
 background-color: #fff;
 transition: all .5s ease;
 z-index: 1;
}

.btn--square:hover .btn--square__effect {
 left: 0;
}

@media screen and (min-width: 801px) {
 .btn--square {
  height: 3.75vw;
 }
 .btn--square a {
  height: 3.75vw;
  font-size: 1.125vw;
 }
 .btn--square__effect {
  height: 3.75vw;
 }
}

@media screen and (min-width: 1601px) {
 .btn--square {
  height: 60px;
 }
 .btn--square a {
  height: 60px;
  font-size: 18px;
  font-size: 1.8rem;
 }
 .btn--square__effect {
  height: 60px;
 }
}

/* ---------------------------------- 角丸ボタン */
.btn--radius {
 display: inline-flex;
 justify-content: center;
 align-items: center;
 width: 66.66667vw;
 max-width: 100%;
 height: 12vw;
 border-radius: 2em;
 box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.2);
 text-align: center;
 overflow: hidden;
 cursor: pointer;
}

.btn--radius a {
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 height: 12vw;
 color: #fff;
 font-size: 3.73333vw;
 font-weight: 700;
 text-decoration: none;
 transition: all .5s ease;
 z-index: 2;
}

.btn--radius__effect {
 position: absolute;
 width: 100%;
 height: 12vw;
 left: -100%;
 background-color: #fff;
 transition: all .5s ease;
 z-index: 1;
}

.btn--radius:hover .btn--radius__effect {
 left: 0;
}

@media screen and (min-width: 801px) {
 .btn--radius {
  height: 3.75vw;
 }
 .btn--radius a {
  height: 3.75vw;
  font-size: 1.125vw;
 }
 .btn--radius__effect {
  height: 3.75vw;
 }
}

@media screen and (min-width: 1601px) {
 .btn--radius {
  height: 60px;
 }
 .btn--radius a {
  height: 60px;
  font-size: 18px;
  font-size: 1.8rem;
 }
 .btn--radius__effect {
  height: 60px;
 }
}

.btn--arrow:after {
 content: '';
 position: absolute;
 top: 50%;
 right: 1.5em;
 display: inline-block;
 width: 3.2vw;
 height: 1.06667vw;
 background-image: url(~assets/img/common/btn_mark_w.png);
 background-size: contain;
 background-repeat: no-repeat;
 -webkit-transform: translateY(-50%);
 transform: translateY(-50%);
 z-index: 3;
}

@media screen and (min-width: 801px) {
 .btn--arrow:after {
  width: 1vw;
  height: 0.3125vw;
 }
}

@media screen and (min-width: 1601px) {
 .btn--arrow:after {
  width: 16px;
  height: 5px;
 }
}

.btn--mark:after {
 content: '';
 position: absolute;
 top: 50%;
 right: 1.5em;
 display: inline-block;
 width: 3.2vw;
 height: 3.2vw;
 background-image: url(~assets/img/common/btn_square_w.png);
 background-size: contain;
 background-repeat: no-repeat;
 -webkit-transform: translateY(-50%);
 transform: translateY(-50%);
 z-index: 3;
}

.btn--mark:hover:after {
 background-image: url(~assets/img/common/btn_square_b.png) !important;
}

@media screen and (min-width: 801px) {
 .btn--mark:after {
  width: 0.75vw;
  height: 0.75vw;
 }
}

@media screen and (min-width: 1601px) {
 .btn--mark:after {
  width: 12px;
  height: 12px;
 }
}

.btn--blue:hover:after {
 background-image: url(~assets/img/common/btn_mark_b.png);
}

.btn--green:hover:after {
 background-image: url(~assets/img/common/btn_mark_g.png);
}

.btn--purple:hover:after {
 background-image: url(~assets/img/common/btn_mark_p.png);
}

.btn--orange:hover:after,
.btn--apply:hover:after {
 background-image: url(~assets/img/common/btn_mark_o.png);
}

.btn--red:hover:after {
 background-image: url(~assets/img/common/btn_mark_r.png);
}

.btn--white:after {
 background-image: url(~assets/img/common/btn_mark_b.png);
}

.btn--white:hover:after {
 background-image: url(~assets/img/common/btn_mark_w.png);
}

.btn--blue {
 background-image: -moz-linear-gradient(0deg, #0bbafb 0%, #4285ec 100%);
 background-image: -webkit-linear-gradient(0deg, #0bbafb 0%, #4285ec 100%);
}

.btn--green {
 background-image: -moz-linear-gradient(0deg, #296c00 0%, #7bd7a5 0%, #32b16c 100%);
 background-image: -webkit-linear-gradient(0deg, #296c00 0%, #7bd7a5 0%, #32b16c 100%);
}

.btn--purple {
 background-image: -moz-linear-gradient(0deg, #b6dcff 0%, #b9b6e5 100%);
 background-image: -webkit-linear-gradient(0deg, #b6dcff 0%, #b9b6e5 100%);
}

.btn--orange {
 background-image: -moz-linear-gradient(0deg, rgba(247, 203, 107, 0.99608) 0%, #fba980 100%);
 background-image: -webkit-linear-gradient(0deg, rgba(247, 203, 107, 0.99608) 0%, #fba980 100%);
}

.btn--red {
 background-image: -moz-linear-gradient(0deg, #ff887c 0%, #c54444 100%);
 background-image: -webkit-linear-gradient(0deg, #ff887c 0%, #c54444 100%);
}

.btn--white {
 background-color: #fff;
}

.btn--apply {
 border-radius: 3.5em;
 width: 100%;
 height: 16vw;
 border: 0.8vw solid #fff;
 background-image: -moz-linear-gradient(0deg, #ff9e00 0%, #ffb517 100%);
 background-image: -webkit-linear-gradient(0deg, #ff9e00 0%, #ffb517 100%);
 box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.2);
}

.btn--apply .btn--radius__effect {
 height: 16vw;
}

.btn--blue:hover {
 border: 0.8vw solid #305097;
}

.btn--green:hover {
 border: 0.8vw solid #39b572;
}

.btn--purple:hover {
 border: 0.8vw solid #b9b8e6;
}

.btn--orange:hover {
 border: 0.8vw solid #fbad7d;
}

.btn--red:hover {
 border: 0.8vw solid #d16a6a;
}

.btn--blue:hover a {
 color: #305097;
}

.btn--green:hover a {
 color: #39b572;
}

.btn--purple:hover a {
 color: #b9b8e6;
}

.btn--orange:hover a {
 color: #fbad7d;
}

.btn--red:hover a {
 color: #d16a6a;
}

.btn--white a {
 color: #305097;
}

.btn--apply a {
 font-size: 4.53333vw;
 color: #fff !important;
}

.btn--apply a:before {
 content: '';
 display: inline-block;
 margin-right: .5em;
 width: 5.06667vw;
 height: 4.26667vw;
 background-image: url(~assets/img/common/download.png);
 background-size: contain;
 background-repeat: no-repeat;
}

#seminar-apply .btn--apply a:before {
 content: none;
}

.btn--apply:hover a:before {
 background-image: url(~assets/img/common/download_orange.png);
}

.btn--white:hover a {
 color: #fff !important;
}

.btn--apply:hover a {
 color: #ff9e00 !important;
}

.btn--blue .btn--radius__effect,
.btn--apply .btn--radius__effect {
 background-color: #fff;
}

.btn--white .btn--radius__effect {
 background-image: -moz-linear-gradient(0deg, #0bbafb 0%, #4285ec 100%);
 background-image: -webkit-linear-gradient(0deg, #0bbafb 0%, #4285ec 100%);
}

@media screen and (min-width: 801px) {
 .btn--blue:hover {
  border: 0.1875vw solid #305097;
 }
 .btn--green:hover {
  border: 0.1875vw solid #39b572;
 }
 .btn--purple:hover {
  border: 0.1875vw solid #b9b8e6;
 }
 .btn--orange:hover {
  border: 0.1875vw solid #fbad7d;
 }
 .btn--red:hover {
  border: 0.1875vw solid #d16a6a;
 }
 .btn--white {
  border: 0.1875vw solid #305097;
 }
 .btn--apply {
  border-radius: 3.5em;
  height: 5.625vw;
  border: 0.1875vw solid #fff;
 }
 .btn--apply .btn--radius__effect {
  height: 5.625vw;
 }
 .btn--apply a {
  font-size: 2.25vw;
 }
 .btn--apply a:before {
  width: 2.375vw;
  height: 2vw;
 }
 .btn--240 {
  width: 15vw;
 }
 .btn--320 {
  width: 20vw;
 }
 .btn--360 {
  width: 22.5vw;
 }
 .btn--370 {
  width: 23.125vw;
 }
 .btn--500 {
  width: 31.25vw;
 }
 .btn--1000 {
  width: 62.5vw;
 }
}

@media screen and (min-width: 1601px) {
 .btn--blue:hover {
  border: 3px solid #305097;
 }
 .btn--green:hover {
  border: 3px solid #39b572;
 }
 .btn--purple:hover {
  border: 3px solid #b9b8e6;
 }
 .btn--orange:hover {
  border: 3px solid #fbad7d;
 }
 .btn--red:hover {
  border: 3px solid #d16a6a;
 }
 .btn--white {
  border: 3px solid #305097;
 }
 .btn--apply {
  height: 90px;
  border: 3px solid #fff;
 }
 .btn--apply .btn--radius__effect {
  height: 90px;
 }
 .btn--apply a {
  font-size: 36px;
  font-size: 3.6rem;
 }
 .btn--apply a:before {
  width: 38px;
  height: 32px;
 }
 .btn--240 {
  width: 240px;
 }
 .btn--320 {
  width: 320px;
 }
 .btn--360 {
  width: 360px;
 }
 .btn--370 {
  width: 370px;
 }
 .btn--500 {
  width: 500px;
 }
 .btn--1000 {
  width: 1000px;
 }
}

/* ---------------------------------- スクエア大ボタン */
.btn--business {
 position: relative;
 margin: 0 auto;
 width: 100%;
 height: 12.66667vw;
 background-image: -moz-linear-gradient(0deg, #0bbafb 0%, #4285ec 100%);
 background-image: -webkit-linear-gradient(0deg, #0bbafb 0%, #4285ec 100%);
 box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.2);
 text-align: center;
 overflow: hidden;
 cursor: pointer;
}

.btn--business a {
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 height: 12.66667vw;
 color: #fff;
 font-size: 3.73333vw;
 font-weight: 700;
 text-decoration: none;
 transition: all .5s ease;
 z-index: 2;
}

.btn--business a:after {
 content: '';
 position: absolute;
 top: 50%;
 right: 1em;
 display: inline-block;
 width: 3.2vw;
 height: 1.06667vw;
 background-image: url(~assets/img/common/btn_mark_w.png);
 background-size: contain;
 background-repeat: no-repeat;
 -webkit-transform: translateY(-50%);
 transform: translateY(-50%);
 z-index: 3;
}

.btn--business__effect {
 position: absolute;
 width: 100%;
 height: 12.66667vw;
 left: -100%;
 background-color: #fff;
 transition: all .5s ease;
 z-index: 1;
}

.btn--business:hover .btn--business__effect {
 left: 0;
}

.btn--business:hover a {
 color: #4285ec;
}

.btn--business:hover a:after {
 background-image: url(~assets/img/common/btn_mark_b.png);
}

@media screen and (min-width: 801px) {
 .btn--business {
  width: 62.5vw;
  height: 5.625vw;
 }
 .btn--business a {
  height: 5.625vw;
  font-size: 1.125vw;
 }
 .btn--business a:after {
  right: 22.1875vw;
  width: 1vw;
  height: 0.3125vw;
 }
 .btn--business__effect {
  height: 5.625vw;
 }
}

@media screen and (min-width: 1601px) {
 .btn--business {
  width: 1000px;
  height: 90px;
 }
 .btn--business a {
  height: 90px;
  font-size: 18px;
  font-size: 1.8rem;
 }
 .btn--business a:after {
  right: 355px;
  width: 16px;
  height: 5px;
 }
 .btn--business__effect {
  height: 90px;
 }
}

/* ---------------------------------- モアボタン */
.btn--more {
 display: inline-flex;
 justify-content: flex-end;
 align-items: center;
 padding: 0 1em;
 width: 44vw;
 height: 6.66667vw;
 border: 1px solid #15b48a;
 color: #15b48a;
 text-align: right;
 font-family: "Montserrat", sans-serif;
 font-size: 3.33333vw;
 font-weight: 600;
 transition: .3s;
}

.btn--more--green {
 border: 1px solid #15b48a;
 color: #15b48a;
}

.btn--more--blue {
 border: 1px solid #0060b0;
 color: #0060b0;
}

.btn--more:before {
 content: '';
 position: absolute;
 top: 50%;
 left: -6vw;
 width: 12vw;
 height: 1px;
}

.btn--more--green:before {
 background-color: #15b48a;
}

.btn--more--blue:before {
 background-color: #0060b0;
}

.hover__container a:hover .btn--more {
 color: #fff;
}

.hover__container a:hover .btn--more--green {
 background-color: #15b48a;
}

.hover__container a:hover .btn--more--blue {
 background-color: #0060b0;
}

.hover__container a:hover .btn--more::before {
 background-color: #fff;
}

@media screen and (min-width: 801px) {
 .btn--more {
  width: 13.4375vw;
  height: 1.875vw;
  font-size: 0.9375vw;
 }
 .btn--more:before {
  left: -2.1875vw;
  width: 4.375vw;
 }
}

@media screen and (min-width: 1601px) {
 .btn--more {
  width: 165px;
  height: 30px;
  font-size: 15px;
  font-size: 1.5rem;
 }
 .btn--more:before {
  left: -35px;
  width: 70px;
 }
}

</style>