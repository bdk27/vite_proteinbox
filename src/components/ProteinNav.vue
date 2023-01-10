<script setup>
  function openMenu() {
    let sideMenu = document.getElementById('sideMenu');
    sideMenu.style.right = '0';
  }
  function closeMenu() {
    let sideMenu = document.getElementById('sideMenu');
    sideMenu.style.right = '-300px';
  }

</script>

<template>
  <nav>
    <div class="container d-flex align-items-center justify-content-between">
      <div class="image">
        <img src="../assets/img/logo.png">
      </div>

      <ul id="sideMenu">
        <li><a href="#home">首頁</a></li>
        <li><a href="#about">關於我們</a></li>
        <li><a href="#menu">菜單介紹</a></li>
        <li><a href="#news">最新消息</a></li>
        <li><a href="#shop">門市據點</a></li>
        <font-awesome-icon icon="fa-solid fa-xmark" class="xmark d-mb-block d-lg-none" @click="closeMenu"/>
      </ul>

      <font-awesome-icon icon="fa-solid fa-bars" class="bars  d-mb-block d-lg-none" @click="openMenu"/>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  @import '../scss/style.scss';
  
  nav {
    background: $red;
    .image {
      width: 10rem;
      img {
        width: 100%;
      }
    }
    ul {
      margin: 0;
      li {
        display: inline-block;
        list-style: none;
        padding: 1rem;
        a {
          @include font(2);
          color: #fff;
          padding: 1rem;
          text-decoration: none;
          &:hover {
            background: #fff;
            color: $red;
            border-radius: 1rem;
          }
        }
      }
    }
    .bars {
      @include font(2);
      padding: 1rem 1.5rem;
      border: 1px solid #fff;
      border-radius: 1rem;
      color: #fff;
      cursor: pointer;
      &:hover {
        background: $red;
        color: #fff;
      }
    }
    .xmark {
      font-size: 2.5rem;
      color: $red;
      cursor: pointer;
    }
  }

  @media (max-width: 992px) {
    nav {
      ul {
        background: $skin;
        position: fixed;
        top: 0;
        right: -30rem;
        width: 30rem;
        height: 100vh;
        padding-top: 10rem;
        z-index: 2;
        transition: .5s;
        li {
          display: block;
          a {
            color: $red;
            &:hover {
              background: $dark-skin;
            }
          }
        }
      }
      .xmark {
        position: absolute;
        top: 3rem;
        right: 3rem;
      }
    }
    
  }
  @media (max-width: 768px) {
   
  }

</style>
