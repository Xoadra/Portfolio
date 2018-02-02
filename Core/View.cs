



using Microsoft.AspNetCore.Mvc;


namespace Xambda.Core {
	public class View : Controller {
		
		[ HttpGet ]
		public IActionResult Meta( ) {
			// Finds Angular's index file to allow universal frontend routing
			return File( "index.html", "text/html" );
		}
		
		public IActionResult AppComponent( ) => PartialView( );

	}
}



