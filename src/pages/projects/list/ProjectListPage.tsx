import XNode from "@web-atoms/core/dist/core/XNode";
import { ContentPage } from "@web-atoms/web-controls/dist/mobile-app/MobileApp";

export default class ProjectListPage extends ContentPage {

    public async init() {
        this.renderer = <div>
            <div>Display list of projects here..</div>
        </div>;
    }

}
