<template>
    <div>
        <!-- <LazySlider /> -->
        <slide1 />
        <slider-main />
        <div class="slide__wrapper" style="border-top: 1px solid #8080801c">
            <h2 style="color: black; margin-bottom: 30px" class="slide__title">Интеграции</h2>
            <img
                src="@/assets/img/slide_4.jpg"
                style="
                    margin-top: auto;
                    margin-bottom: auto;
                    width: 100%;
                    display: flex;
                    align-items: center;
                "
            />
        </div>
        <contacts />
    </div>
</template>

<script>
export default {
    name: "HomePage",
}
</script>
