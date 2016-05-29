
( function( document, window ) {
    "use strict";

	var $root = document.getElementById('impress'),
		$body = document.body,
		$unicorn_img = document.createElement("img"),
		$unicorn = document.createElement("span"),
		$cat_img = document.createElement("img"),
		$cat = document.createElement("span"),
		i = 0;

	$unicorn_img.setAttribute('src', 'img/unicorn.png');
	$unicorn.classList.add('unicorn');
	$unicorn.appendChild($unicorn_img);
	$body.appendChild($unicorn);

	$cat_img.setAttribute('src', 'img/cat.png');
	$cat.classList.add('cat');
	$cat.appendChild($cat_img);
	$body.appendChild($cat);

	$root.addEventListener('impress:stepenter', function(){
		$unicorn.classList.remove( "show" );

		if( i%2 == 0 ) {
			$unicorn.classList.add( "show" );
		}

		if( $body.classList.contains('impress-on-chatspar') ) {
			var j = 1;


			$unicorn.classList.add( "show" );

			setInterval(function(){
				console.log( "image " + j );

				$unicorn.classList.remove( "unicorn-" + (j-1) );
				$unicorn.classList.add( "unicorn-" + j );

				$cat.classList.remove( "cat-" + (j-1) );
				$cat.classList.add( "cat-" + j );

				j++;

				if( j > 4 ) {
					$unicorn.classList.remove( "unicorn-" + (j-1) );
					$cat.classList.remove( "cat-" + (j-1) );
					j = 1;
				}
			}, 6000);
		}

		i++;
	});

} )( document, window );
