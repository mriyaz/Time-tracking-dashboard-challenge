import React from 'react';
import imgJeremy from '../images/image-jeremy.png';

interface ProfileHeaderProps {
    timeFrame: string,
    setTimeFrame: React.Dispatch<React.SetStateAction<string>>
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ timeFrame, setTimeFrame }) => {
    return (
        <header className="rounded-xl bg-custom-dark-blue lg:flex lg:flex-col">
            {/* Pic & Name info */}
            <div className='rounded-xl bg-custom-blue p-7 flex gap-5  lg:flex-col lg:items-start
  justify-left items-center'>
                <div className='w-[25%]'>
                    <img src={imgJeremy} alt="Jeremy image" className='rounded-full ' /></div>
                <div className="flex flex-col gap-0 justify-center">
                    <span>Report for</span>
                    <h1 className='text-2xl'>Jeremy Robson</h1>
                </div>
            </div>
            {/* Report Period Selection */}
            <div className="flex justify-around items-center p-6 text-lg lg:flex-col lg:items-start lg:text-sm lg:gap-4">
                {['daily', 'weekly', 'monthly'].map(period => (
                    <span onClick={() => setTimeFrame(period)} className={`hover:cursor-pointer ${timeFrame === period ?
                        'text-white' : 'text-gray-400'} hover:text-white`}>
                        {period.charAt(0).toUpperCase() + period.slice(1)}</span>
                ))}

            </div>
        </header>
    )
}

export default ProfileHeader