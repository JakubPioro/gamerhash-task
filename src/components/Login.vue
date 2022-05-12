<template>
  <transition name="fade">
    <div
        v-if="status"
        class="overlay position-fixed left-0 d-flex flex-column justify-content-center align-items-center">

      <h2 class="title">Log in</h2>

      <div ref="inner_rect" class="card-login d-flex flex-column justify-content-center align-items-center">

        <input
            type="text"
            class=""
            placeholder="Your email or login"
            v-model="form.login"
            :class="{invalid:form.errors.login !== ''}"/>
        <span v-if="form.errors.login!==''" class="text-danger invalid">{{ form.errors.login }}</span>

        <input
            type="password"
            class="my-2"
            placeholder="Confirm password"
            v-model="form.password"
            :class="{invalid:form.errors.password !== ''}"/>
        <span v-if="form.errors.password!==''" class="text-danger invalid">{{ form.errors.password }}</span>

        <span class="button-login align-middle" @click="login(form)">Log in</span>

        <p>Don't have an account? <a>Register</a></p>

        <p>Forgot your password? <a>Click here</a> to reset</p>

      </div>

    </div>
  </transition>
</template>

<script>
import {useStore} from 'vuex'
import {computed, ref} from "vue";
import {useClickOutside} from "@/script/useClickOutside";

export default {
  name: "LoginComponent",
  data() {
    return {
      open: false,
      x: this.set
    }
  },
  methods: {
    f() {
      console.log('key')
    }
  },
  setup() {
    const store = useStore()
    let open = computed(() => store.getters.getStatus)
    const toggle = (x) => store.dispatch('switch', x)

    const inner_rect = ref(null);
    useClickOutside(inner_rect, () => {
      toggle("outside")
    })
    return {
      status: open,
      // toggle:toggle(),
      inner_rect,
      form: computed(() => store.getters.getForm),
      login: (form) => store.dispatch('login', form)
    }
  },
}
</script>

<style scoped>
.overlay {
  height: 100vh;
  width: 100%;
  background: #171a1f75;
  z-index: 1;
}

.card-login {
  width: 420px;
  background: #F9F9F9;
  box-shadow: 0 0 10px #171A1F80;
  border-radius: 10px;
  opacity: 1;
  padding-top: 40px;
}

h2.title {
  text-align: center;
  font: normal normal 600 32px/41px Rajdhani;
  color: #F9F9F9;
}

span.button-login {
  background: #2AD46F;
  box-shadow: -5px -5px 10px #E2FFEE, 5px 5px 10px #11AE5166;;
  border-radius: 3px;
  width: 380px;
  padding: 12px 0;
  margin: 20px 0;
  text-align: center;
  font: normal normal 600 18px/23px Rajdhani;
  color: #F9F9F9;
  user-select: none;
  cursor: pointer;
}

span.button-login:hover {
  background: #20C763;
}

input {
  background: #FFFFFF;
  border: 1px solid #C1C1C1;
  border-radius: 3px;
  width: 380px;
  padding: 10px 12px;
  font: normal normal 500 18px/23px Rajdhani;
  color: #737373;
}

input.invalid {
  border: 1px solid red;
}

span.invalid {
  color: red;
}

p {
  font: normal normal 500 16px/20px Rajdhani;
  color: #7A7A7B;
}

a {
  font-weight: 600;
  color: #2C3138;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 576px) {
  .card-login {
    transform: scale(0.80);
  }
}
</style>