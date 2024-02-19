import React from "react";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container-6">
                    <div className="logo">
                        <img src="/images/darshiiniVS_logo2.svg" alt="Logo" />
                        <p>"Discover the art of Bharatanatyam, where tradition meets innovation in a symphony of rhythm and emotion."</p>
                    </div>
                    <div className="inner-cont">
                        <img className='link-icons' src="/svg/map.svg" alt="Map" />
                        <a target="_blank" href="https://www.google.com/maps/place/Reda+Enclave/@13.0807,80.1790413,19.41z/data=!4m6!3m5!1s0x3a52631da9ca58f5:0x2667d3a0ff8944c8!8m2!3d13.0810466!4d80.1793097!16s%2Fg%2F11fm6vd6jy?entry=ttu">Plot no 167,S2 Reda Enclave,vallalar street, panner Nagar part 2, mogappair Chennai-600037.</a>
                    </div>
                    <div>
                        <div className="inner-cont">
                            <img className='link-icons' src="/svg/gmail.svg" alt="Gmail" />
                            <a href="mailto: darshiini.dance@gmail.com">darshiini.dance@gmail.com</a>
                        </div>
                        <div className="inner-cont">
                            <img className='link-icons' src="/svg/phone.svg" alt="Phone" />
                            <div>
                                <a href="tel: +918015280489">+91 - 8015280489</a>
                                <br />
                                <a href="tel: +33745633549">+33 - 745633549</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-img">
                        <a target="_blank" href="https://www.facebook.com/darshiini.vs" aria-label="Visit our Facebook page"><img className='link-icons' src="/svg/fb.svg" alt="Facebook" /></a>
                        <a target="_blank" href="https://instagram.com/darshiinivs" aria-label="Visit our Instagram page"><img className='link-icons' src="/svg/instagram.svg" alt="Instagram" /></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UChz5FJCG6PVLvSMB4yxEvxg" aria-label="Watch videos on my Youtube channel"><img className='link-icons' src="/svg/youtube.svg" alt="Youtube" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/darshiini-v-s-99662919b" aria-label="Connect with me in Linkedin"><img className='link-icons' src="/svg/linkedin.svg" alt="Linkedin" /></a>
                        <a target="_blank" href="https://api.whatsapp.com/send?text=?&phone=+918015280489" aria-label="Message me in whatsapp"><img className='link-icons' src="/svg/whatsapp.svg" alt="Whatsapp" /></a>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright © | Designed and Developed by</p><a target="_blank" href="https://sanjaykumar0072.netlify.app" aria-label="Visit my portfolio website">Sanjay Kumar</a>
                </div>
            </footer>
        </>
    )
}