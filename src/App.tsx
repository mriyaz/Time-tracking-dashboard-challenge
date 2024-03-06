import React, { useEffect, useState } from 'react';
import db from './data.json';
import Card, { TimePeriod } from './types';
import ProfileHeader from './components/ProfileHeader';
import ActivityCard from './components/ActivityCard';

const App: React.FC = () => {
  const [cardData, setCardData] = useState<Card[]>([])
  const [timeFrame, setTimeFrame] = useState('weekly');


  useEffect(() => {
    setCardData(db);
  }, [])

  function getTitleBackground(title: string): string {
    const titleBackgrounds: { [key: string]: string } = {
      "Work": "bg-custom-light-red-work bg-[url('./images/icon-work.svg')]",
      "Play": "bg-custom-soft-blue-play bg-[url('./images/icon-play.svg')]",
      "Study": "bg-custom-light-red-study bg-[url('./images/icon-study.svg')]",
      "Exercise": "bg-custom-lime-green-exercise bg-[url('./images/icon-exercise.svg')]",
      "Social": "bg-custom-violet bg-[url('./images/icon-social.svg')]",
      "Self Care": "bg-custom-soft-orange-self-care bg-[url('./images/icon-self-care.svg')]",
    }

    return titleBackgrounds[title] || "bg-black bg-[url('./images/icon-work.svg')]";

  }


  function getTimePeriod(card: Card, timeFrame: string): TimePeriod {
    switch (timeFrame) {
      case 'daily':
        return { timespent: card.timeframes.daily, period: 'day' };
      case 'weekly':
        return { timespent: card.timeframes.weekly, period: 'week' };
      case 'monthly':
        return { timespent: card.timeframes.monthly, period: 'month' };
      default:
        return { timespent: card.timeframes.daily, period: 'day' };
    }
  }


  return (

    <main className="container mx-auto min-h-screen px-5 py-10 bg-custom-very-dark-blue font-custom-font text-white
     lg:flex lg:justify-center  lg:gap-5 lg:py-0 lg:px-0 lg:items-center">

      <div className=' lg:flex lg:justify-center  lg:gap-5 px-4'>
        {/* Profile header Component */}
        <ProfileHeader timeFrame={timeFrame} setTimeFrame={setTimeFrame} />

        {/* Activity Card List */}
        <div className="flex flex-col gap-5 lg:flex-row  lg:items-center  lg:flex-wrap lg:h-full">
          {cardData.map(card => (
            // Activity Card Component
            <ActivityCard key={card.title} card={card} timeperiod={getTimePeriod(card, timeFrame)} getTitleBackground={getTitleBackground} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
