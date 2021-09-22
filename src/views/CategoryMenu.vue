<template>
  <div :class="showWelcome ? 'border' : ''">
    <img id="logo" @click="showWelcome = true" src="../assets/arcada_logo.png" height="200px">
    <WelcomeMessage @openMenu="showWelcome = false" v-if="showWelcome" />
    <div class="category-container" v-else>
      <CategoryButton v-for="(category) in categories"
      :key="category.name"
      :name="category.name"
      :color="category.color"
      :icon="category.icon"
      />
    </div>
  </div>
</template>

<script>
import WelcomeMessage from '../components/WelcomeMessage.vue';
import CategoryButton from '../components/CategoryButton.vue';
import categories from '../assets/categories.json';

export default {
  name: 'CategoryMenu',
  components: {
    CategoryButton,
    WelcomeMessage
  },
  data: function() {
    return {
      categories: [],
      showWelcome: true,
    }
  },
  mounted: function() {
    this.categories = categories; // Lagar categories.json datan till categories arrayn.
  }
}
</script>

<style>
.category-container {
  display: flex;
  flex-flow: row wrap;
  width: 90%;
  margin: auto;
}
.border {
  border: 2px solid black;
  padding-bottom: 5%;
  margin: 5% 12%;
}
#logo {
  margin: -30px 0;
}
</style>
