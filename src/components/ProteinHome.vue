<script setup>

</script>

<template>
    <div class="home" id="home">
        <div class="container">
            <div class="row row-cols-md-1 row-cols-lg-2 align-items-center">
                <div class="col-12">
                    <div class="items">
                        <h5><font-awesome-icon icon="fa-solid fa-utensils" class="icon"/>蛋白盒子 The Protein box</h5>
                        <h1>健康餐也可以吃得</h1>
                        <h1>美味又健康</h1>
                        <h3>健康。低脂。高蛋白</h3>
                        <p class="lh-base">提倡好吃、味覺豐富的健康飲食，在七至八道菜色中，近九成原形食物，使用新鮮食材並以親民的價位提供給蛋白粉們享用，在少鹽少油低脂中取得健康與美味的平衡</p>
                        <button>加入我們</button>
                    </div>
                </div>
                <div class="col-12">
                    <div class="items">
                        <div class="image">
                            <img src="../assets/img/去背.png" class="w-100">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    @import '../scss/style.scss';

    .home {
        width: 100%;
        height: 80vh;
        background: linear-gradient(rgb(244, 224, 200), rgba(244, 224, 200, .1));
        overflow-y: hidden;
        .container {
            padding-top: 10rem;
            .items {
                padding: 1rem;
                .icon {
                    @include font(1);
                    color: $red;
                    padding: 0 1rem;
                }
                h5 {
                    @include font(1);
                    color: $red;
                }
                h1 {
                    @include font(9);
                    color: $red;
                    font-weight: bold;
                }
                h3 {
                    @include font(5);
                    color: $bg-red;
                    font-weight: bold;
                    margin-bottom: 1rem;
                }
                p {
                    @include font(1);
                }
                button {
                    color: #fff;
                    background: $red;
                    @include font(2);
                    outline: none;
                    padding: 1rem 2rem;
                    border: 1px solid $red;
                    border-radius: 1rem;
                    margin-top: 2rem;
                    transition: .5s;
                    &:hover {
                        background: transparent;
                        color: $red;
                        border: 1px solid $red;
                    }
                }
            }
        }
    }

    @media (max-width: 991px) {
        .home {
            .container {
                padding-top: 5rem;
                .row {
                    flex-direction: column;
                    .items {
                        text-align: center;
                        h1 {
                            @include font(9);
                        }
                        h3 {
                            @include font(5);
                        }
                       /*  .image {
                            width: 50%;
                            margin: 0 auto;
                        } */
                    }
                }
            }
        }
    }
    @media (max-width: 768px) {
        .home {
            .container {
                .row {
                    .items {
                        h1 {
                            @include font(7);
                        }
                        h3 {
                            @include font(4);
                        }
                        p {
                            @include font(1);
                        }
                        button {
                            @include font(1);
                        }
                    }
                }
            }
        }
    }

</style>
