<script setup>
    import { menu } from '../assets/js/menuCard'
   
</script>

<template>
    <section id="menu">
        <h3 class="text-center">菜單介紹</h3>
        <div class="container">
            <div class="row row-cols-sm-1 row-cols-md-2 align-items-center justify-content-center g-5 mb-5" v-for="item in menu" :key="item.id" :class="[item.number === 'even'?'flex-row-reverse':'flex-row']">
                <div class="col-12">
                    <div class="items">
                        <div class="image">
                            <img :src="item.img" class="img-fluid rounded-5">
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="items">
                        <h4>{{ item.name }}</h4>
                        <table class="table caption-top">
                            <caption>蛋白質(克)</caption>
                            <thead>
                                <tr>
                                    <th>肉品</th>
                                    <th>飯</th>
                                    <th>總共</th>
                                </tr>
                            </thead>
          
                            <tbody>
                                <tr>
                                    <td>{{ item.protein.meat }}</td>
                                    <td>{{ item.protein.rice }}</td>
                                    <td>{{ item.protein.total }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table caption-top">
                            <caption>卡路里</caption>
                            <thead>
                                <tr>
                                    <th>肉品</th>
                                    <th>飯</th>
                                    <th>配菜</th>
                                    <th>總共</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{ item.calories.meat }}</td>
                                    <td>{{ item.calories.rice }}</td>
                                    <td>{{ item.calories.vegitable }}</td>
                                    <td>{{ item.calories.total }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>建議售價: <span>${{ item.price }}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '../scss/style.scss';

    h3 {
        @extend %head-title;
    }
    h4 {
        @include font(3);
        color: $red;
        text-align: center;
        font-weight: bold;
    }
    table {
        border-collapse: separate;
        text-align: center;
        caption {
            @include font(1);
        }
        th {
            padding: 1rem;
            @include font(1);
            background: $dark-skin;
        }
        td {
            padding: 1rem;
            @include font(1);
        }
    }
    p {
        text-align: end;
        @include font(1);
        span {
            color: $red;
            font-weight: bold;
            @include font(3);
        }
    }

</style>
