import React from 'react'

const Icons = (icon) => {
  switch (icon) {
    case 'Thunderstorm':
      icon='icons/thunderstorms-rain.svg'
      console.log('tormenta')
      break;

    case 'Clear':
      icon='icons/clear-day.svg'
      console.log('Despejado')
      break;
    
    case 'Clouds':
      icon='icons/partly-cloudy-day.svg'
      console.log('Nubes')
      break;
    case 'Fog':
      icon='icons/fog.svg'
      console.log('Nubes')
      break;
    case 'Haze':
      icon='icons/haze.svg'
      console.log('Bruma')
      break;
    case 'Smoke':
      icon='icons/smoke.svg'
      console.log('Humo')
      break;
    case 'Rain':
      icon='icons/rain.svg'
      console.log('Lluvia')
      break;
    case 'Snow':
      icon='icons/snow.svg'
      console.log('Nieve')
      break;
    case 'Drizzle':
      icon='icons/drizzle.svg'
      console.log('Llovizna')
      break;


      

    default:
      icon='icons/clear-day.svg'
      console.log('Despejado')
  }
  return icon
}

export default Icons