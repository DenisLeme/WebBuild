function renderSlider() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    const slides = [
      {
        image:
          'https://images.unsplash.com/photo-1619548683455-23b17c3ddc30?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000',
        heading: 'Why',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
      },
      {
        image:
          'https://images.unsplash.com/photo-1619547871672-b6562e042c1e?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000',
        heading: 'What',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
      },
      {
        image:
          'https://images.unsplash.com/photo-1619555241737-9c364cf1fbce?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000',
        heading: 'How',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
      },
    ];
  
    return React.createElement(
      Slider,
      settings,
      slides.map((slide, index) => {
        return React.createElement(
          'div',
          { key: index },
          React.createElement('img', { src: slide.image, alt: 'image' }),
          React.createElement('span', { className: 'Card-Heading' }, slide.heading),
          React.createElement('span', { className: 'Card-Text' }, slide.text)
        );
      })
    );
  }
  
  function HomeSlider() {
    useEffect(() => {
      const slider = renderSlider();
      ReactDOM.render(slider, document.getElementById('slider'));
    }, []);
  
    return React.createElement('div', { className: 'home-cards-container' }, [
      React.createElement('div', { className: 'home-feature-card' }),
      React.createElement('div', { className: 'home-feature-card1' }),
      React.createElement('div', { className: 'home-feature-card2' }),
      React.createElement('div', { id: 'slider' }),
    ]);
  }
  
  export default HomeSlider;
  