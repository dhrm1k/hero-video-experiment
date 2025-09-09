// Video Configuration System
// This file makes it easy to manage multiple local videos for your hero section

// Define your video library here
// Add any videos you place in the /public/videos/ folder
export const videoLibrary = {
  // Available videos (add your own here)
  'aarav-investment': {
    src: '/videos/aarav-investment-clip.mp4',
    name: 'Aarav Investment Video',
    description: 'Investment focused hero video',
    duration: '30s',
  },

  // Add more videos like this:
  // 'my-video': {
  //   src: '/videos/my-video.mp4',
  //   name: 'My Custom Video',
  //   description: 'Description of the video',
  //   duration: '45s',
  // },
} as const

// Current active video (change this to switch videos)
export const ACTIVE_VIDEO = 'aarav-investment' // Change this to any key from videoLibrary

export const videoConfig = {
  // Main hero video (automatically uses the active video)
  heroVideo: {
    src: videoLibrary[ACTIVE_VIDEO].src,
    type: 'video/mp4' as const,
    autoplay: true,
    loop: true,
    muted: true, // Start muted (browsers require this for autoplay)
    playsInline: true, // Required for mobile devices
  },
  
  // Video overlay settings - Enhanced for aesthetics
  overlay: {
    gradient: 'from-black/50 via-purple-900/30 to-black/60',
    showControls: true, // Show play/pause and mute buttons
  }
} as const

// Helper function to get current video info
export const getCurrentVideoInfo = () => videoLibrary[ACTIVE_VIDEO]

// Instructions for adding and managing videos:
// 
// 🎥 HOW TO ADD A NEW VIDEO:
// 1. Copy your video file to /public/videos/
// 2. Add an entry to the videoLibrary object above
// 3. Change ACTIVE_VIDEO to your new video's key
// 4. Refresh your browser
//
// ⚠️  NO FALLBACKS: Only your chosen video will play, or nothing if it fails
//
// 📋 VIDEO REQUIREMENTS:
// - Format: MP4 (H.264 codec recommended)
// - Resolution: 1920x1080 or higher  
// - Duration: 10-60 seconds (optimal)
// - File size: Under 50MB for web performance
// - Aspect ratio: 16:9 landscape
//
// 🔄 HOW TO SWITCH VIDEOS:
// Just change the ACTIVE_VIDEO constant above to any key from videoLibrary
//
// 🎯 EXAMPLE: Adding a new video called 'my-brand-video'
// 1. Save your video as: /public/videos/my-brand-video.mp4
// 2. Add this to videoLibrary:
//    'my-brand': {
//      src: '/videos/my-brand-video.mp4',
//      name: 'My Brand Video', 
//      description: 'Our company brand video',
//      duration: '45s',
//    },
// 3. Set: ACTIVE_VIDEO = 'my-brand'
//
// 🛠️ ADVANCED CUSTOMIZATION:
// - Modify videoConfig.overlay for different overlay effects
// - Change videoConfig.heroVideo for playback settings
// - Set showControls: false to hide video controls
