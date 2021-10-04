<template>
<div>
<img
      id="logo"
      @click="$router.push('/')"
      src="../assets/arcada_logo.png"
      height="200px"
    />

    
  <form ref="form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
  </form>
  </div>
</template>


<script>
import emailjs from 'emailjs-com';

export default {
      
methods: {
    sendEmail() {
      emailjs.sendForm('service_3j73na5', 'template_f7a3aig', this.$refs.form, 'user_ToyHEfd5GZPjNQttiVV6j')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}

</script>

<style scoped>

#logo {
  margin: -30px;
}
</style>
