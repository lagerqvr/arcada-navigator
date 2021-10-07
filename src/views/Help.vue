<template>
<div>
  <AppReturnButton />
<img
      id="logo"
      @click="$router.push('/')"
      src="../assets/arcada_logo_v2.png"
    />

    <h2 class="text-center">We<span class="heart">❤️</span>feedback!</h2>
    <h5 class="description">Have a question or suggestion? Want to let us know about a bug? Contact us.</h5>

    <div>
        <article class="feedback center-div">
    <b-form ref="form" @submit.prevent="sendEmail">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
        class="form-label"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
          size="lg"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2" class="form-label">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
          size="lg"
        ></b-form-input>
      </b-form-group>
    
    <b-form-group id="input-group-2" label="Feedback:" label-for="input-2" class="form-label">
        <b-form-textarea
      id="textarea"
      v-model="form.feedback"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
      size="lg"
      
    ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" value="Send" variant="primary" class="submit">Submit</b-button>
    </b-form>
    </article>
  </div>
  <footer><i>Arcada Navigator v1.0.1</i></footer>
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
                alert('Your feedback has been sent succesfully.')
            }, (error) => {
                console.log(error.text);
                alert('There was an issue with sending your feedback. Please try again later.')
            });
    },
  }
}

</script>

<style scoped>

* {
    font-weight: 400;
}

#logo {
  margin: -30px;
  height: 200px;
  margin-bottom: 20px;
}

.feedback {
  margin: 0px 600px;
}

p {
  margin-top: 30px;
  text-align: left;
}

.form-label {
    text-align: left;
    margin-top: 20px;
    font-size: 20px;
}

.submit {
    font-size: 30px;
    border-radius: 5px;
    font-weight: 300;
    margin: 10px;
}

.subtext {
    width: 400px;
    text-align: left;
    margin: 0px 680px;
}

.center-div
{
  margin: 0 auto;
  max-width: 700px;
  height: 100px;
  border-radius: 3px;
}

@media screen and (max-width: 600px) {
   .center-div {
        margin: 20px;
        max-width: 700px;
        height: 100px;
        border-radius: 3px;
   } 

   #logo {
     margin: 0;
     width: auto;
     max-height: 200px;
   }

   .description {
        margin: 20px;
        margin-bottom: 35px;
        max-width: 700px;
        border-radius: 3px;
   }
}

.description {
    margin-top: 25px;
}

.heart {
   border-radius:11px 0;
   font-size:30px;
   line-height:21px;
   text-align:center;
   padding:9px;
   width:201px;
   -webkit-animation:heart-animation 1s infinite;
   -moz-animation:heart-animation 1s infinite;
   -o-animation:heart-animation 1s infinite;
   animation:heart-animation 1s infinite;
}

@webkit-keyframes heart-animation  {
   0%, 100% {
      font-size:22px;
   }
   
   10% {
      font-size:30px;
   }

}

@-moz-keyframes heart-animation  {
   0%, 100% {
      font-size:22px;
   }
   
   50% {
      font-size:30px;
   }

}

@-o-keyframes heart-animation  {
   0%, 100% {
      font-size:22px;
   }
   
   50% {
      font-size:30px;
   }

}

@keyframes heart-animation  {
   0%, 100% {
      font-size:22px;
   }
   
   50% {
      font-size:30px;
   }

}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  color: rgb(101, 101, 101);
}

</style>
