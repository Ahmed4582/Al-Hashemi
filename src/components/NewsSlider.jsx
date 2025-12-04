import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


function NewsSlider({ news }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true
  }

  return (
    <div className="bg-white  rounded-2xl shadow-md p-10 mb-10 text-end">
      <h2 className="text-2xl text-center font-bold mb-4 text-primary-dark">آخر الأخبار</h2>

      <Slider {...settings}>
        {news.map((item) => (
          <div key={item.id} className="px-2 ">
            <div className="bg-stone-50 mb-2 rounded-lg p-4 border-r-4 border-primary">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="mb-3 text-stone-600">{item.date}</p>
              <p className="mb-6">{item.summary}</p>
              <Link to={`/news/${item.id}`} className="btn btn-outline text-sm">
                اقرأ المزيد
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
NewsSlider.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default NewsSlider
