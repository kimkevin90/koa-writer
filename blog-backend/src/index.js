const Koa = require('koa');
const Router = require('koa-router');

//API 기능을 구현하기 전에 먼저 바디파서 미들웨어 적용해야한다 이 미들웨어는
//POST/PUT 같은 메서드의 리퀘스트 바디에 JSON 형식으로 데이터를 넣어 주면, 이를 파싱하여
//서버에서 사용할 수 있게 한다.
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

// router.get('/', (ctx) => {
//   ctx.body = '홈';
// });

// //콜론을 사용하여 라우트 경로 지정 후 params 객체에서 조회 가능
// router.get('/about/:name?', (ctx) => {
//   const { name } = ctx.params;
//   ctx.body = name ? `${name}의 소개` : '소개';
// });

// //URL 쿼리의 경우, query에서 조회 가능 문자열 형태의 쿼리 문자열 조회 시 querystring 사용
// router.get('/posts', (ctx) => {
//   const { id } = ctx.query;
//   ctx.body = id ? `포스트 #${id}` : '포스트 아이디가 없습니다.';
// });

// // app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

// app.use(async (ctx, next) => {
//   console.log(ctx.url);
//   console.log(1);
//   //authorized=1이라는 쿼리 파라미터가 포함되어 있으면 이후 미들웨어를 처리해주고 그렇지않으면 이후 미들웨어 처리 x
//   if (ctx.query.authorized !== '1') {
//     ctx.status = 401; //Unauthorized
//     return;
//   }
//   await next();
//   console.log('END');
//   /*Next함수 호출하면 promise를 반환하고 이 promise는 다음에 처리해야 할 미들웨어가 끝나야 완료됨
//    또한 이같은 방법은 async await 으로도 할 수 있다.
//   next().then(() => {
//     console.log('END');
//   });*/
// });

// app.use((ctx, next) => {
//   console.log(2);
//   next();
// });

// app.use((ctx) => {
//   ctx.body = 'hello world';
// });

app.listen(4000, () => {
  console.log('listening to port 4000');
});
