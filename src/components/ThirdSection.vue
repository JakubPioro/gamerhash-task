<template>
  <section class="col-12 row justify-content-center footer overflow-hidden">
    <div class="col-8">

      <h2>Profitability calculator</h2>

      <p>You earn bitcoins. When BTC exchange rate goes up, your profit automatically increases.</p>

      <div class="d-flex justify-content-evenly p-2 m-2 flex-wrap">
        <card-small v-for="item in cardContent"
                    :key="item.name"
                    :icon-name="item.iconName"
                    :money="item.money"
                    :name="item.name"
                    class="my-3"/>
      </div>

      <p>Crypto exchange rates are independent of GamerHash operations, the estimation is purely for illustrative
        purposes</p>

      <span class="d-flex justify-content-center">

        <a class="calc-button d-flex justify-content-center align-items-center"
           href="https://gamerhash.com"
           target="_blank">

          <i class="icon icon-calc mx-2"></i>

          <span class="calc-span">Check how much<br>your setup will earn</span>
        </a>

    </span>
    </div>
  </section>
</template>

<script>
import CardSmall from "@/components/CardSmall";

export default {
  name: "ThirdSection",
  components: {
    'card-small': CardSmall
  },
  data() {
    return {
      cardContent: [
        {
          iconName: "low-end",
          money: "$9,00.41",
          name: "low-end"
        },
        {
          iconName: "mid-shelf",
          money: "$9,00.41",
          name: "mid-shelf"
        },
        {
          iconName: "high-end",
          money: "$9,00.41",
          name: "high-end"
        },
        {
          iconName: "7xGPU",
          money: "$9,00.41",
          name: "7xGPU"
        },
      ]
    }
  }
}
</script>

<style scoped>

.footer {
  margin: 0 !important;
  padding-top: 120px;
  padding-bottom: 167px;
  background: #171A1F;
}

h2 {
  text-align: center;
  font: normal normal bold 36px/40px Rajdhani;
  letter-spacing: 0;
  color: #F9F9F9;
  opacity: 1;
}

p {
  text-align: center;
  font: normal normal 500 18px/22px Rajdhani;
  letter-spacing: 0;
  color: #C1C1C1;
  opacity: 1;
}

.calc-button {
  margin-top: 80px;
  border: 1px solid #737373;
  background: #2AD46F00;
  color: #F9F9F9;
  padding: 15px 20px;
  border-radius: 5px;
  opacity: 1;
  width: 280px;
  height: 90px;
}

.calc-span {
  font: normal normal 600 14px/18px Rajdhani;
  letter-spacing: 0;
  opacity: 1;
}

.calc-button:hover {
  background: #F9F9F9;
  color: #2C3138;
}

.calc-button:hover > .icon {
  background: #2C3138;
}

.icon {
  width: 60px;
  height: 60px;
  display: inline-block;
  -webkit-mask-size: cover;
  mask-size: cover;
  background: #f9f9f9;
}

.icon-calc {
  -webkit-mask: url("../assets/icons/calc.svg") no-repeat 50% 50%;
  mask: url("../assets/icons/calc.svg") no-repeat 50% 50%;
}
</style>