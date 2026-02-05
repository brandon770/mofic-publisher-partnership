'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const stats = useTranslations('stats');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-violet-100 rounded-full mb-8">
            <span className="w-2 h-2 bg-violet-500 rounded-full mr-2 animate-pulse" />
            <span className="text-violet-700 text-sm font-medium">Publisher Partnership Program</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t('title')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              {t('subtitle')}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            {t('description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-violet-600 text-white rounded-xl font-semibold text-lg hover:bg-violet-700 transform hover:scale-105 transition-all shadow-lg shadow-violet-200"
            >
              {t('cta')}
            </a>
            <a
              href="#benefits"
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all border border-gray-200"
            >
              {t('learnMore')}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-violet-600 mb-1">{stats('stat1.value')}</div>
              <div className="text-gray-500 text-sm">{stats('stat1.label')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-violet-600 mb-1">{stats('stat2.value')}</div>
              <div className="text-gray-500 text-sm">{stats('stat2.label')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-violet-600 mb-1">{stats('stat3.value')}</div>
              <div className="text-gray-500 text-sm">{stats('stat3.label')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-violet-600 mb-1">{stats('stat4.value')}</div>
              <div className="text-gray-500 text-sm">{stats('stat4.label')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
