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
    <h4 class="text-center">Leave your suggestions for the app below</h4>
    

  <form ref="form" @submit.prevent="sendEmail">
    <label>Name </label>
    <input type="text" name="name" v-model="form.name"> 
    <br><br>
    <label>Email </label>
    <input type="email" name="email" v-model="form.email"> 
    <br><br>
    <label>Message</label>
    <textarea name="feedback" v-model="form.feedback"></textarea>
    <br><br>
    <input type="submit" value="Send">
  </form> 
  </div>
  
</template>


<script>
import emailjs from 'emailjs-com';
import AppReturnButton from '../components/AppReturnButton.vue';

const template_params = {
            to: '',
            to_name: '',
            feedback: '',
}

export default {
  components: { AppReturnButton },

  data() {
      return {
         form: {
          email: '',
          name: '',
          feedback: '',
        },
        show: true
      }
    },

methods: {
    sendEmail() {
    template_params.to = this.form.email
    template_params.to_name = this.form.name
    template_params.feedback = this.form.feedback
    emailjs.send('service_3j73na5', 'template_f7a3aig', template_params, 'user_ToyHEfd5GZPjNQttiVV6j')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    },
  }
} 

</script>

<style scoped>

#logo {
  margin: -30px;
}

</style>
