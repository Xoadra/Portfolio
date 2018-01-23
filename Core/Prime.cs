



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
		
		[ HttpGet ]
		[ Route( "quote" ) ]
		public Dictionary<string, object> Quotes( ) {
			// Display a quote through an api call from Angular on the main page
			Dictionary<string, object> Quotes = new Dictionary<string, object>( );
			Quotes.Add( "Author", "Ian Peterson" );
			Quotes.Add( "Quote", "I am great!" );
			return Quotes;
		}
		
		[ HttpGet ]
        [ Route( "users" ) ]
        public IEnumerable<Dictionary<string, object>> Hacker( ) {
			// Vessel for database entries returned from querying
            List<Dictionary<string, object>> Hackers = _database.Query( "SELECT * FROM users" );
			// Sort through 'Hackers' data to verify database access
			foreach ( var hacker in Hackers ) {
				Console.WriteLine( );
				foreach ( var item in hacker ) { Console.WriteLine( item.Key + ": " + item.Value ); }
				Console.WriteLine( );
			}
			// Move query result to the frontend for client-side inspection
			return Hackers;
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



