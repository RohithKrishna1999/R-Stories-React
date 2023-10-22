import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer class="footer-distributed">

                <div class="footer-left">

                    <h3>R<span>Stories</span></h3>

                    <p class="footer-links">
                        <a href="#" class="link-1">Home</a>

                        <a href="#">About</a>

                        <a href="#">Contact</a>
                    </p>

                    <p class="footer-company-name">R Stories © 2023</p>
                </div>

                <div class="footer-center">

                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>### New Delhi</span> India</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+909090909</p>
                    </div>

                    <div>
                        <i class="fa fa-envelope"></i>
                        <p className='company-mail'><a href="mailto:R@Stories.com">R@Stories.com</a></p>
                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>About the company</span>
                        Create your own dream to come true.
                    </p>

                    <div class="footer-icons">

                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-github"></i></a>

                    </div>

                </div>

            </footer></div>
    )
}
