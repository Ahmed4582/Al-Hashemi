import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitted: true,
        success: false,
        message: 'الرجاء ملء جميع الحقول المطلوبة'
      })
      return
    }
    
    // Here you would normally send data to a server
    // For demo purposes, we'll simulate a successful submission
    setTimeout(() => {
      setStatus({
        submitted: true,
        success: true,
        message: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    }, 1000)
  }
  
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <label htmlFor="name" className="block text-stone-800 mb-2">الاسم <span className="text-red-500">*</span></label>
        <input 
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-stone-800 mb-2">البريد الإلكتروني <span className="text-red-500">*</span></label>
        <input 
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="phone" className="block text-stone-800 mb-2">رقم الهاتف</label>
        <input 
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="message" className="block text-stone-800 mb-2">الرسالة <span className="text-red-500">*</span></label>
        <textarea 
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        ></textarea>
      </div>
      
      {status.submitted && (
        <div className={`p-4 mb-4 rounded-md ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {status.message}
        </div>
      )}
      
      <button 
        type="submit" 
        className="btn btn-primary w-full"
      >
        إرسال الرسالة
      </button>
    </form>
  )
}

export default ContactForm