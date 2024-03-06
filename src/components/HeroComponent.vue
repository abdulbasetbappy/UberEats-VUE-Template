<template>
  <div class="main">
    <div class="main__container">
      <div class="main__container__hero">
        <div class="main__container__hero__left">
          <div class="main__container__hero__left__text">
            <h2>
              Savor the Flavors <br />
              Order with Ease
            </h2>
            <p>
              Savor the Flavors, Order with Ease - Indulge in a gastronomic
              journey with our curated menu of delectable dishes. Explore a
              world of culinary delights and order with unparalleled.
            </p>
          </div>
          <div class="main__container__hero__left__buttons">
            <button
              :class="{ active: selectedOption === 'Livraison' }"
              @click="selectbutton('Livraison')"
            >
              Livraison
            </button>
            <button
              :class="{ active: selectedOption === 'Click & Collect' }"
              @click="selectbutton('Click & Collect')"
            >
              Click & Collect
            </button>
          </div>
          <!--        
          <div class="main__container__hero__left__input">
          <input type="text" placeholder="Select location" />
          <i class="fas fa-chevron-down"></i>
        </div>-->

          <div class="main__container__hero__left__input">
            <input
              type="text"
              :value="selectedItem"
              :placeholder="selectedOption || 'Select location'"
              @click="toggleDropdown"
            />
            <i
              class="fas fa-chevron-down"
              :class="{ rotated: iconRotated }"
              @click="toggleDropdown"
            ></i>
            <ul v-if="dropdownOpen" class="dropdown-menu">
              <li
                v-for="(option, index) in options"
                :key="index"
                @click="selectOption(option)"
              >
                {{ option }}
              </li>
            </ul>
          </div>
        </div>
        <div class="main__container__hero__right">
          <div class="main__container__hero__right__img">
            <img src="../assets/heroimage.png" alt="Ubereats Food Image" />
          </div>
        </div>
      </div>
    </div>
    <div class="main__about">
      <div class="main__about__container">
        <div class="main__about__container__left">
          <img src="../assets/aboutleft.png" alt="" />
        </div>
        <div class="main__about__container__center">
          <div class="main__about__container__center__text">
            <p>About Us</p>
            <h2>
              Discover Our <br />
              Restaurant Story
            </h2>
            <p>
              Immerse yourself in the narrative of culinary passion and
              innovation that defines our establishment. From humble beginnings
              to a gastronomic haven, our journey unfolds through flavors,
              traditions, and a commitment to excellence. Join us on this
              captivating exploration of our restaurant's story, where every
              dish is a chapter and every dining experience is a page in our
              delicious tale. Unveil the rich tapestry of our culinary
              narrative, where passion meets plate. From the roots of our
              inspiration to the heights of gastronomic innovation, embark on a
              journey that unfolds the essence of our restaurant.
            </p>
          </div>
          <div class="main__about__container__center__button">
            <button>
              Discover Our Menu
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div class="main__about__container__right">
          <img src="../assets/aboutright.png" alt="food" />
        </div>
      </div>
    </div>
    <div class="main__contact">
      <div class="main__contact__text">
        <p>Contact Us</p>
        <h2>Get In Touch</h2>
      </div>
      <div class="main__contact__form">
        <div class="main__contact__form__left">
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea
              name=""
              id=""
              cols="20"
              rows="4"
              placeholder="Message"
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
        <div class="main__contact__form__right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0441806665667!2d90.42986825108527!3d23.710116268728022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9cbc59133f5%3A0x1496634384d98b5c!2sJatrabari%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1709561995090!5m2!1sen!2sbd"
            width="480"
            height="500px"
            style="border: 0; border-radius: 18px"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="main__contact__details">
        <div class="main__contact__details__left">
          <div class="main__contact__details__left__img">
            <img src="../assets/gmail.png" alt="Gmail" />
          </div>
          <div class="main__contact__details__left__text">
            <h2>E-mail</h2>
            <p>example@gmail.com</p>
            <p>example@gmail.com</p>
          </div>
        </div>
        <div class="main__contact__details__center">
          <div class="main__contact__details__center__img">
            <img src="../assets/phone.png" alt="phone" />
          </div>
          <div class="main__contact__details__center__text">
            <h2>Phone</h2>
            <p>+123 456 7890</p>
            <p>+123 456 7890</p>
          </div>
        </div>
        <div class="main__contact__details__right">
          <div class="main__contact__details__right__img">
            <img src="../assets/location.png" alt="location" />
          </div>
          <div class="main__contact__details__right__text">
            <h2>Address</h2>
            <p>
              123 Islamic Street, <br />
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mobileabout">
      <div class="mobileabout__ourstory">
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab in iste
          voluptatem corporis nisi laboriosam ea at eum. Vel minima recusandae
          repellat impedit ut dolore a quam assumenda enim harum deleniti
          expedita eveniet ipsam possimus asperiores voluptate nulla
          exercitationem illo hic, sint blanditiis amet beatae. Iure expedita
          porro a nesciunt!
        </p>
      </div>
      <div class="mobileabout__deliveryarea">
        <h1>Our Delivery Area</h1>
        <div class="mobileabout__deliveryarea__allarea">
          <div
            class="mobileabout__deliveryarea__allarea__location"
            v-for="loc in state.location"
            :key="loc.id"
          >
            <i class="fa-solid fa-location-dot"></i>
            <p>{{ loc.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  location: [
    {
      id: 1,
      name: "Dhanmondi, Dhaka",
    },
    {
      id: 2,
      name: "Coxs Bazar, Chittagong",
    },
    {
      id: 3,
      name: "Moniha Hall, Sylhet",
    },
    {
      id: 4,
      name: "Jambagan road, Khulna",
    },
    {
      id: 5,
      name: "Amer Raja Mor,Rajshahi",
    },
    {
      id: 6,
      name: "Barishal",
    },
    {
      id: 7,
      name: "Rangpur",
    },
  ],
});
import { ref } from "vue";

const dropdownOpen = ref(false);
const options = ref([
  "Dhanmodi, Dhaka",
  "Kolabagan, Dhaka",
  "Jatrabari, Dhaka",
  "Motijheel, Dhaka",
]);
const selectedItem = ref("");
const iconRotated = ref(false);
const selectedOption = ref("Livraison");

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
  iconRotated.value = true;
};

const selectOption = (option: string) => {
  selectedItem.value = option;
  dropdownOpen.value = false;
  iconRotated.value = false;
};
const selectbutton = (option: string) => {
  selectedOption.value = option;
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  background-color: #ffffff;
  &__container {
    width: 100%;
    background-color: #dde6ed;
    &__hero {
      width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 50px 0px;
      gap: 50px;
      @media screen and (max-width: 768px) {
        max-width: 100%;
        padding: 30px 0px;
      }
      &__left {
        width: 50%;
        @media screen and (max-width: 768px) {
          width: 100%;
          padding: 50px 20px;
        }
        &__text {
          h2 {
            font-size: 46px;
            font-weight: 500;
            margin-bottom: 15px;
            line-height: 140%;
            @media screen and (max-width: 768px) {
              font-size: 36px;
            }
          }
          p {
            font-size: 18px;
            color: #6c6c6c;
            margin-bottom: 10px;
          }
        }
        &__buttons {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: row;
          gap: 20px;
          @media screen and (max-width: 768px) {
            gap: 10px;
          }
          button {
            width: 100%;
            padding: 12px 0;
            font-size: 24px;
            border: none;
            border-radius: 8px;
            color: #272727;
            background-color: #ffffff;
            @media screen and (max-width: 768px) {
              font-size: 18px;
            }
          }
          .active {
            color: #ffffff;
            background-color: #ff8800;
          }
        }
        &__input {
          position: relative;
          input {
            width: 100%;
            padding: 15px 50px 15px 20px;
            border: none;
            border-radius: 8px;
            margin-top: 20px;
            font-size: 20px;
            caret-color: #6c6c6c;
            outline: none;
            color: #6c6c6c;
            &::placeholder {
              color: #6c6c6c;
            }
            @media screen and (max-width: 768px) {
              font-size: 18px;
            }
          }
          .dropdown-menu {
            list-style: none;
            padding: 0;
            margin: 0;
            position: absolute;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 8px;
            width: 90%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            li {
              padding: 8px 12px;
              cursor: pointer;
              &:hover {
                background-color: #f3f3f3;
                border-radius: 8px;
              }
            }
          }
          i {
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 24px;
            height: 100%;
            height: 100%;
            color: #6c6c6c;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: transform 0.6s ease-in-out;
          }
          .rotated {
            transform: rotate(180deg);
          }
        }
      }
      &__right {
        width: 50%;

        @media screen and (max-width: 768px) {
          display: none;
        }
        &__img {
          img {
            width: 100%;
          }
        }
      }
    }
  }
  &__about {
    height: fit-content;
    background-color: #ffffff;
    padding: 120px 0px;
    @media screen and (max-width: 768px) {
      display: none;
    }
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: self-end;
      gap: 30px;
      &__left {
        align-self: flex-end;
        width: 40%;
        img {
          width: 100%;
        }
      }
      &__center {
        align-self: center;
        width: 50%;
        &__text {
          p {
            font-size: 14px;
            color: #6c6c6c;
            margin-bottom: 10px;
          }
          h2 {
            font-size: 36px;
            font-weight: 600;
            margin-bottom: 15px;
            line-height: 110%;
          }
        }
        &__button {
          button {
            width: 300px;
            padding: 12px 0;
            font-size: 20px;
            border: none;
            border-radius: 8px;
            color: #dde6ed;
            background-color: #ff8800;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            i {
              position: absolute;
              right: -30px;
              top: 50%;
              transform: translateY(-50%);
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
              width: 60px;
              font-size: 20px;
              padding: 1px;
              background-color: #f3a348;
              border-radius: 8px;
              transition: all 0.6s ease-in-out;
            }
            &:hover {
              i {
                width: 100%;
                right: 0;
              }
            }
          }
        }
      }
      &__right {
        width: 20%;
        position: relative;
        img {
          width: 400px;
          position: absolute;
          bottom: 0;
          right: 00px;
        }
      }
    }
  }
  &__contact {
    width: 1200px;
    margin: auto;
    padding: 50px 0px;
    @media screen and (max-width: 768px) {
      display: none;
    }
    &__text {
      p {
        text-align: center;
        font-size: 14px;
        color: #6c6c6c;
        margin-bottom: 10px;
      }
      h2 {
        text-align: center;
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 15px;
        line-height: 110%;
      }
    }
    &__form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 60px;
      height: 500px;
      margin: 50px 0px;
      &__left {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        form {
          width: 85%;
          height: 100%;
          border-radius: 18px;
          background-color: #dddedf;
          padding: 40px 0px;
          display: flex;
          justify-content: end;
          align-items: center;
          flex-direction: column;
          input,
          textarea {
            width: 85%;
            padding: 15px 20px;
            border: none;
            border-radius: 8px;
            margin-bottom: 20px;
            font-size: 20px;
            caret-color: #6c6c6c;
            outline: none;
            color: #6c6c6c;
            &::placeholder {
              color: #6c6c6c;
            }
          }
          button {
            width: 85%;
            padding: 12px 0;
            font-size: 24px;
            border: none;
            border-radius: 8px;
            color: #dde6ed;
            background-color: #ff8800;
          }
        }
      }
      &__right {
        width: 50%;
        height: 100%;
      }
    }
    &__details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 50px;
      margin: 60px 20px 40px 20px;
      &__left,
      &__center,
      &__right {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: #dbdbdb;
        height: 100px;
        width: 28%;
        padding: 18px 20px;
        border-radius: 12px;
        gap: 20px;
        &__img {
          width: 25%;
          img {
            width: 60px;
          }
        }
        &__text {
          width: 75%;
          h2 {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 5px;
            line-height: 110%;
          }
          p {
            font-size: 14px;
            color: #6c6c6c;
          }
        }
      }
    }
  }
  .mobileabout {
    display: none;
    background: url("../assets/backgroundImage.jpg") no-repeat center
      center/cover;
    background-blend-mode: overlay;
    padding: 50px 20px;
    border-radius: 50px 50px 18px 18px;
    background-color: rgba(0, 0, 0, 0.7);
    margin: 50px 20px;
    @media screen and (max-width: 768px) {
      display: block;
      &__ourstory {
        h1 {
          font-size: 36px;
          font-weight: 600;
          margin-bottom: 15px;
          line-height: 110%;
          color: #dbdbdb;
        }
        p {
          font-size: 16px;
          color: #dddddd;
          margin-bottom: 10px;
        }
      }
      &__deliveryarea {
        margin-top: 30px;
        h1 {
          font-size: 36px;
          font-weight: 600;
          margin-bottom: 15px;
          line-height: 110%;
          color: #dbdbdb;
        }
        &__allarea {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          &__location {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            max-width: 100%;
            padding: 15px 10px;
            gap: 5px;
            border-radius: 8px;
            background-color: #dbdbdb;
            overflow: hidden;
            i {
              align-self: center;
              font-size: 20px;
              color: #ff8800;
            }
            p {
              font-size: 14px;
              color: #000000;
              overflow-x: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
}
</style>
