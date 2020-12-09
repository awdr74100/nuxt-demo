export default function(context) {
  console.log(context.route.meta[0]);
  // console.log(context);
  // console.log("bang");
  // console.log(process.client);
  // console.log(process.server);
  // console.log("middleware Active", new Date().getTime());
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     console.log("middleware Promise", new Date().getTime());
  //     // console.log(process.client);
  //     // console.log(process.server);
  //     resolve();
  //   }, 1000);
  // });
}
