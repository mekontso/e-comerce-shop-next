import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function Header() {
    return (
        // Hide the header on small screens
        <div className="hidden border-b border-gray-200 sm:block">
            <div className="container py-4">
                <div className="">
                    sad asd
                    <p>asdsd</p>
                </div>

                <div className="flex items-center justify-between">
                    <div className="hidden gap-1 lg:flex">
                        <div className="header_top_icon_wrapper">
                            <BsFacebook />
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsTwitter />
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsInstagram />
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsLinkedin />
                        </div>
                    </div>
                    <div className="text-[12px] text-gray-500">
                        <strong>FREE SHIPPING</strong> THIS WEEK ORDER - $55
                    </div>
                    <div className="flex gap-4  ">
                        <select
                            name="currency"
                            id="currency"
                            className="w-[70px] text-[12px] text-gray-500"
                        >
                            <option value="usd">USD $</option>
                            <option value="eur">EUR €</option>
                        </select>
                        <select
                            name="language"
                            id="language"
                            className="w-[80px] text-[12px] text-gray-500"
                        >
                            <option value="en">EN</option>
                            <option value="fr">FR</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
