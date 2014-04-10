intentjs
========
[![Build Status](https://travis-ci.org/andrefarzat/intentjs.svg?branch=master)](https://travis-ci.org/andrefarzat/intentjs)

#### Highly configurable sharing dialogs for the most common websites

Uses a main configuration interace among all services.


Instalation
-----------

    bower install intentjs --save


Usage
-----

The short version is
```javascript
Intent.twitter({ "text": "Text in the tweet", "via": "example", "url": "http://example.com" });
```

However, there may be some specific configuration for the service.
See below all possible services and their configurations.


### Facebook

'app_id': '',
'link': '',
'display': 'popup',
'name': '',
'caption': '',
'description': '',
'picture': '',
'source': '',
'ref': 'share',
'actions': '',
'redirect_uri': '',
'id': '',
'relative_url': '',
'feature': 'share',
'attribution_tag ' : '',

```javascript
Intent.facebook({})
```

Check the [official facebook documentation](https://developers.facebook.com/docs/sharing/reference/feed-dialog#params) for more details


## Roadmap

* facebook
 - actions
* twitter
 - actions
* google plus (gplus)
* linkedin
* pinterest
* tumblr
* reddit
* blogger
* skyrock
* http://vk.com/
* http://www.livejournal.com/
