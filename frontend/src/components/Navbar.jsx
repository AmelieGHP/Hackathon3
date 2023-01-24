import React, { useState, useContext } from 'react';
import { NavLink } from "react-router-dom";
import Logo from "../assets/black-mount-logo-emblem-navbar.svg";
import MenuIcon from "../assets/black-mount-icon-menu.svg";
import CrossIcon from "../assets/black-mount-icon-cross.svg";
import UserContext from "./context/UserContext";

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

    const { firstname } = useContext(UserContext).user;
    const { lastname } = useContext(UserContext).user;

    return (

        <div className='navbarContainer'>
            <button onClick={handleToggle}>{navbarOpen ? (<img src={CrossIcon} />) : (<img src={MenuIcon} />)}</button>
            <NavLink to="/home"><img src={Logo} alt="Logo Black Mount" /></NavLink>
            <div className={navbarOpen ? "navbarContent" : "navbarClosed"}>
                <div className="avatar">
                    <img
                        src={`${import.meta.env.VITE_BACKEND_URL
                            }/assets/users/black-mount-user-image-nicolas-ryngite.jpg`}
                        alt="Avatar Profil"
                    />
                    <div>
                        <p>Welcome back,</p>
                        <h3>
                            {firstname} {lastname}{" "}
                        </h3>
                    </div>
                </div>
                <div className='tabs'>
                    <NavLink
                        to="/home"
                        className="tab"
                    >
                        <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.0095 13.1464H11.3837C14.4096 13.1464 17.4354 13.1464 20.4613 13.1464C21.0602 13.1464 21.1668 13.2551 21.1525 13.8476C21.0273 19.0221 17.1042 23.3881 11.9847 24.0507C6.24633 24.7934 1.04101 20.9017 0.129452 15.1863C-0.777811 9.50228 3.18395 4.04439 8.87367 3.15144C9.38311 3.0713 9.90185 3.03696 10.417 3.00762C10.8656 2.98186 11.008 3.13498 11.0087 3.59004C11.0095 6.6424 11.0087 9.69547 11.0087 12.7478C11.0087 12.863 11.0087 12.9789 11.0087 13.1464H11.0095Z"
                                fill="#B5C5F4"
                            />
                            <path
                                d="M18.5402 11.1581C16.9075 11.1581 15.2747 11.1581 13.6426 11.1581C13.1124 11.1581 13.0029 11.0465 13.0029 10.5128C13.0029 7.27436 13.0029 4.03598 13.0029 0.796873C13.0029 0.264536 13.1188 0.150055 13.6455 0.158641C18.6733 0.237346 23.0322 3.98947 23.8422 8.94865C23.9309 9.49244 23.9631 10.0462 23.9974 10.5972C24.0225 11.005 23.8715 11.141 23.4644 11.141C21.823 11.141 20.1816 11.141 18.541 11.141C18.541 11.1467 18.541 11.1524 18.541 11.1581H18.5402Z"
                                fill="#B5C5F4"
                            />
                        </svg>
                        <p>Dashboard</p>
                    </NavLink>
                    <NavLink
                        to="/horselist"
                        className="tab"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_168_16913)">
                                <path
                                    d="M21.6526 16.3861C21.6503 16.3746 21.6565 16.3612 21.665 16.3163C22.5676 16.5979 23.2433 17.2386 24.0004 17.8215C23.9772 17.6783 23.9614 17.5614 23.9394 17.4456C23.7226 16.3175 23.2302 15.3124 22.6181 14.3648C21.4288 12.5242 19.913 10.9973 18.2579 9.60681C18.1741 9.53663 18.09 9.46685 18.0063 9.39706C18.0125 9.38081 18.0182 9.36416 18.0244 9.3479C18.861 9.38755 19.6332 9.69483 20.4116 9.97793C20.0068 9.02713 17.5324 7.06724 15.777 6.32302C13.9108 5.5324 11.9689 5.24811 9.96461 5.44319C9.49111 4.23545 8.52946 3.45435 7.63611 2.61616C7.40149 2.3961 7.14757 2.19785 6.89095 2C7.37216 2.59078 7.20468 3.29496 7.26179 3.95751C6.88284 3.5848 6.51663 3.22439 6.15003 2.86397C6.3916 4.27273 6.03426 5.57126 5.69004 6.87098C5.67229 6.93798 5.64103 7.01372 5.59241 7.05773C4.81792 7.75596 4.26107 8.62944 3.72197 9.51482C2.9305 10.8149 2.24129 12.1725 1.59492 13.5539C1.53742 13.6769 1.4587 13.7926 1.37303 13.8973C1.17892 14.1352 0.972854 14.3628 0.77489 14.5971C0.084523 15.4123 -0.121931 16.3604 0.066 17.4063C0.153984 17.8956 0.396327 18.281 0.827758 18.5431C1.3136 18.8381 1.80446 19.1041 2.38369 19.1311C2.91468 19.1557 3.37158 18.9669 3.68917 18.5379C3.91106 18.2386 4.05346 17.877 4.23637 17.5463C4.26609 17.4928 4.3205 17.4174 4.36642 17.415C5.59743 17.3552 6.65401 16.8306 7.6172 16.0935C8.09494 15.7279 8.52174 15.2926 8.97093 14.8878C9.01839 14.8449 9.06084 14.7962 9.13493 14.7204C9.35412 14.933 9.58411 15.1241 9.77745 15.3489C10.4223 16.0979 10.65 16.9963 10.6075 17.9753C10.545 19.4138 10.0179 20.6965 9.31746 21.9157C9.16464 22.1821 8.1752 23.9084 8 24.1582H20.5559C20.628 23.9778 21.5222 22.3265 21.5878 22.1397C22.245 20.2714 22.2882 18.3651 21.6742 16.4619C21.6661 16.4369 21.6576 16.4119 21.6526 16.3861Z"
                                    fill="#B5C5F4"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_168_16913">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Our vehicles</p>
                    </NavLink>
                    <NavLink
                        to="/reservation"
                        className="tab"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_168_16915)">
                                <path
                                    d="M18.9508 23.0009H18.9178C18.4068 22.9929 17.9208 22.7759 17.5738 22.4009L15.6558 20.5199C15.2718 20.1229 15.2808 19.4899 15.6778 19.1059C15.6788 19.1049 15.6798 19.1039 15.6808 19.1029C16.0778 18.7219 16.7078 18.7329 17.0908 19.1269L18.9518 20.9499L22.2928 17.6089C22.6828 17.2189 23.3168 17.2189 23.7068 17.6089C24.0968 17.9989 24.0968 18.6329 23.7068 19.0229L20.2858 22.4439C19.9338 22.8009 19.4528 23.0019 18.9508 23.0009V23.0009Z"
                                    fill="#B5C5F4"
                                />
                                <path
                                    d="M14.0352 20.015C14.0312 16.718 16.7002 14.042 19.9962 14.037C21.2792 14.035 22.5292 14.447 23.5592 15.212C25.3322 8.82703 21.5932 2.21403 15.2092 0.441034C8.82523 -1.33197 2.21323 2.40603 0.440231 8.79103C-1.33277 15.176 2.40623 21.79 8.79023 23.563C10.8902 24.146 13.1092 24.146 15.2092 23.563C14.4472 22.537 14.0352 21.293 14.0352 20.015ZM13.0002 12.022C13.0002 12.288 12.8942 12.542 12.7062 12.73L9.70123 15.736C9.30323 16.12 8.66923 16.109 8.28523 15.711C7.91023 15.323 7.91023 14.707 8.28523 14.319L10.9972 11.607V7.01303C10.9972 6.46003 11.4452 6.01103 11.9992 6.01103C12.5522 6.01103 13.0002 6.46003 13.0002 7.01303V12.022Z"
                                    fill="#B5C5F4"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_168_16915">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>My reservations</p>
                    </NavLink>
                    <div className='separator'></div>
                    <NavLink to="/" className="tab">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_168_16918)">
                                <path
                                    d="M2.39046 0C6.12376 0 9.85767 0 13.591 0C13.6116 0.0106447 13.631 0.0262986 13.6529 0.0313079C15.1787 0.366928 15.992 1.37629 15.9926 2.93793C15.9926 4.85961 15.9926 6.78066 15.9926 8.70234V8.99977C15.8843 8.99977 15.8004 8.99977 15.7159 8.99977C14.1225 8.99977 12.5298 8.98912 10.9364 9.00352C9.11014 9.0198 7.71148 10.7348 8.04706 12.5219C8.3194 13.9715 9.53211 14.9927 11.0034 14.9977C12.5811 15.0034 14.1582 14.999 15.7359 14.999C15.8179 14.999 15.8999 14.999 15.9776 14.999C15.9851 15.0591 15.9907 15.0823 15.9907 15.1054C15.9907 17.183 16.0076 19.2606 15.9838 21.3382C15.9669 22.8147 14.7436 23.9925 13.2591 23.9956C9.75249 24.0025 6.24584 24.0025 2.73981 23.9944C1.832 23.9925 1.102 23.6018 0.544792 22.8848C0.249911 22.506 0.117183 22.0608 0.000732422 21.6075V2.39067C0.0163843 2.33995 0.0364188 2.29049 0.0476881 2.23851C0.251789 1.2999 0.78458 0.622401 1.66296 0.231678C1.89399 0.128988 2.14692 0.0757651 2.39046 0Z"
                                    fill="#B5C5F4"
                                />
                                <path
                                    d="M17.9958 12.9946C17.8762 12.9946 17.7842 12.9946 17.6921 12.9946C15.4909 12.9946 13.2896 12.9952 11.0883 12.994C10.4823 12.994 10.0828 12.6646 10.0058 12.113C9.9313 11.5789 10.3426 11.0592 10.8817 11.0109C10.9825 11.0022 11.0845 11.0034 11.186 11.0034C13.3559 11.0034 15.5265 11.0034 17.6965 11.0034H17.9958V10.7273C17.9958 9.84504 17.9945 8.96278 17.9958 8.08052C17.9964 7.594 18.2174 7.23333 18.6212 7.07742C19.0551 6.91023 19.4295 7.02044 19.7526 7.34416C21.0548 8.64782 22.3589 9.94835 23.6599 11.2539C24.1132 11.7091 24.1126 12.2908 23.6574 12.7473C22.3627 14.0466 21.0629 15.3414 19.7676 16.6407C19.4383 16.9707 19.0614 17.0922 18.6175 16.92C18.2099 16.7616 17.9958 16.399 17.9958 15.8912C17.9952 14.9388 17.9958 13.9871 17.9958 12.9959V12.9946Z"
                                    fill="#B5C5F4"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_168_16918">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Sign out</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;