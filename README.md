# shiroDemo (0.0.1)
shiroDemo is a lightweight Discord bot using request to demonstrate usage of the [Shiro.gg](https://shirogg/api.endpoints) API  
  
A very simple set of core functions allows for this, that can be found in the message.js event file

```js
function post(json) {
    if (json.code !== 200) {
      msg.channel.send('There was an error fetching your image, please try again later.');
    } else {
      msg.channel.send(json.url);
    }
  }

function sendImage(endpoint) {
    if (endpoints.nsfw.includes(endpoint)) {
      // eslint-disable-next-line no-param-reassign
      endpoint = `nsfw/${endpoint}`;
    }

    fetch(`https://shiro.gg/api/images/${endpoint}`)
      // eslint-disable-next-line arrow-parens
      .then(res => res.json()).then(json => post(json));
  }
```
## Shiro.gg API

### Rate Limit: 300 RPM
[Base URL](https://shiro.gg/api)
[Endpoints](https://shiro.gg/api/endpoints)
  
## Commands   
  
### Utility  
x!help - shows help command   
x!ping - shows the bots ping to Discord and to Shiro  
x!info - shows info about the bot and the shiro.gg api  
x!botinfo - shows different stats of the bot  
x!serverinfo - shows different server stats  

### Api  
x!endpoints - lists the avaliable endpoints  
x!{endpoint} - returns an image from the given endpoint
   
### Developer  
x!eval {code} - evalulate js code  
    
## Events  
 
 message.js - handles commands and api usage  
 ready.js - sends a message to a log channel with a timestamp when the client is ready  
