<template>
    <div>
        <footer class="bg-white py-14 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent lg:py-[100px]">
            <div class="container">
                <div class="grid gap-y-10 gap-x-4 sm:grid-cols-3 lg:grid-cols-5">
                    <div class="relative">
                        <router-link to="/" class="flex text-black text-2xl">
                          <img src="/assets/logos/ecosisPro_dark.png" alt="logo" class="h-10 mr-2" />
                          <p>ecosis <span class="font-bold">Pro</span></p>
                        </router-link>
                        <!-- <ul class="mt-12 flex items-center gap-8">
                            <li>
                                <a href="javascript:">
                                    <svg
                                        width="10"
                                        height="20"
                                        viewBox="0 0 10 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="transition hover:scale-110 hover:text-secondary"
                                    >
                                        <path
                                            d="M8.0733 3.29509H9.88498V0.139742C9.57242 0.0967442 8.49748 0 7.2456 0C4.6335 0 2.84415 1.643 2.84415 4.66274V7.44186H-0.0383301V10.9693H2.84415V19.845H6.37821V10.9701H9.1441L9.58317 7.44269H6.37738V5.01251C6.37821 3.99297 6.65273 3.29509 8.0733 3.29509Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:">
                                    <svg
                                        width="23"
                                        height="18"
                                        viewBox="0 0 23 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="transition hover:scale-110 hover:text-secondary"
                                    >
                                        <path
                                            d="M22.8849 2.11613C22.0668 2.475 21.1951 2.71288 20.2862 2.82838C21.2212 2.27013 21.9348 1.39287 22.2703 0.3355C21.3986 0.85525 20.4361 1.22238 19.4103 1.42725C18.5826 0.545875 17.4028 0 16.1158 0C13.6188 0 11.6086 2.02675 11.6086 4.51137C11.6086 4.86888 11.6388 5.21263 11.7131 5.53988C7.96345 5.357 4.64557 3.55988 2.4167 0.82225C2.02757 1.49738 1.79932 2.27012 1.79932 3.102C1.79932 4.664 2.6037 6.04862 3.8027 6.85025C3.07807 6.8365 2.3672 6.62613 1.76495 6.29475C1.76495 6.3085 1.76495 6.32638 1.76495 6.34425C1.76495 8.536 3.32832 10.3565 5.37845 10.7759C5.01132 10.8763 4.6112 10.9244 4.19595 10.9244C3.9072 10.9244 3.6157 10.9079 3.34207 10.8474C3.92645 12.6335 5.5847 13.9466 7.55645 13.9893C6.02195 15.1896 4.07357 15.9129 1.96432 15.9129C1.59445 15.9129 1.2397 15.8964 0.884949 15.851C2.88282 17.1394 5.25057 17.875 7.80395 17.875C16.1034 17.875 20.6409 11 20.6409 5.04075C20.6409 4.84137 20.6341 4.64887 20.6244 4.45775C21.5196 3.8225 22.2717 3.02913 22.8849 2.11613Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:">
                                    <svg
                                        width="23"
                                        height="22"
                                        viewBox="0 0 23 22"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="transition hover:scale-110 hover:text-secondary"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7.75995 0H16.0099C19.8063 0 22.8849 3.07862 22.8849 6.875V15.125C22.8849 18.9214 19.8063 22 16.0099 22H7.75995C3.96357 22 0.884949 18.9214 0.884949 15.125V6.875C0.884949 3.07862 3.96357 0 7.75995 0ZM16.0099 19.9375C18.6637 19.9375 20.8224 17.7787 20.8224 15.125V6.875C20.8224 4.22125 18.6637 2.0625 16.0099 2.0625H7.75995C5.1062 2.0625 2.94745 4.22125 2.94745 6.875V15.125C2.94745 17.7787 5.1062 19.9375 7.75995 19.9375H16.0099Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M6.38495 11C6.38495 7.96263 8.84757 5.5 11.8849 5.5C14.9223 5.5 17.3849 7.96263 17.3849 11C17.3849 14.0374 14.9223 16.5 11.8849 16.5C8.84757 16.5 6.38495 14.0374 6.38495 11ZM8.44745 11C8.44745 12.8948 9.9902 14.4375 11.8849 14.4375C13.7797 14.4375 15.3224 12.8948 15.3224 11C15.3224 9.10388 13.7797 7.5625 11.8849 7.5625C9.9902 7.5625 8.44745 9.10388 8.44745 11Z"
                                            fill="currentColor"
                                        />
                                        <circle cx="17.7975" cy="5.08737" r="0.732875" fill="currentColor" />
                                    </svg>
                                </a>
                            </li>
                        </ul> -->
                        <!-- <img src="/assets/images/footer-shape.png" alt="footer-shape" class="absolute bottom-0 right-0 sm:left-0" />
                        <img src="/assets/images/footer-shape-dark.png" alt="footer-shape-dark" class="absolute bottom-0 right-0 hidden dark:block sm:left-0" /> -->
                        <div>
                            <ul class="flex flex-col gap-3 font-bold pt-8">
                                <li>by ecosis Network Ltd</li>
                                <!-- <li>
                                    <a href="tel:+(617) 254-2333" class="inline-block transition hover:scale-110 hover:text-secondary">+(617) 254-2333</a>
                                </li> -->
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ul class="flex flex-col gap-3 font-bold">
                            <li class="mb-3 text-lg font-extrabold text-black dark:text-white">Quick Menu</li>
                            <li>
                                <router-link to="/" class="inline-block transition hover:scale-110 hover:text-secondary">Home</router-link>
                            </li>
                            <li>
                                <router-link to="/#about" class="inline-block transition hover:scale-110 hover:text-secondary">About</router-link>
                            </li>
                            <li>
                                <router-link to="/#features" class="inline-block transition hover:scale-110 hover:text-secondary">Features</router-link>
                            </li>
                            <li>
                                <router-link to="/#prices" class="inline-block transition hover:scale-110 hover:text-secondary">Prices</router-link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul class="flex flex-col gap-3 font-bold">
                            <li class="mb-3 text-lg font-extrabold text-black dark:text-white">Ecosystem</li>
                            <li>
                                <a href="https://elabs.enterprises" target="_blank" class="inline-block transition hover:scale-110 hover:text-secondary"
                                    >eLabs</a
                                >
                            </li>
                            <li>
                                <a href="https://ecosis.network" target="_blank" class="inline-block transition hover:scale-110 hover:text-secondary"
                                    >ecosis Network</a
                                >
                            </li>
                            <li>
                                <a href="https://ecosis.finance" target="_blank" class="inline-block transition hover:scale-110 hover:text-secondary"
                                    >ecosis Finance</a
                                >
                            </li>
                            <li>
                                <a href="https://ecosis.shop" target="_blank" class="inline-block transition hover:scale-110 hover:text-secondary"
                                    >ecosis Shop</a
                                >
                            </li>
                            <!-- <li>
                                <router-link to="/services-detail" class="inline-block transition hover:scale-110 hover:text-secondary"
                                    >App Development</router-link
                                >
                            </li> -->
                        </ul>
                    </div>
                    <div>
                        <ul class="flex flex-col gap-3 font-bold">
                            <li class="mb-3 text-lg font-extrabold text-black dark:text-white">Partners</li>
                            <li>
                                <a href="https://changenow.io/" target="_blank" class="inline-block transition hover:scale-110 hover:text-secondary"
                                    >Change Now</a
                                >
                            </li>
                            <li>
                                <a href="https://www.revolut.com/" target="_blank" class="inline-block transition hover:scale-110 hover:text-secondary"
                                    >Revolut</a
                                >
                            </li>
                            <li>
                                <a href="https://puri.sm/" target="_blank" class="inline-block transition hover:scale-110 hover:text-secondary">Purism</a>
                            </li>
                            <li>
                                <a href="https://www.shefan.pro/" target="_blank" class="inline-block transition hover:scale-110 hover:text-secondary">SheFan Pro</a>
                            </li>
                            <li>
                                <a href="https://www.estglobalinc.com/" target="_blank" class="inline-block transition hover:scale-110 hover:text-secondary">FAB</a>
                            </li>
                            <li>
                                <a href="https://discord.gg/RrgAb9dwYE" target="_blank" class="inline-block transition hover:scale-110 hover:text-secondary">The Forge</a>
                            </li>
                            <li>
                                <a href="https://kalipo.io/" target="_blank" class="inline-block transition hover:scale-110 hover:text-secondary">Kalipo</a>
                            </li>
                            <li>
                                <a href="https://www.spirinova.dev/" target="_blank" class="inline-block transition hover:scale-110 hover:text-secondary">Spirinova</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul class="flex flex-col gap-3 font-bold">
                            <li class="mb-3 text-lg font-extrabold text-black dark:text-white">Social Media</li>
                            <li>
                                <a href="https://www.linkedin.com/company/ecosiss/" target="_blank" class="inline-block transition hover:scale-110 hover:text-secondary"
                                    >LinkedIn</a
                                >
                            </li>
                            <li>
                                <a href="https://medium.com/@ecosis/" target="_blank" class="inline-block transition hover:scale-110 hover:text-secondary"
                                    >Medium</a
                                >
                            </li>
                            <li>
                                <a href="https://twitter.com/ecosisnetwork" target="_blank" class="inline-block transition hover:scale-110 hover:text-secondary">Twitter</a>
                            </li>
                            <li>
                                <a href="https://t.me/ecosisnetwork" target="_blank" class="inline-block transition hover:scale-110 hover:text-secondary">Telegram</a>
                            </li>
                            <li>
                                <a href="https://discord.gg/JFuxncwnDt" target="_blank" class="inline-block transition hover:scale-110 hover:text-secondary">Discord</a>
                            </li>
                            <li>
                                <a href="https://github.com/AwesomeEcosystem" target="_blank" class="inline-block transition hover:scale-110 hover:text-secondary">Github</a>
                            </li>
                        </ul>
                    </div>
                    <!-- <div>
                        <ul class="flex flex-col gap-3 font-bold">
                            <li class="mb-3 text-lg font-extrabold text-black dark:text-white">Legal</li>
                            <li>
                                <router-link to="/terms-conditions" class="inline-block transition hover:scale-110 hover:text-secondary"
                                    >Terms & Conditions</router-link
                                >
                            </li>
                            <li>
                                <router-link to="/privacy-policy" class="inline-block transition hover:scale-110 hover:text-secondary"
                                    >Privacy Policy</router-link
                                >
                            </li>
                            <li>
                                <router-link to="/faq" class="inline-block transition hover:scale-110 hover:text-secondary">FAQs</router-link>
                            </li>
                            <li>
                                <router-link to="/blog" class="inline-block transition hover:scale-110 hover:text-secondary">Blog</router-link>
                            </li>
                        </ul>
                    </div> -->
                </div>
            </div>
        </footer>
        <div class="py-5 dark:border-t-2 dark:border-white/5">
            <div class="container">
                <div class="flex flex-col items-center justify-between text-center font-bold dark:text-white md:flex-row">
                    <div>
                        Copyright© {{ new Date().getFullYear() }}
                        <a href="https://elabs.enterprises" class="text-primary transition hover:text-secondary">eLabs Enterprises</a>
                    </div>
                    <!-- <div>
                        Need help? Visit the
                        <router-link to="/contact-us" class="text-secondary transition hover:text-primary">Contact Us</router-link>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
