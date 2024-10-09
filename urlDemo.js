let url = require('url');
let address = "https://www.google.com:443/search?q=nodejs&sca_esv=2d21e178726f78f8&sxsrf=ADLYWIKBGfqsfaiU0YS6LwZBxyTzUa8-4A%3A1726211017173&source=hp&ei=yePjZvGkCOKu1sQPlY7pyQ4&iflsig=AL9hbdgAAAAAZuPx2QLbWTr-PSso0IDOZ1faejllEfN6&oq=&gs_lp=Egdnd3Mtd2l6IgAqAggAMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCSPsQUABYAHABeACQAQCYAQCgAQCqAQC4AQPIAQCYAgGgAgaoAgqYAwaSBwExoAcA&sclient=gws-wiz"
let urlObj = url.parse(address,true);
console.log(urlObj);