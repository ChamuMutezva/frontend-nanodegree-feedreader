/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* All tests are placed within the $() function,
 * since some of these tests may require DOM elements and the aim is
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is the first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* The first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not empty.
         */
        it('URL is defined', function () {
            for (let feed of allFeeds) {
                expect(feed.url).toBeTruthy();
            }
        })


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name is defined', function () {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        })
    });


    /* "The menu"  test suite*/
    describe('The menu', function () {
        /* This test ensures that the menu element is
         * hidden by default.          
         */
        const body = document.querySelector('body');
        it('Menu is hidden', function () {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
        /* This test ensures that the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: the menu display changes when
         * clicked and hide when clicked again.
         */
        it('Menu toggles on and off', function () {

            const menu = document.querySelector('.menu-icon-link');
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);


        })

    })

    /* The "Initial Entries" test suite */
    describe('Initial Entries', function () {
        /* A test that ensures that the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * The loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function (done) {
            loadFeed(0, done);
        });
        it('completes work', function () {
           
            const feed = document.querySelector('.feed');
            expect(feed.children.length > 0).toBe(true);
            
        })
    })

    /* The "New Feed Selection" test suite*/
    describe('New Feed Selection', function () {

        let firstFeed;
        beforeEach(function (done) {
            loadFeed(0, function () {
                firstFeed = document.querySelector('.feed').innerHTML;
                loadFeed(1, function () {
                    done();
                });
            });

        });
        /* This test suite ensures that when a new feed is loaded
         * by the loadFeed function , the content actually changes.
         * loadFeed() is asynchronous.
         */

        it('content changes', function (done) {
            let secondFeed = document.querySelector('.feed').innerHTML;
            expect(secondFeed).not.toBe(firstFeed);
            done();
        });
    })

}());