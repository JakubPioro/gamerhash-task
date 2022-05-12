<template>
    <login/>
  <first-section></first-section>
  <second-section id="second"></second-section>
  <third-section/>
</template>

<script>
import FirstSection from '../components/FirstSection'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import Login from "@/components/Login";

export default {
  name: 'HomeView',
  components: {
    'first-section': FirstSection,
    'second-section': SecondSection,
    'third-section': ThirdSection,
    "login":Login
  }
}
</script>
