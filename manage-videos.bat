@echo off
echo ========================================
echo     Video Library Manager
echo ========================================
echo.
echo 📁 Videos folder: public/videos/
echo ⚙️ Config file: config/video-config.ts
echo ⚠️  NO FALLBACKS: Only your chosen video plays
echo.
echo 🎥 CURRENT VIDEO LIBRARY:
echo.
dir "public\videos\*.mp4" /B 2>nul && (
    echo Available videos in public/videos/:
    for %%f in (public\videos\*.mp4) do echo   - %%~nxf
) || (
    echo No MP4 videos found in public/videos/
)
echo.
echo 🔄 TO ADD A NEW VIDEO:
echo 1. Copy your MP4 video to public/videos/
echo 2. Open config/video-config.ts
echo 3. Add your video to the videoLibrary object
echo 4. Change ACTIVE_VIDEO to your video's key
echo 5. Save and refresh your browser
echo.
echo 📋 VIDEO REQUIREMENTS:
echo - Format: MP4 (H.264 codec)
echo - Resolution: 1920x1080 or higher
echo - Duration: 10-60 seconds optimal
echo - File size: Under 50MB
echo.
echo ⚠️  IMPORTANT: No backup videos - make sure your video works!
echo.
choice /C YN /M "Open videos folder"
if %ERRORLEVEL%==1 explorer "public\videos"
echo.
choice /C YN /M "Open config file to manage videos"
if %ERRORLEVEL%==1 start notepad "config\video-config.ts"
echo.
echo Done! Press any key to exit...
pause > nul
