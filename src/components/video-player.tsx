import React, { useState } from 'react'
import { VideoPlayerProps } from '@/types/index'
import { LoaderPinwheel } from 'lucide-react'

export const VideoPlayer = ({ videoSrc, className }: VideoPlayerProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  return (
    <section className="relative h-full w-full rounded-lg border border-gray-400 dark:border-gray-100 lg:max-h-[600px]">
      {isLoading && (
        <div className="absolute flex h-full w-full items-center justify-center rounded-lg">
          <div className="flex flex-col items-center justify-center gap-2">
            <LoaderPinwheel className="animate-spin text-white duration-1000" size={40} />
            <p className="text-lg font-semibold">Loading...</p>
          </div>
        </div>
      )}
      <div>
        <video
          src={videoSrc}
          autoPlay
          loop
          controls
          onLoadedData={() => setIsLoading(false)}

          className="h-80 w-full rounded-lg border border-gray-400 object-cover dark:border-gray-100 md:h-full"
        />
      </div>
    </section>
  )
}
