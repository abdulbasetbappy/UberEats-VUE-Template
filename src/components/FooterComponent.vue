<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__container__content">
        <div class="footer__container__content__main">
          <div class="footer__container__content__main__logo">
            <h1>Uber<span>Eats</span></h1>
          </div>
          <div class="footer__container__content__main__about">
            <p>
              Uber Eats offers pizza, salad, pasta, Tex-Mex, sandwich, burger
              and croque menus, with lunch menus, halal options and free
              delivery in zone 75/7.
            </p>
          </div>
          <div class="footer__container__content__main__icon">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div class="footer__container__content__location">
          <h1>Location</h1>
          <p>
            123 Islamic Street, <br />
            Dhaka, Bangladesh
          </p>
        </div>
        <div class="footer__container__content__subscription">
          <h1>Subscribe</h1>
          <div class="footer__container__content__subscription__input">
            <input type="text" placeholder="Enter your email" />
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div class="footer__container__content__application">
          <h1>Application</h1>
          <img src="../assets/AppStore.png" alt="" />
          <img src="../assets/GooglePlay.png" alt="" />
        </div>
      </div>
    </div>
    <div class="footer__mobilecontainer">
      <div class="footer__mobilecontainer__newsletter">
        <h1>Newsletter</h1>
        <p>Join Our Newsletter</p>
        <div class="footer__mobilecontainer__newsletter__input">
          <input type="text" placeholder="Enter your email" />
          <i class="fa-solid fa-paper-plane"></i>
        </div>
      </div>
      <div class="footer__mobilecontainer__location">
        <h1>Location</h1>
        <p>
          123 Islamic Street, <br />
          Dhaka, Bangladesh
        </p>
      </div>
      <div class="footer__mobilecontainer__operhours">
        <h1>Opening Hours</h1>
        <p>
          Monday - Friday: 9:00 - 22:00 <br />
          Saturday: 9:00 - 23:00 <br />
          Sunday: 12:00 - 22:00
        </p>
      </div>
      <div class="footer__mobilecontainer__socialmedia">
        <h1>Social Media</h1>
        <div class="icons">
          <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
    <div class="footer__bar">
      <hr />
      <p>
        Developed by
        <a href="www.wetechpro.com">wetechpro.com</a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
.footer {
  background-color: #eef2f6;
  color: #1d1d1d;
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      display: none;
      
    }
    &__content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 20px;
      padding: 20px 0px;
      &__main {
        width: 40%;
        &__logo {
          h1 {
            font-size: 46px;
            span {
              color: #ffcc29;
            }
          }
        }
        &__about {
          p {
            font-size: 18px;
            margin-top: 10px;
          }
        }
        &__icon {
          margin-top: 15px;
          display: flex;
          gap: 10px;
          flex-direction: row;
          i {
            font-size: 18px;

            background-color: orange;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            width: 30px;
            border-radius: 50%;
            color: #eef2f6;
          }
        }
      }
      &__location,
      &__subscription,
      &__application {
        width: 20%;
        h1 {
          font-size: 24px;
          margin-bottom: 20px;
        }
        p {
          font-size: 16px;
        }
        img {
          width: 150px;
          margin-top: 10px;
        }
      }
      &__subscription{
      &__input{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        position: relative;
        input {
            width: 85%;
            padding: 10px;
            margin-top: 10px;
            border-radius: 8px;
            outline: none;
            border: none;
        }
        i{
            position: absolute;
            top: 10px;
            right: 5px;
            font-size: 20px;
            background-color: orange;
            height: 40px;
            width: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            color: #eef2f6;
            cursor: pointer;
        }
      }
      }

    }
  }
  &__mobilecontainer{
    display: none;
    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      padding: 30px 20px;
      background-color: #eef2f6;
      &__newsletter{
        h1{
          font-size: 24px;
          margin-bottom: 20px;
        }
        p{
          font-size: 16px;
        }
        &__input{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: row;
          position: relative;
          input {
              width: 85%;
              padding: 10px;
              margin-top: 10px;
              border-radius: 8px;
              outline: none;
              border: none;
          }
          i{
              position: absolute;
              top: 10px;
              right: 5px;
              font-size: 20px;
              background-color: orange;
              height: 40px;
              width: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 8px;
              color: #eef2f6;
              cursor: pointer;
          }
        }
      }
      &__location,
      &__operhours,
      &__socialmedia{
        h1{
          font-size: 24px;
          margin-bottom: 20px;
        }
        p{
          font-size: 16px;
        }
        i{
          font-size: 20px;
          background-color: orange;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 40px;
          width: 40px;
          border-radius: 50%;
          color: #eef2f6;
          margin-right: 10px;
        }
      }
      &__socialmedia{
        .icons{
          display: flex;
          gap: 8px;
        }
      }
    }
  }
  &__bar {
    height: 5px;
    text-align: center;
    hr{
        border: none;
        height: 3px;
        background-color: rgb(49, 49, 49);
        
    }
    p {
      background-color: #eef2f6;
      font-size: 1.2rem;
      a {
        color: #333333;
        text-decoration: none;
      }
    }
  }
}
</style>
