// home.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders Home component', () => {
  const { getByTestId } = render(<Home />);
  const landingElement = getByTestId('landing');
  const servicesElement = getByTestId('services');
  const galleryElement = getByTestId('gallery');
  const artistsElement = getByTestId('artists');
  const aboutUsElement = getByTestId('about-us');
  const giftVouchersElement = getByTestId('gift-vouchers');
  const footerElement = getByTestId('footer');

  expect(landingElement).toBeInTheDocument();
  expect(servicesElement).toBeInTheDocument();
  expect(galleryElement).toBeInTheDocument();
  expect(artistsElement).toBeInTheDocument();
  expect(aboutUsElement).toBeInTheDocument();
  expect(giftVouchersElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});
