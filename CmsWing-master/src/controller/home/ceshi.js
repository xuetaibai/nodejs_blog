// ceshi
const fs = require('fs');
module.exports = class extends think.Controller {
  async fetchAction() {
    const res = await this.fetch('https://assets-cdn.github.com/images/modules/logos_page/Octocat.png');
   // console.log(res);
    // const dest = fs.createWriteStream('./octocat.png');
    // res.body.pipe(dest);
    this.header('Content-Type', 'image/png');
    return this.body = res.body;
  }
  async donatesAction() {
    return this.body = 'donates';
  }
  async emailAction() {
    const transport = {
      service: 'qq',
      auth: {
        user: 'arterli@qq.com', // your account
        pass: 'vxheoipkldjgbhgi' // authorization code, not the email password
      }
    };
    const options = {
      from: 'arterli@qq.com', // sender address
      to: 'cmswing@126.com', // list of receivers
      subject: 'this is subject', // subject line
      html: '<b>this is HTML content <img src="cid:00000001"/></b>' // html content

    };
    const send = await this.sendEmail(transport, options).then(info => {
      console.log(info);
    }, err => {
      console.log(err);
    });
    console.log(send);
    return this.body = 'emial';
  }

  cookAction() {
    // this.cookie("hz", 'sfs|dfg|fdsfs');
    // $yCode = array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J');
    // $orderSn = $yCode[intval(date('Y')) - 2011] . strtoupper(dechex(date('m'))) . date('d') . substr(time(), -5) . substr(microtime(), 2, 5) . sprintf('%02d', rand(0, 99));
    const d = new Date();
    const ycode = ['C', 'M', 'S', 'W', 'I', 'N', 'G', 'N', 'E', 'T'];
    // return this.body= ycode[this.moment().format('YYYY')-2017]+ (d.getMonth()+1).toString(16).toUpperCase()+this.moment().format('DD')+m.substr(8);
    const m = new Date().getTime().toString();
    return this.body = think._.padEnd('1', 10, '0') + m.substr(8);
  }
  async addAction() {
    const data = { group_id: '0',
      name: '',
      title: 'fdsafsafa',
      description: '',
      type: '2',
      cover_id: '0',
      keyname: '',
      link_id: '0',
      display: '1',
      'date|||deadline': '',
      view: '0',
      comment: '0',
      level: '0',
      'date|||create_time': '',
      bookmark: '0',
      template: '',
      pid: '0',
      topid: '0',
      model_id: '2',
      category_id: '1',
      uid: '1',
      content: '<p>???????????????...</p>',
      position: 0,
      deadline: 0,
      create_time: 1504000783284,
      update_time: 1504000783284,
      status: 1,
      id: 251 };
    return await this.model('document_ttt').add(data);
  }
  ipAction() {
    return this.body = this.ip;
  }

  async extAction() {
    console.log(parse_config_attr(think.config('ext.attachment.loactionurl'), '@')[1]);
    return this.body = this.config('ext.qq.appkey');
  }
  async hooksAction() {
    // ??? $hook_type ????????? ????????????????????? ??????1?????????2???...{'$hook_type':1},????????????????????????{'$hook_type':1} ??????????????????
    await this.hook('adminArticleEdit', '???????????????????????????????????????222', '?????????????????????', {'$hook_type': 1});
    // ??? $hook_key ????????? ????????????????????? ??????1?????????2???...{'$hook_key':'aaaa'},????????????????????????{'$hook_key':'aaaa'} ??????????????????
    await this.hook('adminArticleEdit', 'aaaa', '?????????????????????', {'$hook_key': 'aaaa'});
    await this.hook('adminArticleEdit', 'bbbb', '?????????????????????', {'$hook_key': 'bbbb'});
    // ??? $hook_key ??? $hook_type ????????? ????????????????????? ??????1?????????2???...{'$hook_key':'bbbb','$hook_type':2},????????????????????????{'$hook_key':'bbbb','$hook_type':2} ??????????????????
    await this.hook('adminArticleEdit', 'bbbb', '?????????????????????', {'$hook_key': 'bbbb', '$hook_type': 2});
    // ????????????
    await this.hook('adminArticleEdit', {'$hook_key2': 'bbbb', '$hook_type2': 2});
    return this.display();
  }
  async cacheAction() {
    const data = await this.model('cmswing/ext').extcache('editor', 'setting');

    // console.log(data);
    return this.body = data;
  }
  async topicsAction() {
    const list = await this.model('document_picture').where({id: ['!=', 311]}).select();
    for (const v of list) {
      const arr = [];
      if (v.pictureurls) {
        for (const vv of v.pictureurls.split(',')) {
          const obj = {};
          obj.id = vv;
          obj.name = vv;
          obj.src = vv;
          obj.info = vv;
          arr.push(obj);
        }
      }
      console.log(arr);
      const data = {atlas: JSON.stringify(arr)};
      await this.model('document_picture').where({id: v.id}).update(data);
    }
    return this.body = 22;
  }
};
