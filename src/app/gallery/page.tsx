import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
  // Hardcoded gallery images in exact order from original site with captions
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
    { src: '0011.jpeg', caption: '' },
    { src: '0012.jpeg', caption: '' },
    { src: '0013.jpeg', caption: '' },
    { src: '0015.jpeg', caption: 'Graduation dinner 2024' },
    { src: '0014.jpeg', caption: '' },
    { src: '0016.jpeg', caption: '' },
    { src: '0017.jpeg', caption: '' },
    { src: '0018.jpeg', caption: '' },
    { src: '0019.jpeg', caption: '' },
    { src: '0020.jpeg', caption: '' },
    { src: '0021.jpeg', caption: '' },
    { src: '0022.jpeg', caption: '' },
    { src: '0023.jpeg', caption: '' },
    { src: '0024.jpeg', caption: '' },
    { src: '0025.jpeg', caption: '' },
    { src: 'dinner-2023-BW.jpeg', caption: '' },
    { src: 'dinner-2023.jpeg', caption: '' },
    { src: 'gallery-01.jpg', caption: '' },
    { src: 'gallery-02.jpg', caption: '' },
    { src: 'gallery-03.jpg', caption: '' },
    { src: 'gallery-04.jpg', caption: '' },
    { src: 'gallery-05.jpg', caption: '' },
    { src: 'gallery-06.jpg', caption: '' },
    { src: 'gallery-07.jpg', caption: 'Christmas 2024 night snack gathering' },
    { src: 'gallery-11.jpg', caption: 'Christmas 2024 night snack gathering' },
    { src: 'gallery-12.jpg', caption: 'Christmas 2023 night snack gathering' },
    { src: 'gallery-13.jpg', caption: 'Christmas 2023 night snack gathering' },
    { src: 'photo-001.jpg', caption: 'Graduation Day Demonstration' },
    { src: 'photo-002.jpg', caption: 'Graduation Day Demonstration' },
    { src: 'photo-003.jpg', caption: 'Graduation Day Demonstration' },
    { src: 'photo-004.jpg', caption: 'Graduation Day Demonstration' },
    { src: 'photo-005.jpg', caption: "Sifu Benny's Family and Master S. Fung in the middle" },
    { src: 'photo-006.jpg', caption: 'back: Sifu Benny and his students - front: Master S. Fung in the middle' },
    { src: 'photo-007.jpg', caption: "Sifu Benny and his students" },
    { src: 'photo-008.jpg', caption: 'Cecilia Lo (2nd row right) and her Ving Tsun Club students @ R.H.King Academy' },
    { src: 'photo-009.jpg', caption: 'Practising the long pole with students and colleague' },
    { src: 'photo-010.jpeg', caption: 'Students practising double sticky hands' },
    { src: 'test-01-a.jpeg', caption: ' ' },
    { src: 'test-01-b.jpeg', caption: ' ' },
    { src: 'test-01-c.jpeg', caption: ' ' },
    { src: 'test-01-d.jpeg', caption: ' ' },
    { src: 'test-01-e.jpeg', caption: ' ' },
    { src: '0001.jpeg', caption: "Sifu Benny's family with Master S. Fung and Sihen Paul " },
    { src: '0002.jpeg', caption: 'Sifu Benny with his wife Cecilia and Master S. Fung' },
    { src: '0003.jpeg', caption: 'Family graduation certificates on the wall' },
    { src: '0004.jpeg', caption: 'BCLO Ving Tsub Academy female students' },
    { src: '0005.jpeg', caption: 'test #1' },
    { src: '0006.jpeg', caption: 'test #1' },
    { src: '0007.jpeg', caption: 'test #1' },
    { src: '0008.jpeg', caption: 'test #1' },
    { src: '0009.jpeg', caption: 'After test night snack with the current class!' }
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
                width={120}
                height={60}
                className="mx-auto"
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
                  <div className="relative w-full" style={{ height: '225px' }}>
                    <Image
                      src={`/images/gallery/${item.src}`}
                      alt={item.caption || `Gallery image ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="300px"
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
    </main>
  )
}