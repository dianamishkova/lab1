let colorPicker = new iro.ColorPicker('#picker', {
    layout: [
      { 
        component: iro.ui.Box,
        options: {
            width:500,
        }
      },
    ]
  });

  var colorPicker2 = new iro.ColorPicker('#slider', {
    width:320,
    layoutDirection: 'horizontal',
    layout: [
      { 
        component: iro.ui.Slider,
        options: {
          sliderType: 'hue',
        }
      },
    ]
  });