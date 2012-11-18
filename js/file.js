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
            $('span').text(window.history.length);
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
        window.history.replaceState($('strong').text(), null, $('strong').text());
        printHistoryLength();
        window.onpopstate = function(event)
        {
            loadView(window.history.state);
        };
	}
);
