import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="trainingSetsContainer" style={{
      position: 'relative',
      backgroundColor: 'white',
      maxWidth: '1000px',
      padding: '100px 0 0',
      margin: 'auto',
      width: '90%',
      animationName: 'animatetop',
      animationDuration: '0.4s'
    }}>
      {/* Home link logo */}
      <div className="galleryHomeLink" style={{
        position: 'fixed',
        marginLeft: '-40px',
        top: '10px',
        left: '50%',
        width: '80px',
        height: '80px',
        zIndex: '10'
      }}>
        <Link href="/">
          <Image
            src="/images/bclo-logo.png"
            alt="BCLo-VingTsun Logo"
            width={80}
            height={80}
            style={{ width: '80px' }}
          />
        </Link>
      </div>

      <h1 style={{ fontSize: 'small', textAlign: 'center', marginBottom: '2em' }}>
        A brief introduction of <em>Sifu</em> Benny Lo:
      </h1>
      
      <div style={{ padding: '0 2em' }}>
        <div style={{ marginBottom: '2em' }}>
          <h2 style={{ fontSize: '0.9em', marginBottom: '1em' }}>
            A brief introduction of <em>Sifu</em> Benny Lo:
          </h2>
          <p style={{ fontSize: '0.8em', lineHeight: '1.3em', marginBottom: '1em' }}>
            Sifu Benny is a big fan of Chinese martial arts who studied Ving Tsun under Master Stewart H. Fung, a former student of Grand Master Yip Man in Hong Kong. Benny started to learn Ving Tsun in 1990 and graduated from Master Fung in 1994. His entire family are also students of Master Fung for many years, and his wife was the founder of the Ving Tsun Club at R.H. King Academy, TDSB where she has taught for over 18 years. Benny and his wife are still active members of Master Fung's Ving Tsun Research Class and he has been teaching Ving Tsun on a part-time basis for many years.
          </p>
        </div>
        
        <div style={{ marginBottom: '2em' }}>
          <h2 style={{ fontSize: '0.9em', marginBottom: '1em' }}>
            羅樹強師父簡介:
          </h2>
          <p style={{ fontSize: '0.8em', lineHeight: '1.3em', marginBottom: '1em' }}>
            師承詠春派馮漢師父門下, 師公乃佛山派宗師葉問。自一九九Ｏ年開始學習詠春至今,
          </p>
          <p style={{ fontSize: '0.8em', lineHeight: '1.3em' }}>
            其家人均亦先後跟隨馮漢師父門下學習詠春拳多年，他太太更在其執教的中學內(R.H.King Academy-TDSB)創立了課餘詠春班超逾十年多，他們亦經常參與馮漢師父的詠春班及研究班, 多年來並以業餘性質開班授徒。
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3em', marginBottom: '2em' }}>
        <Link 
          href="/" 
          style={{
            color: '#478eb0',
            textDecoration: 'underline',
            fontWeight: 'bold',
            fontSize: '0.9em'
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}