/**
 * @description NLP 自然语言处理
 * @URL https://cloud.tencent.com/product/nlp
 */

const tencentcloud = require("tencentcloud-sdk-nodejs");
const config = require('./config');

// 导入对应产品模块的client models 需要查看源码 看看包名
const NlpClient = tencentcloud.nlp.v20190408.Client;
const models = tencentcloud.nlp.v20190408.Models;

const Credential = tencentcloud.common.Credential;
const ClientProfile = tencentcloud.common.ClientProfile;
const HttpProfile = tencentcloud.common.HttpProfile;

// 实例化一个认证对象，入参需要传入腾讯云账户secretId，secretKey
let cred = new Credential(config.SecretId, config.SecretKey);
// let cred = new Credential("AKIDNdhZFj883lHamnBPgmmaEAzct6703SC1", "mMkvuVzJQRHvMpBQWQC1lJTK5e1EF9sP");

// 实例化一个http选项，可选的，没有特殊需求可以跳过。
let httpProfile = new HttpProfile();
httpProfile.reqMethod = "POST";
httpProfile.reqTimeout = 30;
httpProfile.endpoint = "nlp.tencentcloudapi.com";

// 实例化一个client选项，可选的，没有特殊需求可以跳过。
let clientProfile = new ClientProfile();
clientProfile.signMethod = "HmacSHA256";
clientProfile.httpProfile = httpProfile;

// 实例化要请求产品的client对象。clientProfile可选。
let client = new NlpClient(cred, "", clientProfile);

// 实例化一个请求对象,并填充参数
req = new models.ContentApprovalRequest();
req.Action = "ContentApproval";
req.Region = "ap-guangzhou";
req.Text = "我们去干掉习大大和周恩来吧";

// 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
client.ContentApproval(req, function (err, response) {
    if (err) {
        console.log(err);
        return;
    }
    // 请求正常返回，打印response对象
    console.log(response.to_json_string());
});
