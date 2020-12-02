export default ({ $axios, redirect, error, $config }) => {
  // $axios.onRequest(config => {
  //   return {
  //     ...config
  //     // withCredentials: true
  //     // headers: {
  //     //   Authorization: "Basic 123"
  //     // }
  //   };
  //   // console.log("Making request to " + config.url);
  //   // console.log(config);
  // });

  // $axios.setHeader('Authorization', '123');//也可以用這種方式設定

  //每次請求時全域觸發
  // $axios.setBaseURL($config.API_URL);
  $axios.setBaseURL(process.env.API_URL);
  $axios.onRequest(config => {
    config.params = { key: process.env.FIREBASE_API_KEY };
    // config.withCredentials = true;
  });

  $axios.onResponse(config => {});
  $axios.onError(data => {
    // console.dir(data);
    const code = parseInt(data.response && data.response.status);
    if (code === 500) {
      error("500");
    }
  });
};
