<template>
    <div class="feature-app-showcase section-space--pb_90">
        <div class="container_fl">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="app-showcase-image__media wow move-up">
                        <img :src="thumbnail" class="img-fluid" alt="thumbnail">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="app-showcase__content">
                        <div class="app-showcase__inner">
                            <h4 class="font-weight--light wow move-up">{{ title }}</h4>
                            <div class="sub-text section-space--mb_40 wow move-up">{{ desc }}</div>
                            <div class="btn-sowcase section-space--mb_40 wow move-up">
                                <a class="ht-btn ht-btn-md" href="https://kcha60ohz1u.typeform.com/to/ShJeY8a2" target="_blank">Request</a>
                            </div>
                            <h6 class="sub-heading wow move-up">
                              The Nomics Core System enables automated cash-flow! <router-link to="/nomics" class="hover-style-link  hover-style-link--green">Learn more</router-link>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                thumbnail: require("../assets/img/screenshots/dev_package3.png"),
                title: 'The Ultimate Cash-Flow',
                desc: 'Eco App is the simplest way to earn sustainable Risk-free passive income whilst simultaneously enjoying a seamless shopping experience.',
            }
        },
    };
</script>
