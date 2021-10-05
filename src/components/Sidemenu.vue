<template>
  <div class="sidemenu">
    <img src="../assets/arcada_logo.png" />
    <div class="line"></div>
    <div class="item block">
      <p>Block</p>
      <div
        class="circle"
        @click="handleCircleButton('A')"
        style="background-color: #812990"
      >
        <div class="circle-overlay" :class="{ active: blocks.A }" />
        A
      </div>
      <div
        class="circle"
        @click="handleCircleButton('B')"
        style="background-color: #812990"
      >
        <div class="circle-overlay" :class="{ active: blocks.B }" />
        B
      </div>
      <div
        class="circle"
        @click="handleCircleButton('C')"
        style="background-color: #812990"
      >
        <div class="circle-overlay" :class="{ active: blocks.C }" />
        C
      </div>
      <div
        class="circle"
        @click="handleCircleButton('D')"
        style="background-color: #812990"
      >
        <div class="circle-overlay" :class="{ active: blocks.D }" />
        D
      </div>
      <div
        class="circle"
        @click="handleCircleButton('E')"
        style="background-color: #812990"
      >
        <div class="circle-overlay" :class="{ active: blocks.E }" />
        E
      </div>
      <div
        class="circle"
        @click="handleCircleButton('F')"
        style="background-color: #812990"
      >
        <div class="circle-overlay" :class="{ active: blocks.F }" />
        F
      </div>
    </div>
    <div v-if="!showBlockView">
      <SidemenuDropdown
        v-for="category in categories"
        :key="category.name"
        :category="category.name"
        :items="category.rooms"
        v-on="$listeners"
      />
    </div>
    <div v-else>
      <SidemenuItem
        v-for="room in rooms"
        :key="room.name"
        :name="room.name"
        :info="room.info"
        v-on="$listeners"
        class="single"
      />
    </div>
  </div>
</template>

<script>
import rooms from '../assets/rooms.json';
import SidemenuDropdown from '../components/SidemenuDropdown.vue';
import SidemenuItem from '../components/SidemenuItem.vue';

export default {
  components: {
    SidemenuDropdown,
    SidemenuItem,
  },
  methods: {
    filterByBlock(block) {
      let i = 0;
      for (const room in rooms) {
        if (room.charAt(0) == block) {
          this.rooms[i] = { name: room, info: rooms[room].info };
          i++;
        }
      }
      //console.log(this.rooms);
      this.showBlockView = true;
    },
    handleCircleButton(block) {
      // console.log(block, event.target.className);
      this.blocks[block] = !this.blocks[block];
      if (!this.blocks[block]) {
        this.showBlockView = false;
      } else {
        for (const el in this.blocks) {
          this.blocks[el] = false;
        }
        this.blocks[block] = !this.blocks[block];
        this.filterByBlock(block);
      }
    },
  },
  created() {
    //this.filterByBlock('E');
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
      rooms: [{ name: '', info: '' }],
      blocks: { A: false, B: false, C: false, D: false, E: false, F: false },
      showBlockView: false,
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
  scrollbar-width: none;
}

::-webkit-scrollbar {
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

.item.single {
  justify-content: left;
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

.circle-overlay.active::before {
  content: 'X';
  position: absolute;
  background-color: rgb(197, 29, 29);
  font-weight: bold;
  font-size: 2rem;
  display: block;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  line-height: 70px;
  color: #fff;
  margin: 0;
  transition: 1s;
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
