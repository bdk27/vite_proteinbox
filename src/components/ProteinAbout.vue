<script setup>

</script>

<template>
    <section id="about">
        <h3 class="text-center">關於我們</h3>
        <div class="container">
            <div class="row row-cols-sm-1 row row-cols-lg-2 g-5">
                <div class="col-12">
                    <div class="items">
                        <div class="image">
                            <img src="../assets/img/maxresdefault.jpg">
                        </div>
                        <h5>身材體態是我們真正的追求</h5>
                        <p>蛋白盒子成立2019年，在那之前我們只是一群常在健身房遇見得健友，因為我們對身材有所追求，所以深知7吃3練的道理，當年健身餐廳並不多，要吃到足夠的蛋白質不容易，要低脂好吃得更難，於是才出現蛋白盒子</p>
                    </div>
                </div>
                <div class="col-12">
                    <div class="items">
                        <div class="image">
                            <img src="../assets/img/l_962627717426240397.jpg">
                        </div>
                        <h5>市售最好吃的健康餐</h5>
                        <p>聰明減脂增基不一定只能犧牲口腹之慾，我們相信任何成功要件包含堅持不懈，我們首創的健康餐做法，使用真空按摩技術前處理肉品，使雞胸料理鮮嫩多汁不干柴，並研發多種醃料口味，讓顧客每天吃也不會膩</p>
                    </div>
                </div>
                <div class="col-12">
                    <div class="items">
                        <div class="image">
                            <img src="../assets/img/l_892440735943155518.jpg">
                        </div>
                        <h5>健康餐不應該只是水煮餐</h5>
                        <p>蔬菜中含有大量脂溶性維生素，無熱量且有益健康，蛋白盒子從不認為水煮餐 = 健康餐，獨家水炒料理技術，選好由來做料理，降低熱量攝取，留住蔬菜中完整營養，又兼顧美味，這樣的飲食方針才是我們所推薦的</p>
                    </div>
                </div>
                <div class="col-12">
                    <div class="items">
                        <div class="image">
                            <img src="../assets/img/l_892440735943155517.jpg">
                        </div>
                        <h5>吃用心做好便當 檢驗不馬虎</h5>
                        <p>除產地直送新鮮蔬果，嚴選食材，並為了確保產品安全，每年定期依照送驗標準與流程，將相關原料自主送至公正單位進行檢驗。餐點現點現做，讓最新鮮的食材保留原始的美味</p>     
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
    .items {
        padding: 3rem;
        background: $skin;
        border-radius: 1rem;
        .image {
            width: 15rem;
            text-align: center;
            margin: 0 auto;
            img {
                width: 100%;
                border-radius: 50%
            }
        }
        h5 {
            @include font(2);
            color: $red;
            text-align: center;
            margin-top: 1rem
        }
        p {
            @include font(1);
            line-height: normal;
        }
    }

</style>
