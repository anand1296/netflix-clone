import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileMenu from "../../ProfileMenu/ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../utils/store/app.store";
import { APP_CONSTANTS } from "../../../utils/constants";
import { setUser } from "../../../utils/store/user.slice";
import { getUserFromToken } from "../../../utils/auth/storage";

const Header = () => {
    console.log('header rendered');
    const userLoggedIn = Boolean(useSelector((state: RootState) => state.user));
    const dispatch = useDispatch();
    if(!userLoggedIn) {
        const user = getUserFromToken();
        if(user) {
            dispatch(setUser(user));
        }
    }
    const activeMenu: string = "Home";
    // console.log(userLoggedIn);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [delayHandler, setDelayHandler] = useState<any>(null);
    const [expandedSearch, setExpandedSearch] = useState(false);
    const searchRef = useRef<HTMLInputElement>(null);
    // console.log(showProfileMenu);

    const handleMouseEnter = () => {
        clearTimeout(delayHandler);
        setDelayHandler(
            setTimeout(() => {
                setShowProfileMenu(true);
            }, 0)
        );
    };

    const handleMouseLeave = () => {
        clearTimeout(delayHandler);
        setDelayHandler(
            setTimeout(() => {
                setShowProfileMenu(false);
            }, 300)
        );
    };

    const onSearchExpand = () => {
        setExpandedSearch(true);
        searchRef.current?.focus();
    }

    const onSearchShrink = () => {
        searchRef.current?.blur();
        setExpandedSearch(false);
    }

    useEffect(() => {
        setShowProfileMenu(false);
    }, [userLoggedIn]);

    return (
        <div className="header-wrapper text-white">
            {!userLoggedIn ? (
                <div className="py-6 px-12 w-11/12 mx-auto">
                    <Link to={"/"}>
                        <svg
                            className="text-red-600 fill-current w-36 h-10"
                            viewBox="0 0 111 30"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                        >
                            <g>
                                <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                            </g>
                        </svg>
                    </Link>
                </div>
            ) : (
                <div className="py-4 px-8 w-full flex justify-between items-center bg-[linear-gradient(180deg,_rgba(0,_0,_0,_.7)_10%,_transparent)]">
                    <div className="flex gap-8">
                        <Link to={"/"}>
                            <svg
                                className="text-red-600 fill-current w-24 h-10"
                                viewBox="0 0 111 30"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                            >
                                <g>
                                    <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                                </g>
                            </svg>
                        </Link>
                        <ul className="flex gap-4 items-center">
                            <li
                                className={`cursor-pointer hover:text-[#b3b3b3] ${
                                    activeMenu === "Home" ? "font-semibold" : "font-normal"
                                }`}
                            >
                                Home
                            </li>
                            <li
                                className={`cursor-pointer hover:text-[#b3b3b3] ${
                                    activeMenu === "TV Shows" ? "font-semibold" : "font-normal"
                                }`}
                            >
                                TV Shows
                            </li>
                            <li
                                className={`cursor-pointer hover:text-[#b3b3b3] ${
                                    activeMenu === "Movies" ? "font-semibold" : "font-normal"
                                }`}
                            >
                                Movies
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-8 items-center">
                        <div
                            className={`flex items-center relative transition-width duration-300 ease-in-out ${
                                expandedSearch
                                    ? "border border-slate-500 rounded-sm bg-[rgba(0,_0,_0,_.75)]"
                                    : "overflow-hidden cursor-pointer left-6"
                            }`}
                            onClick={onSearchExpand}
                            onBlur={onSearchShrink}
                        >
                            <span className="text-xl px-2">🔍</span>
                            <input
                                ref={searchRef}
                                type="search"
                                className={`p-2 border-none bg-transparent ${expandedSearch ? 'w-auto' : 'w-0'}`}
                                placeholder="Titles, people, genres"
                            />
                        </div>
                        <div className="text-xl">🔔</div>
                        <div className="relative" onPointerEnter={handleMouseEnter} onPointerLeave={handleMouseLeave}>
                            <div className="flex items-center cursor-pointer">
                                <span className="" role="presentation">
                                    <img
                                        className="profile-icon"
                                        src={APP_CONSTANTS.GLOBAL.ICONS.PROFILE}
                                        alt="Profile"
                                    />
                                </span>
                                <span
                                    className={`border-solid border-[#fff_transparent_transparent] border-t-[5px] border-r-[5px] border-b-0 border-l-[5px] h-[0] ml-[10px] [transition:transform_367ms_cubic-bezier(.21,0,.07,1)] w-[0] ${
                                        showProfileMenu && "rotate-180"
                                    }`}
                                ></span>
                            </div>
                            {showProfileMenu && <ProfileMenu />}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
