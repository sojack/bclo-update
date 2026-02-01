import Image from 'next/image'
import Link from 'next/link'

export default function History() {
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
        Origin of Ving Tsun
      </h1>
      
      <div style={{ padding: '0 2em' }}>
        <div style={{ marginBottom: '2em' }}>
          <h2 style={{ fontSize: '0.9em', marginBottom: '1em' }}>History</h2>
          <p style={{ fontSize: '0.8em', lineHeight: '1.3em', marginBottom: '1em' }}>
            Ving-Tsun originated from Shaolin Temple – the Chinese Buddhist temple which is the source of many modern day martial arts. Ving-Tsun does not have as long a history as Tai Chi or Karate. It was founded by a female named Yim, Ving-Tsun about 400 years ago.
          </p>
          <p style={{ fontSize: '0.8em', lineHeight: '1.3em' }}>
            Since its creation, it has become one of the most famous martial arts in the southern part of China. Ving-Tsun was then brought by Master Yip, Man from the province of Canton (China) to Hong Kong in 1949. The art of "Ving-Tsun" blossomed and quickly spread throughout the world by his students. The late movie star, Bruce Lee was among them.
          </p>
        </div>
        
        <div style={{ marginBottom: '2em' }}>
          <h2 style={{ fontSize: '0.9em', marginBottom: '1em' }}>歷史</h2>
          <p style={{ fontSize: '0.8em', lineHeight: '1.3em', marginBottom: '1em' }}>
            詠春拳源於少林寺 – 該寺亦是很多現今武術的發源地！詠春拳沒有像其他武術如太極、空手道一般具有很長遠的歷史，它是由一位名嚴詠春的女士在約四百年前所始創。
          </p>
          <p style={{ fontSize: '0.8em', lineHeight: '1.3em' }}>
            詠春拳自誕生以來便成為了中國南方其中一種最負盛名 的拳術，然後在1949年由一代宗師葉問師父將拳術從中國佛山帶到香港。自此之後，詠春拳術在香港的發展一日千里，葉問宗師更是桃李滿門！他的眾多學生 -包括已故武打明星李小龍 – 並將詠春拳傳遍世界各地！
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