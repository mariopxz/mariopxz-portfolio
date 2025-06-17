import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import './index.css'
import App from './App.tsx'
import en from '../locales/en/translation.json'
import es from '../locales/es/translation.json'
import educationES from '../locales/es/education.json'
import educationEN from '../locales/en/education.json'
import jobsES from '../locales/es/jobs.json'
import jobsEN from '../locales/en/jobs.json'
import projectsES from '../locales/es/projects.json'
import projectsEN from '../locales/en/projects.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
      education: educationEN,
      jobs: jobsEN,
      projects: projectsEN
    },
    es: {
      translation: es,
      education: educationES,
      jobs: jobsES,
      projects: projectsES
    }
  },
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
