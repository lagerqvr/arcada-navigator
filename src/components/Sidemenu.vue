<template>
  <div class="sidemenu">
    <img src="../assets/arcada_logo.png" />
    <div class="line"></div>
    <div class="item block">
      <p>Block</p>
      <div class="circle" style="background-color: #812990">A</div>
      <div class="circle" style="background-color: #812990">B</div>
      <div class="circle" style="background-color: #812990">C</div>
      <div class="circle" style="background-color: #812990">D</div>
      <div class="circle" style="background-color: #812990">E</div>
      <div class="circle" style="background-color: #812990">F</div>
    </div>
    <SidemenuDropdown
      v-for="category in categories"
      :key="category.name"
      :category="category.name"
      :items="category.rooms"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import rooms from '../assets/rooms.json';
import SidemenuDropdown from '../components/SidemenuDropdown.vue';

export default {
  components: {
    SidemenuDropdown,
  },
  methods: {},
  created() {
    for (const room in rooms) {
      this.categories[rooms[room].category].rooms[room] = {
        name: room,
        info: rooms[room].info,
      };

      this.categories[rooms[room].category].name = rooms[room].category;
    }
    //console.log(this.categories);
  },
  data() {
    return {
      categories: {
        ADBKlass: { rooms: {} },
        Auditorium: { rooms: {} },
        Grupprum: { rooms: {} },
        Klassrum: { rooms: {} },
        Mötesrum: { rooms: {} },
        Projektrum: { rooms: {} },
        Specialrum: { rooms: {} },
        Torg: { rooms: {} },
      },
    };
  },
};
</script>

<style scoped>
.sidemenu {
  display: flexbox;
  flex-wrap: wrap;
  position: fixed;
  height: 100%;
  width: 500px;
  background: #f0f0f0;
  z-index: 100;
  box-shadow: 0 0 20px rgb(0 0 0 / 30%);
  overflow: hidden;
  overflow-y: scroll;
}

.sidemenu::-webkit-scrollbar {
  display: none;
}

img {
  margin-top: -25px;
  height: 100px;
}

.item {
  display: flex;
  color: #444;
  background: #fff;
  font-size: 1.4rem;
  text-align: left;
  height: 60px;
  padding-left: 25px;
  border-top: 1px solid #e8eaed;
  border-bottom: 1px solid #e8eaed;
  justify-content: space-between;
}

.item.block {
  text-align: center;
  line-height: 30px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 0 15px;
  padding: 0 0 30px;
}

.block .circle {
  font-weight: bold;
  font-size: 2rem;
  display: block;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  line-height: 70px;
  color: #fff;
  margin: 0;
}

.block p {
  width: 100%;
  margin: 5px 0 10px;
}

.line {
  height: 1px;
  background: #e8eaed;
  margin-top: -20px;
}
</style>
