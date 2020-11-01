const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');

const posts = new Router();

//posts 라우테 여러 종류의 라우트를 설정한 후 모두 printInfo 함수 호출하도록 설정
// 문자열이 아닌 JSON 객체를 반환하도록 설정하고, 이 객체에는 요청 메소드, 경로 , 파라미터 담음
// const printInfo = (ctx) => {
//   ctx.body = {
//     method: ctx.method,
//     path: ctx.path,
//     params: ctx.params,
//   };
// };
posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.get('/:id', postsCtrl.read);
posts.delete('/:id', postsCtrl.remove);
posts.put('/:id', postsCtrl.replace);
posts.patch('/:id', postsCtrl.update);

module.exports = posts;
