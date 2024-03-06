import React from 'react';
import iconEllipsis from '../images/icon-ellipsis.svg';
import Card, { TimePeriod } from '../types';

interface ActivityCardProps {
    card: Card,
    timeperiod: TimePeriod,
    getTitleBackground: (title: string) => string
}

const ActivityCard: React.FC<ActivityCardProps> = ({ card, timeperiod, getTitleBackground }) => {
    return (
        <div className={`rounded-xl ${getTitleBackground(card.title)} pt-10 bg-no-repeat bg-right-top lg:w-[25%] lg:h-full lg:flex-grow`}>
            <div className="rounded-xl bg-custom-dark-blue px-7 py-10 flex flex-col gap-1 lg:px-4 lg:py-5 lg:gap-2
    hover:bg-custom-blue-intermediate">
                <div className='flex justify-between items-center lg:flex-grow'>
                    <span className='text-lg font-medium lg:text-xs'>{card.title}</span>
                    <img src={iconEllipsis} alt="Icon Ellipsis" className='hover:saturate-200' />
                </div>
                <div className='flex justify-between items-center lg:flex-col lg:items-start lg:flex-grow'>
                    <span className='text-3xl font-light'>{timeperiod.timespent.current}hrs</span>
                    <span className='lg:text-xs lg:font-light text-gray-400'>Last {timeperiod.period} - {timeperiod.timespent.previous}hrs</span>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard