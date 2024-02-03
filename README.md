# Link the local NodeJS server with a tunnel and open to the world

## Cloudflare tunnel

install cloudflare tunnel for MacOS
```shell
$ brew install cloudflare/cloudflare/cloudflared
```
for [other OS ](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation)

and then link it local nodejs server
```shell
$ cloudflared tunnel --url http://localhost:3000
```
**the tunnel connect automatically again when restart or crash nodejs app**
```shell
cloudflared tunnel --url http://localhost:3000
2021-07-15T20:11:29Z INF Cannot determine default configuration path. No file [config.yml config.yaml] in [~/.cloudflared ~/.cloudflare-warp ~/cloudflare-warp /etc/cloudflared /usr/local/etc/cloudflared]
2021-07-15T20:11:29Z INF Version 2021.5.9
2021-07-15T20:11:29Z INF GOOS: linux, GOVersion: devel +11087322f8 Fri Nov 13 03:04:52 2020 +0100, GoArch: amd64
2021-07-15T20:11:29Z INF Settings: map[url:http://localhost:3000]
2021-07-15T20:11:29Z INF cloudflared will not automatically update when run from the shell. To enable auto-updates, run cloudflared as a service: https://developers.cloudflare.com/argo-tunnel/reference/service/
2021-07-15T20:11:29Z INF Initial protocol h2mux
2021-07-15T20:11:29Z INF Starting metrics server on 127.0.0.1:42527/metrics
2021-07-15T20:11:29Z WRN Your version 2021.5.9 is outdated. We recommend upgrading it to 2021.7.0
2021-07-15T20:11:29Z INF Connection established connIndex=0 location=ATL
2021-07-15T20:11:32Z INF Each HA connection's tunnel IDs: map[0:cx0nsiqs81fhrfb82pcq075kgs6cybr86v9vdv8vbcgu91y2nthg]
2021-07-15T20:11:32Z INF +-------------------------------------------------------------+
2021-07-15T20:11:32Z INF |  Your free tunnel has started! Visit it:                    |
2021-07-15T20:11:32Z INF |    https://seasonal-deck-organisms-sf.trycloudflare.com     |
2021-07-15T20:11:32Z INF +-------------------------------------------------------------+
```

https://developers.cloudflare.com/pages/how-to/preview-with-cloudflare-tunnel


## Localtunnel (npm)

install and run 
```shell
$ npx localtunnel --port 3000
your url is: https://afraid-rooms-agree.loca.lt
```

**to generate same domain name everytime, set --subdomain parameter (static domain)**
```shell
$ npx localtunnel --port 3000 --subdomain aliveli
your url is: https://aliveli.loca.lt
```

## Ngrok
install ngrok for MacOS
```shell
$ brew install ngrok/ngrok/ngrok
```

configure authentication token 
```shell
$ ngrok config add-authtoken 1WW8ez*****
```

use 
``` shell
$ ngrok http 3000
```

**to generate same domain name everytime (but we can link only one static domain for free plan)**

[to create random static domain](https://dashboard.ngrok.com/cloud-edge/domains)

_positively-clean-dory.ngrok-free.app_ is my random static domain

```shell
$ ngrok http --domain=positively-clean-dory.ngrok-free.app 3000
```

