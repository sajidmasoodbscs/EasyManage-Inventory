const log=(function(environment) {
    if (environment ==="production"){

    let logsarray=[
        "assert", "clear", "count", "debug", "dir", "dirxml",
        "error", "exception", "group", "groupCollapsed", "groupEnd",
        "info", "log", "markTimeline", "profile", "profileEnd", "table",
        "time", "timeEnd", "timeStamp", "trace", "warn"
      ];
      logsarray.forEach(method=>{
        console[method]=() => { };
      }
        )
        return ()=>{};
    }
    return(args)=>{
        console.log(args);
    }
 })(process.env.NODE_ENV);
  

 
  module.exports = { log }
