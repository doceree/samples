doceree support for publishers (angular 7)
===========================================

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
    ex - doceree-ad.component.ts

Step 3: 
    Paste the placement tags provided by doceree in pages where you want to display the ads.
        Split the tag and put the outer div with doceree id in html file 
            ex - doceree-ad.component.html
        Add the script tag using js syntex in ts file
            ex - doceree-ad.component.ts ( func - loadScriptForDivData)


its Done!