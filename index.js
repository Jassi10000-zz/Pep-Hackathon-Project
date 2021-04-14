const puppeteer = require('puppeteer');

(async () => {

    try{

        //opening a new browser
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: {
                width: 1200,
                height: 800
            }
        })

        //opening a new page in the browser
        const page = await browser.newPage();

        await page.setDefaultNavigationTimeout(0); 

        //target url to be visited after opening browser
        const targetUrl = "https://youtube.com";
        await page.goto(targetUrl);

        //this depicts the text to type in box with id " search "
        await page.type('#search','Best data structure and algorithm foundation course')

        //this allows to click the search button after text is entered
        
        await page.click('#search-icon-legacy');

        await page.waitForSelector('ytd-thumbnail.ytd-video-renderer');


        const videos = await page.$$('ytd-thumbnail.ytd-video-renderer');
        await videos[0].click();

        await page.waitForSelector('.html5-video-container')
        await page.waitForTimeout(29000);


        const targetUrl2 = "https://www.youtube.com/channel/UC7rNzgC2fEBVpb-q_acpsmw";
        await page.goto(targetUrl2);      
        await page.screenshot({path: 'pepcodingChannel.png'}); 
        await page.waitForTimeout(4000);

        const page2 = await browser.newPage();
        await page2.setDefaultNavigationTimeout(0); 

        //target url to be visited after opening browser
        const targetUrl3 = "https://maps.google.com";
        await page2.goto(targetUrl3);
        await page2.goto(targetUrl3, {
            waitUntil: 'networkidle2'
        });

        await page2.type('#searchboxinput', 'pepcoding education center');
        await page2.click('#searchbox-searchbutton');

        await page2.waitForTimeout(8000);

        await page2.screenshot({path: 'pepcodingMap.png'});
       

        await page2.waitForTimeout(25000);

        const page3 = await browser.newPage();
        await page3.setDefaultNavigationTimeout(0); 

        const targetUrl4 = "https://www.pepcoding.com/";
        await page3.goto(targetUrl4);
        await page3.goto(targetUrl4, {
            waitUntil: 'networkidle2'
        });


        const tabs = await page3.$$('.site-nav-li');
        await tabs[0].click();

        await page3.waitForNavigation();

        await autoScroll(page3);

    }
   
    catch(error){
        console.log("Error is : " + error) ;
    }

})();

async function autoScroll(page3){
    await page3.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 50;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 50);
        });
    });
}
