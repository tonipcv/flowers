"use client";

import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-04-12T00:00:00-03:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 sm:gap-8">
      <div className="text-center">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-2">
          <div className="font-['Cormorant_Garamond'] text-3xl sm:text-5xl font-light">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
        </div>
        <div className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/60">Dias</div>
      </div>
      <div className="text-center">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-2">
          <div className="font-['Cormorant_Garamond'] text-3xl sm:text-5xl font-light">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
        </div>
        <div className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/60">Horas</div>
      </div>
      <div className="text-center">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-2">
          <div className="font-['Cormorant_Garamond'] text-3xl sm:text-5xl font-light">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
        </div>
        <div className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/60">Minutos</div>
      </div>
      <div className="text-center">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-2">
          <div className="font-['Cormorant_Garamond'] text-3xl sm:text-5xl font-light">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
        </div>
        <div className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/60">Segundos</div>
      </div>
    </div>
  );
} 