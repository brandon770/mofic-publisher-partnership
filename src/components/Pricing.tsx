'use client';

import { useTranslations } from 'next-intl';

export default function Pricing() {
  const t = useTranslations('pricing');

  const plans = [
    {
      key: 'pilot',
      featured: false,
      features: ['feature1', 'feature2', 'feature3', 'feature4'],
    },
    {
      key: 'standard',
      featured: true,
      features: ['feature1', 'feature2', 'feature3', 'feature4'],
    },
    {
      key: 'premium',
      featured: false,
      features: ['feature1', 'feature2', 'feature3', 'feature4'],
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`relative rounded-2xl p-8 ${
                plan.featured
                  ? 'bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-xl shadow-violet-200 scale-105 lg:scale-110'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                  {t(`${plan.key}.title`)}
                </h3>
                <p className={`text-sm mb-4 ${plan.featured ? 'text-violet-200' : 'text-gray-500'}`}>
                  {t(`${plan.key}.description`)}
                </p>
                {plan.key !== 'pilot' && (
                  <div className="mt-4">
                    <span className={`text-3xl font-bold ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                      {t(`${plan.key}.price`)}
                    </span>
                    <p className={`text-sm mt-1 ${plan.featured ? 'text-violet-200' : 'text-gray-500'}`}>
                      {t(`${plan.key}.monthly`)}
                    </p>
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.featured ? 'text-violet-200' : 'text-violet-500'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.featured ? 'text-violet-100' : 'text-gray-600'}>
                      {t(`${plan.key}.${feature}`)}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                  plan.featured
                    ? 'bg-white text-violet-600 hover:bg-violet-50'
                    : 'bg-violet-600 text-white hover:bg-violet-700'
                }`}
              >
                {t(`${plan.key}.cta`)}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-500 text-sm mt-8">
          {t('note')}
        </p>
      </div>
    </section>
  );
}
