# Polka + Wildcard RPC Playground

[Wildcard][wcrd] is a small server/client library to create 'functions as an API'.
In short, this is an easy way to create an RPC style API in Node.
There are plug and play middleware for some server libraries but, not for Polka.

[Polka][plka] is a tiny server library that's much more performant over [Express][exp].
The small lib plus something like distroless Docker containers makes for a very performant image.

## Inspiration

Having written many a GraphQL and REST API over the years,
I found there to be a distinct none-need for these for internal APIs.

Often times internal APIs end up being a miss-mash of RPC like calls.
After looking around at the ecosystem,
I landed on trying Wildcard and seeing how competant it could be for internal style API development.

## Current State

__Spike__: Still exploratory from the server side, no 'functioning' client, and no tests.

## What's Left

- [X] Implement the client to consume an endpoint
- [X] Build some scripts to automate the startup/building of client + server
- [ ] Get type signatures fixed for client + server synergy
- [ ] Explore actual `async` style return needs from endpoints
- [ ] Wire in some TAP request type tests

[wcrd]: https://github.com/reframejs/wildcard-api
[plka]: https://github.com/lukeed/polka
[exp]: https://expressjs.com/
