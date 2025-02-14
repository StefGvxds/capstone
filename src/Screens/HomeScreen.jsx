import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import AboveFooter from '../components/AboveFooter';
import Footer from '../components/Footer';

export default function HomeScreen() {
    return (
      <>
          <Banner></Banner>
          <Specials></Specials>
          <Testimonials></Testimonials>
          <AboveFooter></AboveFooter>
      </>
    );
}