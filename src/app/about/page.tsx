import Header from '@/components/header/Header';
import Link from 'next/link';
import React from 'react';
import { IoIosCloudOutline } from "react-icons/io";

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="about-page">
        {/* Hero Section */}
        <section className="relative bg-red-500 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Transforming how you collaborate and engage
            </h1>
            <p className="max-w-xl mb-8">
            Linking freelancers and businesses within a decentralized network to streamline and enhance the process of finding and offering services.
              </p>
            <button className="bg-white text-red-500 px-6 py-3 rounded-full font-semibold">
             <Link href={'/contact'}>
                Join Our Community
              </Link>
            </button>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 bg-white text-gray-800">
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
            {/* Left Content */}
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-sm uppercase text-gray-500 mb-2">What is Doblier?</h3>
              <p className="text-2xl font-light leading-relaxed">
                Doblier is a decentralized labor and crowd leadership platform that connects people and enables them to work together on projects in a trustless and transparent way. Our platform is powered by the Doblier Leadership Token (DLT), which rewards users for their contributions to the network.
              </p>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 relative flex justify-center">
              <img
                src="/blub.png"
                alt="Hot Air Balloon"
                className="w-3/4 md:w-full max-w-sm"
              />
              {/* Animated Cloud Icons */}
              <IoIosCloudOutline
                className="absolute top-0 text-gray-400 text-6xl animate-moveCloud3"
              />
              <IoIosCloudOutline
                className="absolute mt-14 top-0 text-gray-400 text-6xl animate-moveCloud"
              />
              <IoIosCloudOutline
                className="absolute mt-10 top-0 text-gray-400 text-6xl animate-moveCloud2"
              />
            </div>
          </div>
        </section>

        {/* How Doblier Works Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-6">How does Doblier work?</h3>
            <p className="text-lg mb-4">
              Doblier is built on the Ethereum blockchain and is compatible with the ERC20 token standard. This allows users to create, issue, and manage digital assets, as well as exchange them with other users on the platform. We also provide a user-friendly interface that makes it easy to manage your digital assets.
            </p>
            <p className="text-lg">
              Our platform is currently in beta and is available for anyone to use. However, please note that the platform is still under development and is subject to change.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white text-gray-800">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-6">What services does Doblier offer?</h3>
            <p className="text-lg mb-4">
              Doblier is a decentralized platform that connects people and enables them to work together on projects in a trustless and transparent way. Our platform is powered by the Doblier Leadership Token (DLT), which rewards users for their contributions to the network.
            </p>
            <p className="text-lg">
              Whether you're a freelancer looking for new opportunities or a business owner seeking talented professionals to help with your project, Doblier can help you connect with the right people.
            </p>
          </div>
        </section>

        {/* Unique Value Section */}
        <section className="py-16 bg-gray-100 text-gray-800">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-6">What sets Doblier apart?</h3>
            <p className="text-lg">
              Doblier is built on the Ethereum blockchain and is compatible with the ERC20 token standard. This allows us to offer a secure and transparent platform for connecting people and working together on projects. Our user-friendly interface and easy-to-use tools make it easy to manage your digital assets and collaborate with others.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <img
                  src="/ameen-alam.png"
                  alt="Team Member 1"
                  className="rounded-full w-24 h-24 mx-auto mb-4"
                />
                <p className="font-semibold">Ameen Alam</p>
              </div>
              <div>
                <img
                  src="/sir-qasim.png"
                  alt="Team Member 2"
                  className="rounded-full w-24 h-24 mx-auto mb-4"
                />
                <p className="font-semibold">Qasim</p>
              </div>
              <div>
                <img
                  src="/sir-zia-khan.png"
                  alt="Team Member 3"
                  className="rounded-full w-24 h-24 mx-auto mb-4"
                />
                <p className="font-semibold">Zia Khan</p>
              </div>
              <div>
                <img
                  src="/Hamzah syed.png"
                  alt="Team Member 4"
                  className="rounded-full w-24 h-24 mx-auto mb-4"
                />
                <p className="font-semibold">Hamzah Syed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-red-500 text-white">
          <div className="container mx-auto px-4 flex justify-around text-center">
            <div>
              <h3 className="text-4xl font-bold">124</h3>
              <p className="text-lg">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">99%</h3>
              <p className="text-lg">Customer Satisfaction</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">235</h3>
              <p className="text-lg">Awards Won</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
