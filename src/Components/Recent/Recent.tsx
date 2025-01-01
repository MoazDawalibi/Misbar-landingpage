import React, { useState } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import AnimationButton from "../Ui/AnimationButton";
import CustomTitle from "../Ui/CustomTitle";
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import { BaseURL_IMAGE } from '../../api/config';
import Spinner from '../Utils/Loading/Spinner';

const Recent = ({ data, isLoading }:{data:any,isLoading:boolean}) => {
    const { t } = useTranslation();
    const recentData = data?.Recent_works;
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % recentData.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + recentData.length) % recentData.length);
    };

    if (isLoading) {
        return <Spinner/>;
    }

    // if (!recentData || recentData.length === 0) {
    //     return <div>No recent works available.</div>;
    // }

    return (
        <div className='Recent'>
            <picture>
                <source className="recent_image" srcSet="/App/DarkBlueBgRes.png" media="(max-width: 600px)" />
                <img className="recent_image" src="/App/DarkBlueBg.png" alt="MDN" />
            </picture>

            <div className="recent_container">
                <div className="recent_top">
                    <CustomTitle title="portfolio" />
                    <h1>{t("OUR")} <span>{t("RECENT WORK")}</span></h1>
                </div>

                <div className="recent_bottom">
                    <MdOutlineKeyboardArrowLeft className="arrow_svg fake_arrow_none" onClick={handlePrevious} />

                    <div className="data_section">
                        <TransitionGroup>
                            <CSSTransition
                                key={currentIndex}
                                timeout={500}
                                classNames="fade"
                            >
                                <div className="data_section_content">
                                    <div className="data_section_left">
                                        <h1>{recentData[currentIndex]?.title}</h1>
                                        <p className="data_text">{recentData[currentIndex]?.description}</p>
                                        <div className='button_container'>
                                            <AnimationButton link='/projects' icon={<IoIosArrowDroprightCircle />} text="View Application" />
                                        </div>
                                    </div>

                                    <div className="data_section_right">
                                        <img src={BaseURL_IMAGE + recentData[currentIndex]?.image} alt="recent_works" />
                                    </div>
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                    <div className='arrow_responsive_container'>
                        <MdOutlineKeyboardArrowLeft className="arrow_svg fake_arrow" onClick={handlePrevious} />
                        <MdKeyboardArrowRight className="arrow_svg" onClick={handleNext} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recent;
