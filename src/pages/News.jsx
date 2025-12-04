import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { newsData } from '../data/news'

function NewsItem({ article }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{article.title}</h3>
        <p className="text-stone-500 mb-4">{article.date}</p>
        <p className="mb-4">{article.summary}</p>
        <div className="flex justify-end">
          <Link 
            to={`/news/${article.id}`} 
            className="btn btn-outline"
          >
            اقرأ المزيد
          </Link>
        </div>
      </div>
    </div>
  )
}

function NewsDetail({ article }) {
  if (!article) return <div>لم يتم العثور على الخبر</div>
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
        <p className="text-stone-500 mb-6">{article.date}</p>
        <div className="prose max-w-none whitespace-pre-line">
          {article.content}
        </div>
        <div className="mt-8">
          <Link to="/news" className="btn btn-outline">
            العودة إلى الأخبار
          </Link>
        </div>
      </div>
    </div>
  )
}

function News() {
  const [filter, setFilter] = useState('')
  const { id } = useParams()
  
  if (id) {
    const article = newsData.find(item => item.id === parseInt(id))
    return (
      <div className="container mx-auto py-12 px-4">
        <NewsDetail article={article} />
      </div>
    )
  }
  
  const filteredNews = newsData.filter(item => 
    item.title.includes(filter) || 
    item.summary.includes(filter) || 
    item.content.includes(filter)
  )
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="section-title text-center mb-12">الأخبار والقرارات</h1>
      
      <div className="mb-8">
        <input 
          type="text"
          placeholder="ابحث في الأخبار..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredNews.map(article => (
            <NewsItem key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-stone-500">لم يتم العثور على أخبار مطابقة للبحث</p>
        </div>
      )}
    </div>
  )
}

export default News