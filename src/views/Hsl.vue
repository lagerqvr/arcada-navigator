<template>
  <div>
    <div v-for="post in posts" v-bind:key="post.id">
      <h2>{{ post.bus }}</h2>
      <p>{{ post.time }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  data: () => ({
    posts: [],
  }),

  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      axios
        .get(
          "https://famnen.arcada.fi/arbs/infotv/hst.php",
          function (req, res) {
            res.headers({ "Access-Control-Allow-Origin": "http://localhost:8080/" }),
            res.mode("cors");
          }
        )
        .then((response) => {
          this.posts = response.data.data;
        });
    },
  },
};

/* export default {
  data() {
    return {
      posts: [],
    };
  },

 methods: {
    async getData() {
      try {
        const response = await this.$http.get(
            "https://famnen.arcada.fi/arbs/infotv/hst.php"
            //"http://jsonplaceholder.typicode.com/posts"
        );
        // JSON responses are automatically parsed.
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
  },
}; */
</script>