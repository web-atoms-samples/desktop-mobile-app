import MobileApp from "@web-atoms/web-controls/dist/mobile-app/MobileApp";
import DesktopApp from "@web-atoms/web-controls/dist/desktop-app/DesktopApp";
import PageNavigator from "@web-atoms/web-controls/dist/PageNavigator";
import PopupService from "@web-atoms/core/dist/web/services/PopupService";
import AppMenu from "./menu/AppMenu";
import HomePage from "./pages/home/Home";
import WebApp from "@web-atoms/core/dist/web/WebApp";

import "./styles/GlobalStyle";
import { AtomControl } from "@web-atoms/core/dist/web/controls/AtomControl";
import ThisApp from "./common/ThisApp";
import XNode from "@web-atoms/core/dist/core/XNode";
import AppCommands from "./common/AppCommands";
import InstallAppCommands from "./common/InstallAppCommands";

const AppClass = (/android|iPhone/i.test(navigator.userAgent)
    ? MobileApp
    : DesktopApp) as typeof AtomControl;

export default class AppIndex extends AppClass {

    public async init() {

        PopupService.lastTarget =  this.element;

        InstallAppCommands(this);

        (this.app as WebApp).installStyleSheet({
            href: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css",
            integrity: "sha256-HtsXJanqjKTc8vVQjO4YMhiqFoXkfBsjBWcX91T1jr8=",
            crossOrigin: "anonymous"
        });

        await (ThisApp.isMobile
            ? this.mobileInit()
            : this.desktopInit());

        this.openDefault();

    }

    openDefault() {
        const url = new URL(location.href);
        const openProject = url.searchParams.get("project");
        if (openProject) {
            AppCommands.openProject.dispatch({ projectID: Number(openProject)});
            return;
        }
        AppCommands.openHome.dispatch();
    }

    async mobileInit() {
        const app = this as any as MobileApp;
        app.drawer = AppMenu;
    }

    async desktopInit() {
        const app = this as any as DesktopApp;
        app.menuRenderer = () => <AppMenu/>;

        app.statusBarRenderer = () => <div data-layout="row">
            <div text="Multi View App"/>
            <div
                style-margin-left="auto"
                text="Version 2"/>
        </div>;
    }
}
