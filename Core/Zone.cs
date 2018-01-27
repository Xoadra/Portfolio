



//using System;
//using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace Xambda.Core {
	public class Zone : Controller {
		
		public IActionResult Index( ) {
			ViewData[ "Title " ] = "Home";
			return View( );
		}
		
		public IActionResult Error( ) {
			return View( );
		}
		
	}
}



