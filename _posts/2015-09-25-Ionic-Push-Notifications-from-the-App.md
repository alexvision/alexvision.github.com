---
layout: post
title: Ionic Push Notifications from the App
---

I started building a messaging app in Ionic yesterday, and a core feature of any decent messaging app is the push notifications. But unfortunately they aren't the simplest thing to include when you want to send them from the actual app! 

There are a fair few gotchas which you need to think about before you can get anything happening in the development environment. 

Ionic Push seems to be a easy system to send your push notifications, and they have [a great post](http://docs.ionic.io/docs/push-from-scratch) on how to get up and running with their development notifications so you can test your apps from the browser. This is great for sending notifications to the client either typing "ionic push -s" into your terminal or using a curl request like this: 

{% highlight js %}
curl -u your-private-api-key: -H "Content-Type: application/json" -H "X-Ionic-Application-Id: your-app-id" https://push.ionic.io/api/v1/push -d '{"tokens": ["your", "target", "tokens"], "notification":{"alert":"Hello World!"}}'
{% endhighlight %}

But you'll very quickly realise that all the documentation is talking about how to create a push notification from a server rather than your app initiating the notification. 

The way that Ionic Push is designed lends it well to servers initiating the push notification, and for a lot of services that works fine, but if you want to create a push notification from an event inside the app that you are making then a different approach needs to be taken. Ionic Push requires that you send your secret API key with each notification an intermediary server is needed between the device creating the notification and Ionic's servers. 

To get around this, I created a small express server which will accept a post request from the app, which contains the data that needs to be sent for the notification. The server will then create a new post request including all the sensitive data that is needed, such as the private API key mentioned above, which is not something that should be included on the clients application for security reasons. 

As an example, the server I created is available [on github](https://github.com/TRANSFIXED-PORTABELLA/TRANSFIXED-PORTABELLA/blob/master/push-server/app.js)

How this translates into actual push notifications is another problem in itself, but this should be enough to get you up and testing your own push notifications with Ionic and Ionic Push. 