$(document).ready
(
    function ()
    {
        function loadView(view)
        {
            $('nav').load('views/'+view+'.html');
        }
        window.onpopstate = function(event)
        {
            loadView(event.state);
        };
        $('nav').on
        (
            'click',
            'a',
            function(event)
            {
                event.preventDefault();
                var view = $(this).attr('href');
                window.history.pushState(view, null, view);
                loadView(view);
                $('span').text(window.history.length);
            }
        );
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
        $('span').text(window.history.length);
	}
);
