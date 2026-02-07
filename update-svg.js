const fs = require('fs');

// Read stats from generated JSON
const stats = JSON.parse(fs.readFileSync('stats.json', 'utf8'));

// Format numbers with commas
function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K+';
  }
  return num.toString() + '+';
}

// Generate the updated SVG content
const svgContent = `<svg width="900" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&amp;display=swap');
      
      .terminal-bg { fill: #1a1b26; }
      .terminal-border { fill: none; stroke: #7aa2f7; stroke-width: 2; }
      .header-bg { fill: #1a1b26; }
      .terminal-body { fill: #24283b; }
      
      .red-dot { fill: #ff5370; }
      .yellow-dot { fill: #ffcb6b; }
      .green-dot { fill: #c3e88d; }
      
      .mono-text {
        font-family: 'JetBrains Mono', 'Courier New', monospace;
        font-size: 14px;
      }
      
      .header-text { fill: #7aa2f7; font-weight: bold; }
      .prompt { fill: #7aa2f7; }
      .command { fill: #bb9af7; }
      .separator { fill: #565f89; }
      .label { fill: #c0caf5; }
      .value { fill: #9ece6a; font-weight: bold; }
      .info-tag { fill: #7aa2f7; }
      .scan-tag { fill: #bb9af7; }
      .done-tag { fill: #9ece6a; }
      .warning { fill: #ff9e64; font-weight: bold; }
      .loading { fill: #7aa2f7; }
      
      .cursor {
        fill: #7aa2f7;
        animation: blink 1s step-end infinite;
      }
      
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
      
      .type-command {
        opacity: 0;
        animation: fadeIn 0.1s ease-in forwards;
        animation-delay: 0.5s;
      }
      
      .type-separator {
        opacity: 0;
        animation: fadeIn 0.1s ease-in forwards;
        animation-delay: 1.2s;
      }
      
      .loading-text {
        opacity: 0;
        animation: fadeIn 0.3s ease-in forwards;
        animation-delay: 1.5s;
      }
      
      .dot1 {
        opacity: 0;
        animation: dotPulse 1.5s ease-in-out infinite;
        animation-delay: 2s;
      }
      
      .dot2 {
        opacity: 0;
        animation: dotPulse 1.5s ease-in-out infinite;
        animation-delay: 2.3s;
      }
      
      .dot3 {
        opacity: 0;
        animation: dotPulse 1.5s ease-in-out infinite;
        animation-delay: 2.6s;
      }
      
      @keyframes dotPulse {
        0%, 20% { opacity: 0; }
        40% { opacity: 1; }
        100% { opacity: 0; }
      }
      
      .line1 { opacity: 0; animation: fadeIn 0.3s ease-in forwards; animation-delay: 4s; }
      .line2 { opacity: 0; animation: fadeIn 0.3s ease-in forwards; animation-delay: 4.5s; }
      .line3 { opacity: 0; animation: fadeIn 0.3s ease-in forwards; animation-delay: 5s; }
      .line4 { opacity: 0; animation: fadeIn 0.3s ease-in forwards; animation-delay: 5.5s; }
      .line5 { opacity: 0; animation: fadeIn 0.3s ease-in forwards; animation-delay: 6s; }
      .line6 { opacity: 0; animation: fadeIn 0.3s ease-in forwards; animation-delay: 6.5s; }
      .line7 { opacity: 0; animation: fadeIn 0.3s ease-in forwards; animation-delay: 7s; }
      .line8 { opacity: 0; animation: fadeIn 0.3s ease-in forwards; animation-delay: 7.5s; }
      .bottom-sep { opacity: 0; animation: fadeIn 0.3s ease-in forwards; animation-delay: 8s; }
      .achievements { opacity: 0; animation: fadeIn 0.3s ease-in forwards; animation-delay: 8.5s; }
      .final-prompt { opacity: 0; animation: fadeIn 0.3s ease-in forwards; animation-delay: 9s; }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-5px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .progress-bar {
        fill: #7aa2f7;
        opacity: 0;
        animation: progressLoad 2.5s ease-in-out forwards;
        animation-delay: 2s;
      }
      
      @keyframes progressLoad {
        0% { opacity: 1; width: 0; }
        50% { opacity: 1; width: 300px; }
        90% { opacity: 1; width: 450px; }
        100% { opacity: 0; width: 450px; }
      }
      
      .checkmark {
        opacity: 0;
        animation: checkPop 0.5s ease-out forwards;
        animation-delay: 3.8s;
      }
      
      @keyframes checkPop {
        0% { opacity: 0; transform: scale(0); }
        50% { transform: scale(1.2); }
        100% { opacity: 1; transform: scale(1); }
      }
    </style>
  </defs>
  
  <!-- Terminal Window Background -->
  <rect class="terminal-bg" width="900" height="600" rx="12"/>
  <rect class="terminal-border" width="900" height="600" rx="12"/>
  
  <!-- Header -->
  <rect class="header-bg" width="900" height="40" rx="12"/>
  <rect class="terminal-border" width="900" height="40" rx="12"/>
  
  <!-- Traffic Lights -->
  <circle class="red-dot" cx="20" cy="20" r="6"/>
  <circle class="yellow-dot" cx="40" cy="20" r="6"/>
  <circle class="green-dot" cx="60" cy="20" r="6"/>
  
  <!-- Header Title -->
  <text class="mono-text header-text" x="90" y="25">~/github/stats.sh</text>
  
  <!-- Terminal Body -->
  <rect class="terminal-body" y="40" width="900" height="560" rx="0 0 12 12"/>
  
  <!-- Command Prompt -->
  <text class="mono-text prompt" x="30" y="80">$</text>
  <text class="mono-text command type-command" x="50" y="80">./fetch_stats.sh --user=${stats.username}</text>
  
  <!-- Separator Line -->
  <text class="mono-text separator type-separator" x="30" y="100">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</text>
  
  <!-- Loading Animation -->
  <g class="loading-text">
    <text class="mono-text loading" x="30" y="140">[</text>
    <text class="mono-text loading" x="38" y="140">●</text>
    <text class="mono-text loading dot1" x="48" y="140">●</text>
    <text class="mono-text loading dot2" x="58" y="140">●</text>
    <text class="mono-text loading dot3" x="68" y="140">●</text>
    <text class="mono-text loading" x="78" y="140">]</text>
    <text class="mono-text label" x="95" y="140">Fetching GitHub statistics...</text>
  </g>
  
  <!-- Progress Bar -->
  <rect class="progress-bar" x="30" y="155" height="4" rx="2"/>
  
  <!-- Success Checkmark -->
  <text class="mono-text done-tag checkmark" x="30" y="185">✓ Data loaded successfully</text>
  
  <!-- Stats Lines with REAL DATA -->
  <text class="mono-text line1" x="30" y="230">
    <tspan class="info-tag">[INFO]</tspan>
    <tspan class="label" dx="10">Total Commits:</tspan>
    <tspan class="value" dx="10">${formatNumber(stats.totalCommits)}</tspan>
  </text>
  
  <text class="mono-text line2" x="30" y="260">
    <tspan class="info-tag">[INFO]</tspan>
    <tspan class="label" dx="10">Contributions (${new Date().getFullYear()}):</tspan>
    <tspan class="value" dx="10">${formatNumber(stats.totalContributions)}</tspan>
  </text>
  
  <text class="mono-text line3" x="30" y="290">
    <tspan class="info-tag">[INFO]</tspan>
    <tspan class="label" dx="10">Total Repositories:</tspan>
    <tspan class="value" dx="10">${stats.totalRepos}</tspan>
  </text>
  
  <text class="mono-text line4" x="30" y="320">
    <tspan class="info-tag">[INFO]</tspan>
    <tspan class="label" dx="10">Total Stars Earned:</tspan>
    <tspan class="value" dx="10">${stats.totalStars}</tspan>
  </text>
  
  <text class="mono-text line5" x="30" y="350">
    <tspan class="scan-tag">[SCAN]</tspan>
    <tspan class="label" dx="10">Top Languages:</tspan>
    <tspan class="value" dx="10">${stats.topLanguages.slice(0, 4).join(', ')}</tspan>
  </text>
  
  <text class="mono-text line6" x="30" y="380">
    <tspan class="scan-tag">[SCAN]</tspan>
    <tspan class="label" dx="10">Performance:</tspan>
    <tspan class="warning" dx="10">OPTIMIZED ⚡ &lt;200ms</tspan>
  </text>
  
  <text class="mono-text line7" x="30" y="410">
    <tspan class="info-tag">[INFO]</tspan>
    <tspan class="label" dx="10">Focus Areas:</tspan>
    <tspan class="value" dx="10">Real-Time Systems, Mobile Dev</tspan>
  </text>
  
  <text class="mono-text line8" x="30" y="440">
    <tspan class="done-tag">[DONE]</tspan>
    <tspan class="label" dx="10">System Status:</tspan>
    <tspan class="value" dx="10">OPERATIONAL ✓</tspan>
  </text>
  
  <!-- Separator -->
  <text class="mono-text separator bottom-sep" x="30" y="470">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</text>
  
  <!-- Achievement Badges -->
  <text class="mono-text achievements" x="30" y="510">
    <tspan class="label">🏆 Achievements:</tspan>
    <tspan class="value" dx="10">200+ LeetCode</tspan>
    <tspan class="separator" dx="10">|</tspan>
    <tspan class="value" dx="10">${stats.totalRepos} Projects</tspan>
    <tspan class="separator" dx="10">|</tspan>
    <tspan class="value" dx="10">Real-Time Expert</tspan>
  </text>
  
  <!-- Bottom Prompt with Blinking Cursor -->
  <g class="final-prompt">
    <text class="mono-text prompt" x="30" y="555">$</text>
    <rect class="cursor" x="50" y="543" width="10" height="16"/>
  </g>
  
  <!-- Footer Info -->
  <text class="mono-text" x="30" y="585" style="fill: #565f89; font-size: 10px; opacity: 0; animation: fadeIn 0.3s ease-in forwards; animation-delay: 9.5s;">
    Last updated: ${new Date(stats.updatedAt).toLocaleDateString()} • Built with ❤️ and lots of ☕
  </text>
</svg>`;

// Write the updated SVG
fs.writeFileSync('images/terminal-stats.svg', svgContent);
console.log('✓ SVG updated with real GitHub stats!');
console.log('Stats:', stats);
