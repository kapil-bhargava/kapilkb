import { useEffect } from 'react';

const LanguageSwitcher = () => {
  useEffect(() => {
    // Remove any existing translate elements to prevent duplicates
    const existingScript = document.querySelector('script[src*="translate.google"]');
    if (existingScript) return;
    
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false  // Don't auto-translate on load
      }, 'google_translate_element');
    };
    
    document.body.appendChild(script);
    
    // Cleanup function to prevent duplicate scripts
    return () => {
      if (existingScript) return;
      const scriptToRemove = document.querySelector('script[src*="translate.google"]');
      if (scriptToRemove) scriptToRemove.remove();
      delete window.googleTranslateElementInit;
    };
  }, []);
  
  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '20px', 
      left: '20px', 
      zIndex: 9999,
      background: 'white',
      padding: '4px 8px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      fontSize: '12px'
    }}>
      <div id="google_translate_element"></div>
    </div>
  );
};

export default LanguageSwitcher;