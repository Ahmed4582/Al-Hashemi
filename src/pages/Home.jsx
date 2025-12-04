import Hero from '../components/Hero'
import NewsSlider from '../components/NewsSlider'
import { Link } from 'react-router-dom'
import { newsData } from '../data/news'
import { tribeInfo, bannerInfo } from '../data/about'

function Home() {
  // Get only the latest 3 news items
  const latestNews = newsData.slice(0, 3)

  return (
    <>
      <Hero />

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <NewsSlider news={latestNews} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4 text-primary-dark">عن العشيرة</h2>
              <p className="mb-4 text-stone-700">
                {tribeInfo.history.substring(0, 200)}...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-stone-500">{tribeInfo.branches.length} فروع رئيسية</span>
                <Link to="/about" className="btn btn-outline text-sm">
                  المزيد عن العشيرة
                </Link>
              </div>
            </div>

            <div className="card ronded-2xl hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4 text-primary-dark">عن اللواء</h2>
              <p className="mb-4 text-stone-700">
                {bannerInfo.description.substring(0, 200)}...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-stone-500">عدد السكان: {bannerInfo.population}</span>
                <Link to="/about" className="btn btn-outline text-sm">
                  المزيد عن اللواء
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary-dark">تواصل معنا</h2>
            <p className="mb-6 max-w-3xl mx-auto text-lg">
              نرحب بتواصلكم واقتراحاتكم لتطوير الموقع وخدمة أبناء العشيرة بشكل أفضل
            </p>
            <Link to="/contact" className="btn btn-primary">
              اتصل بنا
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home