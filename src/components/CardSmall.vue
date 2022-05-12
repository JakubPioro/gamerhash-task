<template>
  <div class="card-small d-flex flex-column justify-content-center align-items-center">
    <span class="name">{{ name }}</span>
    <i :class="`icon icon-${iconName}`"/>
    <span class="money">{{ money }}</span>
  </div>
</template>

<script>
export default {
  name: "CardSmall",
  props: {
    name: String,
    iconName: String,
    money: String,
  },
}
</script>
<style scoped>

.card-small {
  background: #171A1F 0 0 no-repeat padding-box;
  box-shadow: -7px -7px 10px #272B3140, 7px 7px 10px #0F111480;
  border-radius: 10px;
  width: 280px;
  height: 280px;
}

.name {
  text-align: center;
  font: normal normal 500 18px/20px Rajdhani;
  letter-spacing: 0;
  color: #F9F9F9;
  opacity: 1;

}

.money {
  text-align: center;
  font: normal normal bold 24px/20px Rajdhani;
  letter-spacing: 0;
  color: #F41F33;
  opacity: 1;
}

.icon {
  width: 150px;
  height: 150px;
  display: inline-block;
  -webkit-mask-size: cover;
  mask-size: cover;
  background: #737373;
}

.icon-low-end {
  -webkit-mask: url("../assets/icons/low-end.svg") no-repeat 50% 50%;
  mask: url("../assets/icons/low-end.svg") no-repeat 50% 50%;
}

.icon-mid-shelf {
  -webkit-mask: url("../assets/icons/mid-shelf.svg") no-repeat 50% 50%;
  mask: url("../assets/icons/mid-shelf.svg") no-repeat 50% 50%;
}

.icon-high-end {
  -webkit-mask: url("../assets/icons/high-end.svg") no-repeat 50% 50%;
  mask: url("../assets/icons/high-end.svg") no-repeat 50% 50%;
}

.icon-7xGPU {
  -webkit-mask: url("../assets/icons/7xGPU.svg") no-repeat 50% 50%;
  mask: url("../assets/icons/7xGPU.svg") no-repeat 50% 50%;
}
</style>