import Map from '../components/Map'
import { tribeInfo, bannerInfo } from '../data/about'

function About() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="section-title text-center mb-12">عن العشيرة واللواء</h1>
      
      {/* Tribe Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-primary">{tribeInfo.name}</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold mb-4 text-primary-dark">النسب والتاريخ</h3>
          <p className="text-stone-700 whitespace-pre-line">{tribeInfo.history}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold mb-4 text-primary-dark">فروع العشيرة</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tribeInfo.branches.map((branch, index) => (
              <div 
                key={index} 
                className="border border-primary-light rounded-lg p-4 hover:bg-primary-light hover:text-white transition-colors"
              >
                <h4 className="text-lg font-bold mb-2">{branch.name}</h4>
                <p>{branch.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-primary-dark">شخصيات بارزة</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tribeInfo.prominentFigures.map((figure, index) => (
              <div key={index} className="text-center">
                <div className="h-60 w-60 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={figure.image} 
                    alt={figure.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2">{figure.name}</h4>
                <p className="text-stone-700">{figure.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Banner Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-primary">{bannerInfo.name}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-primary-dark">معلومات عامة</h3>
            <p className="mb-4"><strong>الموقع:</strong> {bannerInfo.location.name}</p>
            <p className="mb-4"><strong>عدد السكان:</strong> {bannerInfo.population}</p>
            <p className="whitespace-pre-line text-stone-700">{bannerInfo.description}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-primary-dark">الموقع الجغرافي</h3>
            <Map location={bannerInfo.location} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-primary-dark">أهم المعالم</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bannerInfo.landmarks.map((landmark, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow">
                <img 
                  src={landmark.image} 
                  alt={landmark.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold mb-2">{landmark.name}</h4>
                  <p className="text-stone-700">{landmark.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About