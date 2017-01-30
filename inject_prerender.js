var contains, distinct, isProbablyNext, nextHrefs, nextLinks, prerenders, toArray;

contains = function(str, sub) {
  'use strict';
  return str.toLowerCase().includes(sub.toLowerCase());
};

toArray = function(zArr) {
  'use strict';
  var trueArr;
  trueArr = new Array(zArr.size());
  zArr.each(function(index) {
    return trueArr[index] = this;
  });
  return trueArr;
};

distinct = function(zArr) {
  'use strict';
  var arr;
  arr = toArray(zArr);
  return $(arr.filter(function(item, index) {
    'use strict';
    return arr.indexOf(item) === index;
  }));
};

isProbablyNext = function(item) {
  'use strict';
  var hasNextImg, imgs;
  if (contains(item.className, 'next')) {
    return true;
  }
  if (contains(item.rel, 'next')) {
    return true;
  }
  if (contains(item.text, 'next')) {
    return true;
  }
  imgs = $(item).find('img');
  hasNextImg = imgs.filter(function(index) {
    if (contains(this.alt, 'next')) {
      return true;
    }
    if (contains(this.src, 'next')) {
      return true;
    }
    return false;
  }).size() > 0;
  return hasNextImg;
};

nextLinks = $('a').filter(function(index) {
  'use strict';
  return isProbablyNext(this);
});

nextHrefs = distinct(nextLinks.map(function(index, item) {
  'use strict';
  return item.href;
}));

prerenders = nextHrefs.map(function(index, addr) {
  'use strict';
  var prerenderLink;
  prerenderLink = document.createElement('link');
  prerenderLink.rel = 'prerender';
  prerenderLink.href = addr;
  return prerenderLink;
});

$('head').append(prerenders);
