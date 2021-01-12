# shiroDemo
shiroDemo is a lightweight Discord bot using request to demonstrate usage of the [Shiro.gg](https://shirogg/api.endpoints) API  

A very simple core function allows for this

```js
function sendImage(endpoint) {
            request('https://shiro.gg/api/images/' + endpoint, {
                json: true
            }, (err, res, body) => {
                if (err || body.status !== 200) {
                    console.error(err)
                    msg.channel.send("There was an error fetching your image, please try again later.")
                } else {
                    msg.channel.send(body.url)
                }
            })
        }
```
  
## Commands   
  
### Utility  
x!help - shows help command   
x!ping - shows the bots ping to Discord and to Shiro  
x!info - shows info about the bot and the shiro.gg api

### Api  
x!endpoints - lists the avaliable endpoints  
x!api {endpoint} - returns an image from the given endpoint
   
### Developer  
x!eval {code} - evalulate js code  
    
 ## Events  
 
 message.js - handles commands  
 ready.js - sends a message to a log channel with a timestamp when the client is ready  
