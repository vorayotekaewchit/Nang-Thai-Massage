import React, { lazy, Suspense } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { BookingBar } from './components/BookingBar';

const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="skip-link absolute left-[-9999px] focus:z-[100] focus:px-4 focus:py-3 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:no-underline"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="pb-28 md:pb-16" tabIndex={-1}>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Services />
          <About />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <BookingBar />
    </div>
  );
}
