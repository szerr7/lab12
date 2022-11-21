
"use strict" ;


exports.add = function (req,res,vals) {
        var sum = parseInt(vals.first) + parseInt(vals.second);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(`<!DOCTYPE html>
              <html>
               <head><meta charset=\"utf-8\"/>
                <title>Calculator Web Site</title>
               </head>
               <body>
                 <h2  style="font-size: 90px;">The sum is:  ${String(sum)}</h2>
               </body>
              </html> ` );    
                  return res.end();
        };
        