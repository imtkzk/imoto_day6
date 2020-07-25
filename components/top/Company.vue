<template>
    <section id="company" class="sec sec__company">
        <div class="companyF__container">
            <div class="companyF__image"></div>
            <div class="companyF__content anim anim--scroll anim--left">
                <h2 class="mb15 companyF__heading">株式会社キカガク 本社</h2>
                <div class="companyF__info__inner">
                    <p class="text">〒101-0035<br>東京都千代田区神田紺屋町15グランファースト神田紺屋町6F</p>
                    <p class="companyF__info__map"><a href="#" target="_blank" class="gglink"><span>Google Map</span></a></p>
                </div>
                <p class="text">受付時間：平日9:00 - 18:00</p>
                <dl class="mt25 companyF__info">
                    <dt><span>神田第1教室</span></dt>
                    <dd>
                        <div class="companyF__info__inner">
                            <p>〒101-0035<br>東京都千代田区内神田3-2-9 SPビル4階</p>
                            <p class="companyF__info__map"><a href="#" target="_blank" class="gglink"><span>Google Map</span></a></p>
                        </div>
                    </dd>
                    <dt><span>神田第2教室</span></dt>
                    <dd>
                        <div class="companyF__info__inner">
                            <p>〒101-0035<br>東京都千代田区内神田3-2-1 喜助内神田3町目ビル401</p>
                            <p class="companyF__info__map"><a href="#" target="_blank" class="gglink"><span>Google Map</span></a></p>
                        </div>
                    </dd>
                    <dt><span>神田第3教室</span></dt>
                    <dd>
                        <div class="companyF__info__inner">
                            <p>〒101-0035<br>東京都千代田区内神田3-2-1 喜助内神田3町目ビル401</p>
                            <p class="companyF__info__map"><a href="#" target="_blank" class="gglink"><span>Google Map</span></a></p>
                        </div>
                    </dd>
                    <dt><span>名古屋教室</span></dt>
                    <dd>
                        <div class="companyF__info__inner">
                            <p>〒101-0035<br>愛知県名古屋市西区牛島町6-1 名古屋ルーセントタワー21F</p>
                            <p class="companyF__info__map"><a href="#" target="_blank" class="gglink"><span>Google Map</span></a></p>
                        </div>
                    </dd>
                </dl>
                <div class="mt25 leftC companyF__btn">
                    <Button :btnClass="btnClass" :linkUrl="linkUrl" :linkTitle="linkTitle" :btnEffect="btnEffect" />    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {

                    btnClass: `btn--radius btn--arrow btn--red btn--240`,
                    btnEffect: `btn--radius__effect`,
                    linkUrl:`#`,
                    linkTitle: `会社概要`

            }
        },
        
}
</script>

<style>

/*  トップページ --> 会社概要
------------------------------------------------------------------------------*/
.sec__company {
 padding: 18vw 0;
 background-image: url(~assets/img/front/company/bg.jpg);
 background-size: cover;
 background-position: center;
}

@media screen and (min-width: 801px) {
 .sec__company {
  padding: 7.8125vw 0;
  background-image: url(~assets/img/front/company/bg.jpg);
  background-size: cover;
  background-position: center;
 }
}

@media screen and (min-width: 1601px) {
 .sec__company {
  padding: 125px 0;
 }
}

.companyF__container {
 background-color: rgba(255, 255, 255, 0.9);
}

.companyF__content {
 padding: 13.33333vw 3.33333vw 13.33333vw 3.33333vw;
}

.companyF__image {
 align-self: stretch;
 width: 100%;
 height: 66.66667vw;
 background-image: url(~assets/img/front/company/image-2x.jpg);
 background-size: cover;
}

@media screen and (min-width: 801px) {
 .companyF__container {
  display: flex;
  align-items: center;
 }
 .companyF__image {
  width: 36.25vw;
  height: auto;
 }
 .companyF__content {
  padding: 2.8125vw 1.875vw 3.125vw 3.125vw;
  width: calc(100% - 36.25vw);
 }
}

@media screen and (min-width: 1080px) {
 .companyF__image {
  width: 46.875vw;
 }
 .companyF__content {
  padding: 5vw 3.125vw 5vw 3.125vw;
  width: calc(100% - 46.875vw);
 }
}

@media screen and (min-width: 1601px) {
 .companyF__content {
  padding: 45px 6.25vw 50px 3.125vw;
  width: calc(100% - 46.875vw);
 }
}

.companyF__heading {
 font-size: 4.53333vw;
 font-weight: 700;
}

@media screen and (min-width: 801px) {
 .companyF__heading {
  font-size: 1.5vw;
 }
}

@media screen and (min-width: 1601px) {
 .companyF__heading {
  font-size: 24px;
  font-size: 2.4rem;
 }
}

.companyF__info dt {
 margin-bottom: 2.66667vw;
 width: 100%;
 font-size: 3.33333vw;
}

.companyF__info dt span {
 display: block;
 padding: .5em 0;
 background-color: #333;
 color: #fff;
 font-weight: 700;
 text-align: center;
}

.companyF__info dd {
 position: relative;
 padding: 0 0 1.5em 1em;
 width: 100%;
 font-size: 3.33333vw;
 line-height: 1.6em;
}

.companyF__info__inner {
 display: block;
}

.companyF__info__map {
 margin-top: .5em;
 text-align: right;
}

@media screen and (min-width: 801px) {
 .companyF__info {
  display: flex;
  flex-wrap: wrap;
 }
 .companyF__info__inner {
  display: flex;
  align-items: flex-end;
 }
 .companyF__info__map {
  margin-top: 0;
  text-align: left;
 }
 .companyF__info dt {
  margin-bottom: 0;
  width: 7.5vw;
  font-size: 0.9375vw;
 }
 .companyF__info dd {
  width: calc(100% - 7.5vw);
  font-size: 0.9375vw;
 }
}

@media screen and (min-width: 1601px) {
 .companyF__info dt {
  width: 120px;
  font-size: 15px;
  font-size: 1.5rem;
 }
 .companyF__info dd {
  width: calc(100% - 120px);
  font-size: 15px;
  font-size: 1.5rem;
 }
}

@media screen and (max-width: 801px) {
 .companyF__btn {
  text-align: center;
 }
}

</style>