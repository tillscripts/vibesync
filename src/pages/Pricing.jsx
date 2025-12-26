import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  const plans = [
    { name: 'Free', price: '$0', features: ['Ad-supported', 'Standard Audio', 'Online only'] },
    { name: 'Premium', price: '$9.99', features: ['No Ads', 'Lossless Audio', 'Offline Listening', 'Unlimited Skips'], popular: true },
    { name: 'Family', price: '$14.99', features: ['6 Accounts', 'Parental Controls', 'No Ads', 'Shared Playlists'] }
  ];

  return (
    <div className="bg-zinc-950 min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-zinc-400">Upgrade to VibeSync Premium for the ultimate listening experience.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.name} className={`p-8 rounded-2xl border ${plan.popular ? 'border-emerald-500 bg-zinc-900 ring-2 ring-emerald-500/20' : 'border-zinc-800 bg-zinc-900/50'} relative`}>
            {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-xs font-bold py-1 px-3 rounded-full">MOST POPULAR</span>}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold mb-6">{plan.price}<span className="text-sm font-normal text-zinc-500">/month</span></div>
            <ul className="space-y-4 mb-8">
              {plan.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-zinc-300 text-sm">
                  <CheckCircle2 size={18} className="text-emerald-500" /> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-full font-bold transition ${plan.popular ? 'bg-emerald-500 text-black hover:bg-emerald-400' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}>
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

