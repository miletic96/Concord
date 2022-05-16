<template>
  <div>
      <div class="carousel-wrapper">
            <div v-swiper:mySwipera="optionsa">
              <div class="swiper-wrapper">
                <div class="img-warpper swiper-slide">
                  <NuxtLink to="/skills/seo">
                    <img src="../assets/images/seo/types/paid.png" />
                  </NuxtLink>
                </div>
                <div class="img-warpper swiper-slide">
                  <NuxtLink to="/skills/seo">
                    <img src="../assets/images/seo/types/paid2.png" />
                  </NuxtLink>
                </div>
                <div class="img-warpper swiper-slide">
                  <NuxtLink to="/skills/seo">
                    <img src="../assets/images/seo/types/paid3.png" />
                  </NuxtLink>
                </div>
                
              </div>
              <div class="swiper-button-next" id="swiper-button-next1" slot="button-next"></div>
              <div class="swiper-button-prev" id="swiper-button-prev1" slot="button-prev"></div>
              <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
            </div>
          </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      optionsa: {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: "#swiper-button-next1",
          prevEl: "#swiper-button-prev1",
        },
      },
    };
  },
};
</script>

