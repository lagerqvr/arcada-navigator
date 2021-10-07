<template>
  <!-- Visar border bara på welcome screen -->
  <div class="border-container" :class="showWelcome ? 'active' : ''">
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
      <WelcomeMessage @open-menu="handleClick" v-if="showWelcome" />

      <div class="category-container" v-if="!showWelcome">
        <CategoryButton
          v-for="category in categories"
          :key="category.name"
          :name="category.name"
          :color="category.color"
          :icon="category.icon"
          :route="category.route"
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
  methods: {
    handleClick: function(lang) {
      this.showWelcome = false;
      this.language = lang;
    },
  },
  data: function() {
    return {
      categories: [],
      showWelcome: false,
      language: 'sv',
    };
  },
  mounted: function() {
    this.categories = categories; // Lagar categories.json datan till categories arrayn.
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (!from.name) {
        vm.showWelcome = true;
      }
    });
  },
};
</script>

<style scoped>
.category-container {
  display: flex;
  flex-flow: row wrap;
  width: 90%;
  margin: auto;
}
.border-container {
  border-radius: 30px;
  padding-bottom: 6%;
  margin: 5% 5%;
  transition: 1.5s;
}
.border-container.active {
  border: 2px solid black;
  margin: 4.91% 12%;
}
#logo {
  margin: -30px;
}
</style>
