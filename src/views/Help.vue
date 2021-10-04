<template>
<div>
  <AppReturnButton />
<img
      id="logo"
      @click="$router.push('/')"
      src="../assets/arcada_logo.png"
      height="200px"
    />
    <h1>Help center</h1>
    <br>
    <h2 class="text-center">We love feedback!</h2>
    <h3 class="text-center">Leave your suggestions below</h3>
    
<!--
  <form ref="form" @submit.prevent="sendEmail">
    <label>Name </label>
    <input type="text" name="name" v-model="name"> 
    <br><br>
    <label>Email </label>
    <input type="email" name="email" v-model="email"> 
    <br><br>
    <label>Message</label>
    <textarea name="feedback" v-model="feedback"></textarea>
    <br><br>
    <input type="submit" value="Send">
  </form> -->

  <div width="200px">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
  
  </div>
  
</template>


<script>
import emailjs from 'emailjs-com';
import AppReturnButton from '../components/AppReturnButton.vue';

export default {
  components: { AppReturnButton },

  data() {
      return {
         form: {
          email: '',
          name: '',
        },
        show: true
      }
    },

methods: {
    sendEmail() {
    emailjs.send('service_3j73na5', 'template_f7a3aig', template_params, 'user_ToyHEfd5GZPjNQttiVV6j')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    },
    onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
        console.log(this.form.email);
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
    }
  }
} 

const template_params = {
            to: '',
            to_name: '',
            feedback: '',
}

</script>

<style scoped>

* {
    font-family: Raleway;
}

#logo {
  margin: -30px;
}

</style>
