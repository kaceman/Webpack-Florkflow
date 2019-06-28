import $ from "jquery";
import _ from "lodash";

export default class Index {
    constructor() {
        this.init()
    }

    init() {
        $('.custom-icon').css({
            'color': 'whitesmoke',
            'font-size': '30em'
        })
        console.log(_.concat([1, 2], [3]))
    }
}