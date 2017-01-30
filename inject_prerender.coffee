# Functions.

contains = (str, sub) ->
  'use strict'
  str.toLowerCase().includes sub.toLowerCase()

toArray = (zArr) ->
  'use strict'
  trueArr = new Array zArr.size()
  zArr.each (index) ->
    trueArr[index] = this
  trueArr

distinct = (zArr) ->
  'use strict'
  arr = toArray zArr
  $ arr.filter (item, index) ->
    'use strict'
    arr.indexOf(item) == index

isProbablyNext = (item) ->
  'use strict'

  if contains(item.className, 'next')
    return true
  if contains(item.rel, 'next')
    return true
  if contains(item.text, 'next')
    return true

  imgs = $(item).find 'img'
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
