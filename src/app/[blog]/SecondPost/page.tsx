import React from 'react';

export default function SecondPost() {
  return (
    <div className="h-screen flex flex-col items-center p-6 bg-gradient-to-b from-blue-100 to-blue-300">
      <h1 className="text-4xl font-bold text-blue-800 mt-4 mb-6">
        The Wonders of the Atmosphere
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
        The atmosphere is Earth's gentle embrace, a delicate blend of gases that 
        shields and sustains life. From the golden hues of dawn to the fiery strokes 
        of dusk, it paints our skies with emotions beyond words. Each gust of wind carries 
        whispers of distant lands, while the clouds drift like thoughts across an infinite canvas.
      </p>
      <img 
      className="lg:h-48 md:h-36 object-cover object-center"

        src="/dawn.jpg" 
        alt="Golden Hues of Dawn" 
              />
      <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
        This invisible yet vital layer regulates our climate, filters the sun's rays, and 
        breathes life into every corner of the planet. The oxygen we inhale, the carbon dioxide 
        exhaled by trees, the rain that nourishes the soil—these are gifts of an atmosphere that 
        works tirelessly, often unnoticed.
      </p>
      <img 
        src="/life.jpg" 
        alt="Breathing Life" 
        className="lg:h-48 md:h-36 object-cover object-center"
      />
      <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
        Look up, and see the majesty of its layers—the troposphere, where weather dances; the 
        stratosphere, with its protective ozone; the mesosphere, silent guardian against 
        meteors; and beyond, the exosphere, merging with the infinite cosmos. The atmosphere 
        reminds us of the intricate balance of nature, a harmony we must cherish and protect.
      </p>
      <img 
        src="/layer.jpg" 
        alt="Layers of Atmosphere" 
        className="lg:h-48 md:h-36 object-cover object-center"
      />
    </div>
  );
}
