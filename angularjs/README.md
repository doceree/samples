doceree support for publishers
==============================

Step 1:
  Initilaize header scripts and user init functions in index.html - 
  <script src='https://dr15zo9o33078.cloudfront.net/script/render-header.js'></script>
    <script>
        var hcpContext;
        function docereeLogIn(userObj) {
            if (!hcpContext) {
                hcpContext = userObj;
                console.log(userObj);
                if (typeof setDocereeContext === 'function') {
                    setDocereeContext(hcpContext);
                }
            }
        };
        function docereeLogOut() {
            document.cookie = _docereeContext + '=; Max-Age=-99999999;';
        };
    </script>

Step 2: 
    Provide user login info to docereeLogin function
    ex - home.controller.js

Step 3: 
    paste the placement tags provided by doceree in pages where you want to display the ads.
    ex - home.view.html


its Done!


==================================
how to start the demo application
==================================

serve application using any http server
ex - https://www.npmjs.com/package/live-server
