import React from 'react';

export function JerseySvg({
  config = {},
  view = 'front', // 'front' | 'back'
  width = 340,
  height = 420
}) {
  const {
    primaryColor = '#1D2F8C',
    secondaryColor = '#F2A33A',
    useGradient = true,
    gradientAngle = 135,
    playerName = 'AZIZ',
    playerNumber = '10',
    fontStyle = 'sport',
    frontText = 'CHAMPION',
    frontTextColor = '#FFFFFF',
    backTextColor = '#FFFFFF',
    shortsColor = '#1D2F8C',
    shortsStripeColor = '#F2A33A',
    hasShorts = true,
    logoUrl = null,
    hasCaptainPatch = false,
    hasFlagPatch = true,
    hasStarPatch = false,
    printType = 'sublimation' // 'sublimation' | 'reflective' | 'goldFoil'
  } = config;

  // Font family mapping
  const fontFamilies = {
    sport: '"Teko", "Impact", "Arial Black", sans-serif',
    classic: '"Montserrat", "Helvetica Neue", sans-serif',
    bold: '"Black Ops One", "Impact", sans-serif',
    hand: '"Caveat", "Brush Script MT", cursive',
    retro: '"Press Start 2P", "Courier New", monospace',
    modern: '"Space Grotesk", "Inter", sans-serif'
  };

  const currentFont = fontFamilies[fontStyle] || fontFamilies.sport;

  // Print effect styling
  let textColorFilter = '';
  if (printType === 'reflective') {
    textColorFilter = 'drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.9))';
  } else if (printType === 'goldFoil') {
    textColorFilter = 'drop-shadow(0px 2px 4px rgba(212, 175, 55, 0.8))';
  }

  // Calculate gradient coords from angle
  const rad = (gradientAngle * Math.PI) / 180;
  const x1 = Math.round(50 + Math.cos(rad + Math.PI) * 50) + '%';
  const y1 = Math.round(50 + Math.sin(rad + Math.PI) * 50) + '%';
  const x2 = Math.round(50 + Math.cos(rad) * 50) + '%';
  const y2 = Math.round(50 + Math.sin(rad) * 50) + '%';

  return (
    <div className="jersey-svg-container relative flex flex-col items-center justify-center select-none transition-all duration-300 transform hover:scale-[1.02]">
      <svg
        width={width}
        height={height}
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-2xl"
      >
        <defs>
          {/* Gradient for Jersey */}
          <linearGradient id="jerseyGrad" x1={x1} y1={y1} x2={x2} y2={y2}>
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={useGradient ? secondaryColor : primaryColor} />
          </linearGradient>

          {/* Foil effect gradient */}
          <linearGradient id="goldFoilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4D0" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A6B0F" />
          </linearGradient>

          {/* Shadow Filter */}
          <filter id="jerseyShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.3" />
          </filter>

          {/* Fabric Texture Mesh */}
          <pattern id="fabricTexture" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M 0 4 L 4 0 M 0 0 L 4 4" stroke="#ffffff" strokeWidth="0.3" strokeOpacity="0.08" />
          </pattern>
        </defs>

        {/* --- SHORTS SECTION --- */}
        {hasShorts && (
          <g id="shortsGroup" transform="translate(85, 290)">
            {/* Left Leg */}
            <path
              d="M 30 0 L 105 0 L 95 120 L 10 120 Z"
              fill={shortsColor}
              stroke="#111"
              strokeWidth="2"
            />
            {/* Right Leg */}
            <path
              d="M 125 0 L 200 0 L 220 120 L 135 120 Z"
              fill={shortsColor}
              stroke="#111"
              strokeWidth="2"
            />
            {/* Crotch Center */}
            <path d="M 105 0 L 125 0 L 120 40 L 110 40 Z" fill={shortsColor} />

            {/* Shorts Side Stripe */}
            <path d="M 30 0 L 42 0 L 22 120 L 10 120 Z" fill={shortsStripeColor} />
            <path d="M 200 0 L 188 0 L 208 120 L 220 120 Z" fill={shortsStripeColor} />

            {/* Shorts Number (Left Leg, Front View) */}
            {view === 'front' && playerNumber && (
              <text
                x="45"
                y="95"
                fill={printType === 'goldFoil' ? 'url(#goldFoilGrad)' : '#FFFFFF'}
                fontSize="24"
                fontWeight="900"
                fontFamily={currentFont}
                style={{ filter: textColorFilter }}
              >
                {playerNumber}
              </text>
            )}
          </g>
        )}

        {/* --- JERSEY BODY MAIN --- */}
        <g id="jerseyMain" filter="url(#jerseyShadow)">
          {/* Main Body Base */}
          <path
            d="M 110 45 
               C 140 65, 260 65, 290 45 
               L 350 90 
               L 320 170 
               L 285 150 
               L 285 320 
               C 200 330, 200 330, 115 320 
               L 115 150 
               L 80 170 
               L 50 90 
               Z"
            fill="url(#jerseyGrad)"
            stroke="#111111"
            strokeWidth="2.5"
          />

          {/* Fabric Mesh Overlay */}
          <path
            d="M 110 45 
               C 140 65, 260 65, 290 45 
               L 350 90 
               L 320 170 
               L 285 150 
               L 285 320 
               C 200 330, 200 330, 115 320 
               L 115 150 
               L 80 170 
               L 50 90 
               Z"
            fill="url(#fabricTexture)"
          />

          {/* Sleeves Stripes Accent */}
          <path d="M 50 90 L 80 170 L 68 178 L 38 98 Z" fill={secondaryColor} />
          <path d="M 350 90 L 320 170 L 332 178 L 362 98 Z" fill={secondaryColor} />

          {/* Collar Trim */}
          <path
            d="M 140 50 C 170 85, 230 85, 260 50 C 240 65, 160 65, 140 50 Z"
            fill={secondaryColor}
            stroke="#111"
            strokeWidth="1.5"
          />
          <path
            d="M 155 52 C 180 72, 220 72, 245 52 L 235 48 C 215 62, 185 62, 165 48 Z"
            fill="#FFFFFF"
          />
        </g>

        {/* --- FRONT VIEW ELEMENTS --- */}
        {view === 'front' && (
          <g id="frontContent">
            {/* Champion Star Patch (Above Emblem) */}
            {hasStarPatch && (
              <polygon
                points="160,85 163,93 172,93 165,98 167,106 160,101 153,106 155,98 148,93 157,93"
                fill="#FFD700"
                stroke="#B8860B"
                strokeWidth="0.5"
              />
            )}

            {/* Team Crest / Logo Placeholder (Left Chest) */}
            <g transform="translate(140, 100)">
              {logoUrl ? (
                <image href={logoUrl} width="40" height="40" />
              ) : (
                <g>
                  <path
                    d="M 20 0 L 40 10 L 40 30 C 40 45, 20 55, 20 55 C 20 55, 0 45, 0 30 L 0 10 Z"
                    fill={secondaryColor}
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
                  <text
                    x="20"
                    y="32"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="16"
                    fontWeight="bold"
                  >
                    FRM
                  </text>
                </g>
              )}
            </g>

            {/* Brand Logo (Right Chest) */}
            <g transform="translate(230, 110)">
              <circle cx="15" cy="15" r="14" fill="#FFFFFF" opacity="0.9" />
              <path d="M 8 20 L 15 8 L 22 20 Z" fill={primaryColor} />
            </g>

            {/* Front Chest Sponsor Text */}
            <text
              x="200"
              y="200"
              textAnchor="middle"
              fill={printType === 'goldFoil' ? 'url(#goldFoilGrad)' : frontTextColor}
              fontSize="28"
              fontWeight="900"
              fontFamily={currentFont}
              letterSpacing="2"
              style={{ filter: textColorFilter }}
            >
              {frontText || 'FORMO'}
            </text>

            {/* Captain Armband Patch (Left Sleeve) */}
            {hasCaptainPatch && (
              <g transform="translate(62, 130)">
                <rect width="25" height="18" fill="#FFCC00" rx="3" stroke="#111" strokeWidth="1" />
                <text x="12.5" y="14" textAnchor="middle" fill="#000" fontSize="14" fontWeight="900">
                  C
                </text>
              </g>
            )}

            {/* Uzbekistan Flag Patch (Right Sleeve) */}
            {hasFlagPatch && (
              <g transform="translate(310, 130)">
                <rect width="26" height="16" fill="#0099B5" rx="2" stroke="#FFF" strokeWidth="1" />
                <rect y="5.3" width="26" height="5.3" fill="#FFFFFF" />
                <rect y="10.6" width="26" height="5.3" fill="#1EB53A" />
                {/* Red stripe dividers */}
                <line x1="0" y1="5.3" x2="26" y2="5.3" stroke="#D21034" strokeWidth="0.8" />
                <line x1="0" y1="10.6" x2="26" y2="10.6" stroke="#D21034" strokeWidth="0.8" />
              </g>
            )}
          </g>
        )}

        {/* --- BACK VIEW ELEMENTS --- */}
        {view === 'back' && (
          <g id="backContent">
            {/* Player Name */}
            <text
              x="200"
              y="135"
              textAnchor="middle"
              fill={printType === 'goldFoil' ? 'url(#goldFoilGrad)' : backTextColor}
              fontSize="26"
              fontWeight="900"
              fontFamily={currentFont}
              letterSpacing="3"
              style={{ filter: textColorFilter }}
            >
              {(playerName || 'PLAYER').toUpperCase()}
            </text>

            {/* Player Big Number */}
            <text
              x="200"
              y="245"
              textAnchor="middle"
              fill={printType === 'goldFoil' ? 'url(#goldFoilGrad)' : backTextColor}
              fontSize="90"
              fontWeight="900"
              fontFamily={currentFont}
              style={{ filter: textColorFilter }}
            >
              {playerNumber || '10'}
            </text>
          </g>
        )}
      </svg>

      {/* Realistic Shadow effect on floor */}
      <div className="w-48 h-4 bg-black/20 rounded-full blur-md -mt-4"></div>
    </div>
  );
}
