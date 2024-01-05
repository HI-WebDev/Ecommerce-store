import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHeadphones } from "@fortawesome/free-solid-svg-icons"
//react-icons
import { BsSmartwatch } from "react-icons/bs";
import { TbDeviceGamepad } from 'react-icons/tb'
import { MdOutlineCameraAlt } from 'react-icons/md'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import { FaMobileScreen } from "react-icons/fa6";


import Header from "./helpers/Header"
import Arrows from "./helpers/Arrows"
import Box from "./helpers/Box"

const Browse = () => {
    return (
        <div className="browse mt-5 mb-5 ">
            <div className="container ">
                <Header title='Categories' />
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
                    <h1 className="fs-3 fw-bold">Browse By Category</h1>
                    <Arrows />
                </div>
                
                <div className="row mt-4 mt-lg-5">
                    <div className="col-6 mb-3 mb-lg-0 col-lg-2 active">
                        <Box icon={<FaMobileScreen />} title='phones' />
                    </div>
                    <div className="col-6 mb-3 mb-lg-0 col-lg-2">
                        <Box icon={<HiOutlineComputerDesktop />} title='computers' />
                    </div>
                    <div className="col-6 mb-3 mb-lg-0 col-lg-2">
                        <Box icon={<BsSmartwatch />} title='smartWatch' />
                    </div>
                    <div className="col-6 mb-3 mb-lg-0 col-lg-2">
                        <Box icon={<MdOutlineCameraAlt />} title='camera' />
                    </div>
                    <div className="col-6 col-lg-2">
                        <Box icon={<FontAwesomeIcon icon={faHeadphones} />} title='headPhones' />
                    </div>
                    <div className="col-6 col-lg-2">
                        <Box icon={<TbDeviceGamepad />} title='gaming' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Browse
