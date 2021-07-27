<template>
    <div class="slide__container">
        <img src="@/assets/img/slide_2.jpg" alt="" class="slide__banner slide2" />
        <div class="slide__wrapper">
            <h2 style="text-align: center" class="slide__title">Продукт</h2>
            <div style="color: white; margin-top: auto">
                <h3 style="font-size: 30px; margin-bottom: 20px">УПРАВЛЕНИЕ БИЗНЕСОМ</h3>
                <ul class="slide2__list">
                    <li>Сайт</li>
                    <li>Управление заказами</li>
                    <li>Склад</li>
                    <li>Доставка</li>
                    <li>Планирование ассортимента и закупок</li>
                    <li>Доступ к продвинутой аналитике и отчетности 24/7</li>
                </ul>
                <h4 style="margin-top: 20px; font-size: 25px">
                    Мобильный доступ со всех устройств - Web mobile, Web desktop
                </h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Slide2",
}
</script>

<style lang="scss">
.slide2 {
    filter: brightness(73%);

    &__list {
        li {
            font-size: 20px;
            line-height: 2;
        }
    }
}
</style>
