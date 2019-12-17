import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Lander
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#características">
          Características
        </AnchorLink>
        <AnchorLink className="px-4" href="#servicios">
          Servicios
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4" href="#reseñas">
          Reseñas
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Solicita Aquí</Button>
      </div>
    </div>
  </header>
);

export default Header;
