/** 
 * JavaScript后台 
 *  Cherry 
 *  2020-3-12 
 *  Node.js 
 * */
'use strict';
/*
Node.js 
Node.js平台是在后端运行JavaScript代码，必须首先在本机安装Node环境。
安装Node.js和npm 从Node.js官网下载对应平台的安装程序，网速慢的童鞋请移步国内镜像。
Windows环境下打开命令提示符，输入node - v查看node.js版本。
npm其实是Node.js的包管理工具（node package manager）.
通过npm安装就可以直接用，不用管代码存在哪，应该从哪下载。

模块 
使用模块最大的好处是大大提高了代码的可维护性，编写代码不必从零开始。
当一个模块编写完毕，就可以被其他地方引用。
在Node中，一个js文件就是一个模块, 每一个js文件中的js代码都是独立运行在一个函数中,
而不是全局作用域，所以一个模块中的变量是和函数在其他模块中无法访问.
CommonJS规范可以解决此问题： 
一个模块想要对外暴露变量（函数也是变量），可以用 module.exports = variable; 
一个模块要引用其他模块暴露的变量用var ref = require('module_name');
通过exports只能使用.的方式来向外暴露内部变量 exports.xxx = xxx 而
module.exports既可以通过.的形式，也可以直接赋值
    module.exports.xxx = xxx 
    module.exports = {}
        //引入模块
        moduleA var moduleA = require('./moduleA');
        var a = [12, 3, 10]; console.log(moduleA.add(a));
        console.log(moduleA.multiply(a));

fs模块 
Node.js内置的fs模块就是文件系统模块，负责读写文件。
读取文件
        // 异步读取一个文本文件的代码如下：
        var fs = require('fs');
        fs.readFile('./vscode/launch.json', 'utf-8', function (err, data) {
            //当正常读取时，err参数为null;当读取发生错误时，err参数代表一个错误对象. 
            if (err) {
                console.log(err);
            } else {
                console.log(JSON.parse(data).version);
            }
        });
        //异步读取一个二进制文件的代码如下：
        // var fs = require('fs'); 
        fs.readFile('./0.jpg', function (err, data) {
            if (err) {
                console.log(err);
            } else {
                //data参数将返回一个Buffer对象。 
                console.log(data);
            }
        });
        fs.copyFile('./0.jpg', '1.jpg', function (err) { });
fs也提供相应的同步读取函数, 和异步函数相比，多了一个Sync后缀， 并且不接收回调函数，函数直接返回结果。
        var fs = require('fs');
        var data = fs.readFileSync('./vscode/launch.json', 'utf-8');
        console.log(JSON.parse(data).version);

写入文件(同步Synchronous和异步Asynchronous) 
异步写入文件writeFile(), 同步写入文件writeFileSync();
        var fs = require('fs');
        fs.writeFile('01.txt', 'Hi,Cherry!', function (err) {
            //当正常读取时，err参数为null;当读取发生错误时，err参数代表一个错误对象. 
            if (err) { console.log(err); } else {
                console.log('ok!');
            }
        });

        // stat()获取文件相关信息.
        var fs = require('fs');
        fs.stat('0.jpg', function (err, stat) {
            if (err) {
                console.log(err);
            } else {
                // 是否是文件: 
                console.log('isFile: ' + stat.isFile());
                // 是否是目录: 
                console.log('isDirectory: ' + stat.isDirectory());
                if (stat.isFile()) {
                    // 文件大小: 
                    console.log('size: ' + stat.size);
                    // 创建时间, Date对象: 
                    console.log('birth time: ' + stat.birthtime);
                    // 修改时间, Date对象: 
                    console.log('modified time: ' + stat.mtime);
                }
            }
        });

由于Node环境执行的JavaScript代码是服务器端代码，所以，
绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，
否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。
服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，
可以使用同步代码，因为这些代码只在启动和结束时执行一次，
不影响服务器正常运行时的异步执行。

文件流操作(stream) createReadStream() / createWriteStream()
读取数据的流都继承自stream.Readable，写入的流都继承自stream.Writable。
流也是一个对象，我们只需要响应流的事件就可以了：
data事件表示流的数据已经可以读取了， end事件表示这个流已经到末尾了，
没有数据可以读取了， error事件表示出错了。
        var fs = require('fs');
        var rs = fs.createReadStream('./vscode/launch.json', 'utf-8');
        rs.on('data', function (data) { console.log(data); });
        rs.on('end', function () { console.log('end'); });
        rs.on('err', function (err) { console.log(err); });
        var ws = fs.createWriteStream('001.txt', 'utf-8');
        ws.write('Hello,Stream !\n');
        ws.write(new Buffer('some words for txt file', 'utf-8'));
        ws.end();

pipe管道
一个Readable流和一个Writable流串起来后，所有的数据自动从Readable流进入Writable流 ，这种操作叫pipe。
在Node.js中，Readable流有一个pipe()方法，就是用来干这件事的。
        rs.pipe(ws);//管道自动关闭 

HTTP 
Node.js开发的目的就是为了用JavaScript编写Web服务器程序。
request对象封装了HTTP请求，调用request对象的属性和方法就可以拿到所有HTTP请求的信息；
response对象封装了HTTP响应，操作response对象的方法，可以把HTTP响应返回给浏览器。
        // 导入http模块: 
        var http = require('http');
        // 创建http server，并传入回调函数: 
        var server = http.createServer(function (request, response) {
            // 回调函数接收request和response对象,
            // 获得HTTP请求的method和url: 
            console.log(request.method + ': ' + request.url);
            // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
            // response对象本身是一个Writable Stream 
            response.writeHead(200, { 'Content-Type': 'text/html' });
            // 将HTTP响应的HTML内容写入response: 
            response.end('Hello world!\n Hello Cherry !'); }); 
        // 让服务器监听8080端口: 
        server.listen(8080);
        console.log('Server is running at http://127.0.0.1:8080/');

path模块可以正确处理操作系统相关的文件路径。
        var path = require('path');
        var fs = require('fs');
        var url = require('url');
        var http = require('http');
        var server = http.createServer(function (request, response) {
            // 解析当前目录 var current = path.resolve('.'); 
            var u = request.url; console.log(u);
            var pathName = url.parse(u).pathname;
            var filePath = path.join(current, pathName);
            fs.stat(filePath, function (err, stats) {
                if (!err && stats.isFile()) {
                    response.writeHead(200);
                    fs.createReadStream(filePath, 'utf-8').pipe(response);
                } else {
                    response.writeHead(404);
                    response.end('404');
                }
            });
        });
        server.listen(8080);
        
crypto模块
crypto模块的目的是为了提供通用的加密和哈希算法。
MD5 哈希算法将任意长度的输入通过散列算法变换成固定长度的输出，
该输出就是hash值，常见的有md5，sha1，sha256等。
MD5是一种常用的哈希算法，用于给任意数据一个“签名”。
    var crypto = require('crypto');
    // 如果要计算SHA1，只需要把'md5'改成'sha1',还可以使用更安全的sha256和sha512。
    var hash = crypto.createHash('md5');
    // 指定要摘要的原始内容,可以在摘要被输出之前使用多次update方法来添加摘要内容. 
    hash.update('Cherry'); console.log(hash.digest('hex'));
Hmac Hmac算法也是一种哈希算法，它可以利用MD5或SHA1等哈希算法。
不同的是，Hmac还需要一个密钥.只要密钥发生了变化，那么同样的输入数据也会得到不同的签名，
因此， 可以把Hmac理解为用随机数“增强”的哈希算法。
    var crypto = require('crypto');
    var hmac = crypto.createHmac('sha256', 'secret-key');
    hmac.update('Chen'); hmac.update('Cherry');
    console.log(hmac.digest('hex'));
AES AES是一种常用的对称加密算法，加解密都用同一个密钥。
    const crypto = require('crypto');
    //加密 
    function aesEncrypt(data, key) {
        //AES有多种加密算法aes192，aes-128-ecb，aes-256-cbc等 
        const cipher = crypto.createCipher('aes192', key);
        //加密结果通常有两种表示方法：hex和base64.
        var crypted = cipher.update(data, 'utf8', 'hex');
        crypted += cipher.final('hex'); return crypted;
    }
    //解密 
    function aesDecrypt(encrypted, key) {
        const decipher = crypto.createDecipher('aes192', key);
        var decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
Diffie - Hellman DH算法是一种密钥交换协议，它可以让双方在不泄漏密钥的情况下协商出一个密钥来。
RSA RSA算法是一种非对称加密算法，即由一个私钥和一个公钥构成的密钥对， 通过私钥加密，
公钥解密，或者通过公钥加密，私钥解密。 其中，公钥可以公开，私钥必须保密。
    使用公钥加密: privateEncrypt(privateKeyFile, string);
    使用公钥解密: publicDecrypt(publicKeyFile, encryptString);
    //对应的 
    使用私钥加密: publicEncrypt(publicKeyFile, string);
    使用私钥解密: privateDecrypt(privateKeyFile, encryptString);
    Node - RSA 生成公私钥对、私钥签名、公钥验签.
    const NodeRSA = require('node-rsa');
    const key = new NodeRSA({ b: 2048 });
    //生成2048位的密钥 
    var publicDer = key.exportKey('pkcs1-public-pem');
*/
