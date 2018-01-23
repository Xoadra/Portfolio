



using System;
using System.Collections.Generic;
//using System.Diagnostics;
//using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using Microsoft.AspNetCore.Http;


namespace Xambda.Core {
	public class Prime : Controller {
		
		// Hosts database operation parameters
		private readonly Database _database;
		
		// Prime controller constructor injecting database access material
		public Prime( Database data ) { _database = data; }
		
		/* [ HttpGet ]
		[ Route( "prime" ) ]
		public IEnumerable<string> Welcome( ) {
			// Testing an api call from Angular to display on the main page
			String[ ] Welcome = {
				"Welcome to my portfolio website!",
				"I am a software developer based out of the Seattle area.",
				"My projects are on display for your viewing!",
				"Join me on my programming journey...",
				"...and let us learn technology together!"
			};
			return Welcome;
		} */
		
		[ HttpGet ]
        [ Route( "users" ) ]
        public void Index( ) {
			// Vessel for database entries returned from querying
            List<Dictionary<string, object>> Hackers = _database.Query( "SELECT * FROM users" );
			// Sort through 'Hackers' data to verify database access
			foreach ( var hacker in Hackers ) {
				Console.WriteLine( );
				foreach ( var item in hacker ) { Console.WriteLine( item.Key + ": " + item.Value ); }
				Console.WriteLine( );
			}
        }
		
		/* [ HttpGet ]
		[ Route( "" ) ]
		public IActionResult Index( ) {
			return View( );
		} */
		
		/* public IActionResult Error( ) {
			ViewData[ "RequestId" ] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
			return View( );
		} */
		
	}
}



