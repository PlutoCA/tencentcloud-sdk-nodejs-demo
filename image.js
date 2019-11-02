const {
    ImageClient
} = require('image-node-sdk');
const config = require("./config")
let AppId = config.AppId; // 腾讯云 AppId
let SecretId = config.SecretKey; // 腾讯云 SecretId
let SecretKey = config.SecretKey; // 腾讯云 SecretKey

let idCardImageUrl = 'https://back-1252665534.cos.ap-guangzhou.myqcloud.com/download.jpg';
let imgClient = new ImageClient({ AppId, SecretId, SecretKey });
imgClient.imgPornDetect({
    data: {
        
        url: idCardImageUrl,
        'Scenes.N': ["TERRORISM", 'POLITICS']
    }
}).then((result) => {
    console.log(result.body)
}).catch((e) => {
    console.log(e);
});