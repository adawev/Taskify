import "./style.scss"
import userIcon from "../../../images/user.png";
import bgCircle from "../../../images/bgCircle.png";

import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCards, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/navigation";
function ReviewsSection() {
    return <div className="ReviewsSection">
        <img src={bgCircle} alt="" className={"bgCircleTop"}/>

        <div className="miniInformation">
            <p className="textSlogan">What people are saying</p>
            <p className="textMain">Reviews</p>
        </div>
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Navigation]}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            className="mySwiper"
        >
            <SwiperSlide >
                <div className="wrapperSlide">
                    <div className="userInfoSlide">
                        <div>
                            <img src={userIcon} alt=""/>
                        </div>
                        <div className="info">
                            <p>Aziz Rakhimov</p>
                            <p>@azizz</p>
                        </div>
                    </div>
                    <div className="starRatingWrapper">
                        {/*<CustomRating name="read-only" value={"4"} size={'large'} readOnly/>*/}
                    </div>
                    <p className={'commentSlide'}>Boss Sport transformed my fitness journey. The equipment is top-notch,
                        and the training programs are incredibly effective!</p>
                    <p className={'dateSlide'}>20 Jan, 2025</p>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="wrapperSlide">
                    <div className="userInfoSlide">
                        <div>
                            <img src={userIcon} alt=""/>
                        </div>
                        <div className="info">
                            <p>Aziz Rakhimov</p>
                            <p>@azizz</p>
                        </div>
                    </div>
                    <div className="starRatingWrapper">
                        {/*<CustomRating name="read-only" value={"4"} size={'large'} readOnly/>*/}
                    </div>
                    <p className={'commentSlide'}>Boss Sport transformed my fitness journey. The equipment is top-notch,
                        and the training programs are incredibly effective!</p>
                    <p className={'dateSlide'}>20 Jan, 2025</p>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="wrapperSlide">
                    <div className="userInfoSlide">
                        <div>
                            <img src={userIcon} alt=""/>
                        </div>
                        <div className="info">
                            <p>Aziz Rakhimov</p>
                            <p>@azizz</p>
                        </div>
                    </div>
                    <div className="starRatingWrapper">
                        {/*<CustomRating name="read-only" value={"4"} size={'large'} readOnly/>*/}
                    </div>
                    <p className={'commentSlide'}>Boss Sport transformed my fitness journey. The equipment is top-notch,
                        and the training programs are incredibly effective!</p>
                    <p className={'dateSlide'}>20 Jan, 2025</p>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="wrapperSlide">
                    <div className="userInfoSlide">
                        <div>
                            <img src={userIcon} alt=""/>
                        </div>
                        <div className="info">
                            <p>Aziz Rakhimov</p>
                            <p>@azizz</p>
                        </div>
                    </div>
                    <div className="starRatingWrapper">
                        {/*<CustomRating name="read-only" value={"4"} size={'large'} readOnly/>*/}
                    </div>
                    <p className={'commentSlide'}>Boss Sport transformed my fitness journey. The equipment is top-notch,
                        and the training programs are incredibly effective!</p>
                    <p className={'dateSlide'}>20 Jan, 2025</p>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="wrapperSlide">
                    <div className="userInfoSlide">
                        <div>
                            <img src={userIcon} alt=""/>
                        </div>
                        <div className="info">
                            <p>Aziz Rakhimov</p>
                            <p>@azizz</p>
                        </div>
                    </div>
                    <div className="starRatingWrapper">
                        {/*<CustomRating name="read-only" value={"4"} size={'large'} readOnly/>*/}
                    </div>
                    <p className={'commentSlide'}>Boss Sport transformed my fitness journey. The equipment is top-notch,
                        and
                        the training programs are incredibly effective!</p>
                    <p className={'dateSlide'}>20 Jan, 2025</p>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="wrapperSlide">
                    <div className="userInfoSlide">
                        <div>
                            <img src={userIcon} alt=""/>
                        </div>
                        <div className="info">
                            <p>Aziz Rakhimov</p>
                            <p>@azizz</p>
                        </div>
                    </div>
                    <div className="starRatingWrapper">
                        {/*<CustomRating name="read-only" value={"4"} size={'large'} readOnly/>*/}
                    </div>
                    <p className={'commentSlide'}>Boss Sport transformed my fitness journey. The equipment is top-notch,
                        and
                        the training programs are incredibly effective!</p>
                    <p className={'dateSlide'}>20 Jan, 2025</p>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="wrapperSlide">
                    <div className="userInfoSlide">
                        <div>
                            <img src={userIcon} alt=""/>
                        </div>
                        <div className="info">
                            <p>Aziz Rakhimov</p>
                            <p>@azizz</p>
                        </div>
                    </div>
                    <div className="starRatingWrapper">
                        {/*<CustomRating name="read-only" value={"4"} size={'large'} readOnly/>*/}
                    </div>
                    <p className={'commentSlide'}>Boss Sport transformed my fitness journey. The equipment is top-notch,
                        and
                        the training programs are incredibly effective!</p>
                    <p className={'dateSlide'}>20 Jan, 2025</p>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="wrapperSlide">
                    <div className="userInfoSlide">
                        <div>
                            <img src={userIcon} alt=""/>
                        </div>
                        <div className="info">
                            <p>Aziz Rakhimov</p>
                            <p>@azizz</p>
                        </div>
                    </div>
                    <div className="starRatingWrapper">
                        {/*<CustomRating name="read-only" value={"4"} size={'large'} readOnly/>*/}
                    </div>
                    <p className={'commentSlide'}>Boss Sport transformed my fitness journey. The equipment is top-notch,
                        and
                        the training programs are incredibly effective!</p>
                    <p className={'dateSlide'}>20 Jan, 2025</p>
                </div>
            </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

    </div>
}

export default ReviewsSection;