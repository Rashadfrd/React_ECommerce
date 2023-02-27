import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'

export const links = [
    {
      id: 1,
      text: 'Home',
      url: '/',
    },
    {
      id: 2,
      text: 'About',
      url: '/about',
    },
    {
      id: 3,
      text: 'Products',
      url: '/products',
    },
  ]

  export const homeInfos = [
    {
      id:1,
      icon:<GiCompass size={45} />,
      name:'Mission',
      content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
    },
    {
      id:2,
      icon:<GiDiamondHard size={45} />,
      name:'Vision',
      content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
    },
    {
      id:3,
      icon:<GiStabbedNote size={45} />,
      name:'History',
      content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
    }
  ]
  