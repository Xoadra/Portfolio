



using System;
using System.Collections.Generic;
//using System.Diagnostics;
//using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using Microsoft.AspNetCore.Http;


namespace Xambda.Core {
	public class Zone : Controller {

		[ HttpGet ]
		[ Route( "" ) ]
		public IActionResult Index( ) {
			return View( );
		}

		/* public IActionResult Error( ) {
			ViewData[ "RequestId" ] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
			return View( );
		} */

	}
}


