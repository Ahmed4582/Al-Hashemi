import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="relative h-[70vh] bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">عشيرة ولواء الهواشم</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            موقع رسمي يهدف لتوثيق وتعزيز صلة الرحم بين أبناء العشيرة والحفاظ على تراثها
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/about" className="btn bg-primary-light text-white hover:bg-primary">
              تعرف على العشيرة
            </Link>
            <Link to="/news" className="btn bg-white text-primary hover:bg-stone-100">
              آخر الأخبار
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero