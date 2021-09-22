<template>
  <div class="border" :class="showWelcome ? 'active' : ''">
    <img
      id="logo"
      @click="showWelcome = true"
      src="../assets/arcada_logo.png"
      height="200px"
    />
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <WelcomeMessage @openMenu="showWelcome = false" v-if="showWelcome" />

      <div class="category-container" v-if="!showWelcome">
        <CategoryButton
          v-for="category in categories"
          :key="category.name"
          :name="category.name"
          :color="category.color"
          :icon="category.icon"
        />
      </div>
    </transition>
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
    WelcomeMessage,
  },
  data: function() {
    return {
      categories: [],
      showWelcome: true,
    };
  },
  mounted: function() {
    this.categories = categories; // Lagar categories.json datan till categories arrayn.
  },
};
</script>

<style>
.category-container {
  display: flex;
  flex-flow: row wrap;
  width: 90%;
  margin: auto;
}
.border {
  padding-bottom: 5%;
  margin: 5% 5%;
  transition: 1.5s;
}
.border.active {
  border: 2px solid black;
  margin: 4.91% 12%;
}
#logo {
  margin: -30px;
}
</style>
