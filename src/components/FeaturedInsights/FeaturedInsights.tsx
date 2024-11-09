import Image from 'next/image';

const FeaturedInsights = () => {
  const insights = [
    {
      title: 'NEWSROOM',
      heading: 'Doblier Cloud recognized as a Leader in Cloud Infrastructure 2024',
      image: '/Cloud recognized.jpg', // Update with your image path
      description: 'Our cloud solutions have been acknowledged for unmatched scalability and reliability.',
    },
    {
      title: 'NEWSROOM',
      heading: 'Doblier secures Top Spot in Cloud Innovation Awards 2024',
      image: '/secures Top.png', // Update with your image path
      description: 'Doblier’s groundbreaking cloud technology sets the bar for the industry.',
    },
    {
      title: 'NEWSROOM',
      heading: 'Doblier wins Global Excellence Award for Cloud Security',
      image: '/Global Excellence.png', // Update with your image path
      description: 'Our robust security solutions ensure data integrity and protect clients worldwide.',
    },
  ];

  return (
    <div id="featured">
      <h1 className="text-center text-3xl font-bold text-white bg-gray-900 py-3">Featured Insights</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-900">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full h-48">
              <Image
                src={insight.image}
                alt={insight.heading}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="p-4">
              <h4 className="text-sm uppercase text-gray-400 mb-2">{insight.title}</h4>
              <h3 className="text-lg font-bold mb-2">{insight.heading}</h3>
              <p className="text-gray-300 text-sm">{insight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedInsights;
