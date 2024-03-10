<template>
  <header class="main">
    <div class="main__container">
      <div class="main__container__logo">
        <h1>Uber<span>Eats</span></h1>
      </div>
      <div class="main__container__nav">
        <nav>
          <ul>
            <li><router-link to="/"> Home </router-link></li>
            <li> <router-link to="/About">About</router-link> </li>
            <li><router-link to="/Shop">Shop</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="main__container__icons">
        <div class="main__container__icons__search">
          <input v-model="search" v-if="showInput" type="text" />
          <i class="fas fa-search" @click="toggleInput"></i>
        </div>
        <div class="main__container__icons__cart">
          <i class="fas fa-shopping-cart"></i>
        </div>
      </div>
    </div>
    <div class="main__mobilecontainer">
      <div class="main__mobilecontainer__sidebar" @click="toggleAside">
        <div class="main__mobilecontainer__sidebar__bar"></div>
        <div class="main__mobilecontainer__sidebar__bar"></div>
        <div class="main__mobilecontainer__sidebar__bar"></div>
      </div>
      <div class="main__mobilecontainer__pagetitle">
        <p>{{ $router.currentRoute.value.name }}</p>
      </div>
      <div class="main__mobilecontainer__icons">
        <i class="fa-regular fa-bell"></i>
      </div>
      <aside class="main__mobilecontainer__aside" v-if="showAside">
        <div class="main__mobilecontainer__aside__header">
          <h1>Menu</h1>
          <i class="fa-solid fa-xmark" @click="toggleAside"></i>
        </div>
        <div class="main__mobilecontainer__aside__body">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/About">About</router-link>
            </li>
            <li>
              <router-link to="/Shop">Shop</router-link>
            </li>
          </ul>
        </div>
        <div class="main__mobilecontainer__aside__footer">
          <h2>Uber<span>Eats</span></h2>
        </div>
      </aside>
      <div
        class="main__mobilecontainer__overlay"
        v-if="showAside"
        @click="showAside = false"
      ></div>
      <div class="main__mobilecontainer__floatingmenu">
        <div class="main__mobilecontainer__floatingmenu__container">
          <i class="fas fa-home" ><p>Home</p></i>
          <i class="fas fa-search"><p>Search</p></i>
          <i class="fas fa-shopping-cart"><p>Cart</p></i>
          <i class="fas fa-user"><p>User</p></i>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.main {
  width: 100%;
  background-color: #DDE6ED;
  padding: 20px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    @media screen and (max-width: 768px) {
      display: none;
    }
    &__logo {
      h1 {
        font-size: 2rem;
        color: #ff0000;
        span {
          color: #000;
        }
      }
    }
    &__nav {
      nav {
        ul {
          display: flex;
          list-style: none;
          li {
            margin: 0 10px;

            font-size: 20px;
            a {
              text-decoration: none;
              color: #000;
              &:hover {
                color: #ff0000;
              }
            }
          }
        }
      }
    }
    &__icons {
      display: flex;
      &__search,
      &__cart {
        margin: 0 10px;
        cursor: pointer;
        i {
          z-index: 0;
          font-size: 1.5rem;
          color: #000;
          &:hover {
            color: #ff0000;
          }
        }
      }
      &__search {
        position: relative;
        input {
          position: absolute;
          top: 0;
          right: 30px;
          padding: 8px;
          border: none;
          border-bottom: 2px solid #dbdbdb;
          background-color: #ececec;
          outline: none;
        }
      }
    }
  }
  &__mobilecontainer {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
    }
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 100%;
    &__sidebar {
      cursor: pointer;
      &__bar {
        display: block;
        width: 36px;
        height: 4px;
        border-radius: 5px;
        background: #000;
        margin: 5px 0;
        transition: width 0.6s ease-in-out;
        &:nth-child(2) {
          width: 28px;
        }
        &:nth-child(3) {
          width: 16px;
        }
      }
      &:hover {
        .main__mobilecontainer__sidebar__bar {
          width: 36px;
        }
      }
    }
    &__pagetitle {
      p {
        font-size: 1.5rem;
        color: #000;
      }
    }
    &__icons {
      i {
        font-size: 1.5rem;
        color: #000;
        &:hover {
          color: #ff7300;
        }
      }
    }
    &__aside {
      position: fixed;
      top: 0;
      left: 0;
      width: 80%;
      height: 100%;
      background-color: #fffffffd;
      z-index: 2;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      padding: 0px 20px;
      animation: revelations 0.6s ease-in-out 0s 1 normal forwards;
      @keyframes revelations {
        0% {
          width:30%;
        }
        100% {
          width: 80%;
        }
        
      }
      &__header {
        width: 100%;
        padding: 20px 0;
        text-align: center;

        h1 {
          margin-top: 20px;
          font-size: 2rem;
          color: #000;
        }
        i{
          position: absolute;
          top: 10px;
          right: -20%;
          font-size: 38px;
          color: #ffffff;
          cursor: pointer;
          &:hover {
            color: #000;
          }
        
        }
      }
      &__body {
        width: 100%;
        ul {
          list-style: none;
          li {
            margin: 10px 0;
            text-align: center;
            a {
              text-decoration: none;
              color: #000;
              font-size: 1.5rem;
              &:hover {
                color: #ff0000;
              }
            }
          }
        }
      }
      &__footer {
        width: 100%;

        text-align: right;
        h2 {
          font-size: 2rem;
          color: #ff0000;
          span {
            color: #000;
          }
        }
      }
    }
    &__overlay {
      display: none;
      @media screen and (max-width: 768px) {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #00000052;
        z-index: 1;
      }
    }
    &__floatingmenu {
      position: fixed;
      bottom: 20px;
      right: 5%;
      height: 100px;
      width: 90%;
      z-index: 95;
      &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #ffaa48;
        border-radius: 12px;
        padding: 20px 20px;
        i {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          color: #000;
          padding: 10px;
          border-radius: 12px;
          cursor: pointer;
          p {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            color: #222222;
            border-radius: 5px;
            width: 0px;
            height: 0px;
            opacity: 0;
            font-weight: 600;
            margin-left: 5px;
          }
          &:hover {
            p {
              width: fit-content;
              height: fit-content;
              opacity: 1;
            }
            color: #222222;
            background-color: #f1f1f1;
          }
        }
      }
    }
  }
}
</style>

<script setup lang="ts">
import { ref, watch } from "vue";
import router from "../router";

const search = ref("");
const showInput = ref(false);
const showAside = ref(false);



const toggleInput = () => {
  showInput.value = !showInput.value;
};

const toggleAside = () => {
  showAside.value = !showAside.value; // Toggle the value of showAside
};
// Log the value of search whenever it changes
watch(search, (newValue) => {
  console.log(newValue);
});
</script>
