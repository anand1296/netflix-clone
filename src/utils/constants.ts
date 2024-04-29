export const APP_CONSTANTS = {
    GLOBAL: {
        IMAGES: {
            PRE_AUTH_BG:
                'https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg',
        },
        ICONS: {
            PROFILE:
                'https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTvTV1d97HoOuutIG9GUEJgNIhg89JU3EQmtIikzdqolTLHSDqxwytfl61TC-HlrVt7QrzxdB5xR3nD2CPKNL9TF3qKTmcI.png?r=cad',
        },
        BUTTONS: {
            YES: 'Yes',
            NO: 'No',
            CANCEL: 'Cancel',
            CONFIRM: 'Confirm',
            ACCEPT: 'Accept',
            RESET: 'Reset',
        },
    },
    AUTH: {
        HEADERS: {
            SIGN_IN: 'Sign In',
            SIGN_UP: 'Sign Up',
        },
        ERRORS: {
            REQUIRED: '##field## is required',
            MAX_LENGTH: '##field## cannot contain more than ##max## characters',
            MIN_LENGTH: '##field## should contain minimum ##min## characters',
            INVALID_EMAIL: 'Invalid email address',
            PASSWORD: {
                MISMATCH: 'Password do not match.',
                DUAL_CASING:
                    'Password ahould contain at least one uppercase and lowercase character',
                ONE_NUMBER: 'Password should contain at least one number',
                SPECIAL_CHAR:
                    'Password should contain at least one special character',
            },
        },
        BUTTONS: {
            SIGN_IN: 'Sign In',
            SIGN_UP: 'Sign Up',
            SIGN_OUT: 'Sign Out',
        },
        TEXT: {
            NEW_TO_NETFLIX: 'New to Netflix?',
            SIGN_UP_NOW: 'Sign up now',
            ALREADY_REGISTERED: 'Already registered?',
            SIGN_IN_NOW: 'Sign in now',
        },
    },
    ROUTES: {
        SIGN_IN: 'login',
        BROWSE: 'browse',
        PROFILE: 'profile',
    },
    API: {
        TMDB: {
            //doesn't work in Indai without VPN
            BASE_URL: `${process.env.REACT_APP_TMDB_API_URL}`,
            IMG_URL: `${process.env.REACT_APP_TMDB_IMG_URL}`,
            VERSION: `${process.env.REACT_APP_TMDB_API_VERSION}`,
            OPTIONS: {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_TMDB_AUTH_TOKEN}`,
                },
            },
        },
        OMDB: {
            BASE_URL: `${process.env.REACT_APP_OMDB_API_URL}`,
            VERSION: `${process.env.REACT_APP_OMDB_API_VERSION}`,
            IMG_URL: `${process.env.REACT_APP_OMDB_IMG_URL}`,
        },
    },
};

export function replacePlaceholders(
    text: string,
    mapObj: { [field: string]: string }
): string {
    const keysWithDelimiter = Object.keys(mapObj).map(
        (key) => '##' + key + '##'
    );
    const re = new RegExp(keysWithDelimiter.join('|'), 'gi');
    return text.replace(re, function (matched) {
        const keyWithoutDelimiter = matched.replaceAll('#', '');
        return mapObj[keyWithoutDelimiter];
    });
}
