import { View, Text } from 'react-native'
import React from 'react'

const flatListData = () => {
    const oferta = [
        {
          id: 1,
          image: require('../../images/hawaiana.jpg'),
          Description: 'Hoy jueves aprovecha tu hawaiana con un descuento de hasta 30%...',
          name: 'Hawaiana:'
        },
        {
          id: 2,
          image: require('../../images/italiana.jpg'),
          Description: 'Solo por hor compra una pizza italiana de 12 slice y llevate una 6 slice.',
          name: 'Italiana:',
        },
        {
          id: 3,
          image: require('../../images/peperoni.jpg'),
          Description: 'Por la compra de una pizza peperoni te llevas un calzone mas un pichel de te helado.',
          name: 'Peperoni:',
        }
      ];
  
}

export default flatListData 
