<script setup>

</script>

<template>
    <div class="footer">
        <div class="copyright">
            <p>© 2023 YCheng X 蛋白盒子.All Rights Reserved.</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../scss/style.scss';

    .footer {
        background: $red;
        margin-top: 5rem;
        .copyright {
            text-align: center;
            P {
                @include font(1);
                padding: 2rem;
                margin: 1rem;
                color: #fff;
            }
        }
    }

</style>
