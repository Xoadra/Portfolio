



//using System;
//using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace Xambda.Core {
	public class View : Controller {
		
		public IActionResult AppComponent( ) => PartialView( );

	}
}


