import React, { useState } from 'react'
import { VideoPlayerProps } from "@/types/index"
import { LoaderPinwheel } from 'lucide-react'



export const VideoPlayer = ({ videoSrc, className }: VideoPlayerProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  return (
    <section className='w-full h-full lg:max-h-[600px] rounded-lg border border-gray-400  dark:border-gray-100 relative'>
      {isLoading && (
        <div className='absolute w-full h-full   rounded-lg flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center gap-2 '>
            <LoaderPinwheel className='animate-spin duration-1000 text-white'  size={40}/>
            <p className='font-semibold text-lg'>Loading...</p>
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
          style={{ opacity: isLoading ? 0 : 1 }}
          className="w-full h-80 md:h-full rounded-lg border border-gray-400 object-cover
           dark:border-gray-100"
        />
      </div>
    </section>
  )
}
