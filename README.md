# shiroDemo
shiroDemo is a lightweight Discord bot using request to demonstrate usage of the [Shiro.gg](https://shirogg/api.endpoints) API  

A very simple core function allows for this

```
function sendImage(endpoint) {
    request('https://shiro.gg/api/images/' + endpoint, {
        json: true
    }, (err, res, body) => {
        msg.channel.send(body.url)
    })
}
```
  
The problem with this function is that it does not check for any errors, but if a valid endpoint is given it works correctly.  
  
## Commands   
  
### Utility  
x!ping - shows the bots ping to Discord and to Shiro  

### Api  
x!endpoints - lists the avaliable endpoints
x!api [endpoint] - returns an image from the given endpoint
 
 ## Events  
 
 message.js - handles commands  
 ready.js - sends a message to a log channel with a timestamp when the client is ready  
