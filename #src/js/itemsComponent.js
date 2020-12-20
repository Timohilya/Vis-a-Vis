new Vue({
  el: '#cards',
  data: {
    items: [{
      src: './imgs/cards/cards_NoPhoto.jpg',
      alt: 'Lorem',
      loader: false,
      title: '1. Lorem Ipsum is simply dummy text',
      subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      listItems: ['Lorem Ipsum has been the industry\'s',
              'Standard dummy text ever since',
              'But also the leap into electronic typesetting']
    },{
      src: './imgs/cards/cards_NoPhoto.jpg',
      alt: 'Lorem',
      loader: false,
      title: '2. Lorem Ipsum is simply dummy text',
      subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      listItems: ['Lorem Ipsum has been the industry\'s',
              'Standard dummy text ever since',
              'But also the leap into electronic typesetting']
    },{
      src: './imgs/cards/cards_NoPhoto.jpg',
      alt: 'Lorem',
      loader: false,
      title: '3. Lorem Ipsum is simply dummy text',
      subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      listItems: ['Lorem Ipsum has been the industry\'s',
              'Standard dummy text ever since',
              'But also the leap into electronic typesetting']
    },{
      src: './imgs/cards/cards_NoPhoto.jpg',
      alt: 'Lorem',
      loader: false,
      title: '4. Lorem Ipsum is simply dummy text',
      subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      listItems: ['Lorem Ipsum has been the industry\'s',
              'Standard dummy text ever since',
              'But also the leap into electronic typesetting']
    },{
      src: './imgs/cards/cards_NoPhoto.jpg',
      alt: 'Lorem',
      loader: false,
      title: '5. Lorem Ipsum is simply dummy text',
      subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      listItems: ['Lorem Ipsum has been the industry\'s',
              'Standard dummy text ever since',
              'But also the leap into electronic typesetting']
    }]
  },
  computed: {
    mixItems() {
      let currentIndex = this.items.length, result = this.items, tmp, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        tmp = result[currentIndex];
        result[currentIndex] = result[randomIndex];
        result[randomIndex] = tmp;
      }
      result[0].loader = true;
      return result;
    }    	
  }
})