<template>
    <div class="brand-logo-slider-area section-space--pb_60 section-space--pt_60">
        <div class="container">
            <div class="row brand-logo-wrapper">
                <div class="col-lg-12">
                    <div class="brand-logo-slider__container-area wow move-up">
                        <div class="swiper-container brand-logo-slider__container">
                            <div class="swiper-wrapper brand-logo-slider__wrapper">
                                <swiper
                                    :speed="1000"
                                    :slidesPerView="6"
                                    :spaceBetween="30"
                                    :loop="true"
                                    :breakpoints="swiperOptions.breakpoints"
                                >
                                    <swiper-slide>
                                        <div class="brand-logo">
                                            <div class="brand-logo__image">
                                                <img src="../assets/img/brand/aeroland-client-logo-01.png" class="img-fluid" alt="brand logo">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="../assets/img/brand/aeroland-client-logo-01-hover.png" class="img-fluid" alt="brand logo">
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="brand-logo">
                                            <div class="brand-logo__image">
                                                <img src="../assets/img/brand/aeroland-client-logo-07.png" class="img-fluid" alt="brand logo">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="../assets/img/brand/aeroland-client-logo-07-hover.png" class="img-fluid" alt="brand logo">
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="brand-logo">
                                            <div class="brand-logo__image">
                                                <img src="../assets/img/brand/aeroland-client-logo-08.png" class="img-fluid" alt="brand logo">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="../assets/img/brand/aeroland-client-logo-08-hover.png" class="img-fluid" alt="brand logo">
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="brand-logo">
                                            <div class="brand-logo__image">
                                                <img src="../assets/img/brand/aeroland-client-logo-11.png" class="img-fluid" alt="brand logo">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="../assets/img/brand/aeroland-client-logo-11-hover.png" class="img-fluid" alt="brand logo">
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="brand-logo">
                                            <div class="brand-logo__image">
                                                <img src="../assets/img/brand/aeroland-client-logo-12.png" class="img-fluid" alt="brand logo">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="../assets/img/brand/aeroland-client-logo-12-hover.png" class="img-fluid" alt="brand logo">
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="brand-logo">
                                            <div class="brand-logo__image">
                                                <img src="../assets/img/brand/aeroland-client-logo-06.png" class="img-fluid" alt="brand logo">
                                            </div>
                                            <div class="brand-logo__image-hover">
                                                <img src="../assets/img/brand/aeroland-client-logo-06-hover.png" class="img-fluid" alt="brand logo">
                                            </div>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue"
    import "swiper/css"
    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data (){
            return {
                swiperOptions: {
                    breakpoints: {
                        1200:{
                            slidesPerView : 6
                        },
                        992:{
                            slidesPerView : 4
                        },
                        768:{
                            slidesPerView : 3
                        },
                        480:{
                            slidesPerView : 2
                        },
                        320:{
                            slidesPerView : 1
                        }
                    }
                }
            }
        }
    }
</script>