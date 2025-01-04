import CommentSection from '@/components/commentsection';
import React from 'react';
import Image from 'next/image';

export default function FirstPost() {
  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h1 className="text-center text-4xl font-extrabold text-purple-500 mb-4">
        The Renault Clio
      </h1>

      <div className="relative mb-6">
        <Image
          src="/pinkcar.jpg"
          alt="Pink Renault Clio"
          width={1000}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        The Renault Clio is the best-selling vehicle in Bosnia & Herzegovina in
        November.
        <br />
        <br />
        According to data by CE Auto, the Bosnian new car market drops -8.2%
        year-on-year in November to 901 sales, bringing the year-to-date tally
        up just 0.4% to 10,967. The Renault Clio (+51.4%) signs its second
        victory of the year after last April and advances to #4 year-to-date as
        a result (vs. #7 over the Full Year 2023). The rest of the Top 4 is
        monopolized by Skoda with the Fabia (+117.4%), Octavia (-19.5%), and
        Kamiq in tow. The VW Caddy (#6) and Opel Movano (#8) stay inside the Top
        10.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Bosnia & Herzegovina November 2024 – Top Models:
      </h2>

      <ul className="text-gray-600 space-y-2 mb-6">
        <li>1. Renault Clio - 53 sales (+51.4%)</li>
        <li>2. Skoda Fabia - 50 sales (+117.4%)</li>
        <li>3. Skoda Octavia - 33 sales (-19.5%)</li>
        <li>4. Skoda Kamiq - 30 sales (n/a)</li>
        <li>5. Hyundai Tucson - 28 sales (-26.3%)</li>
        <li>6. VW Caddy - 27 sales (+390.2%)</li>
        <li>7. Dacia Duster - 26 sales (+18.2%)</li>
        <li>8. Opel Movano - 22 sales (n/a)</li>
        <li>9. Kia Sportage - 16 sales (-38.5%)</li>
        <li>9. Toyota Corolla - 16 sales (-56.8%)</li>
        <li>9. Toyota Yaris Cross - 16 sales (-44.8%)</li>
        <li>n/a. VW Golf - 14 sales (-50.0%)</li>
        <li>n/a. Skoda Scala - 7 sales (-36.4%)</li>
      </ul>

      <h2 className="text-xl font-medium text-gray-800 mb-4">
        Leave A Reply Here
      </h2>
      <div className="p-4 bg-gray-100 rounded-lg shadow-inner">
        <CommentSection />
      </div>
    </div>
  );
}
