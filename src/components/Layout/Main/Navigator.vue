<template>
  <ul>
    <li v-for="(item, index) of listItem" :key="index">
      <router-link :to="item.link">{{ item.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Navigator',
  data() {
    return {
      listItem: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "About",
          link: "/about"
        }
      ]
    }
  }
}
</script>
