import React from 'react';

const ContentCard = ({ data }: { data: any }) => {
    const testImg =
        'https://occ-0-769-768.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdoixr-eaoZTXLn5vpA4RjfbYegdYuswMx5k4DROX0cnaiRKoMFw1g00H34M8tFmq7yoK4oBzQPvYRXh8MFHFL3Xchbsja3UMSPS3Sp7EuS5G49tA8OIBO4gFM6JVEkFBjqd2ie0wBRQngnsXuROD1C0klJWB7yHRTZCBDjQTBejrS0jLeXK-3kDgKm0WhS3RegWxz3F6O0utxyGkL7tCILtMV1RSAIYP7OdHHnSIrq7Mbze2tyUhyF02sVDZdXb6iMWXCsJtyXDUHUKg5YEisc.webp?r=5ed';

    return (
        <div className="relative w-[20%] z-10 cursor-pointer shrink-0 rounded-sm">
            <img
                className="w-full object-cover rounded-sm"
                src={testImg}
                alt=""
            />
        </div>
    );
};

export default ContentCard;
