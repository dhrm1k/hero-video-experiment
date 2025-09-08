// Video Management Utilities
// Helper functions for managing your video library

import { videoLibrary, ACTIVE_VIDEO } from './video-config'

// Get all available videos
export const getAllVideos = () => {
  return Object.entries(videoLibrary).map(([key, video]) => ({
    key,
    ...video,
    isActive: key === ACTIVE_VIDEO
  }))
}

// Get video by key
export const getVideoByKey = (key: keyof typeof videoLibrary) => {
  return videoLibrary[key]
}

// Validate if video exists
export const videoExists = (key: string): key is keyof typeof videoLibrary => {
  return key in videoLibrary
}

// Get active video details
export const getActiveVideo = () => {
  return {
    key: ACTIVE_VIDEO,
    ...videoLibrary[ACTIVE_VIDEO]
  }
}

// Helper to generate video paths
export const getVideoPath = (filename: string) => {
  return `/videos/${filename}`
}

// Video validation helpers
export const validateVideoSpecs = {
  isMP4: (filename: string) => filename.toLowerCase().endsWith('.mp4'),
  hasValidSize: (sizeInMB: number) => sizeInMB <= 50,
  hasValidDuration: (durationInSeconds: number) => durationInSeconds >= 10 && durationInSeconds <= 60,
}

// Console helper for developers
export const listVideos = () => {
  console.log('🎥 Available Videos:')
  getAllVideos().forEach(video => {
    console.log(`${video.isActive ? '▶️' : '⏸️'} ${video.key}: ${video.name} (${video.duration})`)
  })
}

// Type helpers
export type VideoKey = keyof typeof videoLibrary
export type VideoInfo = typeof videoLibrary[VideoKey]
