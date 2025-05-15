export const generateInvestmentPlan = (formData) => {
  // 1. Determine investment strategy based on budget and horizon
  let strategy = '';
  let recommendedProperties = [];
  let riskLevel = '';
  
  // Budget-based recommendations
  if (formData.budget === '50-100') {
    strategy = 'Focus on appreciating residential properties in emerging neighborhoods';
    recommendedProperties = ['1-2 BHK apartments', 'Small plots in developing areas'];
    riskLevel = 'Moderate';
  } else if (formData.budget === '100-250') {
    strategy = 'Diversified portfolio with mix of residential and commercial';
    recommendedProperties = ['2-3 BHK apartments', 'Small commercial spaces', 'REITs'];
    riskLevel = 'Balanced';
  } else if (formData.budget === '250-500') {
    strategy = 'Premium properties with high appreciation potential';
    recommendedProperties = ['Luxury apartments', 'Villas', 'Prime commercial spaces'];
    riskLevel = 'Growth-oriented';
  } else if (formData.budget === '500+') {
    strategy = 'Diversified high-value portfolio with land banking';
    recommendedProperties = ['Luxury properties', 'Large commercial assets', 'Strategic land parcels'];
    riskLevel = 'Aggressive';
  }

  // 2. Adjust based on investment horizon
  if (formData.horizon === 'short') {
    strategy += ' with focus on ready-to-move properties and quick returns';
    recommendedProperties = recommendedProperties.filter(prop => 
      !prop.includes('land') && !prop.includes('developing areas')
    );
    riskLevel = 'Conservative';
  } else if (formData.horizon === 'medium') {
    strategy += ' with mix of under-construction and ready properties';
  } else if (formData.horizon === 'long') {
    strategy += ' with emphasis on long-term appreciation and land banking';
    recommendedProperties.push('Future development projects');
  }

  // 3. Incorporate selected property types
  const typeRecommendations = [];
  if (formData.residential) {
    typeRecommendations.push('Residential: 20-30% allocation for stability');
  }
  if (formData.commercial) {
    typeRecommendations.push('Commercial: 15-25% allocation for higher yields');
  }
  if (formData.land) {
    typeRecommendations.push('Land: 10-15% for long-term appreciation');
  }
  if (formData.reits) {
    typeRecommendations.push('REITs: 5-10% for liquidity and diversification');
  }

  // 4. Create final plan object
  const investmentPlan = {
    personalInfo: {
      name: formData.name,
      contact: formData.email,
      location: formData.city
    },
    financialProfile: {
      budget: formData.budget,
      timeHorizon: formData.horizon,
      riskTolerance: riskLevel
    },
    strategy: strategy,
    recommendedAllocation: typeRecommendations,
    propertyRecommendations: recommendedProperties,
    actionSteps: [
      'Complete detailed financial assessment',
      'Identify 3-5 target locations',
      'Connect with recommended property advisors',
      'Schedule site visits for shortlisted properties'
    ],
    timeline: generateTimeline(formData.horizon)
  };

  return investmentPlan;
};

const generateTimeline = (horizon) => {
  const baseTimeline = [
    { month: 1, action: 'Financial assessment completion' },
    { month: 2, action: 'Property shortlisting' },
    { month: 3, action: 'Site visits and due diligence' }
  ];
  
  if (horizon === 'short') {
    return [
      ...baseTimeline,
      { month: 4, action: 'Finalize and make purchase' },
      { month: 6, action: 'Property registration complete' }
    ];
  } else if (horizon === 'medium') {
    return [
      ...baseTimeline,
      { month: 4, action: 'Initial investments in ready properties' },
      { month: 6, action: 'Identify under-construction opportunities' },
      { month: 9, action: 'Phase 2 investments' },
      { month: 12, action: 'Portfolio review' }
    ];
  } else {
    return [
      ...baseTimeline,
      { month: 4, action: 'Phase 1 investments' },
      { month: 8, action: 'Land acquisition' },
      { month: 12, action: 'Portfolio rebalancing' },
      { month: 18, action: 'Strategic additions' },
      { month: 24, action: 'Comprehensive review' }
    ];
  }
};