export = class IndexPage extends chitu.Page {
    constructor(args: chitu.PageArguemnts) {
        super(args);
        this.load.add(this.page_load);
        //this.routeData.values
        this.load.add((sender, args) => {
            args.name1;
        })
    }

    private page_load(sender: IndexPage, args: any) {
        $(this.element).find('[name="text"]').text(args.text);
    }
}