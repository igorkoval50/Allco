import Plugin from 'src/plugin-system/plugin.class';
import Swiper from '@swiper/bundle';

export default class AllcoSwiperSlider extends Plugin {
    init() {
        console.log('Plugin is initialized');

        //stick header
        window.onscroll = function() {myFunction()};
        var header = document.querySelector(".nav-main");
        var sticky = header.offsetTop;
        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }

        let isSwiperExist = document.querySelector('.swiper-container');
        if (isSwiperExist === null)
        {
            console.log('null');
            return;
        }

        if (document.querySelectorAll('.swiper-instagram').length > 0) {
            //Footer brands element
            let swiperBrands = new Swiper('.swiper-instagram', {
                slidesPerView: 5,
                spaceBetween: 30,
                freeMode: true,
                loop: false,
                loopFillGroupWithBlank: true,
                watchSlidesVisibility: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    576: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1025: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }
            });


            const swiperPrev = document.getElementById('swiperPrev');
            const swiperNext = document.getElementById('swiperNext');

            swiperPrev.addEventListener('click', () => {
                swiperBrands.slidePrev();
            });

            swiperNext.addEventListener('click', () => {
                swiperBrands.slideNext();
            });

        }


        if (document.querySelectorAll('.swiper-container-image').length > 0) {
            let swiper = new Swiper('.swiper-container-image', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + '<span class="bull-text">' + 0 + (index + 1) + '</span>' + '</span>';
                    },
                },
            });
        }


        if (document.querySelectorAll('.swiper-text-content').length > 0) {
            let swiper = new Swiper('.swiper-text-content', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }

        if (document.querySelectorAll('.swiper-containers').length > 0) {
            let swipers = new Swiper('.swiper-containers', {
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + '<span class="bull-text">' + (index + 1) + '</span>' + '</span>';
                    }
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                loop: true,
            });
        }

        if (document.querySelectorAll('.swiper-container-brands').length > 0) {
            //Footer brands element
            let swiperBrands = new Swiper('.swiper-container-brands', {
                slidesPerView: 5,
                spaceBetween: 30,
                freeMode: true,
                loop: false,
                loopFillGroupWithBlank: true,
                watchSlidesVisibility: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    576: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1025: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }
            });


            const swiperPrev = document.getElementById('swiperPrev');
            const swiperNext = document.getElementById('swiperNext');

            swiperPrev.addEventListener('click', () => {
                swiperBrands.slidePrev();
            });

            swiperNext.addEventListener('click', () => {
                swiperBrands.slideNext();
            });

        }

        if (document.querySelectorAll('.swiper-container-brands-element').length > 0) {
            //Layout brands element

            let swiperBrandsElement = new Swiper('.swiper-container-brands-element', {
                slidesPerView: 5,
                spaceBetween: 30,
                freeMode: true,
                loop: false,
                loopFillGroupWithBlank: true,
                watchSlidesVisibility: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    576: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1025: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }
            });

            const swiperPrevTwo = document.getElementById('swiperPrevTwo');
            const swiperNextTwo = document.getElementById('swiperNextTwo');

            swiperPrevTwo.addEventListener('click', () => {
                swiperBrandsElement.slidePrev();
            });
            swiperNextTwo.addEventListener('click', () => {
                swiperBrandsElement.slideNext();
            });
        }
    }
}
