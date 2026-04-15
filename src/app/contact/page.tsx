import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
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
        Contact Us
      </h1>
      
      <div style={{ padding: '0 2em', fontSize: '0.8em', lineHeight: '1.3em' }}>
        <div style={{ marginBottom: '2em' }}>
          <h2 style={{ fontSize: '0.9em', marginBottom: '1em' }}>Contact Information</h2>
          <p style={{ marginBottom: '0.5em' }}>
            <strong>Cecilia Lo</strong> – <a href="tel:416-523-1978" style={{ color: '#478eb0', textDecoration: 'underline' }}>(416) 523-1978</a>
          </p>
          <p style={{ marginBottom: '1em' }}>
            Email: <a href="mailto:cecilo@rogers.com" style={{ color: '#478eb0', textDecoration: 'underline' }}>cecilo@rogers.com</a>
          </p>
        </div>

        <div style={{ marginBottom: '2em' }}>
          <h3 style={{ fontSize: '0.9em', marginBottom: '1em' }}>Location</h3>
          <p style={{ marginBottom: '1em' }}>
            All Saints' Church – 1100 Denison St., Markham, Ont. L3R 0Z4 (NE of Denison/Warden)
          </p>
        </div>

        <div style={{ marginBottom: '2em' }}>
          <h3 style={{ fontSize: '0.9em', marginBottom: '1em' }}>Class Schedule</h3>
          <p style={{ marginBottom: '0.5em' }}>
            Every Tuesday night from 7 – 9 pm
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