<template>
  <div class="ensak-landing-page-container">
    <!-- Style Object Binding    -->
    <LandingBanner :target-date="targetDate" :class="bg" :style="{ backgroundImage: bannerUrl, }" @show-modal='showModal'/>
    <div v-if="this.view">
      <LandingSpeakers :speakers="speakersData"/>
      <LandingSchedule/>
      <LandingFindUs :location="location"/>
      <LandingFooter/>
    </div>
    <div class='ensak-landing-page-container-login' :style="{display : login}" @click='this.login="none"' >
      <div class="ensak-landing-page-container-login-container">
        <div class="ensak-landing-page-container-login-container-student">
          <h1>Our Students</h1>
          <a href="https://d7751cf9f698.ngrok.io/api/v1/oauth2/google/login">
            <div class="ensak-landing-page-container-login-container-student-button">
              <img class="ensak-landing-page-container-login-container-student-button-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
              <p class="ensak-landing-page-container-login-container-student-button-text"><b>Sign in with Google</b></p>
            </div>
          </a>
        </div>
        <a-divider type="vertical" class="divider-landing"/>
        <div class="ensak-landing-page-container-login-container-student">
          <h1>For Entreprises</h1>
          <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
          >
            <a-form-item>
              <a-input class='inputs'
                v-decorator="[
                  'username',
                  { rules: [{ required: true, message: 'Please input your email!' }] },
                ]"
                placeholder="Username"
              >
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'password',
                  { rules: [{ required: true, message: 'Please input your Password!' }] },
                ]"
                type="password"
                placeholder="Password"
              >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-checkbox
                v-decorator="[
                  'remember',
                  {
                    valuePropName: 'checked',
                    initialValue: true,
                  },
                ]"
              >
                Remember me
              </a-checkbox>
            </a-form-item>
            <a-form-item>
              <button class="ensak-landing-page-container-login-container-student-button-hey">
                <span class="ensak-landing-page-container-login-container-student-button-text"><b>Log into your Account</b></span>
              </button>
            </a-form-item>
          </a-form>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LandingBanner from "@/components/landing/LandingBanner";
import LandingSpeakers from "@/components/landing/LandingSpeakers";
import LandingSchedule from "@/components/landing/LandingSchedule";
import LandingFindUs from "@/components/landing/LandingFindUs";
import LandingFooter from "@/components/landing/LandingFooter";
import { parseDate }      from "@/utils/utils";
import { Divider, Form, Input, Checkbox} from 'ant-design-vue'
export default {
  name: "LandingPage",
  components: {
    LandingBanner,
    LandingSpeakers,
    LandingSchedule,
    LandingFindUs,
    LandingFooter,
    "a-divider": Divider,
    "a-form": Form,
    "a-form-item": Form.Item,
    "a-input": Input,
    "a-checkbox": Checkbox,
  },
  data()
  {
    return {
      event: {},
      bannerUrl: '',
      speakersData:{},
      location:{},
      login:"none",
      view:true,
      bg:""
    }
  },
  //Todo: Create an EndPoint that returns the current event
  created()
  {
    this.axios.get('/events/497f6eca-6276-4993-bfeb-53cbbbba6f08/template')
        .then(response => {
          this.event = response.data.content.data;
          this.bannerUrl = "url('" + this.event.banner + "')";
          this.speakersData = this.event.performers;
          this.location = this.event.location;
          console.log(response.data);
          console.log(parseDate(this.event.startDate));
        })
        .catch(e => {
          // this.errors.push(e)
          console.log(e);
        })
      
  },
  computed:
  {
    targetDate(){
      return parseDate(this.event.startDate);
    }
  },
  methods:{
    showModal(a){
      this.login ="flex";
      this.view = false;
      this.bg="blur";
      console.log("wahya"+a)
    },
    handleSubmit(){
      this.axios.post("/auth/enterprise/authenticate")
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: 'Barlow', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
.ensak-landing-page-container {
  overflow-x: hidden;
  &-login{
    height:100vh;
    width:100vw;
    position:absolute;
    top:0;
    right:0;
  }
}
.blur{
  filter:blur(2px) brightness(50%);
  transition: filter 0.5s ease-in-out;
}
.ensak-landing-page-container-login{
  flex-direction: column;
  justify-content: center;
  &-container{
    width:70%;
    background: rgba(255,255,255,0.9);
    border-radius:50px 0;
    margin:auto;
    display:flex;
    &-student{
      width:50%;
    }
    &-enterprise{
      width:50%
    }
  }
}
.divider-landing{
  text-align:center;
  height:75%;
  min-height:75%;
  margin:auto 0;
  color:#013E7A;
  background: #013E7A;
  width:2px;
}
.ensak-landing-page-container-login-container{

  &-student{
    padding:50px 0;
    h1{
       color: #013E7A;
       font-weight: 600;
       margin: 0 0 25px 0;
    }
    text-align:center;
    &-button{
      &-icon{
        width:10%;
        height:unset;
      }
      &-text{
        margin:auto;
      }
      
      width:60%;
      display:flex;
      margin:auto !important;
      padding: 8px 30px;
      margin:auto 10px;
      border-radius: 40px 0 40px 0;
      border:none;
      background: white;
      color: #013E7A;
      box-shadow: 0 0 5px #013E7A;
      font-weight: 400;
      font-size: 18px;
    }
  }
}
.login-form{
  width:70%;
  margin:auto;
}
.ant-input{
  padding:20px 20px !important;
  border-radius: 30px 0 !important;
  border:none;
  box-shadow: 0 0 5px #013E7A;
}
.ant-form-item{
  margin: 0 0 10px 0 !important;
}
.ensak-landing-page-container-login-container-student-button-hey{
  width:90%;
  display:flex;
  margin:auto !important;
  padding: 0px 30px !important;
  margin:auto 10px;
  border-radius: 40px 0 40px 0;
  border:none;
  background: white;
  color: #013E7A;
  box-shadow: 0 0 5px #013E7A;
  font-weight: 400;
  font-size: 18px;
}
</style>
