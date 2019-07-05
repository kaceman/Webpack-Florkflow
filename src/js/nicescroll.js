import $ from "jquery";
import niceScroll from "nicescroll";

export default class Nicescroll {
    constructor() {
        // this.init()
    }

    init() {
        $('.doc_footer--tags').niceScroll({
            autohidemode: "hidden",
            // bouncescroll: true,
            // hwacceleration: true,
            touchbehavior: true,
            cursordragontouch: true,
            emulatetouch: true
        });
    }
}
