import $ from "jquery";

export default class CountrySwitcher {
    constructor() {
        this.init()
    }

    init() {
        $('#dropdown-countries').parent().on('click', (event) => {
            event.stopPropagation();
            let $el = $('#dropdown-countries').next('.list');
            if ($el.css('display') === 'none') {
                console.log('A', $el.css('display'))
                $el.css({
                    'display': 'block'
                });
                $('#dropdown-countries').parent().toggleClass('changed');
            } else {
                console.log('B', $el.css('display'))
                $el.css({
                    'display': 'none'
                });
                $('#dropdown-countries').parent().toggleClass('changed');
            }
        });
        $(document).on('click', () => {
            let $el = $('#dropdown-countries').next('.list');
            if ($el.css('display') !== 'none') {
                console.log('C', $el.css('display'))
                $el.css({
                    'display': 'none'
                });
                $('#dropdown-countries').parent().toggleClass('changed');
            }
        });
    }
}
