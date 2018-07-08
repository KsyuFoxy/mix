var Glide = require('@glidejs/glide').default;

var glide = new Glide('.glide', {
  type: 'carousel',
  perView: 1,
  focusAt: 'center'
});

glide.mount({});
