# Functions.

contains = (str, sub) ->
  'use strict'
  str.toLowerCase().includes sub.toLowerCase()

distinct = (zArr) ->
  'use strict'
  zArr.filter (index) ->
    'use strict'
    zArr.indexOf(this) == index

isProbablyNext = (item) ->
  'use strict'

  if contains(item.className, 'next')
    return true
  if contains(item.rel, 'next')
    return true

  imgs = $(item).find('img')
  hasNextImg = imgs.filter((index) ->
    if contains(@alt, 'next')
      return true
    if contains(@src, 'next')
      return true
    false
  ).size() > 0

  hasNextImg

# Doings.

nextLinks = $('a').filter (index) ->
  'use strict'
  isProbablyNext this

nextHrefs = distinct nextLinks.map (index, item) ->
  'use strict'
  item.href

prerenders = nextHrefs.map (index, addr) ->
  'use strict'
  prerenderLink = document.createElement 'link'
  prerenderLink.rel = 'prerender'
  prerenderLink.href = addr
  prerenderLink

$('head').append prerenders
