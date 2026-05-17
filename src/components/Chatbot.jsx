import { Bot, MessageCircle, Send, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { chatbotContent, formspreeEndpoint, whatsappNumber } from '../data/chatbotContent'

const advisorOptions = ['website', 'chatbot', 'management', 'demos']

function createInitialMessages(copy) {
  return [
    {
      from: 'bot',
      text: copy.intro
    },
    {
      from: 'bot',
      text: copy.choose
    }
  ]
}

export function Chatbot({ onNavigate }) {
  const { language } = useLanguage()
  const copy = chatbotContent[language] || chatbotContent.es
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(() => createInitialMessages(copy))
  const [showForm, setShowForm] = useState(false)
  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)

  const whatsappUrl = useMemo(() => {
    const text = encodeURIComponent(copy.whatsappText)
    return `https://wa.me/${whatsappNumber}?text=${text}`
  }, [copy.whatsappText])

  const resetForLanguage = () => {
    setMessages(createInitialMessages(copy))
    setShowForm(false)
    setStatus('')
  }

  const addMessage = (from, text) => {
    setMessages(current => [...current, { from, text }])
  }

  const handleOption = option => {
    if (option === 'whatsapp') return
    if (option === 'form') {
      setShowForm(true)
      addMessage('user', copy.options.form)
      addMessage('bot', copy.formTitle)
      return
    }
    if (option === 'demos') {
      addMessage('user', copy.options.demos)
      addMessage('bot', copy.replies.demos)
      onNavigate('/#demos')
      return
    }
    addMessage('user', copy.options[option])
    addMessage('bot', copy.replies[option])
    addMessage('bot', copy.next)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setStatus('')

    if (!formspreeEndpoint) {
      setStatus(copy.formMissing)
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    setIsSending(true)

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      })

      if (!response.ok) throw new Error('Formspree request failed')
      form.reset()
      setShowForm(false)
      setStatus(copy.success)
      addMessage('bot', copy.success)
    } catch {
      setStatus(copy.error)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className={`chatbot-widget ${isOpen ? 'is-open' : ''}`}>
      {isOpen ? (
        <section className="chatbot-panel" aria-label={copy.title}>
          <header>
            <div>
              <span>
                <Bot size={18} />
              </span>
              <div>
                <strong>{copy.title}</strong>
                <small>{copy.status}</small>
              </div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label={copy.close}>
              <X size={18} />
            </button>
          </header>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <p className={message.from === 'user' ? 'from-user' : 'from-bot'} key={`${message.text}-${index}`}>
                {message.text}
              </p>
            ))}
          </div>

          <div className="chatbot-options">
            {advisorOptions.map(option => (
              <button type="button" key={option} onClick={() => handleOption(option)}>
                {copy.options[option]}
              </button>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              {copy.options.whatsapp}
            </a>
            <button type="button" onClick={() => handleOption('form')}>
              {copy.options.form}
            </button>
          </div>

          {showForm ? (
            <form className="chatbot-form" onSubmit={handleSubmit}>
              <input name="name" placeholder={copy.fields.name} required />
              <input name="business" placeholder={copy.fields.business} required />
              <input name="email" type="email" placeholder={copy.fields.email} required />
              <input name="phone" placeholder={copy.fields.phone} />
              <textarea name="message" placeholder={copy.fields.message} rows="3" required />
              <input name="source" type="hidden" value="Nispero Tech chatbot" />
              <button type="submit" disabled={isSending}>
                {copy.submit}
                <Send size={15} />
              </button>
            </form>
          ) : null}

          {status ? <p className="chatbot-status">{status}</p> : null}

          <button className="chatbot-reset" type="button" onClick={resetForLanguage}>
            {copy.choose}
          </button>
        </section>
      ) : null}

      <button className="chatbot-launcher" type="button" onClick={() => setIsOpen(true)} aria-label={copy.launcher}>
        <MessageCircle size={22} />
        <span>{copy.title}</span>
      </button>
    </div>
  )
}
