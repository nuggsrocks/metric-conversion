module.exports = {
  units: {
    gal: { type: 'imperial', convertsTo: 'l', conversionRate: 3.78 },
    l: { type: 'metric', convertsTo: 'gal', conversionRate: 1 / 3.78 },
    mi: { type: 'imperial', convertsTo: 'km', conversionRate: 1.609344 },
    km: { type: 'metric', convertsTo: 'mi', conversionRate: 1 / 1.609344 },
    lbs: { type: 'imperial', convertsTo: 'kg', conversionRate: 0.4535924 },
    kg: { type: 'metric', convertsTo: 'lbs', conversionRate: 1 / 0.4535924 }
  }
}
