import React from 'react';

const IngredientsButton: React.FC = () => {
  return (
    <button
      className="
        relative                      
        inline-flex                 
        items-center justify-center   
        rounded-full
        px-8 py-3                    
        text-lg font-semibold
        bg-transparent                
        focus:outline-none focus:ring-2 focus:ring-offset-2
        transition-all duration-300 ease-in-out
        group                        
      "
    >
      {/* Псевдоэлемент для градиентной обводки */}
      <span
        className="
          absolute inset-0           
          rounded-full                
          p-[2px]                     
          overflow-hidden            
        "
        style={{
          background: 'linear-gradient(215deg, #ff5924 0%, #ffa229 100%)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
        }}
      ></span>

      {/* Текст с градиентом */}
      <span
        className="
          relative z-10               
          py-1                        
          leading-none                
        "
        style={{
          background: 'linear-gradient(215deg, #ff5924 0%, #ffa229 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent', 
          textShadow: '0 0 10px rgba(255, 162, 41, 0.5)' 
        }}
      >
        + Ingredients
      </span>
    </button>
  );
};

export default IngredientsButton;