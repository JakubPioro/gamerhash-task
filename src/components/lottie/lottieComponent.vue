<template>
  <div id="lottie"></div>
</template>

<script>
import createLottie from "@/components/lottie/lottieFunctions";
export default {
  name: "lottieComponent",
  mounted() {
    createLottie()
  }
}
</script>

<style scoped>
#lottie {
  background-color: #030303;
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  text-align: center;
  opacity: 1;
}
</style>