'use client';

import { useState } from 'react';
import EmotionSelector from '@/app/components/EmotionSelector.tsx';
import HeavenlyBackground from '@/app/components/UI/HeavenlyBackground.tsx';

export default function Home() {
  const [showHealing, setShowHealing] = useState(false);

  return (
    <main className="min-h-screen relative overflow-hidden">
      <HeavenlyBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
            NoorAI
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Your AI-powered spiritual companion for mental wellness and inner peace
          </p>
        </div>

        {/* Main Content */}
        {!showHealing ? (
          <div className="text-center">
            <button
              onClick={() => setShowHealing(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 spiritual-glow hover:scale-105"
            >
              Begin Healing Journey
            </button>
            
            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <div className="text-3xl mb-4">🌙</div>
                <h3 className="text-xl font-semibold mb-2">Quranic Wisdom</h3>
                <p className="text-gray-600">Personalized guidance from Islamic teachings</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <div className="text-3xl mb-4">💫</div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
                <p className="text-gray-600">Smart recommendations for your specific needs</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <div className="text-3xl mb-4">🕊️</div>
                <h3 className="text-xl font-semibold mb-2">Practical Healing</h3>
                <p className="text-gray-600">Actionable steps for spiritual and mental wellness</p>
              </div>
            </div>
          </div>
        ) : (
          <EmotionSelector />
        )}
      </div>
    </main>
  );
}