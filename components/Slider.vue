<template>
    <div>
        <el-carousel
            indicator-position="outside"
            height="calc(100vh)"
            trigger="click"
            :interval="50000000"
            arrow="always"
        >
            <el-carousel-item v-for="item in 4" :key="item">
                <component :is="`slide${item}`" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: "Slider",
}
</script>
