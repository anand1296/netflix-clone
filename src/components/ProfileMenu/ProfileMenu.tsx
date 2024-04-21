import { useDispatch } from 'react-redux';
import { clearUser } from '../../utils/store/user.slice';
import ProfileMenuOptions from './ProfileMenuOptions';
import { removeToken } from '../../utils/auth/storage';
import { APP_CONSTANTS } from '../../utils/constants';

const ProfileMenu = () => {
    const dispatch = useDispatch();

    const signOut = () => {
        removeToken();
        dispatch(clearUser());
    };

    return (
        <div className="absolute p-0 right-0 top-[48px] w-[220px] bg-[rgba(0,_0,_0,_.9)] border border-[hsla(0,0%,100%,.15)] text-[#fff] cursor-default text-sm leading-5 transition-all duration-300 ease-in-out">
            <ul className="flex flex-col">
                {ProfileMenuOptions.map((menuItem) => (
                    <li
                        key={menuItem.label}
                        className="flex items-center py-2 px-2 w-full cursor-pointer"
                    >
                        {menuItem.icon}
                        <span className=" hover:underline">
                            {menuItem.label}
                        </span>
                    </li>
                ))}
            </ul>
            <ul>
                <li
                    className="py-3 px-2 w-full border-t flex items-center justify-center cursor-pointer"
                    onClick={signOut}
                >
                    <span className=" hover:underline">
                        {APP_CONSTANTS.AUTH.BUTTONS.SIGN_OUT}
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default ProfileMenu;
