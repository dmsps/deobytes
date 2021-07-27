<template>
    <el-container>
        <el-header height="100px" class="page__header">
            <div :class="['logo', { white: true }]">
                <logo width="80" height="50" />
            </div>
            <!-- <h1 style="padding: 5px; background: rgba(255, 255, 255, 0.41)">Deobytes</h1> -->
        </el-header>
        <el-main>
            <nuxt />
        </el-main>
        <subscribe-widget />
    </el-container>
</template>

<script>
import Logo from "@/assets/img/logo.svg"

export default {
    name: "DefaultLayout",
    components: {
        Logo,
    },
}
</script>
