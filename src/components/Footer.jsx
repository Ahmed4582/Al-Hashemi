import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-primary-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">لواء الهواشم</h3>
            <p className="mb-4">
              موقع رسمي يهدف لتوثيق وتعزيز صلة الرحم بين أبناء العشيرة والحفاظ على تراثها.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary transition-colors">الرئيسية</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">عن العشيرة واللواء</Link></li>
              <li><Link to="/news" className="hover:text-secondary transition-colors">الأخبار والقرارات</Link></li>
              <li><Link to="/gallery" className="hover:text-secondary transition-colors">المعرض</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">اتصل بنا</h3>
            <address className="not-italic">
              <p className="mb-2">الأردن - محافظة إربد</p>
              <p className="mb-2">لواء الهواشم</p>
              <p className="mb-2">هاتف: +962 7 1234 5678</p>
              <p>البريد الإلكتروني: info@hawashem.org</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p>جميع الحقوق محفوظة &copy; {currentYear} - لواء الهواشم</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer