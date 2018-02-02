



using Microsoft.AspNetCore.Mvc;


namespace Xambda.Core {
	public class View : Controller {
		
		public IActionResult AppComponent( ) => PartialView( );

	}
}



