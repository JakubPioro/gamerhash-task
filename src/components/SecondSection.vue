<template>
  <section class="d-flex w-100 align-items-center flex-column bg-white">
    <div class="row col-md-9 col-lg-10 d-flex justify-content-center">

      <div class="row d-flex align-items-stretch justify-content-center px-0">

        <div class="col-12 col-xl-6 position-relative min-height">
          <card-big :wallet="wallet" class="move-top"/>
        </div>

        <div class="col-6 d-flex flex-column justify-content-center">
          <h2 class="text-center text-xl-start">
            We are creating GamerCoin (GHX) -<br>
            native token for gamers!
          </h2>

          <p class="text-center text-xl-start">
            GamerCoin is a token of GamerHash platform - it's the last puzzle of gaming ecosystem and fuel which makes
            500.00 users life easier. Gamer will have many way to earn GHX trough mining of entertainment on the
            platform.
            Keeping tokens in the wallet will bring many benefits & spending GHX in the Marketplace will open special
            offers. <br>
            <span>It's a game change for gaming generation!</span>
          </p>
        </div>

      </div>

      <section class="col-8 row bottom-section justify-content-center">

        <h2 class="text-center">
          We are creating GamerCoin (GHX) -<br>
          native token for gamers!
        </h2>

        <p class="text-center">GamerCoin is a token of GamerHash platform - it's the last puzzle of gaming ecosystem and
          fuel which makes
          500.00 users life easier. Gamers will have many ways to earn GHX trough mining or entertainment on the
          platform. Keeping tokens in the wallet will bring many benefits & spending GHX in the Marketplace will open
          special offers.<br><span>It's a game changer for gaming generation!</span>
        </p>

      </section>

      <span class="col-12">
        <dropdown class="dropdown"/>
      </span>

    </div>
  </section>
</template>

<script>
import CardBig from '../components/CardBig'
import DropDown from "@/components/DropDown";

export default {
  name: "SecondSection",
  components: {
    'card-big': CardBig,
    'dropdown': DropDown,
  },
  data() {
    return {
      wallet: "0x728f30fa2f100742c7949d1961804fa8e0b1387d",
      myValue: '',
    }
  },
}
</script>

<style scoped>

h2 {
  text-align: left;
  font: normal normal 700 36px/40px Rajdhani;
  letter-spacing: 0;
  color: #181B1F;
  opacity: 1;
}

p {
  text-align: left;
  font: normal normal 500 18px/20px Rajdhani;
  letter-spacing: 0;
  color: #737373;
}

p span {
  font: normal normal 600 18px/20px Rajdhani;
  color: #2C3138;
}

.move-top {
  position: absolute;
  top: -70px;
  left: calc((100% - 480px)/2);
}

.min-height {
  min-height: 500px;
}

.bottom-section {
  padding-top: 80px;
}

.dropdown{
  padding-bottom: 140px;
}

@media (max-width:992px){

  section {
    overflow: hidden;
  }

  .move-top{
    top:10px;
  }

  .min-height{
    margin-bottom:90px;
  }
}

@media (max-width:576px){

  section {
    overflow: hidden;
  }

  .move-top{
    top:10px;
  }

  .min-height{
    margin-bottom:90px;
  }
}

</style>