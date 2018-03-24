<template>
  <div class="row container" >
    <div>
      <h1>URL Shortener</h1>
    </div>
    <div class="six columns" style="margin:auto">
      <h3>Login</h3>
      <ou-text-field type='underlined' input-type="email" v-model='loginEmail' placeholder='E-mail' />
      <ou-text-field type='underlined' input-type="password" v-model='loginPassword' placeholder='Password' />
      <ou-button type="primary" @click="loginUser">Login</ou-button>
    </div>

    <div class="six columns">
      <h3>Register</h3>
      <ou-text-field type='underlined' input-type="email" v-model='registerEmail' placeholder='E-mail' />
      <ou-text-field type='underlined' v-model='registerPassword' input-type="password" placeholder='Password' />
       <ou-text-field type='underlined' v-model='registerPasswordRetype' input-type="password" placeholder='Password' />
       <ou-button @click="registerUser">Register</ou-button>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      loginEmail:undefined,
      loginPassword:undefined,
      registerEmail:undefined,
      registerPassword:undefined,
      registerPasswordRetype:undefined
    }
  },
  methods:{
    registerUser(){
      let requestPayload ={}
      requestPayload.email=this.registerEmail
      requestPayload.password=this.registerPassword,
      requestPayload.confirm_password=this.registerPasswordRetype

       this.axios.post('https://shrouded-shore-48840.herokuapp.com/user/signup',requestPayload)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });



      console.log(requestPayload)
    },
    loginUser(){
      let requestPayload = {}
      requestPayload.email = this.loginEmail
      requestPayload.password = this.loginPassword


      this.axios.post('/user',requestPayload)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(requestPayload)
    }
  }
}
</script>
