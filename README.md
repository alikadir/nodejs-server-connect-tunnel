## Sample NodeJS Server links with CloudFlare Tunnel 

install cloudflare tunnel
```shell
$ brew install cloudflare/cloudflare/cloudflared
```

and then link it local nodejs server
```shell
$ cloudflared tunnel --url http://localhost:3000
```

https://developers.cloudflare.com/pages/how-to/preview-with-cloudflare-tunnel
