<template>
    <div style="position: relative;">
        <swiper ref="mySwiper" :options="swiperOptions" class="slider__main">
            <swiper-slide>
                <div class="slide__container">
                    <img src="@/assets/img/preview/preview-crm.jpg" alt="" class="slide__banner" />
                    <div class="slide__title">CRM</div>
                    <div class="slide__subtitle">
                        Вся история клиента - от рекламы до заказов с любой детализацией,
                        сегментированием и фильтрами
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide__container">
                    <img src="@/assets/img/preview/preview-wms.jpg" alt="" class="slide__banner" />
                    <div class="slide__title">WMS</div>
                    <div class="slide__subtitle">
                        Все складские операции, работа через терминалы сбора данных, адресное
                        хранение
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide__container">
                    <img src="@/assets/img/preview/preview-dms.jpg" alt="" class="slide__banner" />
                    <div class="slide__title">DMS</div>
                    <div class="slide__subtitle">
                        Своя курьерская служба с умным распределением заказов, маршрутные листы, приложение для курьера
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide__container">
                    <img src="@/assets/img/preview/preview-pos.jpg" alt="" class="slide__banner slide__banner--without-shadow" />
                    <div class="slide__title">POS</div>
                    <div class="slide__subtitle">
                        Интерфейс кассира на мобильном - печать кассовых чеков, прием любых пластиковых карт, передача данных в ОФД и "Честный знак", сканирование QR-кодов
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>

<script>
export default {
    name: "SliderMain",
    data() {
        return {
            swiperOptions: {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
        }
    },
}
</script>

// <style lang="scss">
// .swiper-container {
//     height: 100vh;
// }
// </style>
