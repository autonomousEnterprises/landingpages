<template>
    <!-- <b-navbar type="light" toggleable="xl" fixed="top" v-b-scrollspy:nav-scroller class="header-area" :class="{'is-sticky': scrolled}">
        <div class="container-fluid container-fluid--cp-150">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand class="navbar-brand" to="/"><img :src='"../assets/img/logo/logo-dark.png"' alt="logo"></b-navbar-brand>
            <b-btn-group class="header-config-wrapper">
                <b-btn class="header-config" @click="toggleClass('addClass', 'active')"><i class="far fa-search"></i></b-btn>
                <b-link class="ht-btn ht-btn--outline hire-btn d-none d-xl-block">Hire Us Now</b-link>
            </b-btn-group>
            <b-collapse class="default-nav justify-content-center"  is-nav id="nav_collapse">
                <b-navbar-nav class="navbar-nav main-menu">
                    <b-nav-item to="/"><span>LANDING</span></b-nav-item>
                    <b-nav-item href="#home" class="scroll"><span>HOME</span></b-nav-item>
                    <b-nav-item href="#about" class="scroll"><span>ABOUT</span></b-nav-item>
                    <b-nav-item href="#service" class="scroll"><span>SERVICE</span></b-nav-item>
                    <b-nav-item href="#pricing" class="scroll"><span>PRICING</span></b-nav-item>
                    <b-nav-item href="#faq" class="scroll"><span>FAQ</span></b-nav-item>
                    <b-nav-item href="#contact" class="scroll"><span>CONTACT</span></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar> -->
    <header class="header-area navbar-light fixed-top" :class="{'is-sticky': isSticky}">
        <div class="container-fluid container-fluid--cp-150">
            <nav class="navbar navbar-expand-lg" id="navbar-example2">
                <router-link to="/">
                    <img src="../assets/img/logo/logo-dark.png" alt="logo">
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="header-config-wrapper btn-group">
                    <a class="ht-btn ht-btn--outline hire-btn d-none d-xl-block" href="https://kcha60ohz1u.typeform.com/to/ShJeY8a2" target="_blank">Request</a>
                </div>

                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul class="nav main-menu">
                        <li class="nav-item">
                            <a class="nav-link" href="#home" @click="menuCollapseOnLinkClick">
                                <span>HOME</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about" @click="menuCollapseOnLinkClick">
                                <span>ABOUT</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#service" @click="menuCollapseOnLinkClick">
                                <span>FEATURES</span>
                            </a>
                        </li>
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="#pricing" @click="menuCollapseOnLinkClick">
                                <span>PRICING</span>
                            </a>
                        </li> -->
                        <li class="nav-item">
                            <a class="nav-link" href="#faq" @click="menuCollapseOnLinkClick">
                                <span>FAQ</span>
                            </a>
                        </li>
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="#contact" @click="menuCollapseOnLinkClick">
                                <span>CONTACT</span>
                            </a>
                        </li> -->
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        data (){
            return {
                isSticky: false
            }
        },
        mounted(){
            window.addEventListener('scroll', () => {
                let scroll = window.scrollY
                if(scroll >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },
        methods: {
            // offcanvas searchbox
            toggleClass(addRemoveClass, className) {
                const el = document.querySelector('#search-overlay');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },

            menuCollapseOnLinkClick() {
                document.getElementById('navbarSupportedContent').classList.remove('show')
            }
        },
    }
</script>
