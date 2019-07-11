import $ from 'jquery';

export default class Search {

    constructor () {
        this.init()
    }

    init () {

        $('.doc_footer--search').on('click', function (e) {
            e.preventDefault();
            $('.search_container').css('display', 'block');
        });

        $('.search_container--form-close').on('click', function () {
            $('.search_container').css('display', 'none');
        });
    }

}
