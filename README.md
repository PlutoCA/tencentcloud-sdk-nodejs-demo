# tencentcloud-sdk-nodejs-demo
腾讯云 node.js sdk demo

最近研究一些腾讯云的东西, 发现 腾讯云的文档是真的难哈
自己在这里做一些记录，方便自己和别人查看


`// 导入对应产品模块的client models` 
SDK Readme 这句话 找了我半天也没看懂也没在腾讯云API文档里面找到，后面研究他们demo 才发现得去翻源码 太难了


简单分析一哈

```javascript
    /**
     * @description NLP 自然语言处理
     * @URL https://cloud.tencent.com/product/nlp
     */
    const tencentcloud = require("tencentcloud-sdk-nodejs");
    // 导入对应产品模块的client models 需要查看源码 看看包名
    /** 
     * @description nlp  👉 这个是你要调用的API缩写 可以在腾讯云的官方文档查到，如果没找到 就找他请求的域名 
     * 例如: nlp.tencentcloudapi.com
     * @description v20190408 👉 这个 得去找 node_modules\tencentcloud-sdk-nodejs\tencentcloud\ 你要调用的API 缩写下的文件名
     * 例如: node_modules\tencentcloud-sdk-nodejs\tencentcloud\nlp\v20190408 这里默认导出 Client 和 Models
     */
    const NlpClient = tencentcloud.nlp.v20190408.Client;
    const models = tencentcloud.nlp.v20190408.Models;

    // 准备好前戏后
    // 这里 实例化一个请求对象,并填充参数
    /** 
     * ContentApprovalRequest 这里实例化的对象 得去 node_modules\tencentcloud-sdk-nodejs\tencentcloud\***\v2***\**_client.js 里面找源码有注释(好像没在官网看到直接的介绍) 找到你想调用的那个功能 拿过来用就好了
     */
    req = new models.ContentApprovalRequest();
    // 这里就是参数了 没啥好说的，官网文档都有
    req.Action = "ContentApproval";
    req.Region = "ap-guangzhou";
    req.Text = "******";

```

暂时先那NLP的demo举个例子 代码示例`nlp.js` 不确定所有的都是这样，毕竟还没用到 用一点补一点

很少写readme 不好看谅解一下


2019/11/6
今天才发现腾讯云原来有在线API测试
惊了，血亏我研究了一下午
