<template>
  <div class="about">
    <div class="about__container">
      <div class="about__container__header">
        <div class="about__container__header__content">
          <h1 class="about__container__header__content__title">About</h1>
            <p class="about__container__header__content__subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia enim illo rem ut! Labore, quod!</p>

        </div>
      </div>
      <div class="about__container__hero">
        <div class="about__container__hero__container">
          <div class="about__container__hero__container__content">
            <h1 class="about__container__hero__container__content__title">UberEats</h1>
            <p class="about__container__hero__container__content__text"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, delectus laboriosam illo, ipsum dolores, blanditiis ea minima sit esse repellat temporibus necessitatibus soluta? Doloribus optio in, suscipit laborum cumque saepe vero reiciendis. In similique, dicta aut accusamus blanditiis animi atque doloribus quisquam ipsa ad inventore cum repellendus eligendi corrupti natus, porro nihil assumenda error mollitia praesentium sint eos repudiandae.</p>
          </div>
        </div>
        <div class="about__container__hero__openTime">
          <div class="about__container__hero__openTime__leftContent">
            <h1>We are Open</h1>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday: 10:00 AM - 5:00 PM</p>
            <p>Sunday: 10:00 AM - 2:00 PM</p>
        </div>
    
          <div class="about__container__hero__openTime__rightContent">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7306.003959679149!2d90.42890129008046!3d23.711623337941433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9cc7d566d03%3A0x2472a49ac0504cd2!2sJatra%20Bari%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710064259178!5m2!1sen!2sbd" width="300" height="250" style="border:none; border-radius: 12px;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.about {
  width: 100%;
  height: 100%;
  margin: 30px 0px;
  &__container {
    width: 1200px;
    height: 100%;
    margin: auto;
    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 0px 20px;
    }
    &__header {

      border-radius: 18px;
      background: url("../assets/AboutImage.jpg") no-repeat center center;
      background-size: cover;
      @media screen and (max-width: 768px){
        margin: 20px 0px; 
      }
      &__content {
        padding: 50px;
        border-radius: 18px;
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        @media screen and (max-width: 768px) {
          padding: 20px;
        }
        &__title {
          font-size: 54px;
          font-weight: 600;
          color: #fff;
          @media screen and (max-width: 768px) {
            font-size: 36px;
          }
        }
        &__subtitle{
            color: #fff;
            font-size: 18px;
            @media screen and (max-width: 768px) {
              font-size: 14px;
              text-align: center;
            }
        }
      }
    }
    &__hero {
      &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap:50px;
        @media screen and (max-width: 768px){
          flex-direction: column;
        }
        &__content {
          padding: 50px;
          text-align: center;
          &__title {
            font-size: 54px;
            font-weight: 600;
            color: #000;
            @media screen and (max-width: 768px){
              font-size: 36px;
            }
          }
          &__text {
            font-size: 18px;
            color: #000;
            @media screen and (max-width: 768px){
              font-size: 14px;
            }
          }
        }
      }
      &__openTime {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 50px;
        margin-top: 50px;
        @media screen and (max-width: 768px){
          flex-direction: column;
        }
        &__leftContent {
          & h1 {
            font-size: 46px;
            font-weight: 600;
            color: #000;
            @media screen and (max-width: 768px){
              font-size: 36px;
            }
          }
          & p {
            font-size: 18px;
            color: #000;
            @media screen and (max-width: 768px){
              font-size: 14px;
            }
          }
        }
        &__rightContent {
          & iframe {
            border-radius: 12px;
            @media screen and (max-width: 768px){
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
