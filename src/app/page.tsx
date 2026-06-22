import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Container with exact original grid layout */}
      <div className="container" style={{
        width: '100%',
        boxSizing: 'border-box',
        display: 'grid',
        textAlign: 'center',
        maxWidth: '1000px',
        margin: '3px auto',
        padding: '0',
        gridTemplateColumns: '1fr 2fr min-content 3fr',
        gridTemplateRows: '7em 7em repeat(3, 9em) 2fr auto',
        gap: '3px 3px'
      }}>
        
        {/* Logo - spans 2x2 */}
        <div className="item item_001" style={{
          gridColumn: '1 / span 2',
          gridRow: '1 / span 2',
          backgroundColor: '#478eb0',
          display: 'grid'
        }}>
          <Image
            src="/images/bclo-logo.png"
            alt="BCLo-VingTsun Logo"
            width={300}
            height={150}
            className="bclo-logo"
            style={{
              width: '80%',
              margin: 'auto',
              maxHeight: '90%',
              objectFit: 'scale-down'
            }}
            priority
          />
        </div>

        {/* About Us */}
        <div className="item item_002 link" style={{
          gridColumn: '3 / span 1',
          gridRow: '1 / span 1',
          backgroundColor: '#f0ba7d',
          display: 'grid'
        }}>
          <Link href="/about" style={{
            alignSelf: 'center',
            margin: '0 0.5em',
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.6)',
            textDecoration: 'none'
          }}>
            About Us
          </Link>
        </div>

        {/* Photo 1 */}
        <div className="item item_003" style={{
          gridColumn: '4 / span 1',
          gridRow: '1 / span 1',
          backgroundColor: '#f5e8d0',
          backgroundImage: 'url("/images/photo-006.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'top center'
        }} />

        {/* Contact Us */}
        <div className="item item_004 link" style={{
          gridColumn: '3 / span 1',
          gridRow: '2 / span 1',
          backgroundColor: '#b3b3b3',
          display: 'grid'
        }}>
          <Link href="/contact" style={{
            alignSelf: 'center',
            margin: '0 0.5em',
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.6)',
            textDecoration: 'none'
          }}>
            Contact Us
          </Link>
        </div>

        {/* Sifu Photo with label */}
        <div className="item item_005" style={{
          gridColumn: '4 / span 1',
          gridRow: '2 / span 2',
          backgroundImage: 'url("/images/BL-bw-r1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center'
        }}>
          <h1 className="photoLabel" style={{
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            fontSize: '0.8em',
            textShadow: '0px 0px 8px rgba(0, 0, 0, 1)',
            marginTop: '1em',
            paddingBottom: '0.5em',
            width: '100%'
          }}>
            <em>Sifu</em> Benny Lo
          </h1>
        </div>

        {/* Gallery */}
        <div className="item item_006 link" style={{
          gridColumn: '1 / span 1',
          gridRow: '3 / span 1',
          backgroundColor: '#65994c',
          display: 'grid'
        }}>
          <Link href="/gallery" style={{
            alignSelf: 'center',
            margin: '0 0.5em',
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.6)',
            textDecoration: 'none'
          }}>
            Gallery
          </Link>
        </div>

        {/* Family Photo with label */}
        <div className="item item_007" style={{
          gridColumn: '2 / span 2',
          gridRow: '3 / span 1',
          backgroundImage: 'url("/images/BL--6-r1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center'
        }}>
          <h1 className="photoLabel" style={{
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            fontSize: '0.8em',
            textShadow: '0px 0px 8px rgba(0, 0, 0, 1)',
            marginTop: '1em',
            paddingBottom: '0.5em',
            width: '100%'
          }}>
            <em>Sifu</em> Benny's family and Master S. Fung
          </h1>
        </div>

        {/* Schedule Section */}
        <div className="item item_008 main_txt" style={{
          gridColumn: '4 / span 1',
          gridRow: '4 / span 2',
          backgroundColor: '#e6e6e6',
          overflow: 'scroll',
          fontSize: '0.6em',
          textAlign: 'left',
          lineHeight: '1.3em',
          padding: '1em'
        }}>
          <h1 style={{ textAlign: 'center', fontSize: '1.3em' }}>2026 Class Schedule:</h1>
          <p style={{ textAlign: 'center', marginBottom: '1em' }}>
            <em>Every Tuesday from 7-9pm</em>
          </p>
          <p><strong>April:</strong> 14, 21, 28</p>
          <p><strong>May:</strong> 5, 12, 26</p>
          <p><strong>June:</strong> 2, 9, 16, 23</p>
          <p><strong>July:</strong> 7, 14, 21, <span style={{ textDecoration: 'line-through' }}>28</span></p>
          <p><strong>Aug.:</strong> 11, 18, 25</p>
          <p><strong>September:</strong> OFF</p>
          <p><strong>Oct.:</strong> 6, 20, 27</p>
          <p><strong>Nov.:</strong> 3, 10, 17, 24</p>
          <p><strong>Dec.:</strong> 1, 8, 15</p>
        </div>

        {/* Training Sets */}
        <div className="item item_009 link" style={{
          gridColumn: '3 / span 1',
          gridRow: '4 / span 1',
          backgroundColor: '#b3b3b3',
          display: 'grid'
        }}>
          <Link href="/training-sets" style={{
            alignSelf: 'center',
            margin: '0 0.5em',
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.6)',
            textDecoration: 'none'
          }}>
            Training Sets
          </Link>
        </div>

        {/* Photo background */}
        <div className="item item_010" style={{
          gridColumn: '1 / span 2',
          gridRow: '4 / span 2',
          backgroundColor: '#f0ba7d',
          backgroundImage: 'url("/images/photo-003.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'top center'
        }} />

        {/* History */}
        <div className="item item_011 link" style={{
          gridColumn: '3 / span 1',
          gridRow: '5 / span 1',
          backgroundColor: '#478eb0',
          display: 'grid'
        }}>
          <Link href="/history" style={{
            alignSelf: 'center',
            margin: '0 0.5em',
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.6)',
            textDecoration: 'none'
          }}>
            History
          </Link>
        </div>

        {/* Philosophy Section */}
        <div className="item item_014 main_txt" style={{
          gridColumn: '1 / span 4',
          gridRow: '6 / span 2',
          backgroundColor: '#b3b3b3',
          fontSize: '0.6em',
          textAlign: 'left',
          lineHeight: '1.3em',
          padding: '1em'
        }}>
          <h1 style={{ textAlign: 'center', fontSize: '1.3em' }}>FROM FORM TO NO FORM</h1>
          <p style={{ maxWidth: '40em', margin: '0 auto 1em auto' }}>
            Ving Tsun's emphasis on close contact combat technique lends itself to the training of <strong>reflexes</strong>. Many of the unique features of Ving Tsun can be found from its famous <em>"Sticky Hand"</em> practice, the three training sets, and the <em>wooden dummy</em>.
          </p>
          <p style={{ maxWidth: '40em', margin: '0 auto 1em auto' }}>
            The development of reflexes must start with form-based training, such as the <em>training sets</em> and <em>wooden dummy</em> techniques. This will all over time build a <strong>natural reflex</strong> that can be used in the <em>"Sticky Hand"</em> practice.
          </p>
          <p style={{ maxWidth: '40em', margin: '0 auto 1em auto' }}>
            The <em>"Sticky Hand"</em> practice models real fight scenarios, but with rules. Students will be able to apply their form-learning techniques within this model, and eventually those forms will become "no form" over time as their reflexes develop.
          </p>
          <h1 style={{ textAlign: 'center', fontSize: '1.3em', marginTop: '1.5em' }}>從形至無形</h1>
          <p style={{ maxWidth: '40em', margin: '0 auto 1em auto' }}>
            詠春拳是一種近距離的搏鬥拳術，其主要訓練目的就是能夠達到出於本能反應、不花思考的應對能力！
          </p>
          <p style={{ maxWidth: '40em', margin: '0 auto 1em auto' }}>
            從有形的模式訓練-詠春的三套拳術（小念頭、尋橋和標指）再加上七節木人樁法，這全都是一種有形態的鍛鍊！然後再運用於黐手的訓練中, 時日一久就能夠產生自然反應的本能, 這就是形的誕生！
          </p>
          <p style={{ maxWidth: '40em', margin: '0 auto 1em auto' }}>
            詠春的黐手練習是一種模擬真實搏鬥但有規限方式的鍛鍊！學生將所學的拳套和木人樁法所謂有形態的技巧運用其中，長期的訓練下就會產生自然反應的感覺直至達到無形的境界！正所謂學之於有形、用之於無形，不加思索的應對能力才是練武的最高境界！
          </p>
        </div>

        {/* Footer */}
        <div className="item_footer" style={{
          backgroundColor: '#e6e6e6',
          gridColumn: '1 / span 4',
          paddingTop: '2em',
          fontSize: '0.8em'
        }}>
          <p style={{ textAlign: 'center', marginBottom: '1em' }}>
            <a href="/images/BCLO_Waiver.pdf" style={{
              color: 'red',
              textDecoration: 'underline',
              fontWeight: 'bold'
            }}>
              WAIVER: Every student must read and understand this waiver before participating in Ving Tsun activities.
            </a>
          </p>
          <p className="copyright" style={{
            fontSize: '0.7em',
            color: 'black',
            textAlign: 'center'
          }}>
            © {new Date().getFullYear()}, BCLo-VingTsun
          </p>
        </div>
      </div>
    </main>
  )
}