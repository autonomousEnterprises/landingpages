<template>
    <div class="row pricing-table-one">
        <div class="col-md-6 col-xl-3 pricing-table wow move-up" v-for="(pricing, index) in pricingTable" :key="index" :class="{'pricing-table--popular__bg': pricing.active}">
            <div class="pricing-table__inner" :class="{'bg-gradient': pricing.active}">
                <div class="pricing-table__feature-mark" v-if="pricing.isPopular">
                    <span>Hot</span>
                </div>
                <div class="pricing-table__header">
                    <div class="pricing-table__image">
                        <img :src="pricing.thumb" class="img-fluid" :alt="pricing.alt">
                    </div>
                    <h5 class="pricing-table__title">{{ pricing.title }}</h5>
                    <div class="pricing-table__price-wrap">
                        <h6 class="currency">$</h6>
                        <h6 class="price">{{ pricing.value }}</h6>
                        <!-- <h6 class="period">/{{ pricing.duration }}</h6> -->
                    </div>
                </div>
                <div class="pricing-table__body">
                    <ul class="pricing-table__list">
                        <li v-for="(list, index) in pricing.price" :key="index">{{ list }}</li>
                    </ul>
                </div>
                <div class="pricing-table__footer">
                    <a href="/eco" class="ht-btn ht-btn--outline ht-btn-default" :class="{'btn--white': pricing.active}">Available Soon</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PricingOne',
        data (){
            return {
                pricingTable: [
                    // {
                    //     thumb: require('../assets/img/pricing/aeroland-branding-pricing-image-01.png'),
                    //     title: 'Free',
                    //     value: '0',
                    //     duration: 'mo',
                    //     alt: 'Pricing Thumb',
                    //     isPopular: false,
                    //     active: false,
                    //     price: ['Free Acount', 'Explore App', ' ', ' ']
                    // },
                    {
                        thumb: require('../assets/img/pricing/aeroland-branding-pricing-image-02.png'),
                        title: 'Personal',
                        value: '19',
                        duration: 'mo',
                        alt: 'Pricing Thumb',
                        isPopular: true,
                        active: true,
                        price: ['Free Acount', 'Explore App', '$19 Deposit', 'Weekly Rewards', 'Money Back Guarantee']
                    },
                    {
                        thumb: require('../assets/img/pricing/aeroland-branding-pricing-image-03.png'),
                        title: 'Group',
                        value: '29',
                        duration: 'mo',
                        alt: 'Pricing Thumb',
                        isPopular: false,
                        active: false,
                        price: ['Free Acount', 'Explore App', '$29 Deposit', 'Weekly Rewards', 'Money Back Guarantee']
                    },
                    {
                        thumb: require('../assets/img/pricing/aeroland-branding-pricing-image-04.png'),
                        title: 'Enterprise',
                        value: '49',
                        duration: 'mo',
                        alt: 'Pricing Thumb',
                        isPopular: false,
                        active: false,
                        price: ['Free Acount', 'Explore App', '$49 Deposit', 'Weekly Rewards', 'Money Back Guarantee']
                    }
                ]
            }
        }
    }
</script>
