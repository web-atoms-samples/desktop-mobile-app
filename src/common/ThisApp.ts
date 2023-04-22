export default class ThisApp {

    public static isMobile = /android|iPhone/i.test(navigator.userAgent)
        && Math.min(window.visualViewport.width, window.visualViewport.height) < 500;

}
