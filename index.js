const qr = require('qrcode');

const opts = {
    color: {
      dark: '#000',
      light: '#fff'
    }
  }

global.time = Date.now()

function MakeQR(string, callback){
    qr.toDataURL(string, function (err, url) {
        if (err) {
            console.error(err);
            process.exit(-1)
        } else {
        qr.toFile(`${time}_qr.png`, string, opts, () => {return callback(url)});
        }
    });
}

MakeQR("https://github.com/BlackComplexx", _ => console.log("Url encode generated: %s\n\n\nImage qr generated [%s_qr.png]", _, time))