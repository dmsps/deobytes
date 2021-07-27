<template>
    <div class="slide__container">
        <div class="slide__wrapper">
            <h2 style="color: black; margin-bottom: 30px" class="slide__title">КОМПОНЕНТЫ</h2>
            <p style="font-size: 20px; font-style: italic; color: darkblue">Основные модули</p>
            <p style="font-size: 20px; font-style: italic">Могут работать независимо</p>
            <img src="@/assets/img/slide_3.jpg" style="margin-top: 30px" />
            <div class="slide3__list">
                <span>ВСЯ ИСТОРИЯ ДЕЙСТВИЙ СОТРУДНИКОВ В СИСТЕМЕ</span>
                <span>НЕОГРАНИЧЕННОЕ КОЛИЧЕСТВО ТОЧЕК ПРОДАЖ ОФФЛАЙН</span>
            </div>
            <div class="slide3__list">
                <span>УПРАВЛЕНИЕ ЗАДАЧАМИ</span>
                <span>НЕОГРАНИЧЕННОЕ КОЛИЧЕСТВО СКЛАДОВ</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Slide3",
}
</script>

<style lang="scss">
.slide3 {
    &__list {
        display: flex;
        margin-top: 30px;
        font-size: 18px;
        text-align: center;

        & + .slide3__list {
            margin-top: 20px;
        }

        & > * {
            width: 25%;
            padding: 0 10px;
        }
    }
}
</style>
