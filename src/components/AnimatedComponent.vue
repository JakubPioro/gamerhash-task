<!--Komponent do znikania kart-->
<template>
  <span ref="target" class="">
    <transition :name="animationType">
      <div v-if="animate" class="animated-component">
        <slot/>
      </div>
    </transition>
  </span>
</template>

<script>
import {onMounted, ref} from 'vue';

export default {
  name: 'AnimatedComponent',
  props: {
    animationType: {
      type: String,
      required: false,
      default: 'fade'
    }
  },
  setup() {
    const target = ref();
    const animate = ref(false);
    const observer = new IntersectionObserver(
        ([entry]) => {
          animate.value = entry.isIntersecting;
        },
        {
          threshold: 0.4
        }
    );
    onMounted(() => {
      observer.observe(target.value);
    });
    return {
      animate,
      target
    };
  }
};
</script>

<style scoped>
span {
  width: 480px;
}

.animated-component {

}

.animated-component.fade-enter-from,
.animated-component.zoom-enter-from {
  transition: none;
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>