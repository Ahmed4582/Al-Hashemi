import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { bannerInfo } from '../data/about'

function Contact() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="section-title text-center mb-12">اتصل بنا</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-primary-dark">راسلنا</h2>
          <ContactForm />
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6 text-primary-dark">معلومات الاتصال</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-primary-light rounded-full p-3 ml-4">
                <FaPhone className="text-white" />
              </div>
              <div>
                <h3 className="font-bold">الهاتف</h3>
                <p className="text-stone-700">+962 7 1234 5678</p>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="bg-primary-light rounded-full p-3 ml-4">
                <FaEnvelope className="text-white" />
              </div>
              <div>
                <h3 className="font-bold">البريد الإلكتروني</h3>
                <p className="text-stone-700">info@hawashem.org</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-primary-light rounded-full p-3 ml-4">
                <FaMapMarkerAlt className="text-white" />
              </div>
              <div>
                <h3 className="font-bold">العنوان</h3>
                <p className="text-stone-700">الأردن - محافظة إربد - لواء الهواشم</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-4 text-primary-dark">موقعنا</h3>
          <Map location={bannerInfo.location} />
        </div>
      </div>
    </div>
  )
}

export default Contact