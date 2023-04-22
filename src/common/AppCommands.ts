import Command from "@web-atoms/core/dist/core/Command";

export default class AppCommands {


    public static readonly openProject = new Command<{ projectID: number }>();

    public static readonly openProjectList = new Command();

    public static readonly openHome = new Command();

}
