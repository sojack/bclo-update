'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Gallery() {
  // State for modal functionality
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCaption, setSelectedCaption] = useState<string>(' ')

  // Function to open modal
  const openModal = (src: string, caption: string) => {
    setSelectedImage(src)
    setSelectedCaption(caption)
  }

  // Function to close modal
  const closeModal = () => {
    setSelectedImage(null)
    setSelectedCaption(' ')
  }

  // Gallery images in alphabetical filename order, matching the original Gatsby site's sort.
  // Captions are mapped from the original GalleryCaptions array by position.
  const galleryItems = [
    { src: '0000001.jpg', caption: '' },
    { src: '0000002.jpg', caption: '' },
    { src: '0000003.jpg', caption: '' },
    { src: '0000004.jpg', caption: '' },
    { src: '0000005.jpg', caption: '' },
    { src: '0000006.jpg', caption: '' },
    { src: '0000007.jpg', caption: '' },
    { src: '0000008.jpg', caption: '' },
    { src: '0000009.jpg', caption: '' },
    { src: '0000010.JPG', caption: '' },
    { src: '0000011.JPG', caption: '' },
    { src: '0000012.jpeg', caption: '' },
    { src: '0000013.JPEG', caption: '' },
    { src: '0001.jpeg', caption: 'Graduation dinner 2024' },
    { src: '0002.jpeg', caption: '' },
    { src: '0003.jpeg', caption: '' },
    { src: '0004.jpeg', caption: '' },
    { src: '0005.jpeg', caption: '' },
    { src: '0006.jpeg', caption: '' },
    { src: '0007.jpeg', caption: '' },
    { src: '0008.jpeg', caption: '' },
    { src: '0009.jpeg', caption: '' },
    { src: '0010.jpeg', caption: '' },
    { src: '0011.jpeg', caption: '' },
    { src: '0012.jpeg', caption: '' },
    { src: '0013.jpeg', caption: '' },
    { src: '0014.jpeg', caption: '' },
    { src: '0015.jpeg', caption: '' },
    { src: '0016.jpeg', caption: '' },
    { src: '0017.jpeg', caption: '' },
    { src: '0018.jpeg', caption: '' },
    { src: '0019.jpeg', caption: '' },
    { src: '0020.jpeg', caption: '' },
    { src: '0021.jpeg', caption: '' },
    { src: '0022.jpeg', caption: '' },
    { src: '0023.jpeg', caption: '' },
    { src: '0024.jpeg', caption: 'Christmas 2024 night snack gathering' },
    { src: '0025.jpeg', caption: 'Christmas 2024 night snack gathering' },
    { src: 'PHOTO-2025-06-23-23-34-42.jpg', caption: '' },
    { src: 'PHOTO-2025-06-23-23-34-44.jpg', caption: '' },
    { src: 'dinner-2023.jpeg', caption: 'Christmas 2023 night snack gathering' },
    { src: 'dinner-2023-BW.jpeg', caption: 'Christmas 2023 night snack gathering' },
    { src: 'gallery-01.jpg', caption: 'Graduation Day Demonstration' },
    { src: 'gallery-02.jpg', caption: 'Graduation Day Demonstration' },
    { src: 'gallery-03.jpg', caption: 'Graduation Day Demonstration' },
    { src: 'gallery-04.jpg', caption: 'Graduation Day Demonstration' },
    { src: 'gallery-05.jpg', caption: "Sifu Benny's Family and Master S. Fung in the middle" },
    { src: 'gallery-06.jpg', caption: 'back: Sifu Benny and his students - front: Master S. Fung in the middle' },
    { src: 'gallery-07.jpg', caption: 'Sifu Benny and his students' },
    { src: 'gallery-11.jpg', caption: 'Cecilia Lo (2nd row right) and her Ving Tsun Club students @ R.H.King Academy' },
    { src: 'gallery-12.jpg', caption: 'Practising the long pole with students and colleague' },
    { src: 'gallery-13.jpg', caption: 'Students practising double sticky hands' },
    { src: 'photo-001.jpg', caption: '' },
    { src: 'photo-002.jpg', caption: '' },
    { src: 'photo-003.jpg', caption: '' },
    { src: 'photo-004.jpg', caption: '' },
    { src: 'photo-005.jpg', caption: '' },
    { src: 'photo-006.jpg', caption: '' },
    { src: 'photo-007.jpg', caption: "Sifu Benny's family with Master S. Fung and Sihen Paul" },
    { src: 'photo-008.jpg', caption: 'Sifu Benny with his wife Cecilia and Master S. Fung' },
    { src: 'photo-009.jpg', caption: 'Family graduation certificates on the wall' },
    { src: 'photo-010.jpeg', caption: 'BCLO Ving Tsub Academy female students' },
    { src: 'test-01-a.jpeg', caption: 'test #1' },
    { src: 'test-01-b.jpeg', caption: 'test #1' },
    { src: 'test-01-c.jpeg', caption: 'test #1' },
    { src: 'test-01-d.jpeg', caption: 'test #1' },
    { src: 'test-01-e.jpeg', caption: 'After test night snack with the current class!' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/bclo-logo.png"
                alt="BCLo-VingTsun Logo"
            width={80}
            height={80}
                className="mx-auto"
                unoptimized
              />
            </Link>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Gallery
            </h1>
            <p className="text-gray-600">BCLo-VingTsun Training Photos</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center" style={{ width: '300px' }}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-4 mb-2">
                  <div 
                    className="relative cursor-pointer hover:opacity-90 transition-opacity group" 
                    style={{ width: '270px', height: '200px' }}
                    onClick={() => openModal(`/images/gallery/${item.src}`, item.caption)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        openModal(`/images/gallery/${item.src}`, item.caption)
                      }
                    }}
                    aria-label={`View enlarged ${item.caption || 'gallery image'}`}
                  >
                    {/* Visual indicator for clickability */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 z-10" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                      <div className="bg-white bg-opacity-80 rounded-full p-2">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                    <Image
                      src={`/images/gallery/${item.src}`}
                      alt={item.caption || `Gallery image ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="270px"
                      unoptimized
                      priority={index < 6} // Load first 6 images with priority
                    />
                  </div>
                </div>
                {item.caption && (
                  <p className="text-center text-sm text-gray-600 max-w-xs">
                    {item.caption}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Modal for enlarged images */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.9)'
          }}
        >
          <div 
            className="bg-white rounded-lg overflow-hidden max-w-4xl max-h-[90vh] relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Close modal"
            >
              ×
            </button>
            
            <div className="relative" style={{ width: '800px', height: '600px', maxWidth: '90vw', maxHeight: '70vh' }}>
              <Image
                src={selectedImage}
                alt={selectedCaption || 'Enlarged gallery image'}
                fill
                className="object-contain"
                sizes="800px"
                unoptimized
              />
            </div>
            
            {selectedCaption && (
              <div className="p-4 bg-gray-100 border-t">
                <p className="text-center text-gray-800 text-sm">{selectedCaption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}