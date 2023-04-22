import Command from "@web-atoms/core/dist/core/Command";
import XNode from "@web-atoms/core/dist/core/XNode";
import styled from "@web-atoms/core/dist/style/styled";
import { Drawer } from "@web-atoms/web-controls/dist/mobile-app/MobileApp";
import PageNavigator from "@web-atoms/web-controls/dist/PageNavigator";
import AppCommands from "../common/AppCommands";
import HomePage from "../pages/home/Home";

const css = styled.css `
    cursor: pointer;
    padding: 5px 10px 5px 10px;
    border-radius: 10px;
    &:hover {
        background-color: lightgreen;
    }
`.installLocal();

interface IMenuItem {
    label: string;
    icon?: string;
    command: Command;
}

const MenuItem = ({ label, icon = "", command}: IMenuItem) => {
    return <div
        class={css}
        data-layout="row"
        event-click={() => command.dispatch()}>
        { icon && <i class={icon}/>}
        <span text={label}/>
    </div>;
};

export default class AppMenu extends Drawer {

    public async init() {

        this.renderer = <div data-layout="vertical-flex">
            <div>Other Samples</div>

            <MenuItem
                label="Home"
                command={AppCommands.openHome}
                />

            <MenuItem
                label="Projects"
                command={AppCommands.openProjectList}
                />

        </div>;
    }

}