# 🎥 Video Library Management Guide

Your hero video system now supports multiple local videos with easy switching! Here's how to manage your video library.

## 📁 Current Setup

- **Video Storage**: `public/videos/` (place all your videos here)
- **Configuration**: `config/video-config.ts` (manage your video library)
- **Management Script**: `manage-videos.bat` (double-click to run)
- **Utilities**: `config/video-utils.ts` (developer helpers)

## � Quick Start: Adding Your First Video

1. **Add your video file**:
   ```
   Copy: your-video.mp4 → public/videos/your-video.mp4
   ```

2. **Register in config** (`config/video-config.ts`):
   ```typescript
   'your-video': {
     src: '/videos/your-video.mp4',
     name: 'Your Video Title',
     description: 'Description of your video',
     duration: '30s',
   },
   ```

3. **Activate it**:
   ```typescript
   export const ACTIVE_VIDEO = 'your-video'
   ```

4. **Refresh browser** - Done! 🎉

## 🔄 Managing Multiple Videos

### Video Library Structure
```typescript
export const videoLibrary = {
  'video-key': {
    src: '/videos/filename.mp4',
    name: 'Display Name',
    description: 'Video description', 
    duration: 'estimated duration',
  },
  // Add more videos...
}
```

### Switching Videos
Just change this line in `config/video-config.ts`:
```typescript
export const ACTIVE_VIDEO = 'video-key' // Change to any video key
```

## 🎯 Video Requirements

### Recommended Specs
- **Resolution**: 1920x1080 (Full HD) or higher
- **Duration**: 10-60 seconds (optimal for web)
- **File Size**: Under 50MB for fast loading
- **Format**: MP4 with H.264 codec
- **Aspect Ratio**: 16:9 (landscape)

### File Naming
- Use descriptive names: `brand-intro.mp4`, `product-demo.mp4`
- No spaces: use dashes or underscores
- Keep names short but meaningful

## 🛠️ Management Tools

### Option 1: Visual Manager
- Double-click `manage-videos.bat`
- See all your videos listed
- Opens folders and config automatically

### Option 2: Manual Config
- Edit `config/video-config.ts` directly  
- Full control over all settings
- TypeScript autocomplete support

### Option 3: Programmatic (Developers)
```typescript
import { getAllVideos, getActiveVideo } from './config/video-utils'

// List all videos
console.log(getAllVideos())

// Get current active video
console.log(getActiveVideo())
```

## 📖 Example: Complete Video Setup

```typescript
// In config/video-config.ts
export const videoLibrary = {
  'brand-intro': {
    src: '/videos/brand-intro.mp4',
    name: 'Brand Introduction',
    description: 'Our company story and values',
    duration: '45s',
  },
  'product-demo': {
    src: '/videos/product-demo.mp4', 
    name: 'Product Demo',
    description: 'Key features walkthrough',
    duration: '60s',
  },
  'testimonials': {
    src: '/videos/customer-testimonials.mp4',
    name: 'Customer Stories', 
    description: 'Happy customer testimonials',
    duration: '30s',
  }
}

// Switch between videos by changing this:
export const ACTIVE_VIDEO = 'brand-intro' // or 'product-demo', 'testimonials'
```

## 🎨 Design Tips

### Video Selection
- Choose videos that complement your text overlay
- Avoid busy scenes that compete with text
- Consider color contrast with white text
- Use subtle, atmospheric footage works best

### Performance
- Optimize videos before uploading
- Use tools like HandBrake for compression
- Test on mobile devices
- Monitor loading times

## 🔧 Troubleshooting

### Video Won't Play
- Check file format (must be MP4)
- Verify file path in config
- Ensure file isn't corrupted
- Check browser console for errors

### Performance Issues
- Reduce video file size
- Lower resolution if needed
- Use video compression tools
- Consider shorter loop duration

### Mobile Issues
- Ensure `playsInline: true` is set
- Check mobile data usage
- Test on actual devices
- Consider separate mobile video

## 📱 Browser Support

Your video setup supports:
- ✅ Chrome/Edge (all versions)
- ✅ Firefox (modern versions)  
- ✅ Safari (desktop & mobile)
- ✅ Mobile browsers (iOS/Android)

---

**Need Help?** 
Check the main README.md or modify `config/video-config.js` for advanced customization.
