<template>
    <div class="tabs-wrapper section-space--pt_120 section-space--pb_60" :class="BgGradient">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="tab-slider-nav" id="myTab" role="tablist">
                        <div class="tab-slider-nav--list wow move-up active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                            <i class="ht-slider-tab-icon fal fa-align-left"></i>
                            <h5>Dashboard</h5>
                            <p>An intuitive overview of all your finances.</p>
                        </div>
                        <div class="tab-slider-nav--list wow move-up" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                            <i class="ht-slider-tab-icon fal fa-rocket"></i>
                            <h5>Transaction History</h5>
                            <p>Track all your historical transactions.</p>
                        </div>
                        <div class="tab-slider-nav--list wow move-up" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                            <i class="ht-slider-tab-icon fal fa-chart-pie"></i>
                            <h5>Advanced Aanalytics</h5>
                            <p>Analyse traffic, profits, revenues etc.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <div class="pro-large-img img-zoom wow move-up">
                                <img class="img-fluid" src="../assets/img/screenshots/dev_desktop_dashboard2.png" alt="product-details" />
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                            <div class="pro-large-img img-zoom wow move-up">
                                <img class="img-fluid" src="../assets/img/screenshots/dev_desktop_dashboard.png" alt="product-details" />
                            </div>
                        </div>
                        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                            <div class="pro-large-img img-zoom wow move-up">
                                <img class="img-fluid" src="../assets/img/screenshots/dev_desktop_dashboard3.png" alt="product-details" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["BgGradient"],
    };
</script>
