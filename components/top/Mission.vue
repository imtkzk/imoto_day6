<template>
    <section id="mission" class="sec sec__mission">
        <div class="container__inner">
            <div class="missionF__container">
                <div class="missionF__content">
                        <Title :titleClass="titleClass" :enTitle="enTitle" :jpTitle="jpTitle" :titleLine="titleLine" />
                    <div class="anim anim--scroll anim--left">
                        <h3 class="mb25 missionF__catch">あるべき教育の<br>エコシステムを追求する</h3>
                        <p class="text">教育者がわかりやすく伝えるだけでなく教育から始まる社会課題の解決へ<br>全ての人の機転である教育を通じてより良い社会へと導きます</p>
                    </div>
                    <div class="mt35 leftC anim anim--scroll anim--left missionF__btn">    
                        <Button :btnClass="btnClass" :linkUrl="linkUrl" :linkTitle="linkTitle" :btnEffect="btnEffect" />
                    </div>
                </div>
                <div class="missionF__image">
                    <h3 class="missionF__catch2 anim anim--scroll anim--left">あるべき教育とは</h3>
                    <div class="missionF__list anim--scroll anim--right">
                        <span class="missionF__list__num">01</span>
                        <h4 class="missionF__list__heading">わかりやすく伝える</h4>
                    </div>
                    <div class="missionF__list anim--scroll anim--right">
                        <span class="missionF__list__num">02</span>
                        <h4 class="missionF__list__heading">わかりやすいコンテンツ制作</h4>
                    </div>
                    <div class="missionF__list anim--scroll anim--right">
                        <span class="missionF__list__num">03</span>
                        <h4 class="missionF__list__heading">実践的な開発支援</h4>
                    </div>
                    <div class="missionF__list anim--scroll anim--right">
                        <span class="missionF__list__num">04</span>
                        <h4 class="missionF__list__heading">新規事業開発</h4>
                    </div>
                    <div class="missionF__list anim--scroll anim--right">
                        <span class="missionF__list__num">05</span>
                        <h4 class="missionF__list__heading">社長の成長を牽引</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                    btnClass: `btn--radius btn--arrow btn--blue btn--320`,
                    btnEffect: `btn--radius__effect`,
                    linkUrl:`#`,
                    linkTitle: `キカガクの世界とは`,

                    titleClass: `heading--left anim--left`,
                    enTitle: `mission`,
                    jpTitle: `キカガクのミッション`,
                    titleLine: 'heading__en--line'
            }
        },
        
}
</script>

<style>

/*  トップページ --> キカガクのミッション
------------------------------------------------------------------------------*/
.sec__mission {
 position: relative;
 padding: 16vw 0;
 background-image: url(~assets/img/front/mission/bg.jpg);
 background-size: cover;
 background-repeat: no-repeat;
}

@media screen and (min-width: 801px) {
 .sec__mission {
  padding: 7.5vw 0;
 }
}

@media screen and (min-width: 1601px) {
 .sec__mission {
  padding: 120px 0;
 }
}

.missionF__content {
 margin-bottom: 10.66667vw;
}

.missionF__image {
 margin-top: 8vw;
 background-image: url(~assets/img/front/mission/logo.png);
 background-position: center;
 background-size: contain;
 background-repeat: no-repeat;
}

@media screen and (min-width: 801px) {
 .missionF__container {
  display: flex;
 }
 .missionF__container > div {
  width: 50%;
 }
 .missionF__content {
  margin-bottom: 0;
 }
 .missionF__image {
  margin-top: 0;
 }
}

.missionF__catch {
 font-size: 4.53333vw;
 font-weight: 700;
 text-align: center;
 line-height: 2em;
 letter-spacing: .5em;
}

.missionF__catch2 {
 margin-bottom: 1.5em;
 font-family: "harunatsuakifuyu", sans-serif;
 font-size: 4.53333vw;
}

.missionF__list {
 display: flex;
 margin-bottom: 6.66667vw;
}

.missionF__list__num {
 position: relative;
 top: .2em;
 margin-right: .5em;
 font-family: "AntroVectra", sans-serif;
 font-size: 6.13333vw;
 font-weight: 700;
}

.missionF__list__heading {
 font-family: "harunatsuakifuyu", sans-serif;
 font-size: 4.53333vw;
}

.missionF__list:nth-of-type(1) {
 margin-left: 6.66667vw;
 color: #0060b0;
}

.missionF__list:nth-of-type(1) .missionF__list__heading {
 background: linear-gradient(transparent 70%, #dee9eb 70%);
}

.missionF__list:nth-of-type(2) {
 margin-left: 13.33333vw;
 color: #f39600;
}

.missionF__list:nth-of-type(2) .missionF__list__heading {
 background: linear-gradient(transparent 70%, #fcf2e5 70%);
}

.missionF__list:nth-of-type(3) {
 margin-left: 20vw;
 color: #c40a15;
}

.missionF__list:nth-of-type(3) .missionF__list__heading {
 background: linear-gradient(transparent 70%, #f6e4e7 70%);
}

.missionF__list:nth-of-type(4) {
 margin-left: 26.66667vw;
 color: #81b825;
}

.missionF__list:nth-of-type(4) .missionF__list__heading {
 background: linear-gradient(transparent 70%, #eff6e9 70%);
}

.missionF__list:nth-of-type(5) {
 margin-left: 33.33333vw;
 color: #38b572;
}

.missionF__list:nth-of-type(5) .missionF__list__heading {
 background: linear-gradient(transparent 70%, #e4eae6 70%);
}

@media screen and (min-width: 801px) {
 .missionF__catch {
  font-size: 1.5vw;
  text-align: left;
 }
 .missionF__catch2 {
  font-size: 1.5vw;
 }
 .missionF__list {
  margin-bottom: 2.5vw;
 }
 .missionF__list__num {
  font-size: 2.25vw;
 }
 .missionF__list__heading {
  font-size: 1.5vw;
 }
 .missionF__list:nth-of-type(1) {
  margin-left: 0;
 }
 .missionF__list:nth-of-type(2) {
  margin-left: 4.375vw;
 }
 .missionF__list:nth-of-type(3) {
  margin-left: 8.75vw;
 }
 .missionF__list:nth-of-type(4) {
  margin-left: 13.125vw;
 }
 .missionF__list:nth-of-type(5) {
  margin-left: 17.5vw;
 }
}

@media screen and (min-width: 1601px) {
 .missionF__catch {
  font-size: 24px;
  font-size: 2.4rem;
 }
 .missionF__catch2 {
  font-size: 24px;
  font-size: 2.4rem;
 }
 .missionF__list {
  margin-bottom: 40px;
 }
 .missionF__list__num {
  font-size: 36px;
  font-size: 3.6rem;
 }
 .missionF__list__heading {
  font-size: 24px;
  font-size: 2.4rem;
 }
 .missionF__list:nth-of-type(2) {
  margin-left: 70px;
 }
 .missionF__list:nth-of-type(3) {
  margin-left: 140px;
 }
 .missionF__list:nth-of-type(4) {
  margin-left: 210px;
 }
 .missionF__list:nth-of-type(5) {
  margin-left: 280px;
 }
}

@media screen and (max-width: 801px) {
 .missionF__btn {
  text-align: center;
 }
}

</style>