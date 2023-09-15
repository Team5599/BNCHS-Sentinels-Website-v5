# Other Documentation

**NOTE:**
**This section is outdated and needs to be re-written. It is based off a previous TypeScript project.**

## Express v3 Server / v3 REST API

This project currently uses the [BNCHS-Robotics-Server-v3 Express Server](https://github.com/Team5599/BNCHS-Robotics-Server-v3) to host our API endpoints.

> You must be a member of the GitHub organization to view this repo.

In the future, Express routes should be converted to NextJS [API routes](https://nextjs.org/docs/api-routes/introduction).

## Database

Our current MongoDB database is hosted at [cloud.mongodb.com](https://cloud.mongodb.com).

⚠️ All branches currently share access to the same database. There is no seperate development database. Until one is created, be very mindful of your changes.

Until we have a proper storage solution, backups are currently scattered and hard to locate.

> Database models & schemas are currently only found in the v3 Express Server and are being documented and migrated over. If you need access to a type that isn't migrated yet, please ask @Michael Rooplall.

## Cloudflare

While the project is hosted on Heroku, Cloudflare is responsible for handlign a variety of services:
- Caching
- Auto minificiation
- DNS Management
	-  This includes handling the beta and delta subdomains and redirection to the blog subdomain, as well as email forwarding for @team5599.com emails.
- Analytics
- DDOS Protection

Our SSL certificates are handled by Heroku.

> ℹ️ Did you know we average about 1.29k requests through Cloudflare a day?


## Miscellaneous Documentation
- How we handle custom @team5599.com emails. The difference between having custom alias as just a "forwarder" for inbound emails vs. a proper alias for both outbound and inbound emails.
- The v3 website backend has a custom NodeMailer server for sending authentication emails. It can also be adapted to send out mailing lists. 
