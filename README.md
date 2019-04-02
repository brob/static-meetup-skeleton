[![Netlify Status](https://api.netlify.com/api/v1/badges/fdd699d5-78f1-4ef4-9561-60fa8882f55c/deploy-status)](https://app.netlify.com/sites/netlify-meetup/deploys)

# User Group Starter Pack for Eleventy and Netlify

Welcome to the User Group Website Starter Pack. This is a repository that contains a skeleton for a static website for your meetup group. It's based on my experience running a [local meetup group in Memphis, Tenn](http://memphiswebworkers.com). 

## Why?

It's hard enough finding new content for your user group each month. Sometimes crafting a usable website falls by the wayside and we just use things that are available to us: Facebook Groups, Meetup Groups, Wordpress.com sites. Whatever gets the message out quickest.

If you want to retake some ownership over your user group's website, here's a great starting point with [11ty Static Site Generator](https://11ty.io) and [Netlify](https://netlify.com).

## Installation and Setup

First things first, clone, download or fork this repository.

Run `npm install` to get dependencies (there aren't too many).

You'll need to create a `.env` file locally and create environment variables on your static host of choice (this is meant for Netlify, but should work elsewhere).

You'll need the following environment variables. In your `.env` file, this should be all you'll need.

```
MEETUP_KEY = YOUR_MEETUP_API KEY
MEETUP_URL = the-url-fragment-id-of-your-meetup-group
```

To add this in Netlify, navigate to `settings > deploys > build environment variables`. From there you can add as many environment variables as you'd like.

## Customization

Out of the box, this project allows for a couple easy customizations.

In `_data/settings.json`, you can adjust global settings, such as your meetup name and your logo.

In `style.css`, there are a handful of css custom properties to customize colors. It's as barebones as can be. Feel free to extend further.

## Running Locally

To run a server locally, run the command `npm run serve`. This will create a BrowserSync server and get you up and running.

## Build Process

In your Continuous Deployment platform of choice, you'll use the command `npm run build` to build the site (you can also run `npx gulp build`). This will build into a `/dist` directory for deployment.

If you don't have a deployment pipeline, you can run `npm run build` locally and upload the `/dist` directory to your server.

## Netlify CMS Integration

This project comes with [NetlifyCMS](https://www.netlifycms.org/) built in. It's super handy to use. Even though I'm proficient in writing code for static sites, sometimes I don't want to deal with the process. Or perhaps I'm on someone else's computer and don't want to install everything.

To get fully up and running with Netlify CMS, you'll need to configure a few small details.

In your Netlify settings, you'll need to enable Netlify's Identity feature. You can have 5 users in this feature for free. You can enable this in the `Identity` panel of your site's dashboard in Netlify.

From there, you'll want to go to your `Settings` panel and navigate to your Identity Settings. Change your `Registration preferences` from "Open" to "Invite only" (unless you want anyone registering). Then at the bottom of the settings you'll enable `Git Gateway` if you want to allow folks without GitHub accounts to edit the site. Clicking `Enable` gives you a couple settings, but the default values should be good enough.

You can then proceed to your `Identity` section and send invites. Each user will need to confirm their account and set their password.

From there, you'll and your editors can navigate on your live site to http://SITE-NAME.com/admin/ to start editing content.

Currently, you can edit the homepage content, logo and site name, blog posts, and sponsor information all in NetlifyCMS.

## Use of Blog Posts

I've found that successful user groups provide their attendees with a single place to go to find notes and resources from presenters. To accomplish this, we're using 11ty's blog post collections. You can create new markdown files to do this, or use the NetlifyCMS to create new blog posts.

## Automated Deploys

That's all well and good, you say, but what about when I update meetup.com. This site is static; it won't know.

True enough. We can fix that, though. Netlify and Meetup both integrate with [Zapier](https://zapier.com). That means, you can go create a Zapier account and create a "Zap" that will run when your meetup account updates.

In your Zapier account, you'll create a new Zap. The "Trigger" will use the Meetup "New Event" app. You'll have to authenticate your Meetup account to make this work.

The "Action" for your Zap will be Netlify's "Start Deploy" action.

This flow will update the data for your site everytime you create a new event on your Meetup account. Set up your event details once and share seamlessly to your site AND Meetup.

## Clone and deploy to Netlify right now

The button below will fork this repository and automatically deploy it to a Netlify account that you log into (or create). From there, don't forget the deploy steps above (creating environment variables and setting up Identity for CMS login).

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://github.com/brob/static-meetup-skeleton)
