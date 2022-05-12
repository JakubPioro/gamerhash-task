<template>
  <animated-component>
    <div class="card-big d-flex flex-column align-items-center">
      <div class="card-big-body w-100 d-flex flex-column align-items-center">
        <div class="card-big-avatar">
          <!--        <lottie/>-->
        </div>
        <h2 class="card-big-title">gamercoin (ghx)</h2>
        <span class="card-big-wallet d-flex align-items-center" @click="copy">
          {{ wallet }} <i class="icon icon-paste mx-2"></i>
        </span>
        <transition name="fade">
          <span v-if="copied" class="copied">Copied!</span>
        </transition>
      </div>
      <div class="card-big-footer d-flex justify-content-center align-items-center">
      <span class="card-big-button">
        <img :src="require('@/assets/icons/metamsk-logo.svg')" alt="metamsk logo"/>Add to MetaMask
      </span>
      </div>
    </div>
  </animated-component>
</template>

<script>
import AnimatedComponent from "@/components/AnimatedComponent";
// import Lottie from "@/components/lottie/lottieComponent";
export default {
  name: "CardBig",
  data(){
    return{
      copied:false
    }
  },
  components: {
    "animated-component": AnimatedComponent,
    // "lottie":Lottie
  },
  props: {
    wallet: String,
  },
  methods: {
    copy() {
      this.copied = true
      setTimeout(() => this.copied = false, 1000);
      try {
        navigator.clipboard.writeText(this.wallet)
        console.log(this.copied)
      } catch (e) {
        return e
      }
    }
  }
}
</script>

<style scoped>
.card-big {
  width: 480px !important;
  height: 550px;
  background: #131518;
  box-shadow: 0 0 20px #0000004D;
  border-radius: 10px;
  padding: 0;
  transition: all .4s ease-in-out;
  margin-bottom: 30px;
}

.card-big-body {
  height: 460px;
  background: #181A1E;
  border-radius: 10px 10px 0 0;
}

.card-big-avatar {
  margin-top: 66px;
  margin-bottom: 19px;
  width: 256px;
  height: 256px;
  border-radius: 50%;
  background: #21252A;
  overflow: hidden;
}

.card-big-title {
  text-align: center;
  font: normal normal 700 32px/41px Rajdhani;
  letter-spacing: 0;
  color: #FFFFFF;
  text-transform: uppercase;
}

.card-big-wallet {
  text-align: center;
  /*font: italic normal normal 18px/29px Klavika;*/
  font: italic normal normal 18px/29px Rajdhani;
  letter-spacing: 0;
  color: #737373;
}

.card-big-wallet:hover {
  color: #f9f9f9;
}

.card-big-wallet:hover > .icon {
  background: #f9f9f9;
}

.copied{
  color:green;
  padding:5px;
  font-weight:bold;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.card-big-footer {
  width: 100%;
  height: 90px;
}

.card-big-button {
  border: 1px solid #2C3138;
  border-radius: 3px;
  text-align: center;
  font: normal normal 600 18px/31px Rajdhani;
  letter-spacing: 0;
  color: #F9F9F9;
  padding: 10px 35px;
}

.card-big-button:hover {
  background: #f9f9f9;
  color: #181B1F;
}

.icon {
  width: 24px;
  height: 24px;
  display: inline-block;
  -webkit-mask-size: cover;
  mask-size: cover;
  background: #737373;
}

.icon-paste {
  -webkit-mask: url("../assets/icons/paste.svg") no-repeat 50% 50%;
  mask: url("../assets/icons/paste.svg") no-repeat 50% 50%;
}

@media (max-width: 576px) {
  .card-big {
    transform: scale(0.70);
  }
}
</style>