const puppeteer = require('puppeteer');


(async () => {

    // combination of try-catch block to know and avoid incoming errors / exceptions
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


        // To prevent the default navigation timeout of 30000 ms
        await page.setDefaultNavigationTimeout(0); 


        //target url to be visited after opening browser
        const targetUrl = "https://youtube.com";
        await page.goto(targetUrl);


        //this depicts the text to type in box with id " search "
        await page.type('#search','Best data structure and algorithm foundation course')

        //this allows to click the search button after text is entered
        await page.click('#search-icon-legacy');

        // waiting for the mentioned selector to load properly
        await page.waitForSelector('ytd-thumbnail.ytd-video-renderer');


        //videos gives us the list of vidoes displayed after searching
        const videos = await page.$$('ytd-thumbnail.ytd-video-renderer');
        await videos[0].click();
        await page.waitForSelector('.html5-video-container')
        await page.waitForTimeout(29000);


        // opening the channel of the selected video
        const targetUrl2 = "https://www.youtube.com/channel/UC7rNzgC2fEBVpb-q_acpsmw";
        await page.goto(targetUrl2);      

        // .screenshot() function takes screenshot of the channel opened
        await page.screenshot({path: 'pepcodingChannel.png'}); 
        await page.waitForTimeout(4000);


        //page2 is the new page that will be opened after task of page1 has completed
        const page2 = await browser.newPage();
        await page2.setDefaultNavigationTimeout(0); 


        //target url to be visited after opening browser
        const targetUrl3 = "https://maps.google.com";
        await page2.goto(targetUrl3);
        await page2.goto(targetUrl3, {
            waitUntil: 'networkidle2'
        });

        // Entering the channel name into google maps search box
        await page2.type('#searchboxinput', 'pepcoding education center');
        await page2.click('#searchbox-searchbutton');

        await page2.waitForTimeout(15000);

        await page2.screenshot({path: 'pepcodingMap.png'});
       

        await page2.waitForTimeout(30000);


        // This page will navigate to Pepcoding website 

                const page3 = await browser.newPage();
                await page3.setDefaultNavigationTimeout(0); 

                const targetUrl4 = "https://www.pepcoding.com/";
                await page3.goto(targetUrl4);
                await page3.goto(targetUrl4, {
                    waitUntil: 'networkidle2'
                });

                await page3.waitForTimeout(10000);


                // tabs collect all the tabs / topics  present in nav bar
                const tabs = await page3.$$('.site-nav-li');
                await tabs[0].click();  // tabs[0] helps us catch the Courses tab

                await page3.waitForTimeout(15000);

                // specified width and height to automate screenshot taking process of this resolution
                await page3.setViewport({ width: 1200, height: 1600 });
                await page3.screenshot({
                path: "pepCourseTab.png"
            });


        // This page will navigate to Placements tab of Pepcoding website and take a screenshot

            const page4 = await browser.newPage();
            await page4.setDefaultNavigationTimeout(0); 

            const targetUrl5 = "https://www.pepcoding.com/placements";
            await page4.goto(targetUrl5);


            await page4.setViewport({ width: 1200, height: 1800 });
                await page4.screenshot({
                path: "pepPlacementTab.png"
            });

        
        // This page will navigate to Reviews tab of Pepcoding website and take a screenshot

                const page5 = await browser.newPage();
                await page5.setDefaultNavigationTimeout(0); 

                const targetUrl6 = "https://www.pepcoding.com/reviews";
                await page5.goto(targetUrl6);

                await page5.waitForTimeout(10000);

                await page5.setViewport({ width: 1200, height: 1600 });
                    await page5.screenshot({
                    path: "pepReviewsTab.png"
                });


        // This page will navigate to Team tab of Pepcoding website and take a screenshot

                const page6 = await browser.newPage();
                await page6.setDefaultNavigationTimeout(0); 

                const targetUrl7 = "https://www.pepcoding.com/team";
                await page6.goto(targetUrl7);
 
                await page6.waitForTimeout(7000);

                await page6.setViewport({ width: 1200, height: 1600 });
                    await page6.screenshot({
                    path: "pepteamTab.png"
                });

                // this will close the browser after all automation part is done
                await browser.close();
                
    }

   // catch block will catch error is one occured
    catch(error){
        console.log("Error is : " + error) ;
    }

})();
