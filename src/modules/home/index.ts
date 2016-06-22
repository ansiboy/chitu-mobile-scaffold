export = class IndexPage extends chitu.Page {
    constructor(args) {
        super(args);
        this.load.add(this.page_load);
    }

    private page_load(sender: IndexPage, args: any) {
        $(this.element).find('[name="text"]').text(args.text);
    }
}