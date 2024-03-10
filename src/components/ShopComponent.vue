<template>
  <div class="shop">
    <div class="shop__container">
      <div class="shop__container__header">
        <div class="shop__container__header__content">
          <h1 class="shop__container__header__content__title">shop</h1>
          <div class="shop__container__header__content__allInput">
            <div class="shop__container__header__content__allInput__buttons">
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
            <div class="shop__container__header__content__allInput__input">
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
.shop {
  width: 100%;
  height: 100%;
  &__container {
    width: 1200px;
    height: 100%;
    margin: auto;
    @media screen and (max-width: 768px){
      width: 100%;
      padding: 0px 20px;
    }
    &__header {
      margin: 30px 0px;
      border-radius: 18px;
      background: url("../assets/AboutImage.jpg") no-repeat center center;
      background-size: cover;
      &__content {
        padding: 50px;
        border-radius: 18px;
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        &__title {
          font-size: 54px;
          font-weight: 600;
          color: #fff;
          @media screen and (max-width: 768px) {
            font-size: 40px;
          }
        }
        &__allInput {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          flex-direction: row;
          @media screen and (max-width: 768px) {
            flex-direction: column;
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
              width: fit-content;
              padding: 8px 18px;
              font-size: 24px;
              border: none;
              border-radius: 8px;
              color: #272727;
              background-color: #ffffff;
              @media screen and (max-width: 768px) {
                font-size: 14px;
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
              font-size: 20px;
              caret-color: #6c6c6c;
              outline: none;
              color: #6c6c6c;
              &::placeholder {
                color: #6c6c6c;
              }
              @media screen and (max-width: 768px) {
                font-size: 14px;
                width: 100%;
              padding: 10px 30px 10px 15px;
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
              top: 0px;
              right: 20px;
              font-size: 24px;
              height: 100%;
              height: 100%;
              color: #6c6c6c;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: transform 0.6s ease-in-out;
              @media screen and (max-width:768px) {
                font-size: 18px;
                right: 12px;
              }
            }
            .rotated {
              transform: rotate(180deg);
            }
          }
        }
      }
    }
  }
}
</style>
