$(document).ready
(
    function ()
    {
        $('#previous').click
        (
            function()
            {
                window.history.back();
            }
        );
        $('#forward').click
        (
            function()
            {
                window.history.forward();
            }
        );
        function loadView(view)
        {
            $('nav').load('views/'+view+'.html');
        }
        function printHistoryLength()
        {
            $('span').text(window.history.length-1);
        }
        $('nav').on
        (
            'click',
            'a',
            function(event)
            {
                if (typeof window.history.pushState == 'function') {
                    event.preventDefault();
                    var view = $(this).attr('href');
                    window.history.pushState(view, null, view);
                    loadView(view);
                    printHistoryLength();
                }
            }
        );
        window.history.pushState($('strong').text(), null, $('strong').text());
        printHistoryLength();
        window.onpopstate = function(event)
        {
            if (event.state == null) {
                state = $('strong').text();
            } else {
                state = event.state;
            }
            loadView(state);
        };
	}
);
