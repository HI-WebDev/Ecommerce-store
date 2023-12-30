import shoping from '../assets/images/shoping.png'
import { FaStoreAlt } from "react-icons/fa";
import { FaDollarSign, FaSackDollar } from "react-icons/fa6";
import { VscGift } from "react-icons/vsc";
import Service from './helpers/Service';
import EmployerCard from './helpers/EmployerCard';
import emp1 from '../assets/images/emp1.png'
import emp2 from '../assets/images/emp2.png'
import emp3 from '../assets/images/emp3.png'
import Services from './Services';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const About = () => {
    return (
        <div className="about mt-5 mb-5 ">
            <div className="container">
                <h3 className="fw-bold fs-6 mb-0 text-black">
                    <span className="text-muted">Home</span> / About
                </h3>

                <div className="row mt-5 mb-5 pb-5 d-flex align-items-center">
                    <div className="col-6">
                        <div className='pe-5'>
                            <h1 className=" fw-bold text-capitalize mb-4 ">our story</h1>
                            <p className="desc fs-6 lh-base text-justify">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Rerum deserunt,veniam nemo reprehenderit molestias
                                maxime labore quis adipisci necessitatibus mollitia consectetu
                                aliquam officia fugiat, voluptas et in voluptatibus blanditiis!
                                <p className=" mt-3">
                                    maxime labore quis adipisci necessitatibus mollitia consectetu
                                    aliquam officia fugiat, voluptas et in voluptatibus blanditiis!
                                    aliquam officia fugiat, voluptas et in voluptatibus blanditiis!
                                </p>
                            </p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="image ">
                            <img src={shoping} alt="shoping girls" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="row mt-5 pt-5 pb-5 mb-5">
                    <div className="col-3">
                        <Service bord="1.5px solid #aaa"
                            anim="animate"
                            icon={<FaStoreAlt />}
                            title="10.5k"
                            desc="Sallers active our site" />
                    </div>

                    <div className="col-3">
                        <Service bord="1.5px solid #aaa"
                            anim="animate"
                            icon={<FaDollarSign />}
                            title="33k"
                            desc="Monthly Product Sale" />
                    </div>

                    <div className="col-3">
                        <Service bord="1.5px solid #aaa"
                            anim="animate"
                            icon={<VscGift />}
                            title="45.5k"
                            desc="Customer active in our site" />
                    </div>

                    <div className="col-3">
                        <Service bord="1.5px solid #aaa"
                            anim="animate"
                            icon={<FaSackDollar />}
                            title="25k"
                            desc="Anual gross sale in our site" />
                    </div>
                </div>

                <div className="row mt-5 pt-5 pb-5 mb-5">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >

                        <SwiperSlide className='d-flex justify-content-center'>
                            <EmployerCard
                                img={emp1}
                                alt="employer 1"
                                title="Houssini Ismail"
                                desc="Founder & Developer"
                            />
                        </SwiperSlide>

                        <SwiperSlide className='d-flex justify-content-center'>
                            <EmployerCard
                                img={emp2}
                                alt="employer 2"
                                title="Houssini Ismail"
                                desc="Marketing & SEO"
                            />
                        </SwiperSlide>

                        <SwiperSlide className='d-flex justify-content-center'>
                            <EmployerCard
                                img={emp3}
                                alt="employer 3"
                                title="Houssini Ismail"
                                desc="Website Designer"
                            />
                        </SwiperSlide>
                        <SwiperSlide className='d-flex justify-content-center'>
                            <EmployerCard
                                img={emp1}
                                alt="employer 1"
                                title="Houssini Ismail"
                                desc="Founder & Developer"
                            />
                        </SwiperSlide>

                        <SwiperSlide className='d-flex justify-content-center'>
                            <EmployerCard
                                img={emp2}
                                alt="employer 2"
                                title="Houssini Ismail"
                                desc="Marketing & SEO"
                            />
                        </SwiperSlide>

                        <SwiperSlide className='d-flex justify-content-center'>
                            <EmployerCard
                                img={emp3}
                                alt="employer 3"
                                title="Houssini Ismail"
                                desc="Website Designer"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="pb-4">
                    <Services />
                </div>

            </div>
        </div>
    )
}
export default About