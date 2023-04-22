import { AtomControl } from "@web-atoms/core/dist/web/controls/AtomControl";
import PageNavigator from "@web-atoms/web-controls/dist/PageNavigator";
import HomePage from "../pages/home/Home";
import ProjectListPage from "../pages/projects/list/ProjectListPage";
import AppCommands from "./AppCommands";

export default function InstallAppCommands (control: AtomControl) {

    AppCommands.openHome.listen(control, (ce) => PageNavigator.openPage(HomePage));

    AppCommands.openProjectList.listen(control, () => PageNavigator.openPage(ProjectListPage));

}
