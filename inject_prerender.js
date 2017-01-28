
/*if !String::includes
  String::includes = ->
    'use strict'
    String::indexOf.apply(this, arguments) != -1
 */
var contains, distinct, head, isProbablyNext, links, nextHrefs, nextLinks, prerenders;

contains = function(str, sub) {
  'use strict';
  return str.toLowerCase().includes(sub.toLowerCase());
};

distinct = function(zArr) {
  'use strict';
  return zArr.filter(function(index) {
    'use strict';
    return zArr.indexOf(this) === index;
  });
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

links = $('a');

head = $('head');

nextLinks = links.filter(function(index) {
  'use strict';
  return isProbablyNext(this);
});

nextHrefs = nextLinks.map(function(index, item) {
  'use strict';
  return item.href;
});

nextHrefs = distinct(nextHrefs);

prerenders = nextHrefs.map(function(index, addr) {
  'use strict';
  var prerenderLink;
  prerenderLink = document.createElement('link');
  prerenderLink.rel = 'prerender';
  prerenderLink.href = addr;
  return prerenderLink;
});

head.append(prerenders);
