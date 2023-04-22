import XNode from "@web-atoms/core/dist/core/XNode";
import styled from "@web-atoms/core/dist/style/styled";
import { ContentPage } from "@web-atoms/web-controls/dist/mobile-app/MobileApp";

const homeCSS = styled.css `
    display: flex;
    flex-direction: column;
    gap: 10px;
`.installLocal();

export default class HomePage extends ContentPage {

    public async init() {
        this.renderer = <div class={homeCSS}>
            <div>This is a default home page</div>
        </div>;
    }

}
