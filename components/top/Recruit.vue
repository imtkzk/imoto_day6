<template>

    <section id="recruit" class="sec sec__recruit">
        <div class="recruitF__container">
            <div class="recruitF__content anim anim--scroll anim--left">
                    <Title :titleClass="titleClass" :enTitle="enTitle" :jpTitle="jpTitle" :titleLine="titleLine" />
                <p class="recruitF__text">AIの実用化が多くの企業で課題となっている事実に反し、<span class="br__pc"></span>AIを正しく導入できる人材はごく僅かです。<br>AI人材の育成・採用を求める企業、AI人材としての<span class="br__pc"></span>技術習得を目指す個人、それぞれの課題を解決していく。<br>このキカガクのミッションを共に実現する仲間を募集しています。</p>
                <div class="mt30 recruitF__btn">
                    <Button :btnClass="btnClass" :linkUrl="linkUrl" :linkTitle="linkTitle" :btnEffect="btnEffect" />
                </div>
            </div>
            <div class="recruitF__image"></div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                    titleClass: `mb35 heading heading--left`,
                    enTitle: `recruit`,
                    jpTitle: `採用`,
                    titleLine: '',

                    btnClass: `btn--radius btn--arrow btn--orange btn--240`,
                    btnEffect: `btn--radius__effect`,
                    linkUrl:`#`,
                    linkTitle: `採用情報`

            }
        },
        
}
</script>

<style>

/*  トップページ --> 採用
------------------------------------------------------------------------------*/
.sec__recruit {
 padding: 18vw 0;
 background-image: url(~assets/img/front/recruit/bg.jpg);
 background-size: cover;
 background-position: center;
}

@media screen and (min-width: 801px) {
 .sec__recruit {
  padding: 7.8125vw 0;
  background-image: url(~assets/img/front/recruit/bg.jpg);
  background-size: cover;
  background-position: center;
 }
}

@media screen and (min-width: 1601px) {
 .sec__recruit {
  padding: 125px 0;
 }
}

.recruitF__container {
 background-color: rgba(255, 255, 255, 0.9);
}

.recruitF__content {
 position: relative;
 padding: 13.33333vw 3.33333vw 13.33333vw 3.33333vw;
}

.recruitF__content:after {
 position: absolute;
 top: 50%;
 left: 50%;
 content: '';
 display: inline-block;
 width: 68.13333vw;
 height: 68.53333vw;
 background-image: url(~assets/img/front/recruit/bg_logo.png);
 background-size: contain;
 background-repeat: no-repeat;
 -webkit-transform: translateY(-50%);
 transform: translateY(-50%);
}

.recruitF__image {
 align-self: stretch;
 width: 100%;
 height: 66.66667vw;
 background-image: url(~assets/img/front/recruit/image-2x.jpg);
 background-size: cover;
 background-position: center;
}

@media screen and (max-width: 800px) {
 .recruitF__content:after {
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
 }
}

@media screen and (min-width: 801px) {
 .recruitF__container {
  display: flex;
 }
 .recruitF__content {
  padding: 5vw 3.125vw 5vw 6.25vw;
  width: 46.875vw;
 }
 .recruitF__content:after {
  left: 6.25vw;
  width: 31.9375vw;
  height: 32.125vw;
 }
 .recruitF__image {
  width: calc(100% - 46.875vw);
  height: auto;
 }
}

@media screen and (min-width: 1601px) {
 .recruitF__content {
  padding: 80px 3.125vw 80px 6.25vw;
 }
 .recruitF__content:after {
  width: 511px;
  height: 514px;
 }
}

.recruitF__text {
 font-size: 3.73333vw;
 font-weight: 700;
 line-height: 2em;
}

.recruitF__btn {
 position: relative;
 text-align: center;
 z-index: 2;
}

@media screen and (min-width: 801px) {
 .recruitF__text {
  font-size: 1.125vw;
 }
 .recruitF__btn {
  text-align: left;
 }
}

@media screen and (min-width: 1601px) {
 .recruitF__text {
  font-size: 18px;
  font-size: 1.8rem;
 }
}

</style>