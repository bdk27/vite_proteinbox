<script setup>
    import { ref, computed, onMounted } from 'vue';
    import { taipei, taoyuan, miaoli, taichung, changhua } from '../assets/js/location';

    let city = ref('tapei');
    const filterCity = computed(() => {
        switch(city.value) {
            case 'taipei':
                return taipei;
            case 'taoyuan':
                return taoyuan;
            case 'miaoli':
                return miaoli;
            case 'taichung':
                return taichung;
            case 'changhua':
                return changhua;
            default:
                return taipei;
        }
    })

    function isAct() {
        let shop = document.querySelectorAll('.shop');
        for(let i=0; i<shop.length; i++) {
            shop[i].addEventListener('click', function() {
                shop.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        }
    }
    onMounted(() => {
        isAct()
    })

</script>

<template>
    <section id="shop">
        <h3 class="text-center">門市據點</h3>
        <ul>
            <li class="shop active" @click="city='taipei'">台北</li>
            <li class="shop" @click="city='taoyuan'">桃園</li>
            <li class="shop" @click="city='miaoli'">苗栗</li>
            <li class="shop" @click="city='taichung'">台中</li>
            <li class="shop" @click="city='changhua'">彰化</li>
        </ul>
        <div class="container">
            <div class="row row-cols-sm-1 row-cols-md-3 row-cols-lg-4 g-5">
                <div class="col-12" v-for="item in filterCity" :key="item.id">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.name }}</h5>
                            <p class="card-text">{{ item.address }}</p>
                            <p class="card-text">{{ item.phone }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
    @import '../scss/style.scss';

    .container {
        height: 50rem;
    }
    h3 {
        @extend %head-title;
    }
    ul {
        text-align: center;
        margin-bottom: 2rem;
        li {
            display: inline-block;
            padding: 1rem 3rem;
            @include font(2);
            background: $skin;
            border-radius: 1rem;
            margin: 0 1rem;
            font-weight: bold;
            cursor: pointer;
            &.active, &:hover {
                background: $dark-skin;
            }
        }
    }
    .card {
        text-align: center;
        padding: 1rem;
        border: 0;
        margin: 1rem 0;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        .card-title {
            @include font(2);
            color: $red;
        }
        .card-text {
            @include font(1);
           
        }
    }
    

</style>
