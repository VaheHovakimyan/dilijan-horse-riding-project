import { useEffect } from 'react';

export const useDevice = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent.toUpperCase()
    const isMac = userAgent.indexOf('MAC OS X') >= 0 || userAgent.indexOf("IPHONE OS");
    // const isMac = false
    
    const calc = document.getElementById("theme")
    if(calc){
      calc.setAttribute('data-web', isMac ? 'mac' : 'win');
    }
  }, []);
  return null;
};
