



using Microsoft.AspNetCore.Mvc;


namespace Xambda.Core {
	public class Zone : Controller {
		
		[ HttpGet ]
		[ Route( "index" ) ]
		public IActionResult Index( ) {
			ViewData[ "Title " ] = "Home";
			return View( );
		}
		
		[ HttpGet ]
		[ Route( "error" ) ]
		public IActionResult Error( ) {
			//ViewData[ "RequestId" ] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
			return View( );
		}
		
	}
}



