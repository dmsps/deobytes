<template>
    <!-- <el-row :gutter="20" class="gray-bg" style="min-height: 50vh">
        <el-col :span="12"><div class="grid-content"></div></el-col>
        <el-col :span="12"><div class="grid-content"></div></el-col>
    </el-row> -->
    <div class="card__wrapper gray-bg">
        <div class="card__item card__item--bordered">
            <h1 class="card__item__title">Deobytes</h1>
            <div class="card__item__content">
                <div class="card__item__icon">
                    <wa-svg :width="30" />
                </div>
                <el-link
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=79859226280"
                    class="card__item__link"
                >
                    WhatsApp
                </el-link>
            </div>
            <div class="card__item__content">
                <div class="card__item__icon">
                    <i style="font-size: 30px" class="el-icon-message"></i>
                </div>
                <el-link
                    href="mailto:join@deobytes.ru?subject=Заказываю демо-доступ в Deobytes"
                    class="card__item__link"
                >
                    join@deobytes.ru
                </el-link>
            </div>
        </div>
    </div>
</template>

<script>
import WaSvg from "@/assets/img/whatsapp.svg"

export default {
    name: "Contacts",
    components: {
        WaSvg,
    },
}
</script>

<style lang="scss">
.card {
    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 100vh;
    }

    &__item {
        flex-basis: 45%;

        &--bordered {
            padding: 30px;
            height: 300px;
            box-shadow: 0 4px 11px -5px rgba(0, 0, 0, 0.4);
            background: #fff;
        }

        &__title {
            font-size: 30px;
            padding-bottom: 30px;
            margin-bottom: 30px;
            border-bottom: 1px solid #f7f8fc;
        }

        &__content {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;

            & + .card__item__content {
                margin-top: 14px;
            }
        }

        &__icon {
            width: 50px;
            font-size: 26px;
            padding-top: 8px;
        }

        &__link {
            font-size: 26px;
            // text-decoration: underline;
            font-weight: bold;

            span {
                color: black;
            }
        }
    }
}
</style>
