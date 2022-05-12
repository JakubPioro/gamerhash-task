<template>
  <header class="d-flex align-items-center flex-column justify-content-between overflow-hidden">

    <nav class="col-11 col-md-8 d-flex justify-content-between mt-3">
      <img src="https://gamerhash.com/images/gamerhash-logo.svg" alt="GAMERHASH">

      <a v-if="!logged" class="login-button" @click="toggle('button')">
        <span class="login-span">Log in</span>
      </a>

      <a v-else class="login-button" @click="logout">
        <span class="login-span">Log out</span>
      </a>
    </nav>

    <div class="d-flex flex-column align-items-center justify-content-center">
      <div class="scale">
        <section class="mining position-relative">
          <img class="image position-absolute top-0 start-0" :src="require('@/assets/images/mining.png')" alt="mining"/>
          <img class="image position-absolute astro" :src="require('@/assets/images/astro.png')" alt="mining"/>
          <div class="position-absolute d-flex justify-content-evenly links-group">

            <a class="d-flex align-items-center" href="https://gamerhash.com" target="_blank">
              <i class="icon icon-graph mx-2"></i>how much can i earn
            </a>

            <a class="d-flex align-items-center" href="https://gamerhash.com" target="_blank">
              <i class="icon icon-pick mx-2"></i>how to mine?
            </a>

            <a class="d-flex align-items-center" href="https://gamerhash.com" target="_blank">
              <i class="icon icon-trolley mx-2"></i>buy device
            </a>

          </div>
        </section>
      </div>
    </div>

    <section class="d-flex flex-column align-items-center">
      <a class="question" href="https://gamerhash.com" target="_blank">what can i do with earned funds?</a>
      <i class="icon icon-arrow" @click="scroll('second')"></i>
    </section>
  </header>
</template>
<script>
import {useStore} from 'vuex'
import {computed} from "vue";

export default {
  methods: {
    scroll(id) {
      const yOffset = -80;
      const element = document.getElementById(id);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({top: y, behavior: 'smooth'});
    }
  },
  setup() {
    const store = useStore()

    return {
      toggle: (x) => store.dispatch('switch', x),
      logout: () => store.dispatch('logout'),
      logged: computed(() => store.getters.getLogged)
    }
  }
};
</script>


<style>

header {
  background: transparent radial-gradient(closest-side at 50% 48%, #2C3138 0%, #171A1F 100%);
  height: 100vh;
}

header .question {
  text-align: center;
  font: normal normal 600 20px/26px Rajdhani;
  color: #737373;
}

header .question:hover {
  color: #f9f9f9;
}

a {
  text-decoration: none;
}

a:hover {
  cursor: pointer;
}

div.links-group {
  top: 500px;
  left: 168px;
  font: normal normal 600 32px/41px Rajdhani;

}

div.links-group > a {
  color: #737373;
}

div.links-group > a:hover {
  color: #f9f9f9;
}

a > img {
  border: 10px solid red;
  filter: invert(100%) sepia(7%) saturate(59%) hue-rotate(308deg) brightness(116%) contrast(95%);
}

a:hover > .icon {
  background: #f9f9f9;
}

section.mining {
  width: 1517px;
  height: 638px;
}

header .question {
  font: normal normal 600 20px/26px Rajdhani;
}

img.astro {
  top: -15px;
  right: 220px;
}

.login-button {
  border: 1px solid #737373;
  background: #2AD46F00;
  padding: 15px 20px;
  border-radius: 5px;
  opacity: 1;
}

.login-button:hover {
  border: 1px solid #f9f9f9;
}

.login-span {
  font: normal normal 600 14px/18px Rajdhani;
  letter-spacing: 0;
  color: #F9F9F9;
  opacity: 1;
}

.icon {
  width: 40px;
  height: 40px;
  display: inline-block;
  -webkit-mask-size: cover;
  mask-size: cover;
  background: #737373;
}

.icon-graph {
  -webkit-mask: url("../assets/icons/icon.svg") no-repeat 50% 50%;
  mask: url("../assets/icons/icon.svg") no-repeat 50% 50%;
}

.icon-pick {
  -webkit-mask: url("../assets/icons/icon-2.svg") no-repeat 50% 50%;
  mask: url("../assets/icons/icon-2.svg") no-repeat 50% 50%;
}

.icon-trolley {
  -webkit-mask: url("../assets/icons/icon-3.svg") no-repeat 50% 50%;
  mask: url("../assets/icons/icon-3.svg") no-repeat 50% 50%;
}

.icon-arrow {
  -webkit-mask: url("../assets/icons/arrow.svg") no-repeat 50% 50%;
  mask: url("../assets/icons/arrow.svg") no-repeat 50% 50%;
  background: #FF0034;
  margin-bottom: 70px;
}

.icon-arrow:hover {
  margin-top: 4px;
  background: #0A4E9E;
}

.scale {
  transition: all .4s ease-in-out
}

@media (max-width: 1600px) {
  .scale {
    transform: scale(0.75);
  }

  @media (max-width: 1200px) {
    .scale {
      transform: scale(0.6);
    }
  }

  @media (max-width: 992px) {
    .scale {
      transform: scale(0.5);
    }
  }

  @media (max-width: 768px) {
    .scale {
      transform: scale(0.3);
    }
  }

  @media (max-width: 576px) {
    .scale {
      transform: scale(0.25);
    }

    nav {
      transform: scale(0.8)
    }

    .icon-arrow {
      margin-bottom: 70px;
    }
  }
}

</style>