<template>
  <div>
    <main-header/>
    <main-navigator/>
    <slot/>
    <main-footer/>
  </div>
</template>

<script>
import MainHeader from "@/components/Layout/Main/Header";
import MainFooter from "@/components/Layout/Main/Footer";
import MainNavigator from "@/components/Layout/Main/Navigator";

export default {
  components: {
    MainHeader, MainFooter, MainNavigator
  }
}
</script>
