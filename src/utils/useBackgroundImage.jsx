import { useState, useEffect } from 'react';
import DesktopBackground from '../assets/images/background-desktop.png';
import TabletBackground from '../assets/images/background-tablet.png';
import MobileBackground from '../assets/images/background-mobile.png';

import DesktopBackgroundBottom from '../assets/images/pattern-squiggly-line-bottom-desktop.svg';
import TabletMobileBackgroundBottom from '../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg';

export default function useBackgroundImage() {
  const [backgrounds, setBackgrounds] = useState({
    main: DesktopBackground,
    bottom: DesktopBackgroundBottom,
  });

  const screenWidths = [
    {
      maxWidth: 650,
      images: {
        main: MobileBackground,
        bottom: TabletMobileBackgroundBottom,
      },
    },
    {
      maxWidth: 1060,
      images: {
        main: TabletBackground,
        bottom: TabletMobileBackgroundBottom,
      },
    },
    {
      maxWidth: Infinity,
      images: {
        main: DesktopBackground,
        bottom: DesktopBackgroundBottom,
      },
    },
  ];

  useEffect(() => {
    const updateWidth = () => {
      const screenWidth = window.innerWidth;

      const { images } = screenWidths.find(
        ({ maxWidth }) => screenWidth <= maxWidth,
      );

      setBackgrounds((prevImage) => ({
        ...prevImage,
        ...images,
      }));
    };

    updateWidth(); // Set initial background
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return backgrounds;
}
