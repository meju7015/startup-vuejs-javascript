<template>
  <div>
    <main-header/>
    <main-navigator/>
    <slot/>
    <main-footer/>
  </div>
</template>

<script>
import MainHeader from "@/components/Layout/Sub/Header";
import MainFooter from "@/components/Layout/Sub/Footer";
import MainNavigator from "@/components/Layout/Sub/Navigator";

export default {
  components: {
    MainHeader, MainFooter, MainNavigator
  }
}
</script>
