import $ from "jquery";

export default class VideoPopup {
    constructor() {
        this.init()
    }

    init() {
        $('.doc_article_details--container-video a').on('click', function (e) {
            e.preventDefault();
            const youtubeId = $(this).attr('youtubeid');

            const html = `<iframe src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

            const container = $(this).parent().find('.video_container');

            container.append(html);
            container.css('visibility', 'visible');
            $('body').css('overflow', 'hidden');
        });

        $('.video_container').on('click', function (e) {
            $(this).empty();
            $(this).css('visibility', 'hidden');
            $('body').css('overflow', 'unset');
        });
    }
}
