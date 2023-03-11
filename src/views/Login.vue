<template>
  <div class="Login-section">
      <div class="login m-4 d-flex justify-content-center">
          <div class="loginCont">
              <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                      v-model="userName">
                  <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                      v-model="password">
                  <label for="floatingPassword">Password</label>
              </div>
              <div class="forget mb-4 mt-1 align-right">
                  <a href="#" target="_blank">forgot password?</a>
              </div>
              <div class="sign-in-btn">
                  <button class="btn sign-btn" @click="loginFunction">Log in</button>
              </div>
          </div>
      </div>
  </div>
</template>
<script>

export default {
  data() {
      return {
          userName: 'fegde.mayur@gmail.com',
          password: 'Tech@1234'
      }
  },
  methods: {
      loginFunction() {
          axios
              .post("https://prod-api.stockants.com/api/auth/v1/sign_in", {
                  "username": this.userName,
                  "password": this.password,
              },
              )
              .then(response => {
                  if (response.data.message == 'success') {
                      this.$router.push({ path: '/userlist' })
                  }else {
                      alert("Please enter valid username and password");
                  }
              })
      }
  }
};
</script>