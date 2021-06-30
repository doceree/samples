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

    supported user fields for indian HCP -
        var userObj = {
          firstName: "Akhileshcomp", 
          lastName: "Guptacomp", 
          specialization: "Pediatrics", 
          gender: "Male",
          email: "guptacomp@gmail.com",
          city: "gurugram",
          zipCode: "122001", 
        }

    supported user fields for US HCP -
        var userObj = {
            hashedNPI: '126b68f7863008f0d19a387284a5d9df5518343ae3903b4a4a0a4773fe75e309',
            hashedEmail: '7000e00356101e5b6294bd47de3f903005b619e5e4b66f0f4b5971e86b67cc42',
        }

    hashedNPI and hashedEmail is MD5 hashed values of npi and email, can be hashed using module similar to 
        https://www.npmjs.com/package/angular-md5

Step 3: 
    paste the placement tags provided by doceree in pages where you want to display the ads.
    ex - home.view.html


its Done!


==================================
how to start the demo application
==================================

serve application using any http server
ex - https://www.npmjs.com/package/live-server
