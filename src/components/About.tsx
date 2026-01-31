'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  const timeline = [
    { key: 'item1', year: '2022' },
    { key: 'item2', year: '2023' },
    { key: 'item3', year: '2025' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              {t('description1')}
            </p>
            <p className="text-lg text-gray-600 mb-6">
              {t('description2')}
            </p>
            <div className="p-6 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl border border-violet-100">
              <p className="text-gray-700 italic leading-relaxed">
                &ldquo;{t('vision')}&rdquo;
              </p>
            </div>
          </div>

          {/* Right - Timeline */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-8">
              {t('history.title')}
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-400 to-indigo-400" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.key} className="relative flex items-start pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-0 w-8 h-8 bg-white border-4 border-violet-400 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-violet-500 rounded-full" />
                    </div>

                    <div>
                      <span className="text-sm font-bold text-violet-600">{item.year}</span>
                      <p className="text-gray-700 mt-1">{t(`history.${item.key}`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
